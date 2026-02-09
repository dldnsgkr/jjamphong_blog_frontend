import { z } from 'zod';

/**
 * 일반 로그인 스키마
 */
export const LoginSchema = z.object({
  mode: z.literal('login'),
  provider_id: z
    .string()
    .trim()
    .min(1, { message: '아이디를 입력해주세요.' }),
  password: z
    .string()
    .trim()
    .min(1, { message: '비밀번호를 입력해주세요.' }),
});

export type LoginType = z.infer<typeof LoginSchema>;

/**
 * 일반 회원가입 스키마
 */
export const SignupSchema = z
  .object({
    mode: z.literal('signup'),
    provider_id: z
      .string()
      .trim()
      .min(1, { message: '아이디를 입력해주세요.' }),
    password: z
      .string()
      .trim()
      .min(1, { message: '비밀번호를 입력해주세요.' }),
    email: z.string().email({
      message: '유효한 이메일 주소를 입력해주세요.',
    }),
    confirmPassword: z
      .string()
      .trim()
      .min(1, { message: '비밀번호 확인을 입력해주세요.' }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        message: '비밀번호가 일치하지 않습니다',
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type SignupType = z.infer<typeof SignupSchema>;

export const NicknameSchema = z.object({
  nickname: z
    .string()
    .min(2, '닉네임은 최소 2자 이상')
    .max(10, '닉네임은 최대 10자까지 가능')
    .regex(
      /^[a-zA-Z0-9가-힣_]+$/,
      '특수문자는 사용할 수 없습니다'
    ),
});

export type NicknameType = z.infer<typeof NicknameSchema>;
