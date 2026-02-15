import {
  getRequest,
  patchRequest,
  postRequest,
} from '@utils/httpsClient';
import type {
  LoginReqType,
  LoginResType,
  MyInfoResType,
  SignupReqType,
  SignupResType,
  UpdateProfileReqType,
} from 'types/web/auth.types';

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

export { signup, login, updateUser, myInfo };
