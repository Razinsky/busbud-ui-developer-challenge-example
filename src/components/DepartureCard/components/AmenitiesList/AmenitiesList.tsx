// @ts-nocheck
import React from 'react';
import {Icon} from "../../../Icon/Icon";
import {createUseStyles} from "react-jss";
import * as t from "../../../../tokens/tokens";
import {getTypesetStyles} from "../../../../utils/functions";

const useStyles = createUseStyles({
  amenitiesList: {
    display: 'flex',
    alignItems: 'center',
    columnGap: t.spaceInsetInlineXxs,
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
  amenitiesList__item: {},
  amenitiesList__icon: {
    color: t.iconPrimary,
  },
  amenitiesList__icon_highlighted: {
    color: t.iconPositive,
  },
})

interface AmenitiesListProps {
  items;
}

export const AmenitiesList = ({
  items,
  className,
  ...restProps
}: AmenitiesListProps) => {
  const classes = useStyles();

  return (
    <ul
      aria-label="Amenities"
      className={`${classes.amenitiesList} ${className}`}
      {...restProps}
    >
      {items.map((item, index) =>
        <li
          key={index}
          title={item.name}
          aria-label={item.name}
          className={classes.amenitiesList__item}
        >
          <Icon
            name={item.icon}
            className={`
              ${classes.amenitiesList__icon}
              ${item.isHighlighted ? classes.amenitiesList__icon_highlighted : ''}
            `}
          />
        </li>
      )}
    </ul>
  );
};
