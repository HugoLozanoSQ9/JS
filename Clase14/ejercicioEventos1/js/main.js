let inputs = document.querySelectorAll('.box')
let elementos = document.querySelectorAll('.elemento')
let all = [{inputs,elementos}]


all.forEach((par)=>{
    let {inputs,elementos} = par
    inputs.forEach((input,i)=>{
        input.addEventListener('change',(event)=>{
            let evento =event.target.checked
            evento ? elementos[i].classList.add('d-none') : elementos[i].classList.remove('d-none')
        })
    })
})

