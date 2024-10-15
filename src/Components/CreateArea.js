import React, { useReducer } from "react";
import { Form, Button } from "react-bootstrap";

const formReducer = (state, action) => {
  if (action.type === "NAME_CHANGE") {
    return {
      name: action.payload,
      amount: state.amount,
    };
  }

  if (action.type === "AMOUNT_CHANGE") {
    return {
      name: state.name,
      amount: action.payload,
    };
  }

  return initialState;
};

const initialState = {
  name: "",
  amount: 0,
};

const CreateArea = (props) => {
  const [data, dispatch] = useReducer(formReducer, initialState);

  const nameChangeHandler = (e) => {
    const nameText = e.target.value;

    dispatch({ type: "NAME_CHANGE", payload: nameText });
  };
  const amountChangeHandler = (e) => {
    const amountText = e.target.value;
    dispatch({ type: "AMOUNT_CHANGE", payload: amountText });
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
