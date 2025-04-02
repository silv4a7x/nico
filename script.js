// Função para mostrar a mensagem de aniversário
document.getElementById("minhaBotao").addEventListener("click", function() {
    document.getElementById("mensagem").innerHTML = "happy birthday!";
});

// Função para mostrar o GIF ao clicar no botão
document.getElementById("mostrarImagem").addEventListener("click", function() {
    // Cria uma nova imagem (GIF)
    const img = document.createElement("img");
    img.src = "https://64.media.tumblr.com/f896ac73724de861ff2c462bb7f2e5b3/0a79acff517e1dc7-4b/s400x600/7ee561a2ac1c958cac1081e5077f974a6fc249e3.gifv"; 
    img.alt = "GIF de aniversário";
    img.style.width = "300px";

    // Cria o texto "мbl" sobre a imagem
    const texto = document.createElement("div");
    texto.id = "imagemTexto";
    texto.textContent = "мbl";

    // Adiciona a imagem e o texto ao container
    const container = document.getElementById("imagemContainer");
    container.innerHTML = "";
    container.appendChild(img);
    container.appendChild(texto);

    // Exibe o texto
    texto.style.display = "block";
});

