import { Box } from '@looker/components';
import React, { FC } from 'react';

const HorizontalDivider: FC = () => {
  return (
    <Box
      width={'100%'}
      height="1px"
      backgroundColor={'lightGrey'}
      marginY="u3"
    />
  );
};

export default HorizontalDivider;
