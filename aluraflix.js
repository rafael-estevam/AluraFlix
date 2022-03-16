var listaImagem = [];
var listaNome = [];
var listaSpotify = [];
var ulAlbums = document.getElementById("ulAlbums");
var i = 0;

listaNome = [
  "Beatles - Abbey Road",
  "Kiss - Destroyer",
  "Metallica - Kill 'Em All",
  "Pink Floyd - The Dark Side Of The Moon",
  "Motörhead - Ace of Spades"
];

listaImagem = [
  "https://i.pinimg.com/originals/4b/d8/0e/4bd80e4cce5b3166938975b82348a2f3.jpg",
  "https://m.media-amazon.com/images/I/81LSTglQXLL._AC_SX425_.jpg",
  "https://roquereverso.files.wordpress.com/2013/07/kill-em-all.jpg",
  "https://img.estadao.com.br/fotos/crop/320x300/resources/jpg/5/6/1427227903365.jpg",
  "https://cdn.shoplightspeed.com/shops/634895/files/22719040/motorhead-ace-of-spades.jpg"
];

listaSpotify = [
  "https://open.spotify.com/album/5iT3F2EhjVQVrO4PKhsP8c?si=42f2dd1c4e5543e7",
  "https://open.spotify.com/album/59plsPcJYFlSA5ImekNQJ0?si=84ebd1aed47a4a34",
  "https://open.spotify.com/album/1aGapZGHBovnmhwqVNI6JZ?si=9c390a755b4b4c30",
  "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv?si=fUbH8lg-QnOKDbsoHkdXag",
  "https://open.spotify.com/album/3rxF05Aux0QTrN533Kjc91?si=629a157fff92476b"
];

while (i < listaImagem.length) {
  var add = `<li><a href="${listaSpotify[i]}"><img class="coverArt" src="${listaImagem[i]}"></a><label>${listaNome[i]}</label><li>`;
  ulAlbums.innerHTML += add;
  i++;
}

document.getElementById("nome").focus();

function addDisco() {
  nomeAlbum = document.getElementById("nome").value;
  imageAlbum = document.getElementById("imagem").value;
  spotify = document.getElementById("spotify").value;

  if (imageAlbum == "" || nomeAlbum == "" || spotify == "") {
    alert("Por favor, preencha todos os campos.");
  } else if (
    !imageAlbum.endsWith(".jpeg") &&
    !imageAlbum.endsWith(".jpg") &&
    !imageAlbum.endsWith(".png")
  ) {
    alert("Formato de imagem inválido!");
  } else if (
    !spotify.startsWith("https://open.spotify.com/") &&
    !spotify.startsWith("https://www.youtube.com/")
  ) {
    alert("Link para o albúm inválido!");
  } else {
    Duplicidade();
    Limpar();
  }
}

function Duplicidade() {
  if (
    listaNome.includes(nomeAlbum) ||
    listaImagem.includes(imageAlbum) ||
    listaSpotify.includes(spotify)
  ) {
    alert("Albúm já inserido!");
  } else {
    inserirDisco();
  }
}

function inserirDisco() {
  listaImagem.push(imageAlbum);
  listaNome.push(nomeAlbum);
  listaSpotify.push(spotify);

  var add = `<li><a href="${spotify}"><img src="${imageAlbum}"></a><label>${nomeAlbum}</label><li>`;
  ulAlbums.innerHTML += add;
}

function Limpar() {
  document.getElementById("nome").value = "";
  document.getElementById("imagem").value = "";
  document.getElementById("spotify").value = "";

  document.getElementById("nome").focus();
}
