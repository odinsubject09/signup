document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        // Check if the input is invalid or valid based on its constraints
        if (input.value && !input.checkValidity()) {
            input.classList.add('invalid');
            input.classList.remove('valid');
        } else if (input.value && input.checkValidity()) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            // If the input is empty, remove both classes
            input.classList.remove('valid', 'invalid');
        }
    });
});

