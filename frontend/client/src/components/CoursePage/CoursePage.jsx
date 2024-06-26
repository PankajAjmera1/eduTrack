import React from 'react'
import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import introVideo from '../../assets/videos/trailer.mp4'


function CoursePage() {
  const [lectureNumber, setLectureNumber] = useState(0)

  const lectures = [
    {
    _id: '1',
    title: 'Introduction to React',
    description: 'This is a lecture on the basics of React',
    video : {
      url : 'explainer.mp4',
    }

    },
    {
    _id: '2',
    title: 'React Hooks',
    description: 'This is a lecture on React Hooks',
    video : {
      url : 'hooks.mp4',
    }

  
    },
    {
    _id: '3',
    title: 'React Router',
    description: 'This is a lecture on React Router',
    video : {
      url : 'router.mp4',
    }
  }

  ]
    
  return (
    <>
    
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      {lectures && lectures.length > 0 ? (
        <>
          <Box>
            <video
              width={'100%'}
              controls
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              src={introVideo}
            ></video>

            <Heading
              m="4"
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber].title
              }`}
            />

            <Heading m="4" children="Description" />
            <Text m="4" children={lectures[lectureNumber].description} />
          </Box>

          <VStack>
            {lectures.map((element, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={element._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}
              >
                <Text noOfLines={1}>
                  #{index + 1} {element.title}
                </Text>
              </button>
            ))}
          </VStack>
        </>
      ) : (
        <Heading children="No Lectures" />
      )}
    </Grid>
    </>
  )
}

export default CoursePage