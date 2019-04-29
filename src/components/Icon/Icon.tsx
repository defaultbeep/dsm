import * as React from 'react';
import styled from 'styled-components';
import deleteSVG from './images/delete.svg';
import addSVG from './images/add.svg';
import lineSVG from './images/line.svg';
import searchSVG from './images/search.svg';

const BaseIcon = ({ className, icon, alt }: any) => {
  let image;

  switch (icon) {
    case 'Delete': image = deleteSVG; break;
    case 'Add': image = addSVG; break;
    case 'Search': image = searchSVG; break;
    default: image = lineSVG; break;
  }

  return (
    <img className={className} src={image} alt={alt} height="19" />
  );
};

const Icon = styled(BaseIcon)`
  position: relative;
  top: 2px;
`;

export default Icon;
