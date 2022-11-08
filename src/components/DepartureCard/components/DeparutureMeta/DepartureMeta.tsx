// @ts-nocheck
import React from 'react';
import {Icon} from "../../../Icon/Icon";
import {createUseStyles} from "react-jss";
import * as t from "../../../../tokens/tokens";
import {getTypesetStyles} from "../../../../utils/functions";
import {IconLabel} from "../../../IconLabel/IconLabel";

const useStyles = createUseStyles({
  departureMeta: {
    display: 'flex',
    alignItems: 'center',
    columnGap: t.spaceInsetInlineSm,
  },
  departureMeta__item: {},
})

interface DepartureMetaProps {
  data: Object;
  isSummary?: boolean;
}

export const DepartureMeta = ({
  data,
  isSummary = 'false',
  className,
  ...otherProps
}: DepartureMetaProps) => {
  const classes = useStyles();

  const vehicleTypeName = data.vehicleType.name;
  const vehicleTypeIcon = data.vehicleType.icon;
  const travelDuration = data.travelDuration;
  const passengerNumber = data.passengerNumber;

  return (
    <div
      className={`${classes.departureMeta} ${className}`}>
      <IconLabel
        icon={vehicleTypeIcon}
        text={vehicleTypeName}
        className={classes.departureMeta__item}
      />
      <IconLabel
        icon='clock'
        text={travelDuration}
        className={classes.departureMeta__item}
      />
      {isSummary && (
        <IconLabel
          icon='users'
          text={passengerNumber}
          className={classes.departureMeta__item}
        />
      )}
    </div>
  );
};
