import { useState } from "react";

const usePredictors = () => {
    const [predictions, setPredictions] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const getPredictions = async (img) => {
        setLoading(true);
        setPredictions(null)
        try {
            const formData = new FormData();
            formData.append("data", {
                name: "inception.jpg",
                uri: img,
                type: "image/jpg",
            });

            const response = await fetch(
                "http://192.168.0.105:4000/inception",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "multipart/form-data",
                    },
                    body: formData,
                }
            );
            const data = await response.json();
            setPredictions(data.result);
            setLoading(false);
            return data.result;
        } catch (err) {
            console.log(err)
            setError('Server Error')
        }
    };


    return [predictions,loading, getPredictions,error];
};

export default usePredictors;
