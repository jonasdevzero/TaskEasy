import styled from 'styled-components';

export const Main = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.backgroundColor};
`;

export const Content = styled.div`
    max-width: 90rem;
    width: 100%;
    height: 50rem;

    display: flex;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        flex: .6;
        justify-content: center;
    };
    h1 {
        font-size: 5rem;
        
        span {
            font-size: 13rem;
            line-height: 10rem;
            display: block;
        };
    };
    p {
        font-size: 2.5rem;
        margin-top: 3rem;
        margin-bottom: 4rem;
    };

    img {
        object-fit: contain;
        height: 50rem;
        width: 45rem;
        flex: .4;
    };

    @media (max-width: 900px) {
        padding: 5rem 3rem;
    };
`;

export const StyledLink = styled.a`
    width: max-content;
    font-size: 1.7rem;
    font-weight: bold;

    padding: 1.2rem;
    border: solid .2rem #FFF;
    border-radius: 5rem;

    transition: opacity .3s ease;
    cursor: pointer;

    color: #FFF;

    &:hover {
        opacity: .7;
    };
`;
