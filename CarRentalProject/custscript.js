document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    // Here you can send the data to your server or API
    // For demonstration, we'll just show a success message
    document.getElementById('responseMessage').innerText = 'Thank you for your feedback, ' + name + '!';

    // Clear the form
    document.getElementById('feedbackForm').reset();
});