function mudarImagem(id, imagem1, imagem2) {
    var imagem = document.getElementById(id);
    if (imagem.src.endsWith(imagem1)) {
        imagem.src = imagem2;
    } else {
        imagem.src = imagem1
    }
}
