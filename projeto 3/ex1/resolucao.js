// Triangulo equilatero = Todos os lados iguais.
// Triangulo isosceles = Pelo menos 2 lados iguais.
// Triangulo escaleno = Nenhum lado igual.

// regras para NÃO formar um triangulo
// Todos os lados devem ter comprimentos maiores que zero.
// A soma de quaisquer dois lados deve ser maior do que o terceiro lado.

class Triangulo {
    constructor(lado1, lado2, lado3){
        this.lado1 = lado1;
        this.lado2 = lado2
        this.lado3 = lado3
    }
    tipo(){
        if(this.validaTriangulo()){
            if(this.lado1 === this.lado2 && this.lado2 === this.lado3){
                return console.log('Triangulo equilatero')
            }else if(this.lado1 === this.lado2 || this.lado2 === this.lado3 || this.lado1 === this.lado3){
                return console.log('Triangulo isosceles')
            }else if(this.lado1 !== this.lado2 && this.lado1 !== this.lado3 && this.lado2 !== this.lado3 ){
                return console.log('Triangulo escaleno')
            }
        }else{
            return console.log('Invalido')
        }
    }
    validaTriangulo(){
        if(
            this.lado1 <= 0 ||
            this.lado2 <= 0 ||
            this.lado3 <= 0 || 
            this.lado1 + this.lado2 <= this.lado3 ||
            this.lado2 + this.lado3 <= this.lado1 ||
            this.lado3 + this.lado1 <= this.lado2
        ){
            return false
        }else{
            return true
        }
    }
}

const equilatero = new Triangulo(10, 10, 10); 
const isosceles = new Triangulo(10, 10, 5); 
const escaleno = new Triangulo(20, 15, 30); 

equilatero.tipo();
isosceles.tipo();
escaleno.tipo();