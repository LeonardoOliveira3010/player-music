// Objeto Player que conterá todas as informações

// import { file, titulo, artista } from './data'

const Player = {
// Musicas
    data: [
        { titulo: "Broken Arrows", artista: 'Avicii', file: '/public/assets/musicas/57-Broken Arrows.mp3', img: '/public/assets/img/capa1.jpg'},
        { titulo: "Dust in the wind", artista: 'Scorpions', file: '/public/assets/musicas/Dust In The Wind.mp3', img: '/public/assets/img/capa6.jpg'},
        { titulo: "Take me to church", artista: 'Hozier', file: '/public/assets/musicas/Take Me To Church.mp3', img: "/public/assets/img/capa2.jpg"},
        { titulo: "another break", artista: 'pink floyd', file: '/public/assets/musicas/another brink in the wall.mp3', img: "/public/assets/img/capa3.jpg"},
        { titulo: "Stand up", artista: 'Cynthia', file: '/public/assets/musicas/Stand Up.mp3', img:'/public/assets/img/capa5.jpg'},
        { titulo: "Far Away", artista: 'Nickelback', file: '/public/assets/musicas/Far Away.mp3', img:'/public/assets/img/capa4.jpg'},
        { titulo: "Photograh", artista: 'Nickelback', file: '/public/assets/musicas/Nickelback - Photograph.mp3', img:'/public/assets/img/capa5.jpg'},
        { titulo: "oasis", artista: 'Oasis', file: '/public/assets/musicas/oasis.mp3', img:'/public/assets/img/capa7.jpg'},
        { titulo: "never gonna be alone", artista: 'Nickelback', file: '/public/assets/musicas/never gonna be alone.mp3', img:'/public/assets/img/capa5.jpg'},
        { titulo: "Use somebody", artista: 'King of Leon', file: '/public/assets/musicas/Kings Of Leon - Use Somebody (Official Video)_160k.mp3', img:'/public/assets/img/capa5.jpg'},
        { titulo: "Dont look back", artista: 'Oasis', file: '/public/assets/musicas/Oasis - Don t Look Back In Anger (Official Video)_160k.mp3', img:'/public/assets/img/capa5.jpg'},
        { titulo: "Stop Crying", artista: 'Oasis', file: '/public/assets/musicas/Oasis - Stop Crying Your Heart Out (Official Video)_160k.mp3', img:'/public/assets/img/capa5.jpg'},
        { titulo: "Wonderwall", artista: 'Oasis', file: '/public/assets/musicas/Oasis - Wonderwall (Official Video)_128k.mp3', img:'/public/assets/img/capa5.jpg'}
    ],

// Variavel audio
    indexMusica: 0,
    musica: document.querySelector('audio'),

    renderizarMusica(index){
        this.musica.setAttribute('src', this.data[index].file)
        this.musica.addEventListener('loadeddata', () =>{
            this.tituloMusica.textContent = this.data[index].titulo
            this.artista.textContent = this.data[index].artista
            this.capa.src = this.data[index].img
            this.fim.textContent = this.tempo(Math.floor(this.musica.duration))
        })
    // this.data.forEach(element => console.log(element))
    },
    
// Variaveis artistas
    capa: document.querySelector('.capa'),
    tituloMusica: document.querySelector('.titulo__musica'),
    artista: document.querySelector('.artista'),
    
// Variaveis do player
    anterior: document.querySelector('.anterior'),
    play: document.querySelector('.play'),
    pause: document.querySelector('.pause'),
    proximo: document.querySelector('.proximo'),
    
// Funções

    passarMusica(){
        this.musica.addEventListener('ended', () =>{
            this.indexMusica++
            if(this.indexMusica > this.data.length - 1){
                this.indexMusica = 0
            }
            this.renderizarMusica(this.indexMusica)
            this.musica.play()
        })
    },

    playMusica(){
        this.play.addEventListener('click', () =>{
            // Pegando a musica do array    
            this.musica.play()

            this.play.style.display="none"
            this.pause.style.display="flex"
        })
    },
    
    pauseMusica(){
        this.pause.addEventListener('click', () =>{
            this.musica.pause()

            this.play.style.display="flex"
            this.pause.style.display="none"
        })
    },
    
    musicaAnterior(){
        this.anterior.addEventListener('click', () =>{
            this.indexMusica--
            if(this.indexMusica < 0){
                this.indexMusica = this.data.length - 1
            }
            this.renderizarMusica(this.indexMusica)
            this.musica.play()
            this.play.style.display="none"
            this.pause.style.display="flex"
        })
    },
    
    proximaMusica(){
        this.proximo.addEventListener('click', () =>{
            this.indexMusica++
            if(this.indexMusica > this.data.length - 1){
                this.indexMusica = 0
            }
            this.renderizarMusica(this.indexMusica)
            
            this.musica.play()
            this.play.style.display="none"
            this.pause.style.display="flex"
        })
    },
    
// Variavel referente ao tempo da música    
    barra: document.querySelector('progress'),
    inicio: document.querySelector('.inicio'),
    fim: document.querySelector('.fim'),
    
    atualizarBarra(){

        let barraAtual = this.barra.style.width = Math.floor(( this.musica.currentTime / this.musica.duration) * 100) + '%'
        
        this.inicio.textContent = this.tempo(Math.floor(this.musica.currentTime)) 
        console.log(barraAtual) 
    },
    
    tempo(segundos){
        let minutos = Math.floor(segundos / 60)
        let segundo = segundos % 60
        if(segundo < 10) {
            segundo = '0' + segundo
        }
        return minutos + ':' + segundo
    }  
}

Player.playMusica()
Player.pauseMusica()
Player.proximaMusica()
Player.musicaAnterior()
Player.atualizarBarra()
Player.tempo()
Player.passarMusica()