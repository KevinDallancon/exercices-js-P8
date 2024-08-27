function convertToBinary() {
  // Récupérer la valeur décimale saisie par l'utilisateur
  const decimalInput = document.getElementById("decimalInput").value;

  // Récupérer l'élément de résultat
  const resultElement = document.getElementById("binaryResult");

  // Vérifier si l'entrée est un nombre valide
  if (isNaN(decimalInput) || decimalInput === "") {
    resultElement.textContent = "";
    return;
  }

  // Convertir l'entrée en nombre entier
  let decimal = Math.abs(parseInt(decimalInput));

  let binary = "";

  // Cas particulier pour 0
  if (decimal === 0) {
    binary = "0";
  } else {
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }
  }

  // Afficher le résultat
  resultElement.textContent = binary;
}
