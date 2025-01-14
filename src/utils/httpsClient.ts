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

async function httpClientFunction({
  requestMethod,
  url,
  searchParams,
  body,
}: {
  requestMethod: RequestMethodType;
  url: string;
  searchParams?: searchParamsType;
  body?: RequestBodyType;
}) {
  try {
    console.log(import.meta.env);
    const response = await ky(url, {
      method: requestMethod,
      json: body,
      prefixUrl: import.meta.env.VITE_API_URL,
      searchParams: searchParams,
      hooks: {
        beforeRequest: [attachCustomeHeaders],
      },
    }).json();

    console.log(response);
  } catch (err) {
    console.log(err as HTTPError);
  }
}

export const getRequest = (
  url: string,
  searchParams?: searchParamsType
) =>
  httpClientFunction({
    requestMethod: 'GET',
    url,
    searchParams,
  });

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
