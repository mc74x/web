//debugger;
let lista = [];
let articulos;
while (true) {
    articulos = prompt('dame una palabra');
    if (articulos === 'detente') {
        break;
    }
    lista.push(articulos);
}
for (let i = 0; i < lista.length; i++) {
    console.log('articulos' + i + ':' +  lista[i])
}