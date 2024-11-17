// Change Light Color
function changeLightColor() {
    const colors = ['#00ff00', '#ff0000', '#0000ff', '#ffff00', '#ff00ff'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Change Font Color
function changeFontColor() {
    const fontColors = ['#00ff00', '#ffffff', '#ff00ff', '#ff0000', '#0000ff'];
    const newColor = fontColors[Math.floor(Math.random() * fontColors.length)];
    document.body.style.color = newColor;
}

// Toggle Blink Light
let blinkEnabled = false;
function toggleBlinkLight() {
    blinkEnabled = !blinkEnabled;
    if (blinkEnabled) {
        document.body.style.animation = 'blinkLight 1s infinite';
    } else {
        document.body.style.animation = '';
    }
}
