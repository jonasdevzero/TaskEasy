import styled from 'styled-components';

export const Main = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`;

interface IThemeController {
    currentTheme: 'light' | 'dark';
};
export const ThemeController = styled.div<IThemeController>`
    ${Main} {
        background-color: ${({ theme, currentTheme }) => theme[currentTheme].backgroundColor};
    };

    h1 {
        color: ${({ theme, currentTheme }) => theme[currentTheme].textColor};
    }
`;
