import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import * as AscLocal from '@components/LocalAsc/LocalAsc';
import { breakpoint, themeColor, themeSpacing } from '@datapunt/asc-ui';
import content from '@services/content';

interface IProps {}

const WhyIRMA: React.FC<IProps> = () => {
    return (
        <Container>
            <ReactMarkdown
                source={content.home.sidebar.box}
                renderers={{
                    heading: AscLocal.H2,
                    paragraph: AscLocal.StrongParagraph,
                    link: StyledLinkWithChevron,
                    image: IRMALogo
                }}
            />
        </Container>
    );
};

const Container = styled.div`
    background-color: ${themeColor('tint', 'level2')};
    padding: ${themeSpacing(4)};
    max-width: 220px;

    @media ${breakpoint('min-width', 'laptop')} {
        align-self: flex-end;
    }

    p {
        display: flex;
        flex-direction: column;
    }
`;

const IRMALogo = styled.img`
    width: 82px;
    margin: ${themeSpacing(1)} 0 ${themeSpacing(4)} ${themeSpacing(6)};
`;

const StyledLinkWithChevron = styled(AscLocal.LinkWithChevron)`
    text-decoration: underline;
    font-size: 16px;
    align-items: center;

    &&& {
        span:first-child {
            width: 20px;
            height: 20px;
        }
        svg {
            width: 20px;
            height: 20px;
            path {
                fill: ${themeColor('secondary', 'main')};
            }
        }
    }
`;

export default WhyIRMA;
