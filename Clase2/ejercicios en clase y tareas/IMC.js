let calculoImc = (peso, altura) =>{
    console.log('Hola tu peso es:',peso(), 'kg',  'y tu altura es:', altura(),'m' )
    const Imc = peso() / (altura()*2)
    console.log('Por lo que tu indice de masa corporal es:', Imc)
    return Imc
}



let peso = () => 72
let altura  = () => 1.60

let x = calculoImc(peso,altura)


let rangoDePeso = () => {
    if (x >= 30){
        console.log(`Lamento comentarte que tu IMC es de ${x} y te encuentras en el rango de obesidad por lo que es muy importante que comiences una dieta o a hacer ejercicio`)
    }else if(25<= x && x <29.9 ){
        console.log(`Lamento comentarte que tu IMC es de ${x} y te encuentras en el rango de sobrepeso por lo que es muy importante que comiences una dieta o a hacer ejercicio`)        
    }else if(18.5<= x && x <24.9){
        console.log(`Para mi es un placer informarle que su IMC es de ${x} por lo que te encuentras en un peso saludable`)
    }else{
        console.log(`Lamento comentarte que tu IMC es de ${x} y estas bajo de peso :c, debes de comer mas`)
    }
}
   


rangoDePeso()


