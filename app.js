const redSlider = document.getElementById('red-slider');
const greenSlider = document.getElementById('green-slider');
const blueSlider = document.getElementById('blue-slider');
const RGBOutput = document.getElementById('rgb-output');


const getRedValue = (value) => {
    const colorVal = `rgb(${value},${greenSlider.value},${blueSlider.value})`;
    refresh(colorVal);
}

const getGreenValue = (value) => {
    const colorVal = `rgb(${redSlider.value},${value},${blueSlider.value})`
    refresh(colorVal);
}

const getBlueValue = (value) => {
    const colorVal = `rgb(${redSlider.value},${greenSlider.value},${value})`
    refresh(colorVal);
}

const refresh = (val) => {
    document.body.style.backgroundColor = val;
    RGBOutput.style.color = invertRGB(val);
    RGBOutput.textContent = val;
}

function invertRGB(rgb) {
    rgb = [].slice.call(arguments).join(",").replace(/rgb\(|\)|rgba\(|\)|\s/gi, '').split(',');

    for (var i = 0; i < rgb.length; i++) {
        rgb[i] = (i === 3 ? 1 : 255) - rgb[i];
    }

    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}
