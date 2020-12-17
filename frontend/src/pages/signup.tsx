import { useState } from "react";
import Head from 'next/head';

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

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    async function create(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        await api.post("user", { name, email, password })
            .then(response => {

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
                            <Error>{error}</Error>
                        ) : null}

                        <Wrapper>
                            <Label>name</Label>
                            <Input type="text" value={name} onChange={e => setName(e.target.value)} />
                        </Wrapper>

                        <Wrapper>
                            <Label>email</Label>
                            <Input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                        </Wrapper>

                        <Wrapper>
                            <Label>password</Label>
                            <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </Wrapper>

                        <Submit type="submit">SignUp</Submit>
                    </Form>
                </div>
            </Main>
        </>
    );
};