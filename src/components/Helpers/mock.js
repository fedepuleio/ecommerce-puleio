export const productos = [   
    {id: '1',titulo: "Las Enseñanzas de Don Juan",autor: "Carlos Castañeda", categoria:"ciencia-ficcion",foto: '../assets/jpg/libro.jpg' , precio: 1800, stock:15},
    {id: '2',titulo: "1984",autor: "George Orwell", categoria:"ciencia-ficcion", foto:"../assets/jpg/libro.jpg", precio: 1600, stock:15 },
    {id: '3',titulo: "Un mundo feliz",autor: "Aldous Huxley", categoria:"ciencia-ficcion", foto: '../assets/jpg/libro.jpg', precio: 1200, stock:15},
    {id: '4',titulo: "Rebelión en la Granja",autor: "George Orwell", categoria:"ciencia-ficcion", foto: '../assets/jpg/libro.jpg', precio: 1150, stock:15},
    {id: '5',titulo: "El hombre duplicado",autor: "José Saramago", categoria:"ciencia-ficcionn", foto: '../assets/jpg/libro.jpg', precio: 1460, stock:15},
    {id: '6',titulo: "Ensayo sobre la ceguera",autor: "José Saramago", categoria:"ciencia-ficcion", foto: '../assets/jpg/libro.jpg', precio: 1230, stock:15},
    {id: '7',titulo: "El señor de los anillos: La comunidad del anillo",autor: "J.R.R. Tolkien", categoria:"fantasia", foto: '../assets/jpg/libro.jpg', precio: 1950, stock:15},
    {id: '8',titulo: "El señor de los anillos: Las dos torres",autor: "J.R.R. Tolkien", categoria:"fantasia", foto: '../assets/jpg/libro.jpg', precio: 2100, stock:15 },
    {id: '9',titulo: "El señor de los anillos: El retorno del rey",autor: "J.R.R. Tolkien", categoria:"fantasia", foto: '../assets/jpg/libro.jpg', precio: 1800, stock:15 },
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

