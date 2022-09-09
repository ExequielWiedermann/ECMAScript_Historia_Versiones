//Esto es de la forma anterior
function newUser(name, age, country) {
    var name = name || 'Exequiel';
    var age = age || 34;
    var country = country || 'Argentina';
    console.log(name, age, country);
}

newUser();
newUser('Soledad', 34, 'Chile');