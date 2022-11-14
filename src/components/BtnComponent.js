import { Text, VStack, Button } from "native-base";
import React from "react";

export default function BtnComponent({onCaptureButtonPress,onLibraryButtonPress}) {
    return (
        <VStack space="4">
            <Button
                borderRadius={10}
                bg={"coolGray.500"}
                _pressed={{ bg: "coolGray.600" }}
                py={4}
                w="full"
                onPress={onCaptureButtonPress}
            >
                Pick an image from camera roll
            </Button>
            <Button
                borderRadius={10}
                bg={"red.500"}
                _pressed={{ bg: "red.600" }}
                py={4}
                w="full"
                onPress={onLibraryButtonPress}
            >
                Pick an image from gallery
            </Button>
        </VStack>
    );
}
