
main = document.getElementById('main')

const vitamina = {
    "id":0,
    "name": "Vitamina C Caja Con 10 Tiras De Tabletas Masticables C/U Sabor Mandarina",
    "detail":"fsdjkljljxlkfjlksdjf kdjfklsdj fsj fks fkdsjlkfjksdjflk hf jsdjhfjsdhfkj",
    "untaxed_price":49400,
    "image_url":"/assets/Imagenes/vitamina C.jpg"
}
const ibuprofeno = {
    "id":0,
    "name": "Ibuprofeno + Metocarbamol 200/500 mg Caja Con 30 Tabletas Recubiertas",
    "detail":"fsdjkljljxlkfjlksdjf kdjfklsdj fsj fks fkdsjlkfjksdjflk hf jsdjhfjsdhfkj",
    "untaxed_price":30400,
    "image_url":"/assets/Imagenes/iboprufeno.jpg"
}
const noxpirin = {
    "id":0,
    "name": "Noxpirin Plus Caja Con 12 Cápsulas COL.",
    "detail":"fsdjkljljxlkfjlksdjf kdjfklsdj fsj fks fkdsjlkfjksdjflk hf jsdjhfjsdhfkj",
    "untaxed_price":12475,
    "image_url":"/assets/Imagenes/noxpirin.jpg"
}
const salDeFrutas = {
    "id":0,
    "name": "Sal De Frutas Lua Plus Polvo Citrus Caja Con 6 Sobres",
    "detail":"fsdjkljljxlkfjlksdjf kdjfklsdj fsj fks fkdsjlkfjksdjflk hf jsdjhfjsdhfkj",
    "untaxed_price":16150,
    "image_url":"/assets/Imagenes/sal de frutas lua.jpg"
}

const card = `
<div class="main-container">
    <div class="card container">
        <img class="imagen" src="${vitamina.image_url}" alt="imagen"/>
        <div class="content">
            <h2 class="title">${vitamina.name}</h2>
            <p class="price">$${vitamina.untaxed_price}</p>
            <div class="foot-card">
                <div class="sum">
                    <button class="operators increment" id="dec"> - </button>
                    <button class="operators value" id="value" disabled>  0 </button>
                    <button class="operators decrement" id="inc"> + </button>     
                </div>
                <div>
                    <button id="carrito" class="add-cart"> Añadir al carrito </button>
                </div>
            </div>
        </div>
    </div>
    <div class="card container">
        <img class="imagen" src="${ibuprofeno.image_url}" alt="imagen"/>
        <div class="content">
            <h2 class="title">${ibuprofeno.name}</h2>
            <p class="price">$${ibuprofeno.untaxed_price}</p>
            <div class="foot-card">
                <div class="sum">
                    <button class="operators increment" id="dec"> - </button>
                    <button class="operators value" id="value" disabled>  0 </button>
                    <button class="operators decrement" id="inc"> + </button>     
                </div>
                <div>
                    <button id="carrito" class="add-cart"> Añadir al carrito </button>
                </div>
            </div>
        </div>
    </div>
    <div class="card container">
        <img class="imagen" src="${noxpirin.image_url}" alt="imagen"/>
        <div class="content">
            <h2 class="title">${noxpirin.name}</h2>
            <p class="price">$${noxpirin.untaxed_price}</p>
            <div class="foot-card">
                <div class="sum">
                    <button class="operators increment" id="dec"> - </button>
                    <button class="operators value" id="value" disabled>  0 </button>
                    <button class="operators decrement" id="inc"> + </button>     
                </div>
                <div>
                    <button id="carrito" class="add-cart"> Añadir al carrito </button>
                </div>
            </div>
        </div>
    </div>
    <div class="card container">
        <img class="imagen" src="${salDeFrutas.image_url}" alt="imagen"/>
        <div class="content">
            <h2 class="title">${salDeFrutas.name}</h2>
            <p class="price">$${salDeFrutas.untaxed_price}</p>
            <div class="foot-card">
                <div class="sum">
                    <button class="operators increment" id="dec"> - </button>
                    <button class="operators value" id="value" disabled>  0 </button>
                    <button class="operators decrement" id="inc"> + </button>     
                </div>
                <div>
                    <button id="carrito" class="add-cart"> Añadir al carrito </button>
                </div>
            </div>
        </div>
    </div>
</div>
`

function total(){
    const decrement =  document.querySelectorAll('dec');
    const increment = document.getElementById('inc');
    const value = document.getElementById('value');
    let number = 0;
    decrement.forEach(function(e) {
        e.addEventListener('click', ()=>{     
            value.innerHTML = number + 1;
            number++;
        })
    });
    decrement.forEach(function(e) {
        e.addEventListener('click', ()=>{
            if(number <= 0){
                value.innerHTML = 0;
            }else {
                value.innerHTML = number - 1;
                number--;
            }
        })
    });
}

main.innerHTML=card

document.addEventListener('load', total());