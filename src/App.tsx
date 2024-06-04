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
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default MyForm;
