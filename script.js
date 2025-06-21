function calcular(){
    const valinput = document.querySelector("#val").value
    const val = Number(valinput)
    const options = document.querySelectorAll(".num")

    if(valinput == ""){
        alert("Informe um número!")
        return
    }
    
    function calculo(){
        let resultado1 = 1*val
        let resultado2 = 2*val
        let resultado3 = 3*val
        let resultado4 = 4*val
        let resultado5 = 5*val
        let resultado6 = 6*val
        let resultado7 = 7*val
        let resultado8 = 8*val
        let resultado9 = 9*val
        let resultado10 = 10*val

        options[0].innerHTML = (`${val} x 1 = ${resultado1}`)
        options[1].innerHTML = (`${val} x 2 = ${resultado2}`)
        options[2].innerHTML = (`${val} x 3 = ${resultado3}`)
        options[3].innerHTML = (`${val} x 4 = ${resultado4}`)
        options[4].innerHTML = (`${val} x 5 = ${resultado5}`)
        options[5].innerHTML = (`${val} x 6 = ${resultado6}`)
        options[6].innerHTML = (`${val} x 7 = ${resultado7}`)
        options[7].innerHTML = (`${val} x 8 = ${resultado8}`)
        options[8].innerHTML = (`${val} x 9 = ${resultado9}`)
        options[9].innerHTML = (`${val} x 10 = ${resultado10}`)
    }

    options.forEach(elment => calculo())

}