// Captura o botão e o conteúdo do dropdown
var dropdownBtn = document.getElementById("dropdown-btn");
var dropdownContent = document.getElementById("dropdown-content");

// Adiciona um evento de clique ao botão para alternar a visibilidade do dropdown
dropdownBtn.addEventListener("click", function() {
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
});

// Fecha o dropdown se o usuário clicar fora dele
window.addEventListener("click", function(event) {
    if (!event.target.matches("#dropdown-btn")) {
        dropdownContent.style.display = "none";
    }
});
