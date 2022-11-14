import * as ImagePicker from "expo-image-picker";
import { Center, Divider, ScrollView, Text, VStack } from "native-base";
import React, { useState } from "react";
import { Image } from "react-native";
import BtnComponent from "./components/BtnComponent";
import Loading from "./components/Loading";
import Predictions from "./components/Predictions";
import TitleComponent from "./components/TitleComponent";
import usePredictors from "./hooks/use-predictors";

export default function ImagePickerExample() {
    const [image, setImage] = useState(null);
    const [predictions, loading, getPredictions, error] = usePredictors();

    const options = {
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 1,
    };

    const captureImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchCameraAsync(options);
        if (!result.cancelled) {
            setImage(result.uri);
            await getPredictions(result.uri);
        }
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync(options);
        if (!result.cancelled) {
            setImage(result.uri);
            await getPredictions(result.uri);
        }
    };
    const pest = predictions && predictions[0].pesticide;
    return (
        <ScrollView>
            <VStack
                space={4}
                px={4}
                w={"full"}
                justifyContent={"center"}
                py={10}
            >
                <TitleComponent title={"Mango Disease Detector"} />
                <BtnComponent
                    onCaptureButtonPress={captureImage}
                    onLibraryButtonPress={pickImage}
                />
                {image && (
                    <Center>
                        <Image
                            source={{ uri: image }}
                            style={{
                                width: 250,
                                height: 250,
                                borderRadius: 16,
                            }}
                        />
                    </Center>
                )}
                {loading && <Loading />}
            
                {predictions && (
                    <VStack space={4}>
                        <VStack>
                            <Divider />
                            <Text
                                fontSize={20}
                                fontWeight={700}
                                textAlign={"center"}
                                color={"#000"}
                                fontFamily={"body"}
                                py={2}
                            >
                                Predictions
                            </Text>
                            <Divider />
                        </VStack>
                        <Predictions predictions={[predictions[0]]} />
                        <VStack>
                            <Divider />
                            <Text
                                fontSize={20}
                                fontWeight={700}
                                textAlign={"center"}
                                color={"#000"}
                                fontFamily={"body"}
                                py={2}
                            >
                                Pesticides
                            </Text>
                            <Divider />
                        </VStack>
                        {pest.map((p, i) => (
                            <VStack
                                borderRadius={10}
                                p={2}
                                bg={i % 2 === 0 ? "lightBlue.700" : "green.900"}
                                key={i.toString()}
                            >
                                <Text color={"#fff"} fontFamily={"body"}>
                                    {p}
                                </Text>
                            </VStack>
                        ))}
                    </VStack>
                )}
                {error && (
                    <Text textAlign={"center"} color={"dark.100"}>
                        {"Only Jpg image can be used."}
                    </Text>
                )}
            </VStack>
        </ScrollView>
    );
}
