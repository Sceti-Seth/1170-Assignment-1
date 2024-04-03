document.addEventListener('DOMContentLoaded', function() {
    const sumForm = document.getElementById('sumForm');
    const messageDiv = document.getElementById('message');

    sumForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        messageDiv.innerHTML = "Hello World"; // Display "Hello World" on the webpage
    });
});
