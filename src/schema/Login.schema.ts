import { z } from 'zod';

/**
 * 일반 로그인 스키마
 */
export const LoginSchema = z.object({
  loginId: z
    .string()
    .trim()
    .min(1, { message: '아이디를 입력해주세요.' }),
  password: z
    .string()
    .trim()
    .min(1, { message: '비밀번호를 입력해주세요.' }),
});