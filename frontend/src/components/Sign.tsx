import axios from "axios";
import { Formik, Form, FormikHelpers, useField } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

interface Values {
  username: string;
  password: string;
}

interface TokenProp {
  token?: string;
  onSubmit: (token: string) => void;
}

const TextInput = ({
  label,
  ...props
}: {
  [x: string]: string;
  name: string;
}) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function Sign(props: TokenProp) {
  const { id } = useParams();
  const { onSubmit } = props;
  const handleOnSubmit = (token: string) => {
    onSubmit(token);
  };
  return (
    <div>
      <h2>{id?.charAt(0).toUpperCase() + id!.slice(1)}</h2>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          password: Yup.string().password().min(10),
        })}
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
              //login function returns a token as response
              if (response.data.token !== undefined) {
                const token = response.data.token;
                console.log(token);
                handleOnSubmit(token);
                //registering does not return a response
              } else {
                console.log("Registered successfully");
              }
            })
            .catch(function (error) {
              console.log(error);
            });
          setSubmitting(false);
        }}
      >
        <Form>
          <TextInput
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
          />
          <TextInput
            label="Password"
            name="password"
            type="text"
            placeholder="Password"
          />
          <button
            type="submit"
            // onClick={() => {
            //   handleOnSubmit(token);
            // }}
          >
            {id?.charAt(0).toUpperCase() + id!.slice(1)}
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Sign;
