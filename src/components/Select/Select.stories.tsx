import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from './Select';

import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Select', module)
  .add('default', () => (
    <Select
      label="label"
      value={{ label: "1" }}
      options={[{ label: "1" }, { label: "2" }, { label: "3" }]}
      onChange={action('change')}
    />
  ));
