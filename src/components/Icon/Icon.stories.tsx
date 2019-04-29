import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';

storiesOf('Components/Icon', module)
  .add('Delete', () => (
    <Icon icon="Delete" />
  ))
  .add('Add', () => (
    <Icon icon="Add" />
  ))
  .add('Search', () => (
    <Icon icon="Search" />
  ));
