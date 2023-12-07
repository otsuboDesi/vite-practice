import { useFormik } from 'formik'
import { TextField, Button } from '@mui/material'

import { LoginSchema } from '../../../utils/shema'

const FormContainer = () => {
  const formik = useFormik({
    // 初期値の設定
    initialValues: {
      username: '',
      email: '',
      phone: '',
    },
    // バリデーションスキーマの適用
    validationSchema: LoginSchema,
    // 送信時の処理
    //resetFormは分割代入(Destructuring Assignment) or formikHelpers.resetForm
    onSubmit: (values, { resetForm }) => {
      // フォームのデータを JSON 形式で表示する
      //2 はインデントのスペース数,読みやすくるため
      alert(JSON.stringify(values, null, 2))
      // フォームのリセット
      resetForm()
    },
  })

  return (
    // バリデーションが成功した場合、
    //useFormik or Formikコンポーネントで定義された onSubmit 関数を呼出す
    <form onSubmit={formik.handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextField
          name="username"
          label="ユーザーネーム"
          value={formik.values.username}
          onChange={formik.handleChange}
          // フィールドのフォーカスが外れたときの処理
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          //errorメッセージ
          helperText={formik.touched.username && formik.errors.username}
        />
        <TextField
          name="email"
          type="email"
          label="Eメール"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="phone"
          label="電話番号"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          // ボタンの状態制御
          disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
        >
          送信
        </Button>
      </div>
    </form>
  )
}

export default FormContainer
