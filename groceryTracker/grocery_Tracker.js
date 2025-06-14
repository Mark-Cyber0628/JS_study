function calculateArea() {
 amount = parseFloat(document.getElementById('amount1').value);
 amount = parseFloat(document.getElementById('amount2').value);
 amount = parseFloat(document.getElementById('amount3').value);


let area = amount1 + amount2 + amount3;
 document.getElementById('result').innerText = `Az élelmiszererk összege: ${area}`;
}