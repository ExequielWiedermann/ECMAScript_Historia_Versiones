const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Async'), 2000): reject(new Error('Error'))
    });
}

//Forma de como lo haciamos
const anotherFn = async() => {
    const someThig = await fnAsync();
    console.log(someThig);
    console.log('Hello');
}

console.log('Antes');
anotherFn();
console.log('Después');