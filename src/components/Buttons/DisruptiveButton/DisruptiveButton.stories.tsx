import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StoryArea from '../../../utilities/StoryArea/StoryArea';
import SecondaryButton from './DisruptiveButton';

storiesOf('Components/Buttons/DisruptiveButton', module)
  .add('with text', () => (
    <StoryArea>
      <SecondaryButton>Edit</SecondaryButton>
    </StoryArea>
  ));
