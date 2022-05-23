import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Roberta Quiles</Text>
          <Text color="gray.300" fontSize="small">
            roberta_btg@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Roberta Quiles"
        src="https://github.com/roquiles.png"
      />
    </Flex>
  );
}
