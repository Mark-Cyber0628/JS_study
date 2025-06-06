// Globális hatókör
var globalVar = "Én egy globális változó vagyok";
let globalLet = "Én is globális vagyok, de let-tel van korlátozva";
const globalConst = "Én egy globális konstans vagyok";


{
// Blokk hatókör
var blockVar = "Én egy blokk szintű var vagyok";
let blockLet = "Én egy blokk szintű let vagyok";
const blockConst = "Én egy blokk szintű const vagyok";
}//Block Scope
console.log(blockVar);
console.log(blockLet);

// Globális hatókör
console.log(globalVar); // Kimenet: "Én egy globális változó vagyok"
console.log(globalLet); // Kimenet: "Én is globális vagyok, de let-tel határolva"
console.log(globalConst); // Kimenet: "Én egy globális állandó vagyok"
function show(){
    var functionVar = "Egy blokk hatókörű változó vagyok";
    let functionLet = "Egy blokk hatókörű let vagyok";
    const functionConst = "Egy blokk hatókörű const vagyok";
    }
    show();
    
   // console.log(functionVar); // ReferenceError-t dob
    //console.log(functionLet); // ReferenceError-t dob
    console.log(functionConst); // ReferenceError-t dob