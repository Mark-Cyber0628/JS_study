let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Increase count by 1
    displayCount();
    checkCountValue();
}

function resetCount() {
    count = 0;
    document.getElementById('countDisplay').textContent = count;
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Display the count in HTML
}

function checkCountValue() {
    if (count === 10) {
        alert("Az Instagram posztod 10 követőt szerzett! Gratulálunk!");
    } else if (count === 20) {
        alert("Az Instagram posztod 20 követőt szerzett! Csak így tovább!");
    }
}