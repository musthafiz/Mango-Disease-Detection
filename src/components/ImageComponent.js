import { Center, Box } from "native-base";
import { Image } from "react-native";
import React from "react";

export default function ImageComponent(source) {
   
    return (
        <Center>
            <Image
                source={{ uri: source }}
                style={{ width: 250, height: 250 }}
            />
        </Center>
    );
}
