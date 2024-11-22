// Add any interactive functionality here
document.addEventListener('DOMContentLoaded', () => {
    // Example: Add event listener for form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!');
    });
});
