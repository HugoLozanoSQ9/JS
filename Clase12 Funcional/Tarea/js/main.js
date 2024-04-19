let koders = [
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },
    {
        name:'Israel',
        lastName:'Salinas Martinez',
        pasatiempo:'Programar',
        school:'Kodemia'
    },

]

const createCard = (school,name,lastName,pasatiempo) =>{

    let cardTypeClass = document.createElement('div')
    cardTypeClass.classList.add('card','col', 'col-md-6','col-lg-4')

    let cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header') 
    //agregar header por arg.
    cardHeader.append(school)

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    let cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    cardTitle.append(name, lastName)
    //agregar h5 mediante arg

    let cardParagraph = document.createElement('p')
    cardParagraph.classList.add('card-text')
    cardParagraph.append(`pasatiempo: ${pasatiempo}`)
    //agregar p mediante arg

    cardTypeClass.append(cardHeader,cardBody,cardTitle,cardParagraph)
    return cardTypeClass

}

let cardWrapper = document.getElementById('card-wrapper')

koders.forEach((koder) =>{
    let newCard = createCard(koder.school,koder.name,koder.lastName,koder.pasatiempo)
    cardWrapper.append(newCard)
})

