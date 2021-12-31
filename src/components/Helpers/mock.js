export const libros = [   
    {titulo: "Las Enseñanzas de Don Juan",autor: "Carlos Castañeda", id: 1},
    {titulo: "1984",autor: "George Orwell",id: 2},
    {titulo: "Un mundo feliz",autor: "Aldous Huxley",id: 2},
    {titulo: "Rebelión en la Granja",autor: "George Orwell",id: 3},
    {titulo: "El hombre duplicado",autor: "José Saramago",id: 4},
    {titulo: "Ensayo sobre la ceguera",autor: "José Saramago",id: 5},
    {titulo: "El señor de los anillos: La comunidad del anillo",autor: "J.R.R. Tolkien",id: 6},
    {titulo: "El señor de los anillos: Las dos torres",autor: "J.R.R. Tolkien",id: 7},
    {titulo: "El señor de los anillos: El retorno del rey",autor: "J.R.R. Tolkien",id: 8},
];

export const getFetch = new Promise((resolve, reject) => {
  //acciones
    let condicion = true;
    if (condicion) {
        //agrego la asincronicidad
        setTimeout(()=> {
        resolve(libros);
    }, 3000 )
    } else {
    reject("error");
    }
});