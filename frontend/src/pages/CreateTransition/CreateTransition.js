import React, { useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useHistory } from "react-router-dom";

// import "./CreateNote.css";
const CreateTransition = () => {
  const [stockname, setStockname] = useState("");
  const [transitiontype, setTransitiontype] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [transitiondate, setTransitiondate] = useState(Date.now());

  const resetHandler = () => {
    setStockname("");
    setTransitiontype("");
    setQuantity("");
    setAmount("");
  };
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;
    dispatch(createNoteAction(title, content, category));

    history.push("/mynotes");
    resetHandler();
  };

  return (
    <Main title="Create a Note">
      <div className="createNoteContainer">
        <Card>
          <Card.Header>Create a new Note</Card.Header>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  placeholder="Enter the title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  value={content}
                  placeholder="Enter the content"
                  rows={4}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="content">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="content"
                  value={category}
                  placeholder="Enter the Category"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>

              {loading && <Loading size={50} />}

              <Button
                type="submit"
                variant="primary"
                style={{ flexDirection: "row", marginTop: 10 }}
                onClick={submitHandler}
              >
                Create Note
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
    </Main>
  );
};

export default CreateTransition;