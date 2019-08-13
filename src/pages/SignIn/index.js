import React from 'react';
import { MdDeveloperMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Container } from '../../components/Auth/styles';

const signInSchema = Yup.object().shape({
    email: Yup.string()
        .email('* Please enter a valid e-mail address')
        .required('* Please enter your e-mail address'),
    password: Yup.string().required('* Please enter your password'),
});
// invalid email or password. please make sure you are registered

export default function SignIn() {
    return (
        <Container>
            <div>
                <MdDeveloperMode size={65} color="#ebfcfc" />
                <div>
                    <strong>Project</strong>
                    <strong>Manager</strong>
                </div>
            </div>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={signInSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            name="email"
                            type="text"
                            placeholder="E-mail"
                            className={
                                errors.email && touched.email ? 'error' : null
                            }
                        />
                        {errors.email && touched.email ? (
                            <span>{errors.email}</span>
                        ) : null}
                        <Field
                            name="password"
                            type="password"
                            placeholder="Password"
                            className={
                                errors.password && touched.password
                                    ? 'error'
                                    : null
                            }
                        />
                        {errors.password && touched.password ? (
                            <span>{errors.password}</span>
                        ) : null}
                        <button type="submit">Sign In</button>
                        <Link to="/register">
                            Don&apos;t have an account? Click here to Sign Up
                        </Link>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
