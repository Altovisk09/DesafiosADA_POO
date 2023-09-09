class Usuario {
    constructor(email, senha, ps){
        this.email = email;
        this.senha = senha;
        this.tentativaLogin = 0;
        this.contaBloqueada = false;
        this.ps= ps;
    }
    login(email, senha) {
        if (this.contaBloqueada) {
          console.log('Conta bloqueada, contate o suporte.');
          return;
        }
    
        if (this.email === email && this.senha === senha) {
          console.log('Login realizado com sucesso.');
          this.tentativaLogin = 0; // Redefine as tentativas após um login bem-sucedido.
        } else {
          console.log('Falha na autenticação.');
          this.tentativaLogin++;
    
          if (this.tentativaLogin >= 3) {
            this.contaBloqueada = true;
            console.log('Conta bloqueada, contate o suporte.');
          }
        }
      }
      suporte(email, senha, ps){
        if(this.email === email && this.senha === senha){
            if(this.ps === ps){
                console.log('Informações e palavra de segurança corretas, conta desbloqueada.')
                this.contaBloqueada = false;
            }
        }else{
            console.log('informações incorretas')
        }
      }
    }

    const usuario1 = new Usuario('eric@example.com', '123senha', 'fraseSecreta');

    usuario1.login('eric@example.com', '123senha'); // Login realizado com sucesso
    usuario1.login('eric@example.com', 'senha');     // Falha na autenticação
    usuario1.login('eric@example.com', 'senha456');  // Falha na autenticação
    usuario1.login('eric@example.com', 'senha789');  // Conta bloqueada, contate o suporte
    usuario1.suporte('eric@example.com', '123senha', 'fraseSecreta') // conta desbloqueada
    usuario1.login('eric@example.com', '123senha'); // Login realizado com sucesso