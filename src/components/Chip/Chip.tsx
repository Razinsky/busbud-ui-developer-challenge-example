// @ts-nocheck
import React, {ReactElement, ReactNode} from 'react';
import * as t from '../../tokens/tokens';
import { createUseStyles } from 'react-jss'
import { getTypesetStyles } from "../../utils/functions";
import { stylesConfig } from "./stylesConfig";

const borderWidth = stylesConfig.borderWidth;
const sizes = stylesConfig.sizes;
const variants = stylesConfig.variants;

const useStyles = createUseStyles({
  chip: (props) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: t.spaceInsetInlineXxs,
    minHeight: sizes[props.size].minHeight,
    padding: `
      calc(${sizes[props.size].paddingV} - ${borderWidth})
      calc(${sizes[props.size].paddingH} - ${borderWidth})
    `,
    border: `${borderWidth} solid ${variants[props.variant][props.color].borderColor}`,
    borderRadius: t.radiusPill,
    textAlign: 'center',
    backgroundColor: variants[props.variant][props.color].backgroundColor,
    backgroundImage: 'none',
    outline: 'none', // TODO: remove after adding focus-visible
    userSelect: 'none',
    cursor: 'pointer',
  }),
  chip__text: (props) => ({
    color: variants[props.variant][props.color].textColor,
    extend: getTypesetStyles(sizes[props.size].typeset),
  }),
  chip__icon: (props) => ({
    width: sizes[props.size].iconSize,
    height: sizes[props.size].iconSize,
    '& svg': {
      width: '100%', // not an elegant solution, we could change the Icon's `size` prop instead
      height: '100%',
      color: variants[props.variant][props.color].iconColor,
    }
  }),
  chip__iconStart: (props) => ({
    marginLeft: `calc(${sizes[props.size].iconCompensationShift} * -1)`,
  }),
  chip__iconEnd: (props) => ({
    marginRight: `calc(${sizes[props.size].iconCompensationShift} * -1)`,
  }),
})

interface ChipProps {
  variant?: keyof typeof variants;
  color?: 'blue' | 'green' | 'orange' | 'yellow' | 'red' | 'white' | 'teal' | 'neutral'; // TODO: add a separate object
  size?: keyof typeof sizes;
  onClick?: () => void;
  iconStart?: ReactElement;
  iconEnd?: ReactElement;
  children?: ReactNode;
}

export const Chip = ({
  variant = 'default',
  color = 'blue',
  size = 'md',
  iconStart,
  iconEnd,
  className,
  children,
  ...otherProps
}: ChipProps) => {
  const classes = useStyles({variant, color, size});
  return (
    // TODO: add ability to make it as link
    <button
      type="button"
      className={`${classes.chip} ${className}`}
      {...otherProps}>
      {iconStart && (
        <span className={`${classes.chip__icon} ${classes.chip__iconStart}`}>
          {iconStart}
        </span>
      )}
      <span
        className={classes.chip__text}>
        {children}
      </span>
      {iconEnd && (
        <span className={`${classes.chip__icon} ${classes.chip__iconEnd}`}>
          {iconEnd}
        </span>
      )}
    </button>
  );
};
