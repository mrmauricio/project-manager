import React from 'react';
import { MdDeveloperMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container } from './styles';

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

            <form>
                <input name="email" type="email" placeholder="E-mail" />
                <input name="password" type="password" placeholder="Password" />

                <button type="submit">Sign In</button>
                <Link to="/register">
                    Don&apos;t have an account? Click here to Sign Up
                </Link>
            </form>
        </Container>
    );
}
