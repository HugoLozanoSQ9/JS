let koders = [
    
    {
        name: 'Yair',
        lastname:'Guadarrama'
    },{
        name:'maría',
        lastname: 'Moreno'
    },{
        name: 'Akira',
        lastname:'Tanno'
    }
    
]

koders.forEach((koder)=>{
    let fullName = `${koder.name} ${koder.lastname}`
    console.log(fullName)
})
