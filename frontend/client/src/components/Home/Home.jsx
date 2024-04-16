import React from 'react'
import { Stack, VStack, Text, Heading, Button, Image, Box, HStack } from '@chakra-ui/react'
import "./home.css"
import { Link } from 'react-router-dom'
import { CgGoogle, CgYoutube } from 'react-icons/cg'
import { SiCoursera, SiUdemy } from 'react-icons/si'
import { DiAws } from 'react-icons/di'
import introVideo from '../../assets/videos/trailer.mp4';


function Home() {
    return (
        <>
            <section className='home'>
                <div className='container'>
                    <Stack
                        direction={["column", "row"]}
                        height="100%"
                        justify={['center', 'space-between']}
                        align="center"
                        spacing={['16', '56']}
                    >
                        <VStack width={"full"} alignItems={["center", "flex-end"]} spacing={"8"}>
                            <Heading children=" Welcome to the EduTrack !!" size={'xl'} />
                            <Text
                                fontSize={'2xl'}
                                fontFamily="cursive"
                                textAlign={['center', 'left']}
                                children="The best place to buy courses online" />
                            <Link to="/courses" >
                                <Button size="lg" colorScheme='yellow'>
                                    Explore Courses </Button>
                            </Link>



                        </VStack>

                        <Image
                            className="vector-graphics"
                            boxSize={"md"} src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" objectFit={"contain"} />

                    </Stack>

                </div>
                <Box padding={'8'} bg="blackAlpha.800">
                    <Heading textAlign={'center'} fontFamily={"body"} color={"yellow.400"} children="Our Courses" />

                    <HStack
                        className="brandsBanner"
                        justifyContent={'space-evenly'}
                        marginTop="4"
                       
                    >
                        <CgGoogle  cursor="pointer"/>
                        <CgYoutube   cursor="pointer"/>
                        <SiCoursera   cursor="pointer"/>
                        <SiUdemy  cursor="pointer" />
                        <DiAws  cursor="pointer" />
                    </HStack>
                </Box>
                <div className="container2">
                    <video
                        controls
                        controlsList="nodownload nofullscreen noremoteplayback"
                        disablePictureInPicture
                        disableRemotePlayback
                        src={introVideo}
        ></video>
        </div>

        </section >
   
    </>
    
  )
}

export default Home