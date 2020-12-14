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
`;

export const StyledLink = styled.a`
    font-size: 1.5rem;
    font-weight: bold;

    padding: 1rem;
    border: solid .2rem #FFF;
    border-radius: 5rem;
    margin-right: 1rem;

    transition: all .2s ease;
    cursor: pointer;

    color: #FFF;

    &.signin {
        color: #e5e5e5;
        border-color: #e5e5e5;
    }

    &:hover {
        color: rgba(0, 0, 0, .5);
        border-color: rgba(0, 0, 0, .5);
    };
`;
