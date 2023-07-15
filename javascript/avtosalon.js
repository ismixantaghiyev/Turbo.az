const avtosalonData = [
    {
        image:"https://i.pinimg.com/originals/b9/2b/f1/b92bf19612e524ac1f9d5e998770eba7.jpg",
        name:"Abşeron Mercedes-Benz",
        about:"Abşeron Avtomobil Mərkəzi Mercedes-Benz markasının Azərbaycandakı rəsmi dileridir.",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"3 elan",
        id:"1",
        link:"https://turbo.az/avtosalonlar/mercedes-benz-absheron"
    },
    {
        image:"https://etimg.etb2bimg.com/photo/67756752.cms",
        name:"ASIA Motors - MG",
        about:"Əfsanəvi Britaniya Əsilli MG (Morris Garages) markasının Azərbaycanda yeganə...",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"13 elan",
        id:"2",
        link:"https://turbo.az/avtosalonlar/asia-motors-mg"
    },
    {
        image:"https://mashin.al/storage/4178171/asia-haima.png",
        name:"ASIA Motors - Haima",
        about:"ASIA Motors” 1992 ci ildən avtomobil istehsal edən Haima markasının Azərbaycanda rəsmi...",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"4 elan",
        id:"3",
        link:"https://turbo.az/avtosalonlar/asia-motors-haima"
    },
    {
        image:"https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854",
        name:"Audi Azərbaycan",
        about:"Dream Auto MMC şirkəti Audi brendinin Azərbaycanda rəsmi distribütorudur.",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"17 elan",
        id:"4",
        link:"https://turbo.az/avtosalonlar/audi-azerbaijan"
    },
    {
        image:"https://www.carlogos.org/logo/Jaguar-logo-2012-1920x1080.png",
        name:"Autolux Azerbaijan - Jaguar",
        about:"Avtolüks Azərbaycan MMC - Jaguar avtomobillərinin Azərbaycanda rəsmi...",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"13 elan",
        id:"5",
        link:"https://turbo.az/avtosalonlar/jaguar-azerbaijan"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fiat_Automobiles_logo.svg/2048px-Fiat_Automobiles_logo.svg.png",
        name:"Autolux Azerbaijan - Fiat",
        about:"Avtolüks Azərbaycan MMC - Fiat avtomobillərinin Azərbaycanda rəsmi ",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"9 elan",
        id:"6",
        link:"https://turbo.az/avtosalonlar/fiat-azerbaijan"
    },
    {
        image:"https://di-uploads-development.dealerinspire.com/kendalldodgechryslerjeepram1/uploads/2018/01/Dodge_Logo1.jpg",
        name:"Autolux Azerbaijan - Dodge",
        about:"DODGE avtomobillərinin Azərbaycanda rəsmi düstribüteri Avtolüks Azərbaycan...",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"12 elan",
        id:"7",
        link:"https://turbo.az/avtosalonlar/dodge-azerbaijan"
    },
    {
        image:"https://logos-world.net/wp-content/uploads/2021/09/Jeep-Logo.png",
        name:"Autolux Azerbaijan - Jeep",
        about:"JEEP avtomobillərinin Azərbaycanda rəsmi distribütoru Avtolüks Azərbaycan MMC-dir. ",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"7 elan",
        id:"8",
        link:"https://turbo.az/avtosalonlar/jeep-azerbaijan"
    },
    {
        image:"https://logowik.com/content/uploads/images/land-rover9557.jpg",
        name:"Autolux Azerbaijan - Land Rover",
        about:"Avtolüks Azərbaycan MMC - Land Rover avtomobillərinin Azərbaycanda rəsmi... ",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"11 elan",
        id:"9",
        link:"https://turbo.az/avtosalonlar/landrover-azerbaijan"
    },
    {
        image:"https://www.motorbiscuit.com/wp-content/uploads/2023/03/Bentley-Logo.jpg",
        name:"Bentley Baku",
        about:"Bentley Motors-un Azərbaycanda rəsmi nümayəndəsi.",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"5 elan",
        id:"10",
        link:"https://turbo.az/avtosalonlar/bentley"
        
    },
    {
        image:"https://logowik.com/content/uploads/images/487_infiniti_logo.jpg",
        name:"Infınıtı Azərbaycan",
        about:"Nurgün Motors şirkəti INFINITI brendinin Azərbaycanda rəsmi distribütorudur.",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"5 elan",
        id:"11",
        link:"https://turbo.az/avtosalonlar/infiniti-azerbaijan"
    },
    {
        image:"https://logohistory.net/wp-content/uploads/2023/01/Porsche-Logo.svg",
        name:"Porsche Bakı Mərkəzi",
        about:"Sizi Porsche dünyasına və əfsanəvi Porsche avtomobillərini müxtəlif...",
        number:"(055) 286 98 11, (055) 976 22 45, (012) 544 23 12",
        elan:"6 elan",
        id:"12",
        link:"https://turbo.az/avtosalonlar/porshe-baki-merkezi"
    },

]

const avtosalonInnetHTML = document.querySelector(".avtosalonAll")
function show(){
    avtosalonData.map(item=>{
        avtosalonInnetHTML.innerHTML +=`
        <a href="${item.link}">
        <div class="contentAvto">
        <div class="imgAvto"><img src="${item.image}"></div>
        <div class="textAllAvto">
            <h1>${item.name}</h1>
            <div class = "textsAvto"><p>${item.about}</p></div>
            <div>
                <i class="fa-solid fa-phone"></i><span>${item.number}</span>
            </div>
            <span>${item.elan}</span>
        </div>
    </div>
    </a>`
    })
}

show()