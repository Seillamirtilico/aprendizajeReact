
function greet(name: string):string{

    return `hola ${name}`;
}

// Funcion arrow de la forma mas clean 
const greet2 = (name: string): string => { return `hola ${name}`;}

const message = greet('goku');
const message2 = greet2('vegeta');

console.log(message,message2);

function getUser (){
    return{
        uid : 'ABC-123',
        username : 'Julian123'
    }
}




const getUser2 = () =>  ( {
    
        uid : 'ABC-123',
        username : 'Julian123'
});

 


const user = getUser();
const user2 = getUser2;

console.log(user,user2);





//callbacks:

const myNumbers= [1,2,3,4,5,6]

// Funcion sin flecha, dificl de leer y tedioso:
myNumbers.forEach(function(value){
    console.log({value})
});

//Funcion con flecha:
myNumbers.forEach((value) => {
    console.log(value)
});

//Hay un mas simplificado y si lo unico que buscamos es imprimir lo que tenemos
myNumbers.forEach(console.log);