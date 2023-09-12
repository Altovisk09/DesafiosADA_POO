class Newsletter {
    #email 
    constructor(){
        this.#email = new Map;
    }
   
    inscrever(email){
            if(this.#email.has(email)){
                console.log('E-mail já se encontra cadastrado')
            }else{
                this.#email.set(email, 'dadosUsuario');
                console.log('Email cadastrado com sucessos')
            }
    }
    cancelar(email){
        if(!this.#email.has(email)){
            console.log('E-mail não cadastrado')
        }else{
            this.#email.delete(email);
            console.log('E-mail removido')
        }
    }
}

const registroEmails = new Newsletter();
registroEmails.inscrever('teste@example.com');
registroEmails.inscrever('teste@example.com');
registroEmails.cancelar('teste@example.com')
registroEmails.inscrever('teste@example.com');
