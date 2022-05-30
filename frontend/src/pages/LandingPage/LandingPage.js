import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
  // const history = useHistory();
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     history.push("/mystock");
  //     window.location.reload();
  //   }
  // }, [history]);
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Stock Portfolio Management</h1>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingbutton" variant="secondary">
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
