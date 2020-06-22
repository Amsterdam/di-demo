import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, themeColor } from '@datapunt/asc-ui';
import styled from '@datapunt/asc-core';
import Article from './Article';

const ArticleStyle: any = styled(Article)`
  a {
    color: ${themeColor('tint', 'level7')};
    text-decoration: none;
  }
`;

export default ArticleStyle;
