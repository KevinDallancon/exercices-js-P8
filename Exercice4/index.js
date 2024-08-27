const btn = document.getElementById("myButton");
const msg = document.getElementById("message");

btn.addEventListener("click", () => {
  msg.innerHTML = "Bonjour, vous avez cliqué sur le bouton !";
});
