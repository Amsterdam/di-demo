import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Row, themeSpacing, themeColor } from '@amsterdam/asc-ui';
import AppRoutes from '@app/AppRoutes';
import * as AscLocal from '@components/LocalAsc/LocalAsc';
import { Alert as AlertIcon } from '@amsterdam/asc-assets';
import Footer from '@components/Footer/Footer';
import { SkipLink } from '@components/SkipLink/SkipLink';
import { useContent } from '@services/ContentProvider';

interface IProps {
    className?: string;
    hideTitle?: boolean;
}

declare global {
    interface Document {
        documentMode?: Document;
    }
}

const isIE = !!document.documentMode;

const PageTemplate: React.FC<IProps> = ({ children, className, hideTitle }) => {
    const content = useContent();
    const location = useLocation();
    const title = hideTitle ? undefined : <div>{content.header.title}</div>;

    return (
        <StyledRow className={className}>
            <StyledSkipLink />
            <AscLocal.Header fullWidth={false} tall homeLink={content.header.homeLink} navigation={title} />
            <StyledColumn span={12}>
                <main>
                    {isIE && location.pathname !== AppRoutes.IE_SUPPORT.path && (
                        <AscLocal.Alert
                            color={AscLocal.AlertColor.ERROR}
                            icon={<AlertIcon />}
                            iconSize={22}
                            heading={content.ieSupport.errorAlert.heading}
                            content={content.ieSupport.errorAlert.content}
                            dataTestId="hasErrorAlert"
                        />
                    )}
                    {children}
                </main>
            </StyledColumn>
            <Footer />
        </StyledRow>
    );
};

const StyledSkipLink = styled(SkipLink)`
    position: fixed;
    top: ${themeSpacing(3)};
    left: 50%;
    z-index: 15;
`;

const StyledColumn = styled(AscLocal.Column)`
    margin: ${themeSpacing(5)} 0 ${themeSpacing(10)} 0;
    max-width: 940px;
`;

const StyledRow = styled(Row)`
    background-color: ${themeColor('tint', 'level1')};
    flex-direction: column;
    overflow-x: hidden;
`;

export default PageTemplate;
