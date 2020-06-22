import { themeColor, themeSpacing } from '@datapunt/asc-ui';
import styled from '@datapunt/asc-core';
import Article from './Article';

const ArticleStyle = styled(Article)`
  a {
    color: ${themeColor('tint', 'level7')};
    text-decoration: none;

    img {
      width: 100%;
    }

    div {
      margin-bottom: ${themeSpacing(8)};
    }
  }
`;

export default ArticleStyle;
