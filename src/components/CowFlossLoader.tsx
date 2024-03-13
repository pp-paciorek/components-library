import { Box } from '@looker/components';

export const CowFloss = () => (
  <img
    width={'100%'}
    height={'85%'}
    style={{ paddingTop: '20%' }}
    src="https://s5.gifyu.com/images/SR3M7.gif"
    alt="cow-floss"
  />
);

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

export { CowFlossLoader };
