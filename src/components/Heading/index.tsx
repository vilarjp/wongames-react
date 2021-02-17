import React from 'react';

import * as SC from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
};

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
}: HeadingProps) => {
  return (
    <SC.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </SC.Wrapper>
  );
};

export default Heading;
