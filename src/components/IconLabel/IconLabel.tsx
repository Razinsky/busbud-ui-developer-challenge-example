// @ts-nocheck
import React from 'react';
import {Icon} from "../Icon/Icon";
import {createUseStyles} from "react-jss";
import * as t from "../../tokens/tokens";
import {getTypesetStyles} from "../../utils/functions";

const useStyles = createUseStyles({
  iconLabel: {
    display: 'flex',
    alignItems: 'center',
    columnGap: t.spaceInsetInlineXxs,
  },
  iconLabel__icon: {
    flexShrink: 0,
    color: t.iconPrimary,
  },
  iconLabel__text: {
    color: t.textSecondaryOpaque,
    extend: getTypesetStyles('label-md-regular'),
  },
})

// TODO: add isSingleLine / isTruncated option
interface IconLabelProps {
  icon: string;
  text: string;
}

export const IconLabel = ({
  icon,
  text,
  className,
  ...restProps
}: IconLabelProps) => {
  const classes = useStyles();

  return (
    <div
      className={`${classes.iconLabel} ${className}`}
      {...restProps}>
      <Icon
        name={icon}
        className={classes.iconLabel__icon}/>
      <span
        className={classes.iconLabel__text}>
        {text}
      </span>
    </div>
  );
};
