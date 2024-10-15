import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CreateArea = (props) => {
  const [data, setData] = useState({
    name: "",
    amount: 0,
  });

  const nameChangeHandler = (e) => {
    const nameText = e.target.value;

    setData((prevData) => {
      return {
        name: nameText,
        amount: prevData.amount,
      };
    });
  };
  const amountChangeHandler = (e) => {
    const amountText = e.target.value;
    setData((prevData) => {
      return {
        name: prevData.name,
        amount: amountText,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAdd(data);
  };

  return (
    <Form onSubmit={submitHandler} className="create-form">
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          placeholder="Enter Expense Name"
          onChange={nameChangeHandler}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          onChange={amountChangeHandler}
          type="number"
          placeholder="Enter Expense Amount"
        ></Form.Control>
      </Form.Group>
      <Button type="submit" variant="dark">
        Add Expense
      </Button>
    </Form>
  );
};

export default CreateArea;
