import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import MainScreen from "../../components/MainScreen";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listStocks } from "../../actions/stockActions";
import Error from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { useHistory } from "react-router-dom";
const MyStocks = ({ search }) => {
  const dispatch = useDispatch();

  const stockList = useSelector((state) => state.stockList);
  const { loading, error, stocks } = stockList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const stockCreate = useSelector((state) => state.stockCreate);
  const { success: successCreate } = stockCreate;

  const stockDelete = useSelector((state) => state.stockDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    succes: successDelete,
  } = stockDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
      window.location.reload();
    }
  };
  // console.log(stocks);
  const history = useHistory();
  useEffect(() => {
    dispatch(listStocks());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, userInfo, history, successCreate, successDelete]);

  //
  return (
    <MainScreen title={`Welcome ${userInfo.name}`}>
      <a href="/createtransaction">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Add a stock transaction
        </Button>
      </a>

      {errorDelete && <Error variant="danger">{errorDelete}</Error>}
      {loadingDelete && <Loading />}

      {error && <Error variant="danger">{error}</Error>}
      {loading && <Loading />}

      {stocks
        ?.filter((filteredStock) =>
          filteredStock.stockname.toLowerCase().includes(search.toLowerCase())
        )
        .reverse()
        .map((stock) => (
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
                  <Button href={`/stock/${stock._id}`}>Edit</Button>
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
                      Transaction type -{stock.transactiontype}
                    </span>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>
                      Quantity-{stock.quantity}
                      <h5>Amount-{stock.amount}</h5>
                    </p>
                    <footer className="blockquote-footer">
                      Transaction on{" "}
                      <cite title="Source Title">
                        {stock.transactiondate.substring(0, 10)}
                      </cite>
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
