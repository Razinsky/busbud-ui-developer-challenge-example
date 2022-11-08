// @ts-nocheck
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DepartureCard } from '../components/DepartureCard/DepartureCard';
import {departureCardData, departureCardFastestData, departureCardSeveralFaresData} from "./data/data";

export default {
  title: 'Example/DepartureCard',
  component: DepartureCard,
  argTypes: {
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof DepartureCard> = (args) => {
  return (
    <DepartureCard {...args} />
  )
};

export const Sellable = Template.bind({});

Sellable.args = {
  ...Sellable.args,
  data: departureCardData,
};

export const Summary = Template.bind({});

Summary.args = {
  ...Summary.args,
  data: departureCardData,
  isSummary: true,
};

export const IsFastest = Template.bind({});

IsFastest.args = {
  ...IsFastest.args,
  data: departureCardFastestData,
};

export const HasSeveralFareOptions = Template.bind({});

HasSeveralFareOptions.args = {
  ...HasSeveralFareOptions.args,
  data: departureCardSeveralFaresData,
};
