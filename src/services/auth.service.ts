import {
  getRequest,
  patchRequest,
  postRequest,
} from '@utils/httpsClient';
import type {
  LoginReqType,
  LoginResType,
  MyInfoResType,
  RefreshReqType,
  RefreshResType,
  SignupReqType,
  SignupResType,
  UpdateProfileReqType,
} from 'types/web/auth.types';

/**
 * refreshToken을 이용한 재발급 API
 * @param object
 * @returns
 */
const refreshToken = async () => {
  return await postRequest<RefreshResType>('auth/refresh');
};

/**
 * 회원가입 API
 * @param object
 * @returns
 */
const signup = async (object: SignupReqType) => {
  return await postRequest<SignupResType>(
    'auth/signup',
    object
  );
};

/**
 * 로그인 API
 * @param object
 * @returns
 */
const login = async (object: LoginReqType) => {
  return await postRequest<LoginResType>(
    'auth/login',
    object
  );
};

/**
 * 로그아웃 API
 * @returns
 */
const logout = async () => {
  return await postRequest<LoginResType>('auth/logout');
};

/**
 * 회원 정보 수정 API
 * @param object
 * @returns
 */
const updateUser = async (object: UpdateProfileReqType) => {
  return await patchRequest('auth/user/info', object);
};

/**
 * 회원 정보 API
 * @param object
 * @returns
 */
const myInfo = async () => {
  return await getRequest<MyInfoResType>('auth/me');
};

export {
  refreshToken,
  signup,
  login,
  logout,
  updateUser,
  myInfo,
};
