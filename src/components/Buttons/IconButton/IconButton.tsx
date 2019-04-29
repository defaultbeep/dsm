import * as React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import Icon from '../../Icon/Icon';

const BaseIconButton = ({
  className,
  children,
  tooltip,
  icon,
}: any) => {
  return (
    <Button className={className}>
      <Icon icon={icon} />
      {children}
      {tooltip && (tooltip.length <= 13) && <div data-tooltip-small>{tooltip}</div>}
      {tooltip && (tooltip.length > 13) && <div data-tooltip-large>{tooltip}</div>}
    </Button>
  );
};

const IconButton = styled(BaseIconButton)`
  position: relative;

  div {
    visibility: hidden;
    position: absolute;
    top: 120%;
    left: calc(50% - 64px); 
    background: black;
    color: white;
    width: 120px;
    padding: 4px;
    border-radius: 2px;
  }

  div[data-tooltip-large] {
    width: 200px;
    left: calc(50% - 104px);
  }

  &:hover div {
    visibility: visible;
  }

  &:hover div:after {
    position: absolute;
    left: 50%;
    margin-left: -5px;
    width: 0;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: " ";
    font-size: 0;
    line-height: 0;
    border-bottom: 5px solid #000;
    bottom: 100%;
  }
`;

export default IconButton;
