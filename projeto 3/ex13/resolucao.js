class Usuario {
    #password
    constructor(name, username, password){
        this.name = name;
        this.username = username;
        this.#password = password;
    }
    login(username, password){
        if(this.username === username && this.#password === password){
            console.log('Login realizado com sucesso');
            return console.log(this);
        }else{
            console.log('Falha na autenticação');
        }
    }
}

const conta = new Usuario("Eric", "Ericnick", "Eric123");
conta.login('teste', "123") // falha
conta.login('Ericnick', 'Eric123') // sucesso