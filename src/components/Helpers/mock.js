export const productos = [   
    {id: '1',titulo: "Las Enseñanzas de Don Juan",autor: "Carlos Castañeda", categoria:"Ciencia Ficción",foto: './assets/jpg/libro.jpg' , precio: 1800},
    {id: '2',titulo: "1984",autor: "George Orwell",categoria:"Ciencia Ficción", foto:"../assets/jpg/libro.jpg", precio: 1600 },
    {id: '2',titulo: "Un mundo feliz",autor: "Aldous Huxley",categoria:"Ciencia Ficción", foto: './assets/jpg/libro.jpg', precio: 1200},
    {id: '3',titulo: "Rebelión en la Granja",autor: "George Orwell",categoria:"Ciencia Ficción", foto: './assets/jpg/libro.jpg', precio: 1150},
    {id: '4',titulo: "El hombre duplicado",autor: "José Saramago",categoria:"Ciencia Ficción", foto: './assets/jpg/libro.jpg', precio: 1460},
    {id: '5',titulo: "Ensayo sobre la ceguera",autor: "José Saramago",categoria:"Ciencia Ficción", foto: './assets/jpg/libro.jpg', precio: 1230},
    {id: '6',titulo: "El señor de los anillos: La comunidad del anillo",autor: "J.R.R. Tolkien",categoria:"Fantasía", foto: './assets/jpg/libro.jpg', precio: 1950},
    {id: '7',titulo: "El señor de los anillos: Las dos torres",autor: "J.R.R. Tolkien",categoria:"Fantasía", foto: './assets/jpg/libro.jpg', precio: 2100 },
    {id: '8',titulo: "El señor de los anillos: El retorno del rey",autor: "J.R.R. Tolkien",categoria:"Fantasía", foto: './assets/jpg/libro.jpg', precio: 1800 },
];

export const getFetch = new Promise((resolve, reject) => {
  //acciones
    let condicion = true;
    if (condicion) {
        //agrego la asincronicidad
        setTimeout(()=> {
        resolve(productos);
    }, 3000 )
    } else {
    reject("error");
    }
});

