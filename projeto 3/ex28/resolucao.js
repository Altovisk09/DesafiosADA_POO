class Estoque {
    constructor(){
        this.estoque = new Map;
    }
    adicionar(nome, qtd){
        if(!this.estoque.has(nome)){
            this.estoque.set(nome, qtd);
            console.log("Produto cadastrado com sucesso")
        }else{
            const qtdAtual = this.estoque.get(nome);
            this.estoque.set(nome, qtd + qtdAtual);
            console.log(`${qtd} item(s) adicionados a ${nome}`)
        }
    }
    remover(nome, qtd){
        if(this.estoque.has(nome)){
            const qtdAtual = this.estoque.get(nome);

            if(qtd <= qtdAtual){
                this.estoque.set(nome, qtdAtual - qtd);
                console.log(`${qtd} unidades removidas do produto ${nome}\n\nUnidades restantes: ${qtdAtual - qtd}`)
            }else{
                if(qtdAtual === 0){
                    this.estoque.delete(nome);
                    console.log(`Produto intitulado ${nome} removido`)
                }else{
                    return console.log('Quantidade solicitada para exclusão, é superior a quantidade disponível no estoque.')
                }
            }
        }else{
            console.log('Produto não cadastrado, não a necessidade de excluir')
         }
    }
    listar(){
        const lista = [...this.estoque.entries()].map(([nome, quantidade]) => ({
            nome,
            quantidade,
          }));
          console.log(lista);
        }
    }

const estoque = new Estoque();

estoque.adicionar("Uva", 10);
estoque.adicionar("Laranja", 10);
estoque.adicionar("Cebola", 10);
estoque.remover("Laranja", 10)
estoque.remover("Laranja", 10)
estoque.listar();
