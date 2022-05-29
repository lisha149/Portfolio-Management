import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const RegisterPage = () => {
  const paperStyle = {
    padding: 20,
    width: 280,
    margin: "40px auto",
  };
  const avatarStyle = { backgroundColor: "#158cba" };
  const btnstyle = { margin: "8px 0", backgroundColor: "#158cba" };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Please enter valid email").required("Required"),
    password: Yup.string()
      .min(5, "Password minimum length should be 5")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password donot match")
      .required("Required"),
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
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={{ margin: 0 }}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                id="standard-basic"
                variant="standard"
                label="Name"
                name="name"
                placeholder="Enter your name"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                fullWidth
                id="standard-basic"
                variant="standard"
                label="Email"
                type="email"
                name="email"
                placeholder="Enter your email"
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                fullWidth
                id="standard-basic"
                variant="standard"
                label="Password"
                type="password"
                name="password"
                placeholder="Enter your password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                fullWidth
                id="standard-basic"
                variant="standard"
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                helperText={<ErrorMessage name="confirmPassword" />}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={props.isSubmitting}
                color="primary"
                style={btnstyle}
                fullWidth
              >
                {props.isSubmitting ? "Loading" : "Sign up"}
              </Button>

              <Typography>
                {" "}
                Have an Account ? <Link href="/login">Login</Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default RegisterPage;
