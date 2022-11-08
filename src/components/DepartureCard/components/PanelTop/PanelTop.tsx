// @ts-nocheck
import React from 'react';
import {Icon} from "../../../Icon/Icon";
import {createUseStyles} from "react-jss";
import * as t from "../../../../tokens/tokens";
import {getTypesetStyles} from "../../../../utils/functions";

const useStyles = createUseStyles({
  panelTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: t.spaceInsetInlineXxs,
    padding: `${t.spaceInsetSm} 0`,
    backgroundColor: t.backgroundPositiveOpaque,
  },
  panelTop__icon: {
    flexShrink: 0,
    color: t.iconPositive,
  },
  panelTop__text: {
    flexShrink: 0,
    color: '#376556', // TODO: replace with token
    extend: getTypesetStyles('label-sm-bold'),
  },
})

export const PanelTop = ({
  className,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <div
      className={`${classes.panelTop} ${className}`}
      {...otherProps}>
      <Icon
        name='lightning'
        size='sm'
        className={classes.panelTop__icon} />
      <div
        className={classes.panelTop__text}>
        Fastest
      </div>
    </div>
  );
};
