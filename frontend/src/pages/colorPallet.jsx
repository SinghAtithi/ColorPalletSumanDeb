import React, { useEffect, useState } from "react";
import axios from "axios";

function colorPallet() {
    const [color, setColor] = useState("#7AA874");

    const colorPallet = ["#7AA874", "#D864A9", "#AA77FF", "#DF2E38", "#804674"];

    useEffect(() => {}, [color]);

    return (
        <div className="App flex">
            <h1>My Current color is {color}</h1>
            {colorPallet.map((col) => {
                return (
                    <div
                        className="h-16 w-16 bg-red-400 m-6 rounded-2xl cursor-pointer hover:scale-110 "
                        style={{
                            backgroundColor: col,
                            transition: "transform 0.3s ease-in-out", // added here
                        }}
                        onClick={() => {
                            setColor(col);
                            axios
                                .post("http://localhost:5005/changeColor", {
                                    newColor: col,
                                })
                                .then((res) => console.log(res))
                                .catch((err) => console.error(err));
                        }}
                    ></div>
                );
            })}
        </div>
    );
}

export default colorPallet;
