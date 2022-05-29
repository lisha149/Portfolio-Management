import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginPage = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 280,
    margin: "40px auto",
  };
  const avatarStyle = { backgroundColor: "#158cba" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#158cba" };
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 1000);
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              {/* {console.log(props)} */}
              <Field
                as={TextField}
                id="standard-basic"
                variant="standard"
                label="Email"
                name="email"
                placeholder="Enter email"
                type="email"
                fullWidth
                required
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                id="standard-basic"
                variant="standard"
                label="Password"
                name="password"
                placeholder="Enter password"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={props.isSubmitting}
                style={btnstyle}
                fullWidth
              >
                {props.isSubmitting ? "Loading" : "Login"}
              </Button>
              {/* {console.log(props)} */}
            </Form>
          )}
        </Formik>
        <Typography>
          {" "}
          New User ? <Link href="/register">Register</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
