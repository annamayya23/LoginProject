function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate the username and password (you may add more validation)

    // Send the data to the server using AJAX or fetch API
    // Example:
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        if (data.success) {
            alert('Login successful');
        } else {
            alert('Login failed');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}