const person = {
    name: 'julian',
    age: 21,
    key: 'spiderman'
}

//Forma lenta
// const name = person.name;
// const age = person.age;
// const key = person.key;

//Forma rapida con desestucturacion:
const {age,key,name} = person;

console.log(name, age, key);

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({name,age,key,rank}:Hero) => {
return{
    keyName: name,
    user: {
        name,
        age
    },
    rank : rank,
};
};
const {keyName,rank} = useContext(person);
const {user} = useContext(person);

console.log(keyName,rank);
console.log(user.name);