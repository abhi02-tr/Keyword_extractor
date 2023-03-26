import React, { useState } from 'react'
import { Button, Textarea } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

function TextInput({extractKeywords}) {

    const [text, setText] = useState('');

    const toast = useToast();

    const submitText = () =>{
        if(text == '') {
            toast({
                title: "Text Field Empty",
                description: "Plaese Enter some text for exptraction of keywords.",
                duration: 5000,
                status: "error",
                isClosable: false,
                containerStyle: {
                    marginBottom: "10"
                }
            });
            return;
        }
        // console.log(text);
        extractKeywords(text);
    };

  return (
    <>
    <Textarea 
        bg='blue.300'
        padding={4}
        marginTop={6}
        height={150}
        value={text}
        color="white"
        onChange={(e) => {setText(e.target.value)}}
    />
    <Button 
        bg='blue.500'
        marginTop={3}
        color="white"
        width="100%"
        _hover={{ bg: 'blue.700' }}
        onClick={submitText}
    >
        Extract keyWords
    </Button>
    </>
  )
}

export default TextInput