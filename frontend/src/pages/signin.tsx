import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import api from '../services/api';
import usePersistedState from '../hooks/usePersistedState';

import { Main } from '../styles/pages/Global';
import {
    FormContainer
} from '../styles/pages/Signin';
import {
    Form,
    Input,
    Label,
    Wrapper,
    Submit,
    Error,
} from '../styles/components/Form';

export default function Signin() {
    const [token, setToken] = usePersistedState('token', "");
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    useEffect(() => {
        if (token === "") return;

        api.post("/user/auth", { token })
            .then(({ data }) => {
                if (data.auth) return router.push("/app");
            });
    }, []);

    async function login(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        await api.post("/user/login", { email, password })
            .then(({ data }) => {
                setToken(data.token);
                router.push("/app");
            })
            .catch(error => setError(error.message));
    };

    return (
        <>
            <Head>
                <title>TaskEasy | SignIn</title>
            </Head>

            <Main>
                <FormContainer>
                    <Form onSubmit={login}>
                        {error.length > 0 ? (
                            <Error title="error">{error}</Error>
                        ) : null}

                        <Wrapper>
                            <Label>email</Label>
                            <Input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                        </Wrapper>

                        <Wrapper>
                            <Label>password</Label>
                            <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </Wrapper>

                        <Submit type="submit">SignIn</Submit>
                    </Form>
                </FormContainer>
            </Main>
        </>
    );
};
