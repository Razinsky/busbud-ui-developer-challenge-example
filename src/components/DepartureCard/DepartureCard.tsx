// @ts-nocheck
import React from 'react';
import { createUseStyles } from 'react-jss'
import {OperatorLogo} from "../OperatorLogo/OperatorLogo";
import {AmenitiesList} from "./components/AmenitiesList/AmenitiesList";
import { IconLabel } from "../IconLabel/IconLabel";
import {RouteSegment} from "./components/RouteSegment/RouteSegment";
import { Icon } from "../Icon/Icon";
import { Chip } from "../Chip/Chip";
import {getTypesetStyles} from "../../utils/functions";
import {stylesConfig} from "../Chip/stylesConfig";
import * as t from "../../tokens/tokens";
import {PanelTop} from "./components/PanelTop/PanelTop";
import {DepartureMeta} from "./components/DeparutureMeta/DepartureMeta";
import {FareOptionsList} from "./components/FareOptionsList/FareOptionsList";
import {textTruncateMixin} from "../../utils/mixins";

const useStyles = createUseStyles({
  departureCard: (props) => ({
    minWidth: '16rem', // TODO: replace with token
    maxWidth: '32rem', // TODO: replace with token
    borderWidth: t.borderWidthSm,
    borderStyle: 'solid',
    borderColor: props.isPanelTopVisible
      ? t.borderPositiveOpaque
      : props.isPanelBottomVisible
        ? t.borderInformativeOpaque
        : t.borderTransparent,
    borderRadius: t.radiusXl,
    backgroundColor: props.isPanelTopVisible
      ? t.backgroundPositiveOpaque
      : props.isPanelBottomVisible && '#e6f6ff',
    boxShadow: t.shadowSubtleMd,
    overflow: 'hidden',
  }),
  departureCard__panelTop: {},
  departureCard__content: {},
  departureCard__FareOptionsList: {},
  content: (props) => ({
    display: 'grid',
    rowGap: '1.25rem', // TODO: replace with spaceStack token
    borderRadius: props.isPanelBottomVisible && 'inherit',
    backgroundColor: t.backgroundPrimaryOpaque,
    boxShadow: props.isPanelBottomVisible && t.shadowSubtleSm,
  }),
  content__header: {},
  content__body: {},
  content__footer: {},
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    columnGap: t.spaceInsetInlineSm,
    padding: `${t.spaceInsetMd} ${t.spaceInsetMd} 0 1.25rem`, // TODO: replace paddingLeft with token
  },
  header__logo: {
    flexShrink: 0,
    height: t.size3,
  },
  header__amenitiesList: {},
  body: {
    display: 'grid',
    gridTemplateColumns: '1.25fr 0.75fr 2fr',
    paddingLeft: '1.25rem', // TODO: replace with spaceInset tokens
    paddingRight: '0.75rem',
    columnGap: t.spaceInsetInlineMd
  },
  body__routeSegment: {},
  body__arrow: {
    fill: t.iconSecondary,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: t.spaceInsetInlineSm,
  },
  footer__departureMeta: {
    flexShrink: 0,
    paddingTop: t.spaceStackSm,
    paddingLeft: t.spaceInsetMd,
    paddingBottom: t.spaceInsetMd,
  },
  footer__optionsText: {
    paddingRight: t.spaceInsetLg,
    // paddingBottom: t.spaceInsetLg,
    color: t.textTertiaryOpaque,
    extend: [getTypesetStyles('label-md-bold'), textTruncateMixin],
  },
  footer__ctaSection: {
    paddingRight: t.spaceInsetSm,
    paddingBottom: t.spaceInsetSm,
  },
  footer__chip: {},
})

interface DepartureCardProps {
  data: Object;
  isSummary?: boolean;
}

export const DepartureCard = ({
  data,
  isSummary = false,
  ...restProps
}: DepartureCardProps) => {
  const isFastest = data.isFastest;
  const isOnlyOneFareOption = data.fareOptions.length == 1;
  const isPanelTopVisible = isFastest && !isSummary;
  const isPanelBottomVisible = !isSummary && !isOnlyOneFareOption;
  const operatorLogo = data.operator.logo;
  const operatorName = data.operator.name;
  const amenities = data.vehicle.amenities;
  const routeSegmentOrigin = data.routeSegmentOrigin;
  const routeSegmentDestination = data.routeSegmentDestination;
  const fareOptionsArray = data.fareOptions;
  const departureMetaData = {
    vehicleType: data.vehicle.type,
    travelDuration: data.travelDuration,
    passengerNumber: data.passengerNumber,
  };

  const classes = useStyles({isPanelTopVisible, isPanelBottomVisible});

  let ctaContent;

  // TODO: can be optimized in more elegant way
  if (isSummary) {
    ctaContent = (
      <div
        className={classes.footer__ctaSection}>

        <Chip
          variant='subtle'
          color='neutral'
          size='lg'
          iconEnd={<Icon name='chevronRight' />}
          className={classes.footer__button}>
          Itinerary
        </Chip>
      </div>
    );
  } else if (isOnlyOneFareOption) {
    ctaContent = (
      <div
        className={classes.footer__ctaSection}>
        <Chip
          size='lg'
          iconEnd={<Icon name='chevronRight' />}
          className={classes.footer__button}>
          {data.fareOptions[0].price}
        </Chip>
      </div>
    );
  } else {
    ctaContent = (
      <div className={classes.footer__optionsText}>
        Multiple options:
      </div>
    );
  }

  return (
    <article
      className={classes.departureCard} {...restProps}>

      {/* panel top */}
      {isPanelTopVisible && (
        <PanelTop
          className={classes.departureCard__panelTop} />
      )}

      {/* content */}
      <div
        className={`${classes.departureCard__content}
        ${classes.content}`}>

        {/* header */}
        <div
          className={`${classes.content__header} ${classes.header}`}>

          <OperatorLogo
            src={operatorLogo}
            alt={operatorName}
            title={operatorName}
            className={classes.header__logo} />

          <AmenitiesList
            items={amenities}
            className={classes.header__amenitiesList} />
        </div>

        {/* body */}
        <div
          className={`${classes.content__body} ${classes.body}`}>

          <RouteSegment
            data={routeSegmentOrigin}
            isSummary={isSummary}
            className={classes.body__routeSegment} />

          <svg
            width="36" height="20" viewBox="0 0 36 20"
            className={classes.body__arrow}>
            <path
              d="M30.3431 4L35.7071 9.29396C36.0976 9.68448 36.0976 10.3176 35.7071 10.7082L30.3431 16L29 14.6579L32.66 11.0011H18V9.00107H32.66L29 5.34421L30.3431 4ZM2 9H0V11H2V9ZM4 9H8V11H4V9ZM16 9H10V11H16V9Z" />
          </svg>

          <RouteSegment
            data={routeSegmentDestination}
            isSummary={isSummary}
            className={classes.body__routeSegment} />
        </div>

        {/* footer */}
        <div
          className={`${classes.content__footer} ${classes.footer}`}>

          <DepartureMeta
            data={departureMetaData}
            isSummary={isSummary}
            className={classes.footer__departureMeta} />

          {ctaContent}
        </div>
      </div>

      {isPanelBottomVisible && (
        <FareOptionsList
          data={fareOptionsArray}
          className={classes.departureCard__FareOptionsList} />
      )}
    </article>
  );
};
