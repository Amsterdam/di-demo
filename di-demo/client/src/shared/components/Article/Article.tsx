import React from 'react';
import styled from '@datapunt/asc-core';
import { Link } from 'react-router-dom';
import { Heading } from '@datapunt/asc-ui';

export interface Props {
  imageSrc: string;
  title: string;
  text: string;
  href: string;
  className: string;
}

const StyledH3 = styled(Heading)`
  margin-bottom: 8px;
`;

const Article: React.FC<Props> = ({
  imageSrc,
  title,
  children,
  href,
  className,
}) => {
  return (
    <section className={className}>
      <Link to={href}>
        <img src={imageSrc} alt=""></img>
        <StyledH3 $as="h3">{title}</StyledH3>
        <div>{children}</div>
      </Link>
    </section>
  );
};

export default Article;
