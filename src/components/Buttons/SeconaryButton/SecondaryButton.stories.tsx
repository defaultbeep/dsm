import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StoryArea from '../../../utilities/StoryArea/StoryArea';
import SecondaryButton from './SecondaryButton';

storiesOf('Components/Buttons/SecondaryButton', module)
  .add('with text', () => (
    <StoryArea>
      <SecondaryButton>Edit</SecondaryButton>
    </StoryArea>
  ));
