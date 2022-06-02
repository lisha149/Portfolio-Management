import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { listStocks } from "../../actions/stockActions";
import Error from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";
import "./ViewTransaction.css";
const ViewTransaction = ({ search }) => {
  const dispatch = useDispatch();
  const stockList = useSelector((state) => state.stockList);
  const { loading, error, stocks } = stockList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useHistory();
  useEffect(() => {
    dispatch(listStocks());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, userInfo, history]);
  return (
    <MainScreen title="Portfolio Transactions">
      <div className="viewTransaction">
        {error && <Error variant="danger">{error}</Error>}
        {loading && <Loading />}
        <Card>
          {stocks
            ?.filter((filteredStock) =>
              filteredStock.stockname
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .reverse()
            .map((stock) => (
              <Card.Body>
                <h5>{stock.stockname}</h5>
                <p>
                  {stock.quantity} units at Rs {stock.amount}
                  <h6>
                    <i>Transaction Date: </i>
                    {stock.transactiondate.substring(0, 10)}
                  </h6>
                </p>
              </Card.Body>
            ))}
        </Card>
      </div>
    </MainScreen>
  );
};

export default ViewTransaction;
