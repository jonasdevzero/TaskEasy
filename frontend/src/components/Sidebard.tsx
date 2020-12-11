import Link from 'next/link';

import {
    Container,
    StyledLink,
} from '../styles/components/Sidebar'

function Sidebar() {
    return (
        <Container>
            <ul>
                <li>
                    <Link href="/">
                        <StyledLink>
                            1
                        </StyledLink>

                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <StyledLink>
                            2
                        </StyledLink>

                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <StyledLink>
                            3
                        </StyledLink>

                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <StyledLink>
                            4
                        </StyledLink>

                    </Link>
                </li>
            </ul>
        </Container>
    );
};

export default Sidebar;
