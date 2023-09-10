class Categoria {
    constructor (nome) {
        this.nome = nome;
    }
}

class Artigo {
    constructor(titulo) {
        this.titulo = titulo;
        this.categoria = null; 
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
}

const categoria = new Categoria('Ação');
const artigo = new Artigo('Batman'); 

artigo.setCategoria(categoria);

console.log(artigo)
console.log(categoria.nome); //
console.log(artigo.categoria.nome); //
console.log(artigo.titulo); //