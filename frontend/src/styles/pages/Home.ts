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

    div {
        display: flex;
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
        margin-bottom: 2rem;
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

        p {
            font-size: 2rem;
        };
    };
`;

export const StyledLink = styled.a`
    font-size: 1.6rem;
    font-weight: bold;

    padding: 1.3rem;
    border: solid .2rem #FFF;
    border-radius: 5rem;
    margin-right: 1rem;

    transition: opacity .3s ease;
    cursor: pointer;

    color: #FFF;

    &:hover {
        opacity: .7;
    };

    @media (max-width: 900px) {
        margin-top: 2rem;
    };
`;
