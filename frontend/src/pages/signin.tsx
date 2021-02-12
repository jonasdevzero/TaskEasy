import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { AxiosError } from 'axios';

import api from '../services/api';
import usePersistedState from '../hooks/usePersistedState';

import { Main } from '../styles/pages/Global';
import {
    Form,
    Input,
    Label,
    Wrapper,
    Submit,
    Error,
    Info,
} from '../styles/components/Form';

export default function Signin() {
    const [token, setToken] = usePersistedState('token', "");
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    useEffect(() => {
        if (token === "") return;

        api.post("/auth", { token })
            .then(({ data }) => {
                if (data.auth) return router.push("/app");
            });
    }, [token]);

    async function login(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        await api.post("/login", { email, password })
            .then(({ data }) => {
                setToken(data.token);
                router.push("/app");
            })
            .catch((error: AxiosError) => {
                const { message, fields } = error.response.data;

                setError(message);

                fields?.forEach((field: string) => {
                    switch (field) {
                        case "email":
                            setEmail("");
                            break;
                        case "password":
                            setPassword("");
                    };
                });
            });
    };

    return (
        <>
            <Head>
                <title>TaskEasy | SignIn</title>
            </Head>

            <Main>
                <div>
                    <Form onSubmit={login}>

                        <Link href="/">
                            <img src="/checklist2.png" alt="" />
                        </Link>

                        {error.length > 0 ? (
                            <Error title="error">{error}</Error>
                        ) : null}

                        <Wrapper>
                            <Label>Email</Label>
                            <Input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                        </Wrapper>

                        <Wrapper>
                            <Label>Password</Label>
                            <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </Wrapper>

                        <Submit type="submit">SignIn</Submit>

                        <Info>
                            No have an account?
                            <Link href="/signup">click here</Link>
                        </Info>
                    </Form>
                </div>
            </Main>
        </>
    );
};
