import React from 'react';

import { TotalCaas } from './TotalCas';
import TotalCas from '../components/TotalCas/TotalCas';




export default {
  title: 'Example/TotalCaas',
  component: TotalCaas , 
  propsTypes: {
   
    
  },
  
};

const Template = (  props) => <TotalCas {...props} />;

export const LoggedIn = Template.bind({});

LoggedIn.args = {
  primary : true, label : 'Button' , 
 
};

