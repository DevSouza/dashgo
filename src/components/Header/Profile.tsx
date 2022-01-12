import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Andre Souza</Text>
        <Text color="gray.300" fontSize="small">
          devsouza01@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Andre Souza" src="https://github.com/devsouza.png" />
    </Flex>
  );
}