class Analisador {
    constructor() {
        this.dados = []
    }
    mesclar(nomes, emails) {
        if(nomes.length != emails.length){
            throw new Error('Quantidade de nomes e emails discrepante');
        }
        this.dados = nomes.map((nome, index) => ({nome, email: emails[index]})); // como o novo array vai ser montado levando pares como base, o index de nomes[0] vai bater com [0], assim mesclando ambos
    }
    listarMesclados() {
        return console.log(this.dados);
    }

}
const analisador = new Analisador();

const nomes = ["João", "Mário", "Ana"];
const emails = ["joao@gmail.com", "mario@msn.com", "ana@yahoo.com"];

analisador.mesclar(nomes, emails);
analisador.listarMesclados();




