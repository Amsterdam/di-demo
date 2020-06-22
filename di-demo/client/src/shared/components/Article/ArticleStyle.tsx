import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, themeColor } from '@datapunt/asc-ui';
import styled from '@datapunt/asc-core';
import Article, { Props } from './Article';

const ArticleStyle = styled(Article)`
  a {
    color: ${themeColor('tint', 'level7')};
    text-decoration: none;
  }
`;

export default ArticleStyle;
