import axios from "axios";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useParams } from "react-router-dom";

interface Values {
  username: string;
  password: string;
}

function Register() {
  const { id } = useParams();
  return (
    <div>
      <h2>{id?.charAt(0).toUpperCase() + id!.slice(1)}</h2>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          axios
            .post(`http://localhost:3000/auth/${id}`, {
              username: values.username,
              password: values.password,
            })
            .then(function (response) {
              //if params = register / login, response.data.token
              console.log(response.data);
            })
            .catch(function (error) {
              console.log(error);
            });
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" placeholder="Username.." />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="Password.." />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
