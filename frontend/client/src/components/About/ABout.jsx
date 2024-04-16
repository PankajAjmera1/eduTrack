import React from 'react'

import { Container, Heading, Stack, Text, Button, HStack  ,VStack ,Avatar ,Box} from '@chakra-ui/react'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import introVideo from '../../assets/videos/trailer.mp4';

import termsAndCondition from '../../assets/docs/termsAndCondition.js'



function ABout() {
  return (
    <>
     <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />


      <CoFounder />
      <CoFounder1 />

      <TandC termsAndCondition={termsAndCondition} />

      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>


       
    </Container>
    </>
  )
}

export default ABout


const Founder = () => (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar
          src="https://images.pexels.com/photos/1416170/pexels-photo-1416170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          boxSize={['40', '48']}
        />
        <Text children="Founder" opacity={0.7} />
      </VStack>
  
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Pankaj Ajmera" size={['md', 'xl']} />
        <Text
          textAlign={['center', 'left']}
          children={`Hi, I am a full-stack developer at PhysicsWallah.
        Our mission is to provide quality content at reasonable price.`}
        />
      </VStack>
    </Stack>
  );

  const CoFounder = () => (
    <Stack direction={['column']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://images.pexels.com/photos/8471889/pexels-photo-8471889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        boxSize={['40', '48']}
      />
      <Text children="CO-Founder" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center']}>
      <Heading children="Sudhanshu Tripathi" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, I am a full-stack developer .`}
      />
    </VStack>
  </Stack>

  );
  const CoFounder1 = () => (
    <Stack direction={['column']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="https://images.pexels.com/photos/5905519/pexels-photo-5905519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        boxSize={['40', '48']}
      />
      <Text children="CO-Founder" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center']}>
      <Heading children="Apurv Saxena" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, I am a front-end Developer .`}
      />
    </VStack>
  </Stack>

  );



  const VideoPlayer = () => (
    <Box>
      <video
        autoPlay
        loop
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      ></video>
    </Box>
  );
  
  const TandC = ({ termsAndCondition }) => (
    <Box>
      <Heading
        size={'md'}
        children="Terms & Condition"
        textAlign={['center', 'left']}
        my="4"
      />
  
      <Box h="sm" p="4" overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {termsAndCondition}
        </Text>
        <Heading
          my="4"
          size={'xs'}
          children="Refund only applicable for cancellation within 7 days."
        />
      </Box>
    </Box>
  );