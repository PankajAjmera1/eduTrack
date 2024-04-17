import React from 'react'
import { Box, Grid, Heading, Table, TableCaption, Thead, Tr, Th, Tbody } from '@chakra-ui/react'
import cursor from '../../../assets/images/cursor.png'
import { TableContainer } from '@chakra-ui/react'
import { Td } from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import Sidebar  from '../Sidebar.jsx'

const users = [{
  _id: '1',
  name: 'John Doe',
  role: 'admin',
  email: 'a@gmail.com',
  subscription: {
    status: 'active',
  }
  },
  {
  _id: '2',
  name: 'Jane ',
  role: 'user',
  email: 'fds@gmail.comm',
  subscription: {
    status: 'inactive',
  },
 


  }


]

const updateHandler = (userId) => {
  console.log(userId);


}
const deleteButtonHandler = (userId) => {
  console.log(userId);
}

function Users() {
  return (
   <>
   
   <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '16']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All available users in the database</TableCaption>

            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>

            <Tbody>
              {users &&
                users.map(item => (
                  <Row
                  updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler}
                   item={item} key={item._id}
                    
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Sidebar />
    </Grid>
   </>
  )
}

export default Users


function Row({ item ,updateHandler,deleteButtonHandler}) {
    return (
      <Tr>
        <Td>#{item._id}</Td>
        <Td>{item.name}</Td>
        <Td>{item.email}</Td>
        <Td>{item.role}</Td>
        <Td>
          {item.subscription && item.subscription.status === 'active'
            ? 'Active'
            : 'Not Active'}
        </Td>
  
        <Td isNumeric>
          <HStack justifyContent={'flex-end'}>
            <Button
              onClick={() => updateHandler(item._id)}
              variant={'outline'}
              color="purple.500"
            >
              Change Role
            </Button>
  
            <Button
              onClick={() => deleteButtonHandler(item._id)}
              color={'purple.600'}
            >
              <RiDeleteBin7Fill />
            </Button>
          </HStack>
        </Td>
      </Tr>
    );
  }