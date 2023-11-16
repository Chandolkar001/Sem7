document.getElementById('arrayForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const length = parseInt(document.getElementById('length').value);
    const elements = document.getElementById('elements').value.split(',').map(e => e.trim());

    const index = parseInt(document.getElementById('index').value);

    if (index < 0 || index >= length) {
        document.getElementById('result').innerHTML = 'Index is out of bounds!';
        return;
    }

    const elementAtIndex = elements[index];

    if (Array.isArray(JSON.parse(elementAtIndex))) {
        document.getElementById('result').innerHTML = `The element at index ${index} is an array: ${elementAtIndex}`;
    } else {
        document.getElementById('result').innerHTML = `The element at index ${index} is a single integer: ${elementAtIndex}`;
    }
});
