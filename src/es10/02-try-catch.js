//Si ejecuto esto da error, porque 
//la función hola no existe y catch me lo dice
try {
    hola();
} catch (error) {
    console.log(error);
}

try {
    anotherFn();
} catch {
    console.log('Esto es un error');
}