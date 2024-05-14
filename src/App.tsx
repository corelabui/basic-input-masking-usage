import { Form, Input } from 'formfusion';
import './App.css';

const MyForm = () => {
  const onSubmit = (data: object) => {
    console.log('Form submitted successfully', data);
  };

  return (
    <Form onSubmit={onSubmit} className="form" validateOnBlur>
      <Input
        id="credit-card-number-hyphen"
        name="credit-card-number-hyphen"
        type="credit-card-number-hyphen"
        mask="####-####-####-####"
        classes={{
          root: 'input',
          field: 'input__field',
          label: 'input__field__label',
          error: 'input__field__error-message',
        }}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
