// Sélectionner l'élément d'affichage
const display = document.getElementById("display");

// Fonction pour ajouter un chiffre ou un opérateur à l'affichage
function appendToDisplay(value) {
  display.value += value;
}

// Fonction pour effacer l'affichage
function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    const expression = display.value;

    // Vérifier si l'expression est vide
    if (expression.trim() === "") {
      display.value = "";
      return;
    }

    // Vérifier si l'expression contient uniquement des caractères autorisés
    if (!/^[0-9+\-*/().]+$/.test(expression)) {
      throw new Error("Invalid expression");
    }

    // Vérifier la division par zéro avant d'évaluer
    if (/\/0/.test(expression)) {
      throw new Error("Division by zero is not allowed");
    }

    // Évaluer l'expression mathématique
    const result = eval(expression);

    // Vérifier si le résultat est un nombre valide
    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid result");
    }

    // Afficher le résultat arrondi à 8 décimales
    display.value = Number(result.toFixed(8)).toString();
  } catch (error) {
    display.value = error.message;
  }
}
