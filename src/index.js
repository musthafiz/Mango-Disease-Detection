import React from "react";
import ThemeConfig from "../theme-config";
import Home from "./Home";
import { Platform } from "react-native";

export default function index() {
    let clean =false;

    React.useEffect(() => {
        const getPermission = async () => {
            const { status } =
                await ImagePicker.requestCameraPermissionsAsync();
            if (!status) {
                alert("Require Camera Access to Continue");
            }
        };

        if (Platform.OS === "ios") {
            getPermission();
        }
        return () => !clean;
    }, []);

    return (
        <ThemeConfig>
            <Home />
        </ThemeConfig>
    );
}
