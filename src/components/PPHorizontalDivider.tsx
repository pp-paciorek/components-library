import { Box } from '@looker/components';
import { FC } from 'react';
// import BBoy from '../assets/Audience_Marketplace.svg';

// import Logo4 from '../assets/test-anim-2.svg';
// import Logo3 from '../assets/test-animation.svg';
// import Logo3Url from '../assets/test-animation.svg?url';
// import Logo2 from '../assets/test-asset.svg';
// import { CowFloss } from './CowFlossLoader';
import { CowFloss } from './CowFlossLoader';

const PPHorizontalDivider: FC = () => {
  return (
    // <Box
    //   width={'100%'}
    //   height="1px"
    //   backgroundColor={'lightGrey'}
    //   marginY="u3"
    // />
    <Box>
      <CowFloss />
    </Box>
  );
};

export { PPHorizontalDivider };
