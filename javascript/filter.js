const dataFilter = [
    {
        marka: "Toyota",
        model: ["Camry", "Corolla", "RAV4", "Prius V", "Tundra"],
    },
    {
        marka: "LADA (VAZ)",
        model: ["2106", "2107", "2108", "2109", "21099"]
    },
    {
        marka: "BMW",
        model: ["X5", "X6", "M3", "M4", "X7"]
    },
    {
        marka: "Lexus",
        model: [" LX 600", "LX 500d", "IS 300", "NX 300", "ES 250"]
    }
]

const markaTextInnerHTML = document.querySelector(".markaText");
const search1 = document.querySelector("#search1");

function showMarka() {
    markaTextInnerHTML.innerHTML = `<ul><li class="sifirla"><i class="fa-solid fa-xmark"></i> Sıfırla</li></ul>`
    dataFilter.filter(filter => filter.marka.toLowerCase().includes(search1.value.toLowerCase())).map(item => {
        markaTextInnerHTML.innerHTML += `
        <ul>
            <li>${item.marka}</li>
        </ul>`
    })
}
showMarka()

search1.oninput = function () {
    markaTextInnerHTML.innerHTML = ""
    showMarka()
}


const markaLi = document.querySelectorAll(".markaText li")
markaLi.forEach(item => {
    item.onclick = function () {
        search1.value = item.innerHTML
        markaText.classList.toggle("none")
        modelShow()
        modelDisable()

    }
})

const sifirlaMarka = document.querySelector(".sifirla");

sifirlaMarka.onclick = function () {
    search1.value = " "

    markaText.classList.toggle("none")
    modelDisable()

    modelTextInnerHTML.innerHTML = `  <ul>
    <li class="sifirla"><i class="fa-solid fa-xmark"></i> Sıfırla</li>
</ul>`
    searchModel.setAttribute("disabled", "")

}



const modelTextInnerHTML = document.querySelector(".modelText");


function modelShow() {
    modelTextInnerHTML.innerHTML = `  <ul>
        <li class="sifirlaa"><i class="fa-solid fa-xmark"></i> Sıfırla</li>
    </ul>`
    dataFilter.filter(item => item.marka == search1.value)[0]?.model.map(item => modelTextInnerHTML.firstElementChild.innerHTML += `
<label class="modelCheckbox">
<li class="models" >
${item}

</li>
<input type="checkbox" />

</label>
`)

    const modelLi = document.querySelectorAll(".models");
    modelLi.forEach(item => {
        item.onclick = function () {
            if (!models.includes(item.innerHTML)) {
                models.push(item.innerHTML)
            }
            else {
                models.splice(models.indexOf(item.innerHTML), 1)
            }
            searchModel.value = models;
        }
    })

}
modelShow()

function modelDisable() {
    if (modelTextInnerHTML.firstElementChild.children.length > 1) {
        searchModel.removeAttribute("disabled")
    } else {
        searchModel.setAttribute("disabled", "")
    }

}
modelDisable()





const radioInput = document.querySelectorAll("#name");
const hamisi = document.querySelectorAll(".hamisi");


hamisi.forEach(box => {
    ;
    box.onclick = function () {
        box.style.backgroundColor = "red"
        box.style.color = "white"

    }
})



const elanlariGoster = document.querySelector("#elanlariGoster")


elanlariGoster.onclick = function () {
    show()

}