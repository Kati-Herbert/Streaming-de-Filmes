// Lista de filmes com título e vídeo
const filmesAcao = [
  {
    titulo: "Filme Em Ritmo de Fuga",
    video: "filme1.mp4"
  },
  {
    titulo: "Filme Uncharted",
    video: "filme2.mp4"
  },
  {
    titulo: "Filme Missao Impossivel",
    video: "filme3.mp4"
  },
  {
    titulo: "Filme Duro de Matar",
    video: "filme4.mp4"
  }
];

// Função chamada pelo onclick do HTML
function abrirFilme(titulo) {
  const filme = filmesAcao.find(f => f.titulo === titulo);

  if (filme) {
    alert(`Você clicou no filme: ${filme.titulo}\nArquivo do vídeo: ${filme.video}`);
    // Aqui depois pode fazer: window.location.href = filme.video; ou abrir modal etc.
  } else {
    alert(`Filme "${titulo}" não encontrado.`);
  }
}