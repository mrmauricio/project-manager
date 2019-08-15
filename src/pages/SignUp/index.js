import React from 'react';
import { MdDeveloperMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Container } from '../../components/Auth/styles';

const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required('* Please enter your first name'),
    lastName: Yup.string().required('* Please enter your last name'),
    email: Yup.string()
        .email('* Please enter a valid e-mail address')
        .required('* Please enter your e-mail address'),
    password: Yup.string()
        .min(6, '* Your password need to have at least 6 characters')
        .required('* Please enter a password'),
    admin: Yup.string().required(),
});

export default function SignUp() {
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
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    admin: 'false',
                }}
                validationSchema={signUpSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            name="firstName"
                            type="text"
                            placeholder="First name"
                            className={
                                errors.firstName && touched.firstName
                                    ? 'error'
                                    : null
                            }
                        />
                        {errors.firstName && touched.firstName ? (
                            <span>{errors.firstName}</span>
                        ) : null}
                        <Field
                            name="lastName"
                            type="text"
                            placeholder="Last name"
                            className={
                                errors.lastName && touched.lastName
                                    ? 'error'
                                    : null
                            }
                        />
                        {errors.lastName && touched.lastName ? (
                            <span>{errors.lastName}</span>
                        ) : null}
                        <Field
                            name="email"
                            type="email"
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
                        <Field component="div" name="admin" className="radio">
                            <div>
                                <input
                                    type="radio"
                                    id="developer"
                                    name="admin"
                                    value="false"
                                    defaultChecked="true"
                                />
                                <label htmlFor="developer">Developer</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="manager"
                                    name="admin"
                                    value="true"
                                />
                                <label htmlFor="manager">Manager</label>
                            </div>
                        </Field>
                        {errors.admin && touched.admin ? (
                            <span>{errors.admin}</span>
                        ) : null}
                        <button type="submit">Sign Up</button>
                        <Link to="/">I already have an account</Link>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}
