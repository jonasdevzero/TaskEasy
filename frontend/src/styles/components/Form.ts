import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    background-color: rgba(0, 0, 0, .1);
    padding: 3rem 3rem 5rem 3rem;

    img {
        width: 15rem;
        object-fit: contain;
        align-self: center;
        cursor: pointer;
        margin-bottom: 1rem;
    };

    @media (max-width: 400px) {
        padding: none;
    };
`;

export const Input = styled.input`
    width: 30rem;
    height: 4.2rem;

    border: none;
    border-radius: 0;
    outline: none;
    padding: 0 1rem;

    @media (max-width: 400px) {
        width: 25rem;
    };
`;

export const Label = styled.label`
    font-size: 1.5rem;
    margin-bottom: .5rem;
    font-weight: 600;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

export const Submit = styled.button`
    height: 4.5rem;
    margin-top: 2rem;
    border: none;
    border-radius: 0;
    font-weight: 600;
    color: #fff;
    background-color: #191818;
    transition: background-color .3s ease;

    cursor: pointer;

    &:hover {
        background-color: #000;
    };
`;

export const Error = styled.strong`
    width: 30rem;
    height: 4rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;
    background-color: red;
`;

export const Info = styled.p`
    margin-top: 2rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: #fff;
    align-self: center;
    
    a {
        text-decoration: none;
        color: #000;
        margin-left: .3rem;

        &:hover {
            text-decoration: underline;
        };
    };
`;
