import { useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import api from "../services/api";

import {
    Main,
} from '../styles/pages/Global';
import {
    Form,
    Input,
    Label,
    Wrapper,
    Submit,
    Error,
    Info,
} from '../styles/components/Form';
import usePersistedState from "../hooks/usePersistedState";
import { AxiosError } from "axios";

export default function Signup() {
    const [token, setToken] = usePersistedState("token", "");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const router = useRouter();

    async function create(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        await api.post("user", { name, email, password })
            .then(({ data }) => {
                setToken(data.token);
                router.push("/app");
            })
            .catch((error: AxiosError) => {
                const { message } = error.response.data;

                setError(message);
                setEmail("");
            });
    };

    return (
        <>
            <Head>
                <title>TaskEasy | SignUp</title>
            </Head>

            <Main>
                <div>
                    <Form onSubmit={create}>

                        <Link href="/">
                            <img src="/checklist2.png" alt="" />
                        </Link>

                        {error.length > 0 ? (
                            <Error title="error">{error}</Error>
                        ) : null}

                        <Wrapper>
                            <Label>Name</Label>
                            <Input type="text" value={name} onChange={e => setName(e.target.value)} />
                        </Wrapper>

                        <Wrapper>
                            <Label>Email</Label>
                            <Input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                        </Wrapper>

                        <Wrapper>
                            <Label>Password</Label>
                            <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </Wrapper>

                        <Submit type="submit">SignUp</Submit>

                        <Info>
                            Already have an account?
                            <Link href="/signin">Click here</Link>
                        </Info>
                    </Form>
                </div>
            </Main>
        </>
    );
};