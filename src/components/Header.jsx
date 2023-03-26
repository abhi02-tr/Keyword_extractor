import { Heading, Image, Text } from "@chakra-ui/react";
import logo from '../assets/light-bulb.svg';

export default function Header() {
    return (
        <>
         <Image src={logo} alt='logo' marginBottom='1rem' width={100} />   
         <Heading color='white' marginBottom='1rem'>
            AI keyword extractor
         </Heading>
         <Text fontSize={25} textAlign='center'>
            Paste in your text, and we will extract it for you....
         </Text>
        </>
    );
}