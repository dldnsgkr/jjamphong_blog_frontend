import type {
  LoginSchemaType,
  SignupSchemaType,
  UpdateProfileSchemaType,
} from '@schema/Auth.schema';

/** 로그인 API request type */
export type LoginReqType = Omit<LoginSchemaType, 'mode'>;

/** 로그인 API response type */
export type LoginResType = {
  /** accessToken */
  accessToken: string;
};

/** 회원가입 API request type */
export type SignupReqType = Omit<SignupSchemaType, 'mode'>;

/** 회원가입 API response type */
export type SignupResType = {
  /** 임시 닉네임 */
  temporaryNickname: string;
};

/** 회원 정보 수정 API request type */
export type UpdateProfileReqType = UpdateProfileSchemaType;

/** 회원 정보 API response type */
export type MyInfoResType = {
  /** 인증 이메일 */
  email: string;
  /** 회원 블로그 제목 tag */
  blog_title: string;
  /** 닉네임 */
  nickname: string;
  /** 로그인 방식 type */
  provider: string;
  /** local 회원일 시 id */
  provider_id: string;
  /** 회원의 프로필 이미지 url */
  profile_image_url: string;
};
