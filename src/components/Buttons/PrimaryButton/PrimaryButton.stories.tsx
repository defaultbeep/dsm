import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StoryArea from '../../../utilities/StoryArea/StoryArea';
import PrimaryButton from './PrimaryButton';
import Icon from '../../Icon/Icon';

storiesOf('Components/Buttons/PrimaryButton', module)
  .add('with text', () => (
    <StoryArea>
      <PrimaryButton>Subscribe</PrimaryButton>
    </StoryArea>
  ))
  .add('with icon', () => (
    <StoryArea>
      <PrimaryButton>
        <Icon />
        Subscribe
      </PrimaryButton>
    </StoryArea>
  ));
