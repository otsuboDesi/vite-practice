import * as Yup from 'yup'

// バリデーションスキーマ
export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[A-Za-z]+$/, 'ユーザーネームは文字のみです')
    .max(20, 'ユーザーネームは20文字以内でなければなりません')
    .required('必須項目です'),
  email: Yup.string()
    .email('無効なメールアドレスです')
    .required('必須項目です'),
  phone: Yup.string()
    //一つ以上の半角数字のみ
    .matches(/^\d+$/, '電話番号は半角数字のみです')
    .required('必須項目です'),
})
