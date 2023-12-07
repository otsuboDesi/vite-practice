import React from 'react'
import { Field } from 'formik'

interface FormProps {
  name: string
  label: string
}

// ログインフォームコンポーネント
const LoginForm = ({ name, label }: FormProps) => {
  return (
    <>
      <Field name={name} label={label} component={CustomInputComponent} />
    </>
  )
}

export default LoginForm
