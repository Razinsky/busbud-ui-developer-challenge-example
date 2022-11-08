// @ts-nocheck
import React from 'react';
import { createUseStyles } from 'react-jss';
import { ICONS } from '../../tokens/icons';
import { stylesConfig } from "./stylesConfig";
import { clsx } from 'clsx';

const sizes = stylesConfig.sizes;

const useStyles = createUseStyles({
  icon: (props) => ({
    width: sizes[props],
    height: sizes[props],
    fill: 'currentColor',
    verticalAlign: 'top', // TODO: add explanation
  }),
})

interface IconProps {
  name: keyof typeof ICONS,
  size?: keyof typeof sizes;
}

export const Icon = ({
  name,
  size = 'md',
  className,
  ...otherProps
}: IconProps) => {
  const classes = useStyles(size);
  const viewBox = ICONS[name].viewBox;
  const getPaths = () => ICONS[name].paths();

  return (
    <svg
      viewBox={viewBox}
      aria-hidden='true'
      className={`${classes.icon} ${className}`}
      {...otherProps}>
      {getPaths()}
    </svg>
  );
};
