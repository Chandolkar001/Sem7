document.addEventListener('DOMContentLoaded', function() {
    const shape = document.querySelector('.shape');
    const shapeText = document.querySelector('.shape-text');
    const clickButton = document.querySelector('.clickButton');
    const mouseOverButton = document.querySelector('.mouseOverButton');
    const colorInput = document.getElementById('colorInput');

    function changeShapeColor(color) {
        document.body.style.backgroundColor = color;
    }

    function addTextToShape(text) {
        shapeText.innerText = text;
        shapeText.style.display = 'block';
    }

    function removeTextFromShape() {
        shapeText.style.display = 'none';
    }

    clickButton.addEventListener('click', function() {
        changeShapeColor('#ff0000');
        addTextToShape('Clicked!');
        setTimeout(removeTextFromShape, 2000); 
    });

    mouseOverButton.addEventListener('mouseover', function() {
        changeShapeColor('#00ff00');
        addTextToShape('Mouse over');
        setTimeout(removeTextFromShape, 2000); 

    });

    colorInput.addEventListener('focus', function() {
        changeShapeColor('#0000ff');
        addTextToShape('Typing....');
        setTimeout(removeTextFromShape, 2000); 

    });
});
