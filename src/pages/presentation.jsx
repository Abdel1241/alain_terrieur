import { Box, Flex, Text, Heading, Spacer, Button, Link as ChakraLink, VStack, HStack, Divider } from "@chakra-ui/react";
import Link from 'next/link';

// Composant de la barre de navigation
function NavBar() {
    return (
        <Flex bg="white" p={5} shadow="xl">
            <Heading size="lg" fontWeight="semibold">
                <Link href="/" passHref>
                    <ChakraLink>Alain Terrieur</ChakraLink>
                </Link>
            </Heading>
            <Spacer />
            <Box>
                <Link href="/presentation" passHref>
                    <Button as={ChakraLink} mr={5} variant="outline">
                        Présentation
                    </Button>
                </Link>
                <Link href="/services" passHref>
                    <Button as={ChakraLink} variant="ghost">
                        Nos Services
                    </Button>
                </Link>
            </Box>
        </Flex>
    );
}

export default function Presentation() {
    return (
        <Box bg="gray.100" minH="100vh" p={10} >
            {/* Navigation */}
            <NavBar />

            {/* Main Content */}
            <VStack spacing={10} align="center" py={20}>
                <Heading as="h1" size="2xl">
                    Bienvenue chez Alain Terrieur
                </Heading>
                <Text fontSize="xl" maxW="container.md" textAlign="center">
                    Spécialisé dans la rénovation et la décoration intérieure, Alain Terrieur vous offre une expérience inégalée pour transformer votre espace. Explorez notre expertise et découvrez pourquoi nous sommes les meilleurs dans le métier.
                </Text>
                
                <Divider my={6} borderColor="gray.300" w="80%" />

                <Text fontSize="lg" maxW="container.sm" textAlign="center">
                    Notre mission est de donner vie à vos visions. Chaque espace raconte une histoire, et nous sommes là pour aider cette histoire à se dérouler avec éclat.
                </Text>

                {/* Contact Section */}
                <VStack spacing={5} mt={20} p={6} bg="white" shadow="lg" borderRadius="md" w="80%">
                    <Heading as="h2" size="xl">
                        Contactez-nous
                    </Heading>
                    <HStack spacing={5}>
                        <ChakraLink href="mailto:contact@alainterrieur.com" isExternal fontWeight="semibold">contact@alainterrieur.com</ChakraLink>
                        <ChakraLink href="tel:+1234567890" fontWeight="semibold">+12 345 678 90</ChakraLink>
                    </HStack>
                </VStack>
            </VStack>
        </Box>
    );
}
