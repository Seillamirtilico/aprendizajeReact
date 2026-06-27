
    interface Person {
        firstname: string;
        lastname: string;
        age: number;
        address: Address;

    }
    interface Address{
        postalcode: string;
        city: string;
    }


    const ironMan: Person = {
        firstname: 'Tony',
        lastname : 'Stark',
        age: 45,
        address: {
            postalcode: 'ABC123',
            city: 'New york',
        },

    };

    const spiderMan: Person = {
        firstname: 'Peter ',
        lastname: 'Parker',
        age: 25,
        address: {
            postalcode: 'ABC123',
            city: 'New york',
        },
    }

    console.log(ironMan, spiderMan);


    // const spiderman = structuredClone(ironMan);

    // spiderman.firstname = 'Peter';
    // spiderman.lastname = 'parker';
    // spiderman.age = 24;
    // spiderman.addres.city = 'Bogotá';

    // console.log(spiderman,ironMan)
    
    