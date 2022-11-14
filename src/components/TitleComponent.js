import { Text, HStack } from "native-base";
import React from "react";

export default function TitleComponent({ title }) {
    return (
        <HStack justifyContent={'center'}>
            <Text
                fontWeight={700}
                fontSize={"2xl"}
                color={"dark.100"}
            >
                {title}
            </Text>
        </HStack>
    );
}
