// Crie uma classe nomeada `EsqueciSenhaUtils` com os seguintes métodos `gerarToken`, `validarToken`.  
// - `gerarToken(email)` deve retornar um `token` que foi associado ao `email`. O token pode ser do 
// tipo `string` ou `number`, como por exemplo gerado pelo método `Math.random()`
// - `validarToken(email, token)` deve validar se o token gerado é o mesmo que foi associado anteriormente 
// ao email

class Usuario {
    usuarios = ["mario@luigi.com", "peach@apple.com"];
  
    constructor(email) {
      this.email = email;
    }
    esqueciSenha(email) {
      if (this.usuarios.includes(email)) {
        return EsqueciSenha.gerarToken(email);
      } else {
        return "E-mail não encontrado";
      }
    }
    validarToken(email, token) {
      return EsqueciSenha.validarToken(email, token);
    }
  }
  
  class EsqueciSenha {
    static tokens = new Map();
  
    static gerarToken(email) {
      const token = Math.random().toString(36).substring(2);
      this.tokens.set(email, token);
      console.log(email)
      return token;
    }
    static validarToken(email, token) {
      const storedToken = this.tokens.get(email);
      return storedToken === token;
    }
  }
  
  const usuario1 = new Usuario("mario@luigi.com");
  const token1 = usuario1.esqueciSenha("mario@luigi.com");
  
  