import { optional, z } from 'zod';

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

export type LoginSchemaType = z.infer<typeof LoginSchema>;

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

export type SignupSchemaType = z.infer<typeof SignupSchema>;

/**
 * 닉네임 스키마
 */
export const NicknameSchema = z.object({
  nickname: z
    .string()
    .min(2, '닉네임은 최소 2자 이상')
    .max(10, '닉네임은 최대 10자까지 가능')
    .regex(
      /^[a-zA-Z0-9가-힣_]+$/,
      '특수문자는 사용할 수 없습니다'
    )
    .optional(),
});

export type NicknameSchemaType = z.infer<
  typeof NicknameSchema
>;

/**
 * 회원 정보 수정 스키마
 */
export const UpdateProfileSchema = NicknameSchema.extend({
  provider_id: z
    .string()
    .trim()
    .min(1, { message: '아이디를 입력해주세요.' })
    .optional(),
  password: z
    .string()
    .trim()
    .min(1, { message: '비밀번호를 입력해주세요.' })
    .optional(),
  userExplain: z.string().optional(),
  blog_title: z.string().optional(),
  social_instagram: z.string().optional(),
  social_slack: z.string().optional(),
  social_discord: z.string().optional(),
  social_github: z.string().optional(),
  social_phone: z.string().optional(),
  social_facebook: z.string().optional(),
  email: z.string().optional(),
});

// DTO 타입 자동 생성
export type UpdateProfileSchemaType = z.infer<
  typeof UpdateProfileSchema
>;

/**
 * 설정 - 로그인 정보 수정 스키마
 */
export const UpdateLoginInfoSchema = z
  .object({
    provider_id: z
      .string()
      .min(4, '아이디는 최소 4자 이상입니다.')
      .max(20),
    password: z.string().optional(),
    passwordChk: z.string().optional(),
  })
  .refine(
    (data) => {
      // 둘 다 비어있으면 OK (비번 변경 안 하는 경우)
      if (!data.password && !data.passwordChk) return true;

      // 하나만 입력되면 실패
      if (!data.password || !data.passwordChk) return false;

      // 둘 다 입력되었으면 일치 검사
      return data.password === data.passwordChk;
    },
    {
      message: '비밀번호가 일치하지 않습니다.',
      path: ['passwordChk'],
    }
  );
