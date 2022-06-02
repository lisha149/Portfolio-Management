import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listStocks } from "../../actions/stockActions";
import Error from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";
const Dashboard = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const stockList = useSelector((state) => state.stockList);
  const { loading, error, stocks } = stockList;

  // const [totalunits, setTotalunits] = useState("0");
  // const [investment, setInvestment] = useState("0");
  // const [soldamount, setSoldamount] = useState("0");
  // const [overallprofit, setOverallprofit] = useState("0");

  useEffect(() => {
    dispatch(listStocks());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, userInfo, history]);

  return (
    <MainScreen title={`Welcome ${userInfo.name}`}>
      <div className="potfolio">
        {error && <Error variant="danger">{error}</Error>}
        {loading && <Loading />}
        <Card>
          <Card.Header style={{ display: "flex" }}>
            Portfolio Summary
          </Card.Header>
          <Card.Body>
            <p>Total Units:</p>
            <p>Sold Amount:</p>
            <p>Overall Profit:</p>
            <p>Total Investment:</p>
            <p> Current Amount:</p>
          </Card.Body>
        </Card>
      </div>
    </MainScreen>
  );
};
export default Dashboard;
