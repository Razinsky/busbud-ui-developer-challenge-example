// @ts-nocheck
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ICONS } from '../tokens/icons';
import { Chip } from '../components/Chip/Chip';
import { Icon } from '../components/Icon/Icon';

const iconsList = [null, ...Object.keys(ICONS)];

export default {
  title: 'Example/Chip',
  component: Chip,
  argTypes: {
    iconStart: {
      control: 'select',
      options: iconsList,
    },
    iconEnd: {
      control: 'select',
      options: iconsList,
    }
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => {
  const {iconStart, iconEnd, ...restArgs} = args;

  return (
    <Chip
      iconStart={iconStart && <Icon name={iconStart} />}
      iconEnd={iconEnd && <Icon name={iconEnd} />}
      {...restArgs}
    />
  )
};

export const Playground = Template.bind({});

Playground.args = {
  ...Playground.args,
  variant: 'default',
  size: 'md',
  color: 'blue',
  iconStart: null,
  iconEnd: null,
  children: 'Chip',
};

