const Player = {
// Musicas
    data: [{titulo: "teste", artista: "Leonardo", file: "/public/assets/musicas/Stand Up.mp3", img: "/img/capa.jpg"}],

// Variaveis artistas
    capa: document.querySelector('.capa'),
    tituloMusica: document.querySelector('.titulo__musica'),
    artista: document.querySelector('.artista'),

// Variaveis do player
    anterior: document.querySelector('.anterior'),
    play: document.querySelector('.play'),
    pause: document.querySelector('.pause'),
    proximo: document.querySelector('.proximo'),

// Variavel audio
    musica: document.querySelector('audio'),

// Funções
    playMusica(){
        Player.play.addEventListener('click', () =>{
            // Pegando a musica do array    
            Player.musica.src = Player.data[0].file
            Player.musica.play()

            Player.play.style.display="none"
            Player.pause.style.display="flex"

        })
    },

    pauseMusica(){
        Player.pause.addEventListener('click', () =>{
            Player.musica.pause()

            Player.play.style.display="flex"
            Player.pause.style.display="none"

        })
    },

}

// Chamada das funções
Player.playMusica()
Player.pauseMusica()