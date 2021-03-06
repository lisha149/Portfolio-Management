import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { updateStockAction } from "../../actions/stockActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import Select from "react-select";
import data from "../../data/stockdata";
import "./UpdateTransaction.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateTransaction = ({ match }) => {
  const [stockname, setStockname] = useState();
  const [transactiontype, setTransactiontype] = useState();
  const [quantity, setQuantity] = useState();
  const [amount, setAmount] = useState();
  const [transactiondate, setTransactiondate] = useState();
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const stockUpdate = useSelector((state) => state.stockUpdate);
  const { loading, error } = stockUpdate;
  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/stocks/${match.params.id}`);
      setStockname(data.stockname);
      setTransactiontype(data.transactiontype);
      setQuantity(data.quantity);
      setAmount(data.amount);
      setDate(data.updatedAt);
    };
    fetching();
  }, [match.params.id, date]);
  const history = useHistory();
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateStockAction(
        match.params.id,
        stockname,
        transactiontype,
        quantity,
        amount,
        transactiondate
      )
    );
    if (
      !stockname ||
      !transactiontype ||
      !quantity ||
      !amount ||
      !transactiondate
    )
      return;

    resetHandler();
    history.push("/mystock");
    window.location.reload();
  };

  const resetHandler = () => {
    setStockname("");
    setTransactiontype("");
    setQuantity("");
    setAmount("");
    setTransactiondate("");
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
    <MainScreen title="Edit Transaction">
      <div className="updateStockContainer">
        <Card>
          <Card.Header>Edit your stock transaction </Card.Header>
          <Card.Body>
            <Form onSubmit={updateHandler}>
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
                {/* <Form.Control
                  type="text"
                  value={stockname}
                  placeholder="Enter the stock name"
                  onChange={(e) => setStockname(e.target.value)}
                /> */}
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
                {/* <Form.Control
                  type="text"
                  value={transactiontype}
                  placeholder="Enter the transaction type"
                  onChange={(e) => setTransactiontype(e.target.value)}
                /> */}
              </Form.Group>

              <Form.Group controlId="content">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="content"
                  value={quantity}
                  placeholder="Enter the units"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="content">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="content"
                  value={amount}
                  placeholder="Enter the amount"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="content">
                <Form.Label>Transaction Date</Form.Label>
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
                variant="primary"
                type="submit"
                style={{ flexDirection: "row", marginTop: 10 }}
              >
                Update
              </Button>
            </Form>
          </Card.Body>

          <Card.Footer className="text-muted">
            Updated on - {date.substring(0, 10)}
          </Card.Footer>
        </Card>
      </div>
    </MainScreen>
  );
};

export default UpdateTransaction;
