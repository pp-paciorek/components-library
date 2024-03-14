// @ts-nocheck
/* eslint-disable */
import { Box } from '@looker/components';

import CowFlossSvg from '!file-loader!../assets/cow-floss.svg';

const CowFloss = () => {
  return <object data={CowFlossSvg} />;
};

const CowFlossLoader = () => {
  return (
    <Box
      display={'flex'}
      width={'78vw'}
      height={'100%'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'absolute'}
      top={'0'}
      left={'22vw'}
    >
      <Box
        width={'204px'}
        borderRadius={'100px'}
        display={'flex'}
        justifyContent={'center'}
        backgroundColor={'white'}
      >
        <Box width={'124px'}>
          <CowFloss />
        </Box>
      </Box>
    </Box>
  );
};

export { CowFloss };
