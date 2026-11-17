const cl=console.log;

const cars =document.getElementById("cars");

function onFilter(eve){
    let val = eve.target.value;
    let allDivs =[...document.querySelectorAll('.all')]
    allDivs.forEach(d=>{
        d.classList.add('d-none')
    })

    let selectedDivs=[...document.getElementsByClassName(val)]
    selectedDivs.forEach(d=>{
        d.classList.remove('d-none')
    })
}



cars.addEventListener("change" , onFilter)