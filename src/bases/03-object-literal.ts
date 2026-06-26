

    const ironMan = {
        firstname: 'Tony',
        lastname : 'Stark',
        age: 45,
        addres: {
            postalCode: 'ABC123',
            city: 'New york',
        },

    };

    const spiderman = structuredClone(ironMan);

    spiderman.firstname = 'Peter';
    spiderman.lastname = 'parker';
    spiderman.age = 24;
    spiderman.addres.city = 'Bogotá';

    console.log(spiderman,ironMan);
    
    