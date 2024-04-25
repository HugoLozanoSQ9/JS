let checkboxes = document.querySelectorAll('.control-checkbox')
let elements = document.querySelectorAll('.target-element')

checkboxes.forEach((checkbox, index) => {
    checkbox.setAttribute('data-target-index', index)
    checkbox.addEventListener('click', (event) => {
//        console.log(event)
        console.log(event.target.dataset.targetIndex)
        event.target.checked ? elements[elementIndex].classList.add('d-none') : elements[elementIndex].classList.remove('d-none')
    })
})

let test = document.getElementById('test')
console.log(test)
console.log(test.dataset)
console.log(test.dataset.sourceUr1)
