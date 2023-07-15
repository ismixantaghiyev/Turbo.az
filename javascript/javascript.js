let data = [
    {
        id: 1,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F02%2F12%2F58%2F21%2F560a053c-b607-4384-a295-b2a5529cba09%2F98982_hODZgiHJFU6lcmDit43oWw.jpg",
        price: "40 940 $",
        marka: "Toyota",
        year: "2022, 2.5L, 1659 km",
        date: "Bakı, 02.07.2023 13:10",
        model:"Camry"
        // model: ["Alphard", "Auris", "Avalon", "Avensis", "Aygo", "Caldina", "C - HR", "Camry", "Celica", "Corolla", "Corolla Cross", "Corona", "Estima", "FJ Cruiser", "Venza", "Urban Cruiser", "Tundra", "Tercel", "Tacoma", "Surf", "Sienna", "Solara", "Sequoia", "Rush", "Raize", "RAV4", "Proace", "Prius V"]
    },
    {
        id: 2,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F08%2F09%2F55%2F14%2Fe3b2f3ca-af32-4659-96e9-c53929ce4623%2F74306_c568uKCH-XTEP4EPvZj_gg.jpg",
        price: "8 500 AZN",
        marka: "LADA (VAZ) 2115",
        year: "2012, 1.6L, 326 000 km",
        date: "Bakı, 08.07.2023 10:00",
        model:"2115"
        // model: ["2101", "21011", "21013", "2102", "2103", "2104", "21045", "2105", "2106", "2107", "2108", "2109", "21099", "2110", "2111", "2112", "21108", "21123", "2113", "2114", "2115", "Kalina", "Largus", "Largus", "Largus Cross", "Granta", "Niva", " Niva Bronto", "Niva Travel", "Priora", "Oka", "Vesta", "Vesta", "Vesta Cross", "Vesta SW", "Vesta SW Cross"]
    },
    {
        id: 3,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F02%2F15%2F05%2F30%2Ff8ab4779-15c8-4387-96f5-18a4d7d38537%2F60359_Ek7J73fAshZ5NfHYzj5Opw.jpg",
        price: "26 000 $",
        marka: "BMW X5",
        year: "2012, 3.0L, 169 000 km",
        date: "Bakı, 06.07.2023 12:10",
        model:"X5"
    },
    {
        id: 4,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F03%2F09%2F15%2F37%2Fdbee553b-71c8-46b1-8e9d-068396d8a9e4%2F79800_wHtzcBSElTupcoY6UjpPwA.jpg",
        price: "67 900 AZN",
        marka: "Kia Sportage",
        year: "2023, 1.6L, 0 km",
        date: "Bakı, 03.07.2023 09:20",
        model:"Sportage"

    },
    {
        id: 5,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F25%2F00%2F37%2F53%2F8b90db56-00f9-4d7f-b7ec-43eeaa7b4ab7%2F79816_MDjYIgUw0sT11srRLgZmvA.jpg",
        price: "130 500 $",
        marka: "BMW X7",
        year: "2023, 3.0L, 0 km",
        date: "Bakı, 25.06.2023 00:20",
        model:"x7"


    },
    {
        id: 6,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F06%2F21%2F11%2F59%2Ffab0ffb1-806f-49b3-b9f1-409ba600fe5f%2F40114_PQC0t7lcRZR_IWSe_RUKEA.jpg",
        price: "175 500 $",
        marka: "Lexus LX 600",
        year: "2023, 3.5L, 0 km",
        date: "Bakı, 06.07.2023 12:20",
        model:"LX 600"

    },
    {
        id: 7,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F05%2F13%2F23%2F54%2F6f3be4e3-1be6-4d02-bea7-daacfa82414a%2F60361_sdKaaNtC6s0t4GGtnKroCw.jpg",
        price: "36 900 $",
        marka: "BDY Song Plus",
        year: "2022, 0.0L, 0 km",
        date: "Bakı, 05.07.2023 11:20",
        model:"Song Plus"

    },
    {
        id: 8,
        img: "https://turbo.azstatic.com/uploads/f460x343/2022%2F09%2F17%2F13%2F52%2F31%2Fb70e7b8b-f168-4df4-b635-121d60849e3f%2F70012_ooEXtIYne30zEgXRKh-qUw.jpg",
        price: "44 900 $",
        marka: "Mercedes V 220",
        year: "2017, 2.2L, 197 800 km",
        date: "Bakı, 04.07.2023 12:30",
        model:"Camry"

    },
    {
        id: 9,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F09%2F23%2F34%2F03%2F6df9ee4e-e1a2-493f-9070-fcd7b5994308%2F43655_2-tDfRKkXc-50yZh5halBw.jpg",
        price: "26 700 AZN",
        marka: "Volkswagen Passat CC",
        year: "2015, 2.0L, 124 000 km",
        date: "Bakı, dünən 23:42",
        model:"Camry"
    },
    {
        id: 10,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F07%2F17%2F42%2F59%2Fcbaaccba-bb84-4c91-b880-487da18952a9%2F43712_xrjFMml7sqRMtei2pLgyLQ.jpg",
        price: "11 200 AZN",
        marka: "Opel Astra",
        year: "2007, 1.4L, 190 000 km",
        date: "Bakı, 07.07.2023 09:20",
        model:"Camry"
    },
    {
        id: 11,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F25%2F19%2F32%2F04%2F27f57272-0c59-4942-a127-c5c9ac1cc951%2F98866__NJPYbO4GQywVbndBMYQ2g.jpg",
        price: "34 500 AZN",
        marka: "Hyundai Santa Fe",
        year: "2016, 2ş0L, 172 000 km",
        date: "Bakı, 01.07.2023 12:20",
        model:"Camry"
    },
    {
        id: 12,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F02%2F14%2F11%2F12%2F02%2Fc11eecb3-dea1-4cbc-a8c5-360274d814e5%2F69077_JawmFjfztR_6ToSeR94JKQ.jpg",
        price: "29 500 AZN",
        marka: "Ford Fusion",
        year: "2019, 2.0L, 83 000 km",
        date: "Bakı, 05.07.2023 18:12",
        model:"Camry"
    },
    {
        id: 13,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F04%2F20%2F16%2F46%2F01%2F3ed7686b-916b-44e6-a34c-20c0df739b51%2F52118_15PlvSJiF3yUwY1HeAEgZw.jpg",
        price: "223 900 $",
        marka: "Honda Accord",
        year: "2020, 1.5L, 80 000 km",
        date: "Bakı, 06.07.2023 18:12",
        model:"Camry"
    },
    {
        id: 14,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F12%2F17%2F52%2F58%2F6de2bbbb-7e13-4dd5-a6fe-8f8124a9d05f%2F82089_kHF9flH2oQwz_fIsFFG_QA.jpg",
        price: "18 700 AZN",
        marka: "Lexus IS 300",
        year: "2007, 3.0L, 234 000 km",
        date: "Bakı, 11.07.2023 11:02",
        model:"Camry"
    },
    {
        id: 15,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F03%2F31%2F17%2F04%2F58%2F5400beb5-5270-4359-a1c2-deed45b5ee65%2F52830_pt8uBL4WFX6wHUWLbo_4Tw.jpg",
        price: "220 000 $",
        marka: "Mercedes G 63 AMG",
        year: "2020, 4.0L, 52 000 km",
        date: "Bakı, 06.07.2023 14:11",
        model:"Camry"
    },
    {
        id: 16,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F05%2F17%2F20%2F02%2F5bcff6ab-e9e1-46fb-b05e-22c0bcc4b5fc%2F87711_iK9VmcqdJFI_9N4tOzAZEQ.jpg",
        price: "25 500 AZN",
        marka: "Hyundai Santa Fe",
        year: "2011, 2.0L, 212 000 km",
        date: "Bakı, 07.07.2023 18:12",
        model:"Camry"
    },
    {
        id: 17,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F26%2F12%2F10%2F13%2F3c6e139a-b0cb-4972-8242-ee7f9a1d07e1%2F60369_1IO0FUg1Aj1zmhEvCgLUjA.jpg",
        price: "158 500 $",
        marka: "Lexus LX 500d",
        year: "2022, 3.3L, 0 km",
        date: "Bakı, 10.07.2023 21:12",
        model:"Camry"
    },
    {
        id: 18,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F05%2F08%2F13%2F23%2F25%2Fe1f4a315-80ff-40d0-bf18-6d71f0287404%2F86738_ubPNAzQcqK-2yVSegTBiIg.jpg",
        price: "68 500 AZN",
        marka: "MAN TGX 18.440",
        year: "2010, 12L, 1 050 000 km",
        date: "Bakı, 08.07.2023 15:12",
        model:"Camry"
    },
    {
        id: 19,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F05%2F18%2F55%2F19%2Fbce8e32c-40b8-4138-87ba-6fdc70b3a91b%2F40070_xmtwS2IEAiufgRDCA1ppbA.jpg",
        price: "158 500 $",
        marka: "Lexus ES 250",
        year: "2022, 2.5L, 0 km",
        date: "Bakı, 06.07.2023 18:15",
        model:"Camry"
    },
    {
        id: 20,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F16%2F09%2F56%2F08%2F4b25709d-b519-4ad8-ba35-9ab49e568232%2F98863_tTZ7mYHToNL31S_Dtbfc7Q.jpg",
        price: "32 600 $",
        marka: "Lexus NX 300",
        year: "2018, 2.0L, 76 000 km",
        date: "Bakı, 12.07.2023 13:05",
        model:"NX 300"

    },
    {
        id: 21,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F06%2F15%2F16%2F37%2F09%2F7e0079d4-c689-4f84-8a89-b1399f49c525%2F60368_SbiYaDw-cdoq04x7CQNV9A.jpg",
        price: "23 900 $",
        marka: "Toyota Corolla",
        year: "2022, 1.8L, 0 km",
        date: "Bakı, 10.07.2023 21:12",
        model:"Carolla"

    },
    {
        id: 22,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F05%2F09%2F13%2F11%2F09%2Fdb7fcfe4-0a76-41de-97f6-92b3b422a701%2F36596_GPnXJjFU_nBbk0lW0t9PGQ.jpg",
        price: "99 500 $",
        marka: "BMW X6",
        year: "2022, 3.0L, 19 331 km",
        date: "Bakı, 10.07.2023 11:22",
        model:"X6"

    },
    {
        id: 23,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F05%2F24%2F12%2F17%2F26%2F57ea1be4-8f74-4877-960f-33596080f9aa%2F82375_UNBc7arsnIxY8ZgXAnQlqg.jpg",
        price: "4 600 AZN",
        marka: "LADA (VAZ) 2106",
        year: "2004, 1.5L, 50 000 km",
        date: "Bakı, bugün 11:04",
        model:"2106"

    },
    {
        id: 24,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F04%2F01%2F22%2F30%2F04%2F4e023a31-8b07-4348-9378-5a7a79aed41f%2F52788_1eGvAqVpzPYS7cCsTQulBw.jpg",
        price: "45 000 $",
        marka: "Toyot RAV4",
        year: "2022, 2.5L, 0 km",
        date: "Bakı, 29.06.2023 23:12",
        model:"RAV4"

    },
    {
        id: 24,
        img: "https://turbo.azstatic.com/uploads/f460x343/2023%2F07%2F09%2F09%2F30%2F38%2F93c13e0d-68d6-4bbc-82d0-ea5147ea48c9%2F4842_tZQUR8fNn7L3-fdRGp9WBw.jpg",
        price: "6 800 AZN",
        marka: "Toyot RAV4",
        year: "2022, 2.5L, 0 km",
        date: "Bakı, 29.06.2023 23:12",
        model:"RAV4"

    },


]
let models = []

const searchModel = document.querySelector("#search2")

const cartInnerHTML = document.querySelector(".allcart")
function show() {
   
    cartInnerHTML.innerHTML =""
   let dataFilter1= data.filter(item => (item.marka.includes(search1.value)))
   let dataFilter2= data.filter(item => (item.marka.includes(search1.value)&&(searchModel.value.includes(item.model))))
   let dataFilter=models.length>0?dataFilter2:dataFilter1
   


   dataFilter.map(item => (cartInnerHTML.innerHTML += `<div class="cart">
        <div class="image" id="${item.id}">
            <img src="${item.img}">
            <div class="likebutton"><i class="fa-solid fa-heart"></i></i></div>
        </div>
        <h3>${item.price}</h3>
        <p>${item.marka} </p>
        <p>${item.year}</p>
        <span>${item.date}</span>
    </div>`
    ))
}
show()



const likeButtons = document.querySelectorAll(".likebutton");
const secilmisler = document.getElementById("likeCartAll")
let basket = [];
basket = JSON.parse(localStorage.getItem("basket")) || [];

likeButtons.forEach(item => {
    item.onclick = function (e) {
        const heartIcon = item.firstChild
        if (!heartIcon.classList.contains("red")) {
            heartIcon.classList.add("red")
            const id = item.parentNode.id
            const findProduct = data.find(isi => isi.id == id);
            const exs = basket.find(item => item.id == id)
            !exs && basket.push(findProduct);
            localStorage.setItem("basket", JSON.stringify(basket))
        }
        else {
            heartIcon.classList.remove("red")
            basket=basket.filter(car=>car.id!=item.parentNode.id)
            localStorage.setItem("basket", JSON.stringify(basket))
        }

    }
})



const mouseover = document.querySelector(".mouseover");
const text = document.querySelector(".text");

mouseover.addEventListener('mouseover', () => {
    text.style.display = 'block';
});

mouseover.addEventListener('mouseout', () => {
    text.style.display = 'none';
});

text.addEventListener('mouseover', () => {
    text.style.display = 'block';
});

text.addEventListener('mouseout', () => {
    text.style.display = 'none';
});



function liked() {
    likeButtons.forEach(item => {
        const heartIcon = item.firstChild

        let find = basket.find(car => car.id == item.parentNode.id)
        if (find) {
            heartIcon.classList.add("red")
        }
        else {
            heartIcon.classList.remove("red")
        }
    })
}
liked()

const markaclick = document.querySelector(".marka");
const markaText = document.querySelector(".markaText");

markaclick.onclick   = function(){
    markaText.classList.toggle("none")
}


const modelclick = document.querySelector(".model");
const modelText = document.querySelector(".modelText");

modelclick.onclick   = function(){
    modelText.classList.toggle("none")
}



