import React, { useEffect, useState } from "react";
import axios from "axios";

function Circle() {
    const [currCol, setCurrCol] = useState("#DF2E38");

    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 100); // Poll every 1 second

        return () => clearInterval(interval);
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:5005/currColor");
            const json = await response.json();
            console.log(json,"JSON");
            setCurrCol(json.currColor);
            console.log(currCol);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            className="h-full w-full flex justify-center items-center"
            style={{ minHeight: "100vh" }}
        >
            <div
                className="h-52 w-52 rounded-full"
                style={{
                    backgroundColor: currCol,
                    transition: "transform 0.3s ease-in-out",
                }}
            ></div>
        </div>
    );
}

export default Circle;
