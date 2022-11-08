import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon } from '../components/Icon/Icon';

export default {
  title: 'Example/Icon',
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  ...Playground.args,
  name: 'wifi',
  size: 'md',
};

