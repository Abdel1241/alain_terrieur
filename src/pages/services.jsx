import { Box, Flex, Text, Heading, Image, Stack, Button, Link as ChakraLink } from "@chakra-ui/react";
import Link from 'next/link';
import { CheckIcon, InfoIcon } from "@chakra-ui/icons";


export default function Services() {
  const services = [
    {
      title: "Aménagement d'intérieur:",
      description: "Notre équipe de spécialistes crée des espaces fonctionnels qui reflètent votre style personnel. De la consultation initiale à la réalisation finale, nous transformons vos visions en réalité.",
      image: "/image1.jpg"
    },
    {
      title: "Rénovation complète:",
      description: "Pour ceux qui cherchent à donner une nouvelle vie à leur espace, notre service de rénovation complète métamorphose votre intérieur du sol au plafond.",
      image: "/image2.jpg" 
    },
    {
      title: "Décoration sur mesure:",
      description: "Avec un accès à une vaste gamme de fournisseurs et de fabricants, nous personnalisons chaque détail, du choix des meubles aux traitements de fenêtre, pour correspondre parfaitement à votre style.",
      image: "image3.jpg"
    },
    {
      title: "Conseil en couleur:",
      description: "Laissez nos experts vous guider à travers le monde complexe des couleurs pour trouver les teintes qui compléteront parfaitement votre espace et refléteront votre personnalité.",
      image: "/image4.jpg"
    },
    {
      title: "Éclairage d'ambiance:",
      description: "L'éclairage peut faire ou défaire un espace. Nos experts concevront un plan d'éclairage pour mettre en valeur les meilleures caractéristiques de votre maison tout en créant l'ambiance souhaitée.",
      image: "/image5.jpg"
    },
    {
      title: "Planification d'espace et Feng Shui:",
      description: " Au-delà de la simple esthétique, nous utilisons des principes éprouvés pour améliorer le flux et l'énergie de votre espace, en garantissant une harmonie et un équilibre dans chaque pièce.",
      image: "/image6.jpg"
    },
  ];

  return (
    <Box bg="gray.100" minH="100vh">
      {/* Navigation */}
      <Flex bg="white" p={5} shadow="md">
        <Heading size="lg" fontWeight="semibold">
          <Link href="/" passHref>
            <ChakraLink>Alain Terrieur</ChakraLink>
          </Link>
        </Heading>
        <Flex ml="auto">
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
        </Flex>
      </Flex>

      {/* Main Content */}
      <Stack spacing={10} align="center" py={20}>
        {services.map((service, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">{service.title}</Heading>
            <Text mt={4}>{service.description}</Text>
            <Image src={service.image} alt={`Image pour ${service.title}`} mt={5} borderRadius="md" />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
