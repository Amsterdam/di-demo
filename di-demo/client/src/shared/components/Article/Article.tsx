import React from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '@datapunt/asc-ui';
import styled from '@datapunt/asc-core';

interface Props {
  imageSrc: string;
  title: string;
  text: string;
  href: string;
  className: string;
}

const Article: React.FC<Props> = ({
  imageSrc,
  title,
  children,
  href,
  className,
}) => {
  return (
    <div className={className}>
      <Link to={href}>
        <img src={imageSrc} alt=""></img>
        <Heading forwardedAs="h3">{title}</Heading>
        <div>{children}</div>
      </Link>
    </div>
  );
};

const StyledArticle = styled(Article)`
  a {
    color: black;
    text-decoration: none;
  }
`;

export default StyledArticle;
