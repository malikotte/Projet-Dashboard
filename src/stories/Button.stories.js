import React from 'react';

import { Button } from './Button';
import { action } from '@storybook/addon-actions';

import Graph from '../components/Graph/Graph';
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Graph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: ''
};


