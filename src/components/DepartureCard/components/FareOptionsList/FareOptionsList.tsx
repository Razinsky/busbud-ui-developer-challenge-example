// @ts-nocheck
import React from 'react';
import {Icon} from "../../../Icon/Icon";
import {createUseStyles} from "react-jss";
import * as t from "../../../../tokens/tokens";
import {getTypesetStyles} from "../../../../utils/functions";
import {textTruncateMixin} from "../../../../utils/mixins";
import {AmenitiesList} from "../AmenitiesList/AmenitiesList";
import {Chip} from "../../../Chip/Chip";

const useStyles = createUseStyles({
  fareOptionsList: {
    padding: `0 0 0 1.25rem`, // TODO: replace paddingRight with spaceInset token
    margin: 0,
    listStyle: 'none',
  },
  fareOptionsList__item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: t.spaceInsetInlineMd,
    padding: `${t.spaceInsetSm} ${t.spaceInsetSm} ${t.spaceInsetSm} 0`,
    '&:not(:first-child)': {
      borderTop: `${t.borderWidthSm} solid ${t.borderInformativeTransparent}`,
    }
  },
  fareOptionsList__type: {
    display: 'flex',
    alignItems: 'center',
    columnGap: t.spaceInsetInlineSm,
  },
  fareOptionsList__typeText: {
    color: t.textPrimaryOpaque,
    extend: [getTypesetStyles('label-lg-bold'), textTruncateMixin],
  },
  fareOptionsList__typeAmenitiesList: {
    flexShrink: 0,
  },
  fareOptionsList__button: {
    flexShrink: 0,
  }
})

interface FareOptionsListProps {
  data: Array;
}

export const FareOptionsList = ({
  data,
  className,
  ...otherProps
}) => {
  const classes = useStyles();

  return (
    <ul
      className={`${classes.fareOptionsList} ${className}`}
      {...otherProps}>

      {data.map((option, index) =>
        <li
          key={index}
          className={classes.fareOptionsList__item}>

          {/* type */}
          <div
            className={classes.fareOptionsList__type}>

            <div
              className={classes.fareOptionsList__typeText}>
              {option.type}
            </div>

            {option.amenities && (
              <AmenitiesList
                items={option.amenities}
                className={classes.fareOptionsList__typeAmenitiesList} />
            )}
          </div>

          {/* chip */}
          <Chip
            variant='subtle'
            size='lg'
            iconEnd={<Icon name='chevronRight' />}>
            {option.price}
          </Chip>
        </li>
      )}
    </ul>
  );
};
