import Form from 'react-bootstrap/Form'
import ColBox from './ColBox'

interface TextFromProps {
  labelText: string
  formType: string
  textarea: string
}

const TextForm = ({ labelText: text, formType, textarea }: TextFromProps) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <ColBox gap={10}>
          <Form.Label>{text}</Form.Label>
          <Form.Control type={formType} placeholder={textarea} />
        </ColBox>
      </Form.Group>
    </Form>
  )
}

export default TextForm
