let testText = "A gyors barna róka átugrik a lusta kutyán.";
let startTime, endTime;

function startTest() {
    // Állítsd be a teszt szöveget
    document.getElementById("inputText").value = testText;
    
    // Eredmények és időzítő visszaállítása
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
    
    // Gomb szövegének és működésének megváltoztatása
    var button = document.getElementById("btn");
    button.innerHTML = "Teszt befejezése";
    button.onclick = endTest;
            }

            function endTest() {
                endTime = new Date().getTime();
    
                // Felhasználói input letiltása
                document.getElementById("userInput").readOnly = true;
    
                // Elapsed time and words per minute (WPM) kiszámítása
                var timeElapsed = (endTime - startTime) / 1000; // másodpercekben
                var userTypedText = document.getElementById("userInput").value;
    
                // A szöveg felosztása regex segítségével a szavak pontos megszámlálásához
                var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                    return word !== "";
                }).length;
    
                var wpm = 0; // Alapértelmezett érték
    
                if (timeElapsed !== 0 && !isNaN(typedWords)) {
                    wpm = Math.round((typedWords / timeElapsed) * 60);
                }
    
                // Az eredmények megjelenítése
                var outputDiv = document.getElementById("output");
                outputDiv.innerHTML = "<h2>Írási Teszt Eredmények:</h2>" +
                    "<p>Beírt Szavak: " + typedWords + "</p>" +
                    "<p>Eltelt Idő: " + timeElapsed.toFixed(2) + " másodperc</p>" +
                    "<p>Szavak Per Perc (WPM): " + wpm + "</p>";
    
                // A gomb visszaállítása
                var button = document.getElementById("btn");
                button.innerHTML = "Teszt Indítása";
                button.onclick = startTest;
            }


           