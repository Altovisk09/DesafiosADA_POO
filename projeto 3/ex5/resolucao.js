class lista {
    constructor(){
        this.membros = []
    }
    adicionar(nome){
        this.membros.push(nome);
        return console.log(`${nome} foi aceito como membro.`)
    }
    contar(){
        return console.log(`A quantidade de nomes adicionados no total de ${this.membros.length}`)
    }
}

const listaDeMembros = new lista();
listaDeMembros.adicionar("Jadiel");
listaDeMembros.adicionar("Kamartage");

listaDeMembros.contar();
