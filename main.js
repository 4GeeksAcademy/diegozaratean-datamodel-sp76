// Programación orientada a objetos es un modelo de programaci´øn

// 1. Clases
// 2. Objetos

// 3. Herencia
// 4. Encapsulamiento
// 5. Abstracción
// 6. Poliformismo

class Gato {
    constructor(nombre,color,genero,raza){
        this.nombre = nombre
        this.color = color
        this.genero = genero
        this.raza = raza
    }
    // Metodos
    comer(){
        console.log('estoy cominedo miau')
    }
    dormir(){
        console.log('estoy durmiendo zzzz')
    }
}

const gato_elias = new Gato("kif",'negro y blanco','macho','no lo se')
const gato_alberto = new Gato("thermonix",'tricolor','hembra','ni idea')
const salem = new Gato("salem",'negro','hembra','bombay europeo')


class NombreClase { // Declarando la clase
    constructor(propiedades){

    }
    //Metodos
}


// humana , mujer, tecnico laboratorio, 
// nombre, genero, profesión
// caminar, pensar, dibujar, dejar solo a los otors humanos

class Human{
    constructor(name, gender, job){
        this.name = name
        this.gender = gender
        this.job = job
    }
    // metodos
    caminar(){
        console.log('estoy caminando')
    }
    pensar(){
        console.log('estoy pensando')
    }
    dibujar(){
        console.log('estoy dibujando')
    }
}

const jose = new Human('Jose', 'hombre', 'periodista')
const wendel = new Human('Elias', 'hombre', 'programador')
const flaca = new Human('yara', 'mujer', 'enfermera / programadora')

