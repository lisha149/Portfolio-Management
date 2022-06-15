import React, { useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Form, Card } from "react-bootstrap";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createStockAction } from "../../actions/stockActions";
import Select from "react-select";
import data from "../../data/stockdata";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CreateTransaction.css";
const CreateTransaction = () => {
  const [stockname, setStockname] = useState(null);
  const [transactiontype, setTransactiontype] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [transactiondate, setTransactiondate] = useState(null);

  const dispatch = useDispatch();

  const stockCreate = useSelector((state) => state.stockCreate);
  const { loading, error, stock } = stockCreate;

  console.log(stock);

  const resetHandler = () => {
    setStockname("");
    setTransactiontype("");
    setQuantity("");
    setAmount("");
  };

  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !stockname ||
      !transactiontype ||
      !quantity ||
      !amount ||
      !transactiondate
    )
      return;
    dispatch(
      createStockAction(
        stockname,
        transactiontype,
        quantity,
        amount,
        transactiondate
      )
    );
    resetHandler();
    history.push("/mystock");
  };

  const handleChange = (obj) => {
    setStockname(obj.value);
  };
  const handle = (obj) => {
    setTransactiontype(obj.value);
  };
  const transactionType = [
    { value: "Sell", label: "Sell" },
    { value: "Buy", label: "Buy" },
  ];
  return (
    <MainScreen title="Add a stock transaction">
      <div className="createStockContainer">
        <Card>
          <Card.Header>Add a new stock transaction</Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

              <Form.Group controlId="title">
                <Form.Label>Stock Name</Form.Label>
                <Select
                  value={data.find((x) => x.value === stockname)}
                  options={data}
                  onChange={handleChange}
                  getOptionLabel={(option) => option.stockname}
                />
                <br />
                <b>Stock name :</b>
                <pre>{JSON.stringify(stockname)}</pre>
              </Form.Group>

              <Form.Group controlId="content">
                <Form.Label>Transaction Type</Form.Label>
                <Select
                  value={transactionType.find(
                    (x) => x.value === transactiontype
                  )}
                  options={transactionType}
                  onChange={handle}
                />
                <b>Transaction Type:</b>
                <pre>{JSON.stringify(transactiontype)}</pre>
              </Form.Group>

              <Form.Group controlId="content">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="content"
                  value={quantity}
                  placeholder="Enter the units"
                  onChange={(e) => setQuantity(e.target.value)}
                  id="units"
                />
              </Form.Group>

              <Form.Group controlId="content">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="content"
                  value={amount}
                  placeholder="Enter the amount"
                  onChange={(e) => setAmount(e.target.value)}
                  id="price"
                />
              </Form.Group>

              <Form.Group controlId="content">
                <Form.Label>Transaction Date</Form.Label>
                {/* <Form.Control
                  type="content"
                  value={transactiondate}
                  placeholder="Enter the transaction date"
                  onChange={(e) => setTransactiondate(e.target.value)}
                /> */}
                <DatePicker
                  selected={transactiondate}
                  onChange={(date) => setTransactiondate(date)}
                  formatDate="dd/MM/yyyy"
                  showYearDropdown
                  scrollableMonthYearDropdown
                />
              </Form.Group>

              {loading && <Loading size={50} />}

              <Button
                type="submit"
                variant="primary"
                style={{ flexDirection: "row", marginTop: 10 }}
                onClick={submitHandler}
              >
                Create Stock
              </Button>

              <Button
                className="mx-2"
                onClick={resetHandler}
                variant="danger"
                style={{ flexDirection: "row", marginTop: 10 }}
              >
                Clear
              </Button>
            </Form>
          </Card.Body>

          <Card.Footer className="text-muted">
            Creating on - {new Date().toLocaleDateString()}
          </Card.Footer>
        </Card>
      </div>
    </MainScreen>
  );
};
export default CreateTransaction;
