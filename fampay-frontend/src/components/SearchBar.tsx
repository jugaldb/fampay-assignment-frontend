import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

export default function Searchbar() {
  const [value, setValue] = React.useState('')
  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => setValue(event.target.value)

  return (
    <>
    <Box padding={10}>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Can't find what you are looking for? Search here..."
        size='sm'
        // margin={10}
      />
      </Box>
    </>
  )
}