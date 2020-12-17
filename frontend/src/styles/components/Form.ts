import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    background-color: #fff;
    padding: 5rem 4rem;
`;

export const Input = styled.input`
    width: 30rem;
    height: 4rem;

    border: solid .1rem #000;
    outline: none;
    padding: 0 1rem;
`;

export const Label = styled.label`
    color: #000;
    font-size: 1.5rem;
    margin-bottom: .5rem;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

export const Submit = styled.button`
    height: 4rem;
    margin-top: 2rem;

    cursor: pointer;
`;

export const Error = styled.strong`

`;
