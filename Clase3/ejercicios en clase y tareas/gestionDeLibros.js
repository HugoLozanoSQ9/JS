function infoDelLibro() {
    const info = console.log(`el título del libro es ${this.titulo} el autor correspondiente es: ${this.autor}, el genero al cual corresponde es: ${this.genero} el año de publicación es: ${this.añoDePublicacion} y la editorial es: ${this.editorial}`)
    return infoDelLibro
}

const libros  ={
    libro1:{
        titulo: 'Música para todos',
        autor: 'Hugo Lozano Rivera',
        genero: 'Educativo',
        añoDePublicacion: 2024,
        editorial: 'Qualitas',
        descripcion: infoDelLibro
    },
    libro2:{
        titulo: 'La vida en el cielo',
        autor: 'Kike Hernandez',
        genero: 'Ciencia',
        añoDePublicacion: 2021,
        editorial: 'Elite',
        descripcion: infoDelLibro
    },
    libro3:{
        titulo: 'Peluche Caligari',
        autor: 'Fede Wolf',
        genero: 'Comedia',
        añoDePublicacion: 2016,
        editorial: 'Nacional',
        descripcion: infoDelLibro
    }
}
console.log('Libro1')
libros.libro1.descripcion()
console.log('Libro2')
libros.libro2.descripcion()
console.log('Libro3')
libros.libro3.descripcion()


