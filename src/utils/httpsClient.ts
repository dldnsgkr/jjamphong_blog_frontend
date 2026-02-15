import type {
  ErrorResponse,
  ResponseType,
} from 'types/common/httpsClients.types';
import ky, { HTTPError } from 'ky';
import { useAuthStore } from '@stores/authStore';
import { errorToast } from './toast';

type RequestMethodType =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE';

type searchParamsType = Record<string, any>;

type RequestBodyType = Record<string, any>;

function attachCustomeHeaders(request: Request) {
  const authStore = useAuthStore();

  if (authStore.accessToken) {
    request.headers.set(
      'Authorization',
      `Bearer ${authStore.accessToken}`
    );
  }
}

async function httpClientFunction<T>({
  requestMethod,
  url,
  searchParams,
  body,
}: {
  requestMethod: RequestMethodType;
  url: string;
  searchParams?: searchParamsType;
  body?: RequestBodyType;
}): Promise<ResponseType<T>> {
  try {
    const response = await ky(url, {
      method: requestMethod,
      json: body,
      prefixUrl: import.meta.env.VITE_API_URL,
      searchParams: searchParams,
      hooks: {
        beforeRequest: [attachCustomeHeaders],
      },
    });

    // 응답 상태 코드 확인
    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse; // 바로 에러 응답을 던짐
    }

    // json 파싱
    const responseBody =
      await response.json<ResponseType<T>>();

    return responseBody;
  } catch (err) {
    if (err instanceof HTTPError) {
      try {
        const errorResponse =
          (await err.response.json()) as ErrorResponse;
        throw errorResponse;
      } catch (jsonError) {
        throw jsonError;
      }
    } else {
      throw new Error('An unknown error occurred');
    }
  }
}

export const getRequest = async <T>(
  url: string,
  searchParams?: searchParamsType
): Promise<ResponseType<T>> => {
  return httpClientFunction<T>({
    requestMethod: 'GET',
    url,
    searchParams,
  });
};

export const postRequest = <T>(
  url: string,
  body: RequestBodyType
): Promise<ResponseType<T>> =>
  httpClientFunction<T>({
    requestMethod: 'POST',
    url,
    body,
  });

export const putRequest = <T>(
  url: string,
  body: RequestBodyType
): Promise<ResponseType<T>> =>
  httpClientFunction<T>({
    requestMethod: 'PUT',
    url,
    body,
  });

export const patchRequest = <T>(
  url: string,
  body: RequestBodyType
): Promise<ResponseType<T>> =>
  httpClientFunction<T>({
    requestMethod: 'PATCH',
    url,
    body,
  });

export const deleteRequest = <T>(
  url: string
): Promise<ResponseType<T>> =>
  httpClientFunction<T>({
    requestMethod: 'DELETE',
    url,
  });

export const errorToastFunc = (error: unknown) => {
  const err = error as ErrorResponse;
  errorToast({ message: err.message });
};
