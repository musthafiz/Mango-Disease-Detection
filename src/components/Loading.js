import {
    Heading,
    HStack, Spinner
} from "native-base";
import React from "react";

export default function Loading() {
    return (
        <HStack
            mt={"40%"}
            justifyContent={"center"}
            alignItems="center"
            space="2"
        >
            <Spinner size={30} accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="xl">
                Loading...
            </Heading>
        </HStack>
    );
}
