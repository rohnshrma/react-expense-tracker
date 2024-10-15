import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const Expense = (props) => {
  return (
    <div className="expense">
      <Row>
        <Col lg="6">
          <p className="expense-name">{props.name}</p>
        </Col>
        <Col lg="3">
          <p className="expense-amount">{props.amount}</p>
        </Col>
        <Col lg="2">
          <Button type="button" variant="danger">
            <FaTrash />
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Expense;
