import React from 'react';

import { Diag } from './Diag';
import { action } from '@storybook/addon-actions';

import Graph from '../components/Graph/Graph';
export default {
  title: 'Diag',
  component: Diag,

};

const Template = (args) => <Graph {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: ''
};


