import React from 'react';

import { Header } from './Header';
import NbreCas from '../components/NbreCas/NbreCas';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <NbreCas {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  name: '',
};

