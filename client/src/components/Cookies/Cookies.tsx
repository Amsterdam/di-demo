import React from 'react';
import ReactMarkDown from 'react-markdown';
import { Accordion } from '@amsterdam/asc-ui';
import * as AscLocal from '@components/LocalAsc/LocalAsc';
import PageTemplate from '@components/PageTemplate/PageTemplate';
import BreadCrumbs from '@components/BreadCrumbs';
import ContentBlock from '@components/ContentBlock/ContentBlock';
import { SkipLinkEntry } from '@components/SkipLink/SkipLink';
import { useContent } from '@services/ContentProvider';

export interface IProps {}

const Cookies: React.FC<IProps> = () => {
    const content = useContent();

    return (
        <PageTemplate>
            <ContentBlock>
                <ReactMarkDown
                    source={content.cookies.breadcrumbs}
                    renderers={{ list: BreadCrumbs, listItem: BreadCrumbs.Item, link: AscLocal.MarkDownToLink }}
                />
                {SkipLinkEntry}
                <ReactMarkDown
                    source={content.cookies.intro}
                    renderers={{ paragraph: AscLocal.Paragraph, list: AscLocal.UL }}
                />
                <AscLocal.AccordionContainer>
                    <Accordion title={content.cookies.explanation.title}>
                        <ReactMarkDown
                            source={content.cookies.explanation.body}
                            renderers={{ heading: AscLocal.H4, paragraph: AscLocal.Paragraph, list: AscLocal.UL }}
                        />
                    </Accordion>
                </AscLocal.AccordionContainer>
                <ReactMarkDown
                    source={content.cookies.list}
                    renderers={{ heading: AscLocal.H4, paragraph: AscLocal.Paragraph, list: AscLocal.UL }}
                />
                <AscLocal.AccordionContainer>
                    <Accordion title={content.cookies.delete.title}>
                        <ReactMarkDown
                            source={content.cookies.delete.body}
                            renderers={{
                                heading: AscLocal.H4,
                                paragraph: AscLocal.Paragraph,
                                list: AscLocal.UL,
                                link: AscLocal.InlineLink
                            }}
                        />
                    </Accordion>
                </AscLocal.AccordionContainer>
                <ReactMarkDown
                    source={content.cookies.outro}
                    renderers={{ heading: AscLocal.H4, paragraph: AscLocal.Paragraph, link: AscLocal.InlineLink }}
                />
            </ContentBlock>
        </PageTemplate>
    );
};

export default Cookies;
