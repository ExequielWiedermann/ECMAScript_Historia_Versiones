const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-11-09');

//Nueva forma para mostrar las cosas y no con log.
console.table(matchers);