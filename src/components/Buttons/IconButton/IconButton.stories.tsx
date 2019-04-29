import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StoryArea from '../../../utilities/StoryArea/StoryArea';
import IconButton from './IconButton';

storiesOf('Components/Buttons/IconButton', module)
  .add('With text', () => (
    <StoryArea>
      <IconButton icon="Delete">Delete</IconButton>
    </StoryArea>
  ))
  .add('With no text', () => (
    <StoryArea>
      <IconButton icon="Delete" />
    </StoryArea>
  ))
  .add('With tooltip', () => (
    <StoryArea>
      <IconButton tooltip="Delete record" icon="Delete" alt="Delete record" />
    </StoryArea>
  ))
  .add('Add button', () => (
    <StoryArea>
      <IconButton tooltip="Add record" icon="Add" alt="Add record" />
    </StoryArea>
  ))
  .add('Delete button', () => (
    <StoryArea>
      <IconButton tooltip="Delete record" icon="Delete" alt="Delete record" />
    </StoryArea>
  ))
  .add('Search button', () => (
    <StoryArea>
      <IconButton tooltip="Search for record in database" icon="Search" alt="Search record" />
    </StoryArea>
  ));
