export default class User {
    #nome//definimos a propriedade que queremos que seja privada fora do construtor
    #sobrenome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome,sobrenome, email, nascimento, role, ativo = true ){
        this.#nome = nome; // chamamos ela dentro.
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }
    // estamos montando um privado objeto com as informações privadas passadas.
    /*
    #montaObjUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            status: this.#ativo
        
        })
    }*/

    get nome(){
        return `${this.#nome} ${this.#sobrenome}`;
    }
    
    get email(){
        return this.#email;
    }

    get nascimento(){
        return this.#nascimento;
    }

    get role(){
        return this.#role;
    }

    get ativo(){
        return this.#ativo;
    
    }
    get sobrenome() {
        return this.#sobrenome
      }
    /*

    set nome(novoNome){
        if(novoNome === ''){
            throw new Error('formato não valido')
        }
        this.#nome = novoNome;
    }*/


    set nome(novoNome) {
        if (novoNome === '') {
          throw new Error('formato não válido')
        }
        let [nome, ...sobrenome] = novoNome.split(" ")
        sobrenome = sobrenome.join(' ')
        this.#nome = nome
        this.#sobrenome = sobrenome
      }

    exibirInfos(){
              
        return `nome > ${this.nome}, email > ${this.email}, nascimento> ${this.nascimento}, tipo > ${this.role}, status > ${this.ativo} `
    }
}

