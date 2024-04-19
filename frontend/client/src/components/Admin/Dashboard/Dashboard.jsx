import React from 'react'
import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import cursor from '../../../assets/images/cursor.png'
import Sidebar from '../Sidebar'
import { Progress } from '@chakra-ui/progress'
import { HStack } from '@chakra-ui/layout'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { ContinentPieChart, CourseTypePieChart, DoughnutChart,LineChart, TopicPieChart } from './Chart.jsx'

function Dashboard() {
  const Databox = ({ title, qty, qtyPercentage, profit }) => (
    
      <Box w={["full","20%"]} boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
      p="8"
    borderRadius={'lg'}>
      <Text children={title} />

<HStack spacing={'6'}>
  <Text fontSize={'2xl'} fontWeight="bold" children={qty} />

  <HStack>
    <Text children={`${qtyPercentage}%`} />
    {profit ? (
      <RiArrowUpLine color="green" />
    ) : (
      <RiArrowDownLine color="red" />
    )}
  </HStack>
</HStack>
<Text opacity={0.6} children={'Since Last Month'} />



      </Box>
  )


  const Bar = ({ title, value, profit }) => (
    <Box py="4" px={['0', '20']}>
      <Heading size="sm" children={title} mb="2" />
  
      <HStack w="full" alignItems={'center'}>
        <Text children={profit ? '0%' : `-${value}%`} />
  
        <Progress w="full" value={profit ? value : 0} colorScheme="purple" />
        <Text children={`${value > 100 ? value : 100}%`} />
      </HStack>
    </Box>
  );
  


  return (
    <>
     <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
    
        <Box boxSizing="border-box" py="16" px={['4', '0']}>
          <Text
            textAlign={'center'}
            opacity={0.5}
            children={`Last change was on ${
              String(new Date()).split('G')[0]
            }`}
          />

          <Heading
            children="Dashboard"
            ml={['0', '16']}
            mb="16"
            textAlign={['center', 'left']}
          />

          <Stack
            direction={['column', 'row']}
            minH="24"
            justifyContent={'space-evenly'}
          >
            <Databox
              title="Views"
              qty={200}
              qtyPercentage={30}
              profit={true}
            />
            <Databox
              title="Users"
              qty={500}
              qtyPercentage={78}
              profit={true}
            />
            <Databox
              title="Subscription"
              qty={50}
              qtyPercentage={20}
              profit={false}
            />
          </Stack>

          <Box
            m={['0', '16']}
            borderRadius="lg"
            p={['0', '16']}
            mt={['4', '16']}
            boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
          >
            <Heading
              textAlign={['center', 'left']}
              size="md"
              children="Views Graph"
              pt={['8', '0']}
              ml={['0', '16']}
            />

            <LineChart  />
          </Box>

          <Grid templateColumns={['1fr', '2fr 1fr']}>
            <Box p="4">
              <Heading
                textAlign={['center', 'left']}
                size="md"
                children="Progress Bar"
                my="8"
                ml={['0', '16']}
              />

              <Box>
                <Bar
                  profit={true}
                  title="Views"
                  value={30}
                />
                <Bar
                  profit={true}
                  title="Users"
                  value={78}
                />
                <Bar
                  profit={true}
                  title="Subscription"
                  value={50}
                />
              </Box>
              <TopicPieChart/>
            </Box>

            <Box p={['0', '16']} boxSizing="border-box" py="4">
              <Heading textAlign={'center'} size="md" mb="4" children="Users" />

              <DoughnutChart
               
              />
            <Box p={['0', '16']} boxSizing="border-box" py="4">

            <ContinentPieChart/>
               
              </Box>  
            <Box p={['0', '16']} boxSizing="border-box" py="4">

            <CourseTypePieChart/>
            <CourseTypePieChart/>
               
              </Box>  
              
            </Box>
          </Grid>
        </Box>
  

      <Sidebar />
    </Grid>
    
    </>
  )
}

export default Dashboard