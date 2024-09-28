
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function() {
    const entered = nameInput.value.trim();

    const outputName = entered !== '' ? entered : 'Anonymous';

    nameOutput.textContent = outputName;
});
