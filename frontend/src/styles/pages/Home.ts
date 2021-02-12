import styled from 'styled-components';

export const Content = styled.div`
    max-width: 90rem;
    width: 100%;
    height: 50rem;

    display: flex;
    align-items: center;

    img {
        object-fit: contain;
        height: 50rem;
        width: 45rem;
    };

    @media (max-width: 900px) {
        padding: 5rem 3rem;

        img {
            display: none;
        };
    };
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
`;

export const LogoContainer = styled.div`
     h1 {
        font-size: 5rem;
        
        span {
            font-size: 13rem;
            line-height: 10rem;
            display: block;
        };
    };
    p {
        font-size: 2rem;
        margin-top: 3rem;
    };

    @media (max-width: 900px) {
        div {
            justify-content: center;
        };
        h1, span, p {
            text-align: center;
        }
    };
    @media (max-width: 400px) {
        h1 {
            font-size: 4;

            span {
                font-size: 10rem;
            };
        };
    };
`;

export const LinkContainer = styled.div`
    display: flex;
    margin-top: 4rem;

    p {
        margin: 0 1rem;
        font-size: 1.8rem;
        display: flex;
        align-items: center;
    };

    @media (max-width: 900px) {
        justify-content: center;
    };
    @media (max-width: 400px) {
        flex-direction: column;
        align-items: center;

        a {
            width: 15rem;
        };
        p {
            margin: .5rem 0;
        };
    };
`;

export const StyledLink = styled.a`
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;

    padding: 1rem 1.3rem;
    border: solid .2rem #FFF;
    border-radius: .2rem;

    transition: opacity .3s ease;
    cursor: pointer;
`;
