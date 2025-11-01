import { useState } from "react";
import RGBSlider from "./RGBSlider";
import ColorDisplay from "./ColorDisplay";

function ColorPicker() {
    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(100);
    const [blue, setBlue] = useState(50);

    return (
        <div className="color-picker">
            <h1 className="">
                🎨 Color Picker
            </h1>

            <div className="slider-container">
                <RGBSlider
                label="Red"
                value={red}
                onChange={setRed}
                colorClass="slider-red"
                />
                <RGBSlider
                label="Green"
                value={green}
                onChange={setGreen}
                colorClass="slider-green"
                />
                <RGBSlider
                label="Blue"
                value={blue}
                onChange={setBlue}
                colorClass="slider-blue"
                />
            </div>

            <ColorDisplay red={red} green={green} blue={blue} />
        </div>
    )
}

export default ColorPicker;