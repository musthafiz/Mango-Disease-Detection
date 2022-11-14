import { Text, VStack,Box,HStack } from "native-base";
import React from "react";

export default function Predictions({ predictions }) {
    const prediction = [
        { titleLeft: "Class name", titleRight: "Probablity" },
        ...predictions,
    ];

    return (
        <VStack>
            {prediction.map((pre, index) => (
                <HStack
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    key={index + 1}
                    bg={pre.titleLeft ? "lightBlue.100" : "light.100"}
                >
                    <Box
                        w="70%"
                        borderRightWidth={1}
                        borderRightColor={"#ccc"}
                        p={2}
                    >
                        <Text
                            fontFamily={"body"}
                            fontWeight={"700"}
                            color={"dark.100"}
                            textAlign={"left"}
                        >
                            {pre.titleLeft ? pre.titleLeft : pre.classname}
                        </Text>
                    </Box>
                    <Box w="26%" p={2}>
                        <Text
                            fontFamily={"body"}
                            fontWeight={"700"}
                            color={"dark.100"}
                            textAlign={"left"}
                        >
                            {pre.titleRight
                                ? pre.titleRight
                                : `${(pre.probablity * 100).toFixed(2)}%`}
                        </Text>
                    </Box>
                </HStack>
            ))}
        </VStack>
    );
}
