/**
 * api 200 response
 */
export type ResponseType<T> = {
  code: number;
  message: string;
  contents: T;
};

/**
 * api error response
 */
export type ErrorResponse = {
  code: number;
  message: string;
  contents: string;
};
