
let cnt = document.querySelectorAll(".numeric")
cnt.forEach(el=> { 
if (Number(el.innerHTML) < 0) {
el.innerHTML = `<b>${el.innerHTML}</b>`
}}
)
