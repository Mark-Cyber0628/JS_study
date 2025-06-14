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
    checkCountValue();
}
function checkCountValue() {
    if (count === 10) {
      alert("Az Instagram posztod 10 követőt szerzett! Gratulálunk!");
    } else if (count === 20) {
      alert("Az Instagram posztod 20 követőt szerzett! Csak így tovább!");
    }
  }
  function resetCount() {
    count = 0;
    document.getElementById('countDisplay').textContent = count;
  }
