class Usuario {
    usuarios = ["mario@luigi.com", "peach@apple.com"];
  
    constructor(email) {
      this.email = email;
    }
  
    esqueciSenha(email) {
      if (this.usuarios.includes(email)) {
        return EsqueciSenhaUtils.gerarToken(email);
      } else {
        return "E-mail não encontrado";
      }
    }
  
    validarToken(email, token) {
      return EsqueciSenhaUtils.validarToken(email, token);
    }
  }
  
  class EsqueciSenhaUtils {
    static tokens = new Map();
  
    static gerarToken(email) {
      const token = Math.random().toString(36).substring(2);
      this.tokens.set(email, token);
      return token;
    }
  
    static validarToken(email, token) {
      const storedToken = this.tokens.get(email);
      if (storedToken === token) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  const usuario1 = new Usuario("mario@luigi.com");

  // Solicitando um token de redefinição de senha
  const token1 = usuario1.esqueciSenha("mario@luigi.com");
  console.log(`Token para mario@luigi.com: ${token1}`);
  
  // Validando o token
  const isValidToken1 = usuario1.validarToken("mario@luigi.com", token1);
  console.log(`Token válido para mario@luigi.com? ${isValidToken1}`); // Deve retornar true
  
  // Tentando validar um token inválido
  const isValidToken2 = usuario1.validarToken("mario@luigi.com", "token_invalido");
  console.log(`Token válido para mario@luigi.com? ${isValidToken2}`); // Deve retornar false
  
  // Tentando gerar um token para um email não registrado
  const usuario2 = new Usuario("luigi@mario.com");
  const token2 = usuario2.esqueciSenha("luigi@mario.com");
  console.log(`Token para luigi@mario.com: ${token2}`); // Deve retornar "E-mail não encontrado"