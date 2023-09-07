class Newsletter {
    #email = new Map();
    
    signup(email){
        if(this.#email.has(email)){ 
            return console.log('Email já cadastrado.')
        }else{
            this.#email.set(email);
            return console.log('Email cadastrado com sucesso.')
        }
    }
}

const news = new Newsletter()
news.signup('eric.example@teste.com'); // Sucesso
news.signup('eric.example@teste.com'); // Falha