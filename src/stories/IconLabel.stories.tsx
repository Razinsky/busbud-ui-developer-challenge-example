// @ts-nocheck
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../components/Icon/Icon';
import {IconLabel} from "../components/IconLabel/IconLabel";
import {ICONS} from "../tokens/icons";

const iconsList = [...Object.keys(ICONS)];

export default {
  title: 'Example/IconLabel',
  component: IconLabel,
  argTypes: {
    icon: {
      control: 'select',
      options: iconsList,
    },
  },
} as ComponentMeta<typeof IconLabel>;

const Template: ComponentStory<typeof IconLabel> = (args) => <IconLabel {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  ...Playground.args,
  icon: 'clock',
  text: '4h 30m',
};

