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
  request.headers.set('X-Foo', 'foo');
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
    }).json<ResponseType<T>>();

    return response;
  } catch (err) {
    // 에러를 명확히 타입으로 처리
    const error = err as HTTPError;
    const errorResponse =
      (await error.response.json()) as ErrorResponse;

    console.error('HTTP Error:', errorResponse);

    throw errorResponse; // 필요 시 호출자가 처리할 수 있도록 던짐
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
