import type {
  ErrorResponse,
  ResponseType,
} from 'types/httpsClients.type';
import ky, { HTTPError } from 'ky';

type RequestMethodType =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'PATCH'
  | 'DELETE';

type searchParamsType = Record<string, any>;

type RequestBodyType = Record<string, any>;

function attachCustomeHeaders(request: Request) {
  // NOTE: 추후에 token 값 추가 하는 부분이 될듯?
  request.headers.set('X-ACCESS-TOKEN', 'foo');
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
  return await httpClientFunction<T>({
    requestMethod: 'GET',
    url,
    searchParams,
  });
};

export const postRequest = (
  url: string,
  body: RequestBodyType
) =>
  httpClientFunction({
    requestMethod: 'POST',
    url,
    body,
  });

export const putRequest = (
  url: string,
  body: RequestBodyType
) =>
  httpClientFunction({
    requestMethod: 'PUT',
    url,
    body,
  });

export const patchRequest = (
  url: string,
  body: RequestBodyType
) =>
  httpClientFunction({
    requestMethod: 'PATCH',
    url,
    body,
  });

export const deleteRequest = (url: string) =>
  httpClientFunction({
    requestMethod: 'DELETE',
    url,
  });
