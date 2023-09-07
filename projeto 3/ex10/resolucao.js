class Extrato {
    transacoes = [];

    transacao(tipo, value){
        if(tipo !== "D" && tipo !== "C"){
            return console.log('Tipo de transação invalido, tente novamente.')
        }
        if(value <= 0){
            return console.log('Valor da transação precisa ser maior que zero.')
        }

        const registro = {};
        registro[tipo] = Number(value);
        this.transacoes.push(registro)
    }
    relatorio(){
        return this.transacoes;
    }
}

class CaixaEletronico extends Extrato {
    saldo = 0;

    depositar(value) {
      this.saldo += Number(value);
      this.transacao("C", value);
    }

    retirar(value) {
      this.saldo -= Number(value);
      this.transacao("D", value);
    }

    extrato() {
     return this.relatorio();
    }
  }

const caixa = new CaixaEletronico();
caixa.depositar(100);
caixa.depositar(200);
caixa.retirar(200);
const extrato = caixa.extrato();
console.log(extrato);