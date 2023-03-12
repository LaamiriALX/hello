const display = document.getElementById("display")
let courses = document.getElementById('courses')
const cours = document.getElementById("cours")
const coursesListe = [
    {
        tetle : "java script Tutorial" ,
        discreption : "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.",
        price : " 19 $ ",
        category : "Development",
        image :  "imgs/Moralis-Blogpost-JavaScript-Explained-07272021-V12.png",
        reting :        
        `
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        `,
        duration : "13H",
        professor : " Mr Laamiri "

    },
    {
        tetle : "Design Tutorial" ,
        discreption : "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.",
        price : " 19 $ ",
        category : "Design",
        image :  "imgs/conception-mot-ecrit-au-dessus-formes-3d-geometriques-colorees_2227-1663.png",
        reting : 
        `
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        `,
        duration : "13H",
        professor : " Mr Laamiri "
    },
    {
        tetle : "Css Tutorial" ,
        discreption : "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.",
        price : " 19 $ ",
        category : "Development",
        image :  "imgs/introduction-CSS-web-og-v1.png",
        reting : 
        `
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        `,
        duration : "13H",
        professor : " Mr Laamiri "

    },
    {
        tetle : "Design Tutorial" ,
        discreption : "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.",
        price : " 19 $ ",
        category : "Design",
        image :  "imgs/design.jpg",
        reting :        
        `
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        `,
        duration : "13H",
        professor : " Mr Laamiri "
    },
    {
        tetle : "Ecommerce Tutorial" ,
        discreption : "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.",
        price : " 19 $ ",
        category : "Ecommerc",
        image :  "imgs/meilleur-cms-ecommerce.jpg",
        reting : 
        `
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        `,
        duration : "17H",
        professor : " Mr Laamiri "

    },
    {
        tetle : "Marketing Tutorial" ,
        discreption : "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.",
        price : " 19 $ ",
        category : "Marketing",
        image :  "imgs/what-is-marketing.png",
        reting : 
        `
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        `,
        duration : "11H",
        professor : " Mr Laamiri "


    },
    {
        tetle : "Ecommerce Tutorial" ,
        discreption : "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.",
        price : " 19 $ ",
        category : "Ecommerc",
        image :  "imgs/why-ecommerce-is-important-with-business.png",
        reting : 
        `
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        <span class="material-symbols-rounded">grade</span>  
        `,
        duration : "13H",
        professor : " Mr Laamiri "
        
    }
]
for ( let x = 0 ; x < coursesListe.length ; x++ ){
    courses.innerHTML +=
    `
        <div  onclick="clik(${x})" class="cours" id="cours">
            <img src="${coursesListe[x].image} " alt="">
            <h1>${coursesListe[x].tetle}     </h1>
            <p> ${ coursesListe[x].discreption} </p>
            <h3> the price is onli <span>${ coursesListe[x].price}</span> </h3>
            <p> ${ coursesListe[x].reting} </p>
        </div>
    `
}
function allCategorys(){
    courses.innerHTML ="";
    for ( let s = 0 ; s < coursesListe.length ; s++ ){
        courses.innerHTML +=`
            <div onclick="clik(${s})"  class="cours" id="cours">
                <img src="${coursesListe[s].image} " alt="">
                <h1>${coursesListe[s].tetle}     </h1>
                <p> ${ coursesListe[s].discreption} </p>
                <h3> the price is onli <span>${ coursesListe[s].price}</span> </h3>
                <p> ${ coursesListe[s].reting} </p>
            </div>
        `
    }
}

function  filter(a){
    courses.innerHTML ="";
    for(let i=0 ; i< coursesListe.length  ; i++){          
        if( coursesListe[i].category ===a){
            courses.innerHTML += `
                <div onclick=" clik(${i})"  class="cours" id="cours">
                    <img src="${coursesListe[i].image} " alt="">
                    <h1>${coursesListe[i].tetle}     </h1>
                    <p> ${ coursesListe[i].discreption} </p>
                    <h3> the price is onli <span>${ coursesListe[i].price}</span> </h3>
                    <p> ${ coursesListe[i].reting} </p>
                </div>
            `
        }
    }
    
}
let tetel_helper=''
let price_helper=''
let image_helper=''
function clik(b){
    courses.innerHTML =`
    <div id="display"></div>
    <div class="detels">
        <h1 id ="tetle"> ${coursesListe[b].tetle}</h1>
        <div class="det">
            <img src="${coursesListe[b].image}" alt="">
            <div class="discreption">
                <p> 
                    <span>discreption : </span>
                    ${ coursesListe[b].discreption}
                </p>
                <h3> The price is onli <span> ${ coursesListe[b].price}</span> </h3>
                <h3> Duration of the course <span> ${ coursesListe[b].duration}</span> </h3>
                <h3>  Course professor <span> ${ coursesListe[b].professor}</span> </h3>
                <h3>  Course evaluation <span> ${ coursesListe[b].reting}</span> </h3>
                </div>
        </div>
        <ul>
            <li >
                <img src="${coursesListe[b].image}" alt="">
            </li>
            <li >
                <img src="${coursesListe[b].image}" alt="">
            </li>
            <li >
                <img src="${coursesListe[b].image}" alt="">
            </li>
        </ul>
        <button onclick="Buy()">Buy now</button>

    </div>
    `
    tetel_helper=coursesListe[b].tetle
    price_helper = coursesListe[b].price
    image_helper = coursesListe[b].image
}
let cart = document.getElementById("cart")
let Shopping_cart =[]
function Buy(){
    let new_sall = {
        tetle : tetel_helper,
        price : price_helper,
        image : image_helper
    }
    Shopping_cart.push(new_sall)
    show()
}
function show(){
    let tab=''
    for(let i=0 ; i<Shopping_cart.length ; i++){
        tab += `
            <div class="course-buy">
                <img src=" ${Shopping_cart[i].image} " alt="">
                <h4> ${Shopping_cart[i].tetle}</h4>
                <p> ${Shopping_cart[i].price}</p>
                <button >Buy</button>
            </div>
        `
        cart.innerHTML=tab
    }
}


