// @ts-nocheck
import React from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
  logo: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
})

interface OperatorLogoProps {
  src: string;
  alt: string;
  title?: string;
}

export const OperatorLogo = ({
  src,
  alt,
  title,
  className,
  ...restProps
}: OperatorLogoProps) => {
  const classes = useStyles();

  return (
    <img
      src={src}
      alt={alt}
      title={title}
      className={`${classes.logo} ${className}`}
      {...restProps} />
  );
};
