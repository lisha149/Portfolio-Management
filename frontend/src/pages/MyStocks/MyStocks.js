import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import axios from "axios";
const MyStocks = () => {
  const [stocks, setStocks] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };
  const fetchStocks = async () => {
    const { data } = await axios.get("/api/stocks");
    setStocks(data);
  };

  console.log(stocks);
  useEffect(() => {
    fetchStocks();
  }, []);
  return (
    <MainScreen title="Welcome Palisha Shakya">
      <Link to="createtransition">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new transition
        </Button>
      </Link>
      {stocks.map((stock) => (
        <Accordion key={stock._id}>
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                  {stock.stockname}
                </Accordion.Toggle>
              </span>
              <div>
                <Button
                  variant="danger"
                  className="mx-2"
                  onClick={() => deleteHandler(stock._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <span class="badge rounded-pill bg-info">
                    Transition Type-{stock.transitiontype}
                  </span>
                </h4>
                <blockquote className="blockquote mb-0">
                  {/* Quantity-{stock.quantity}
              Amount-{stock.amount} */}
                  <footer className="blockquote-footer">
                    Created on -date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyStocks;
