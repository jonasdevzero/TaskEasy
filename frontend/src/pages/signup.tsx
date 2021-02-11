import { useState } from "react";
import Head from 'next/head';
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
} from '../styles/components/Form';
import usePersistedState from "../hooks/usePersistedState";

export default function Signup() {
    const [token, setToken] = usePersistedState("token", "");

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const router = useRouter();

    async function create(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        await api.post("user", { name, username, email, password })
            .then(({ data }) => {
                setToken(data.token);
                router.push("/app");
            })
            .catch(error => setError(error.message));
    };

    return (
        <>
            <Head>
                <title>TaskEasy | SignUp</title>
            </Head>

            <Main>
                <div>
                    <Form onSubmit={create}>
                        {error.length > 0 ? (
                            <Error title="error">{error}</Error>
                        ) : null}

                        <Wrapper>
                            <Label>Name</Label>
                            <Input type="text" value={name} onChange={e => setName(e.target.value)} />
                        </Wrapper>

                        <Wrapper>
                            <Label>Username</Label>
                            <Input type="text" value={username} onChange={e => setUsername(e.target.value)} />
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
                    </Form>
                </div>
            </Main>
        </>
    );
};