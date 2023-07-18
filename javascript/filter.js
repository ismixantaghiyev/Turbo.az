const dataFilter = [
    {
        marka: "Toyota",
        model: ["Camry", "Corolla", "RAV4", "Prius V", "Tundra"],
    },
    {
        marka: "LADA (VAZ)",
        model: ["2106", "2107", "2108", "2109", "Priora"]
    },
    {
        marka: "BMW",
        model: ["X5", "X6", "M3", "M4", "X7"]
    },
    {
        marka: "Lexus",
        model: [" LX 600", "LX 500d", "IS 300", "NX 300", "ES 250"]
    },
    {
        marka: "Mercedes",
        model: [" S 600", "G 63 AMG", "CLA 250", "GLS 450", "S 350 d", "V 220"]
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
    searchClick()
}
showMarka()

search1.oninput = function () {
    markaTextInnerHTML.innerHTML = ""
    showMarka()
}


function searchClick() {
    const markaLi = document.querySelectorAll(".markaText li")
    markaLi.forEach(item => {
        item.onclick = function () {
            search1.value = item.innerHTML
            markaText.classList.toggle("none")
            modelShow()
            modelDisable()
            searchModel.value = ""
            console.log(models);
            models = []
        }
    })

}


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
        <li class="sifirlaModel"><i class="fa-solid fa-xmark"></i> Sıfırla</li>
    </ul>`
    dataFilter.filter(item => item.marka == search1.value)[0]?.model.map(item => modelTextInnerHTML.firstElementChild.innerHTML += `
    <label class="modelCheckbox">
    <li class="models" >
    ${item}
    </li>
    <input id="disableNone" type="checkbox"  />
    </label>
    `)


    const sifirlaModel = document.querySelector(".sifirlaModel")
    const nullEl = document.querySelectorAll("#disableNone")
    sifirlaModel.onclick = function () {
        searchModel.value = "";
        modelText.classList.toggle("none")
        nullEl.forEach(item => {
            if (item.checked == true) {
                item.checked = false
            }
        })
        models = [];

    }

    const modelLi = document.querySelectorAll(".models");
    modelLi.forEach(item => {
        item.onclick = function () {
            let sx = item.innerHTML.trim()

            if (!models.includes(sx)) {
                models.push(sx)
            }
            else {
                models.splice(models.indexOf(sx), 1)
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


function elanlar() {

    const elanlariGoster = document.querySelector("#elanlariGoster")
    elanlariGoster.onclick = function () {
        likePr()
        show()

        // modelText.classList.toggle("none")
    }
}
elanlar()



// const label = document.querySelectorAll(".labelRadio");
// const radioInput = document.querySelector("#name");
// const divLabel = document.querySelectorAll(".hamisi");

// label.forEach(lab => {
//     lab.onclick  = function () {
//         radioInput.classList.toggle("label")
//     }
// })

const kreditBtn = document.querySelector(".kredit");

kreditBtn.onclick = function () {
    // kreditBtn.style.backgroundColor = "white";
    // kreditBtn.style.color = "black"
    kreditBtn.classList.toggle("kredits")
}