import React from 'react';
import { Input, Form } from 'antd';

const InputItem = (props) => {
  //const { placeholder, size } = props;
  // Form.Item wrap then has gap between two input text fields
  const { name, rules, ...rest } = props;
  return (
    <Form.Item name={name} rules={rules}>
      <Input {...rest} />
    </Form.Item>
  );
}

export default InputItem;