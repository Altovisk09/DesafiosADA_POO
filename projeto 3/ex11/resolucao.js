class Relatorio {
    static mediaSalarial(funcionarios){
       
        let totalSalario = funcionarios.reduce((acc , empregado) => acc + empregado.salario, 0);
        let mediaSalario = totalSalario / funcionarios.length;
        return console.log(mediaSalario);
    }

    static menorSalario(funcionarios){
        
        let menorSalario = funcionarios[0].salario;
        let funcionario = funcionarios[0];
        
        for(let i = 1; i < funcionarios.length; i++){
            if(funcionarios[i].salario < menorSalario){
                menorSalario = funcionarios[i].salario;
                funcionario = funcionarios[i];
            }
        }
        
        return console.log(funcionario);
    }
    

    static maiorSalario(funcionarios){

        let maiorSalario = funcionarios[0].salario;
        let funcionario = funcionarios[0]
        
        for(let i = 0; i < funcionarios.length; i++){
            
            if(funcionarios[i].salario > maiorSalario){ 
                maiorSalario = funcionarios[i].salario;
                funcionario = funcionarios[i];
            }
        }
        return console.log(funcionario);
    }
}

class Empresa {
    listaDeEmpregados = [
      {
        nome: "João Silva",
        salario: 1500,
      },
      {
        nome: "Maria José",
        salario: 2500,
      },
      {
        nome: "Simplício Simplório",
        salario: 1400,
      },
      {
        nome: "Mario João",
        salario: 2600,
      },
    ];
  
    mediaSalarial() {
      return Relatorio.mediaSalarial(this.listaDeEmpregados);
    }
  
    menorSalario() {
      return Relatorio.menorSalario(this.listaDeEmpregados);
    }
    maiorSalario() {
      return Relatorio.maiorSalario(this.listaDeEmpregados);
    }
  }

const empresa = new Empresa;
empresa.mediaSalarial();
empresa.menorSalario();
empresa.maiorSalario();