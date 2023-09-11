class Post {
    constructor(titulo, dataPublicacao){
        this.titulo = titulo;
        this.dataPublicacao = dataPublicacao;
    }
}   

class Blog {
    constructor(){
        this.posts = new Map();
    }
    publicar(post){
        this.posts.set(post.titulo,  post);
    }
    antigos(){
        const posts = Array.from(this.posts.values());
        posts.sort((a, b)=> a.dataPublicacao - b.dataPublicacao);
        return console.log(posts.map(post => post.titulo));
    }
    novos(){
        const posts = Array.from(this.posts.values());
        posts.sort((a, b)=> b.dataPublicacao - a.dataPublicacao);
        return console.log(posts.map(post => post.titulo));
    }
}

const post1 = new Post("Como aprender mais rápido!", new Date(1988, 11, 24));
const post2 = new Post("Como desaprender mais rápido!", new Date(2006, 1, 4));
const blog = new Blog();

blog.publicar(post1);
blog.publicar(post2);

blog.antigos();
blog.novos();