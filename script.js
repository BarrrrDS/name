
const p = document.getElementById("myText");
p.textContent = "АбобА"
p.innerHTML = '<strong>меня не выгоняют я сам ухожу</strong>'
console.log(p);


function cli() {
    button.style.backgroundColor = "red"
    button.style.fontsize = "3000000px"
    button.innerHTML= "<strong>зачем ты на меня нажал?????</strong>"
    alert("ваш PC будет удален через 30 секунд")
}


const button = document.getElementById("button");
button.addEventListener("click", cli)



p.addEventListener("mouseover", () => {
    p.style.backgroundColor = "red"

    p.style.fontsize = "24px"

    p.style.margin = "55px"
    p.style.padding = "100px"
    p.style.textAlign = "center"
})






function prouzv(a, b) {
    e = a*b

    r = a/b

    if (e>r) {
        return e
    }
    else if(r>e) {
        return r
    }
    else if (r=e) {
        alert('числа одинаковы')
        return e
    }
}
