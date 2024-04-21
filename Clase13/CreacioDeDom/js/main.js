let koders = [
    {
        name:'Israel',
        lastName:'Salinas Martinez'
    }
]
const createKoderItem = (koderObjet) =>{
    
    let{name,lastName} = koderObjet
    let koderFullName = `${name} ${lastName}`

    let koderListItem = document.createElement('li')
    koderListItem.classList.add('list-group-item')

    let koderItemText = document.createTextNode(koderFullName)
    koderListItem.append(koderItemText)

    return koderListItem
}



console.log(printKodersList = (kodersArray , wrapperId)=>{
    let wrapper=document.getElementById(wrapperId)
    kodersArray.forEach ((koder) =>{
        let koderItem = createKoderItem(koder)
        console.log(koderItem)
        wrapper.append(koderItem)
    })
})

console.log(createKoderItem({
    
        name:'Israel',
        lastName:'Salinas Martinez'
    
}))