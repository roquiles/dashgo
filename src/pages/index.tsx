import { Button, Flex, Input, Stack, FormLabel } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            size="lg"
            _hover={{
              bgColor: "gray.900",
            }}
          />
          <Input
            name="password"
            type="password"
            focusBorderColor="pink.500"
            bgColor="gray.900"
            variant="filled"
            size="lg"
            _hover={{
              bgColor: "gray.900",
            }}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
