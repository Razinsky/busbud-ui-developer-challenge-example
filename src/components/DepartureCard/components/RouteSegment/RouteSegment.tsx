// @ts-nocheck
import React from 'react';
import { Icon } from "../../../Icon/Icon";
import { createUseStyles } from "react-jss";
import * as t from "../../../../tokens/tokens";
import { getTypesetStyles } from "../../../../utils/functions";
import { AmenitiesList } from "../AmenitiesList/AmenitiesList";

const useStyles = createUseStyles({
  routeSegment: {},
  routeSegment__date: {
    display: 'grid',
    rowGap: t.spaceStackXxs,
  },
  routeSegment__dateTime: (props) => ({
    display: 'block',
    color: t.textPrimaryOpaque,
    extend: getTypesetStyles(props.isSummary ? 'label-xl-regular' : 'label-xl-bold'),
  }),
  routeSegment__dateDay: {
    display: 'block',
    color: t.textTertiaryOpaque,
    extend: getTypesetStyles('label-md-regular'),
  },
  routeSegment__location: (props) => ({
    display: 'grid',
    rowGap: t.spaceStackXxs,
    marginTop: props.isSummary ? t.spaceStackSm : t.spaceStackXxs,
  }),
  routeSegment__locationPlace: (props) => ({
    color: t.textSecondaryOpaque,
    overflowWrap: 'anywhere',
    extend: getTypesetStyles(props.isSummary ? 'label-md-bold' : 'label-lg-regular'),
  }),
  routeSegment__locationCity: {
    color: t.textTertiaryOpaque,
    overflowWrap: 'anywhere',
    extend: getTypesetStyles('label-xs-bold'),
  },
  routeSegment__locationMapLink: {
    color: t.textLinkOpaque,
    extend: getTypesetStyles('label-md-bold'),
  },
})

interface RouteSegmentProps {
  data: Object;
  isSummary?: boolean,
}

export const RouteSegment = ({
  data,
  isSummary = false,
  className,
  ...restProps
}: RouteSegmentProps) => {
  const classes = useStyles({ isSummary });

  const time = data.date.time;
  const day = data.date.day;
  const place = data.location.place;
  const city = data.location.city;
  const mapLink = data.location.mapLink;

  return (
    <div
      className={`${classes.routeSegment} ${className}`}
      {...restProps}>

      {/* time */}
      <time
        className={classes.routeSegment__date}>
        <span
          className={classes.routeSegment__dateTime}>
          {time}
        </span>

        {isSummary && (
          <span
            className={classes.routeSegment__dateDay}>
            {day}
          </span>
        )}
      </time>

      {/* location */}
      <div
        className={classes.routeSegment__location}>
        <div
          className={classes.routeSegment__locationPlace}>
          {place}
        </div>
        <div
          className={classes.routeSegment__locationCity}>
          {city}
        </div>
        <a
          href={mapLink}
          className={classes.routeSegment__locationMapLink}>
          Map
        </a>
      </div>
    </div>
  );
};
