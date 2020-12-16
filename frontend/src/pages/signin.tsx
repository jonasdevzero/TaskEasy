import { useEffect } from 'react';
import Head from 'next/head';

import usePersistedState from '../hooks/usePersistedState'

import { Main } from '../styles/pages/Global';
import {
    FormContainer
} from '../styles/pages/Signin';
import {
    Form,
    Input
} from '../styles/components/Form';

export default function Signin() {
    const [token, setToken] = usePersistedState('token', "")

    useEffect(() => {
        if (token === "") return;

        
    }, [])

    return (
        <>
            <Head>

            </Head>

            <Main>
                <FormContainer>
                    <Form>
                        <Input type="text" />
                    </Form>
                </FormContainer>
            </Main>
        </>
    );
};
