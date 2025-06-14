let count = 0; // Initialize count to 0
function increaseCount() {
    count++; // Növeld a count-ot 1-el
}
function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Megjeleníti a számot a HTML-ben.
}
function increaseCount () {
    count++;
    displayCount();
}