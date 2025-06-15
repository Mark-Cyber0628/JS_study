// Select the button element
const submitButton = document.getElementById('submitBtn');

// Assign the submitFeedback function to the onclick event
submitButton.onclick = submitFeedback;

// Define the submitFeedback function
function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedbackText = document.getElementById('feedbackText').value;

    alert('Thank you for your valuable feedback');

    // Update the HTML elements with the user input
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedbackText;

    // Make the userInfo div visible
    document.getElementById('userInfo').style.display = 'block';
}