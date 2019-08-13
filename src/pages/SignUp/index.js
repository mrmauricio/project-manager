import React from 'react';
import { MdDeveloperMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container } from './styles';

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

            <form>
                <input name="name" placeholder="First name" />
                <input name="name" placeholder="Last name" />
                <input name="email" type="email" placeholder="E-mail" />
                <input name="password" type="password" placeholder="Password" />

                <button type="submit">Sign Up</button>
                <Link to="/">I already have an account</Link>
            </form>
        </Container>
    );
}
