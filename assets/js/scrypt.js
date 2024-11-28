fetch('./data.json').then((response) => response.json()).then((json) => localStorage.setItem("data",JSON.stringify(json)));
    

function formtiongen(){
    let forma = document.getElementById("formation").value
    switch(forma){
        case "433":
            document.getElementById("st").classList.value="z-10 relative w-full h-28 col-start-5 translate-y-4 hover:scale-125"
            document.getElementById("lw").classList.value="z-10 relative w-full col-start-2 row-start-1 h-28 translate-y-5 hover:scale-125"
            document.getElementById("rw").classList.value="z-10 relative w-full col-start-8 row-start-1 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cmc").classList.value="z-10 relative w-full col-start-5 row-start-2 h-28 translate-y-14 hover:scale-125"
            document.getElementById("cml").classList.value="z-10 relative w-full col-start-3 row-start-2 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cmr").classList.value="z-10 relative w-full col-start-7 row-start-2 h-28 translate-y-5 hover:scale-125"
            document.getElementById("lb").classList.value="z-10 relative w-full col-start-2 row-start-4 h-28  hover:scale-125"
            document.getElementById("cbl").classList.value="z-10 relative w-full col-start-4 row-start-4 h-28 -translate-y-5 hover:scale-125"
            document.getElementById("cbr").classList.value="z-10 relative w-full col-start-6 row-start-4 h-28 -translate-y-5 hover:scale-125"
            document.getElementById("rb").classList.value="z-10 relative w-full col-start-8 row-start-4 h-28  hover:scale-125"
            document.getElementById("gk").classList.value="z-10 relative w-full col-start-5 row-start-5 h-28  hover:scale-125"
            break;
        case "352":
            document.getElementById("st").classList.value="z-10 relative w-full h-28 col-start-4 translate-y-4 hover:scale-125"
            document.getElementById("lw").classList.value="z-10 relative w-full col-start-6 row-start-1 h-28 translate-y-5 hover:scale-125"
            document.getElementById("rw").classList.value="z-10 relative w-full col-start-2 row-start-2 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cmc").classList.value="z-10 relative w-full col-start-3 row-start-2 h-28 translate-x-6 translate-y-20 hover:scale-125"
            document.getElementById("cml").classList.value="z-10 relative w-full col-start-5 row-start-2 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cmr").classList.value="z-10 relative w-full col-start-7 row-start-2 h-28 -translate-x-6 translate-y-20 hover:scale-125"
            document.getElementById("lb").classList.value="z-10 relative w-full col-start-8 row-start-2 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cbl").classList.value="z-10 relative w-full col-start-2 row-start-4 h-28  hover:scale-125"
            document.getElementById("cbr").classList.value="z-10 relative w-full col-start-5 row-start-4 h-28 -translate-y-2 hover:scale-125"
            document.getElementById("rb").classList.value="z-10 relative w-full col-start-8 row-start-4 h-28  hover:scale-125"
            document.getElementById("gk").classList.value="z-10 relative w-full col-start-5 row-start-5 h-28  hover:scale-125"
            break;
        case "442":
            document.getElementById("st").classList.value="z-10 relative w-full h-28 col-start-4 translate-y-4 hover:scale-125"
            document.getElementById("lw").classList.value="z-10 relative w-full col-start-6 row-start-1 h-28 translate-y-5 hover:scale-125"
            document.getElementById("rw").classList.value="z-10 relative w-full col-start-2 row-start-2 h-28 translate-y-10 hover:scale-125"
            document.getElementById("cmc").classList.value="z-10 relative w-full col-start-4 row-start-2 h-28 translate-y-20 hover:scale-125"
            document.getElementById("cml").classList.value="z-10 relative w-full col-start-6 row-start-2 h-28 translate-y-20 hover:scale-125"
            document.getElementById("cmr").classList.value="z-10 relative w-full col-start-8 row-start-2 h-28 translate-y-10 hover:scale-125"
            document.getElementById("lb").classList.value="z-10 relative w-full col-start-2 row-start-4 h-28  hover:scale-125"
            document.getElementById("cbl").classList.value="z-10 relative w-full col-start-4 row-start-4 h-28 translate-y-5 hover:scale-125"
            document.getElementById("cbr").classList.value="z-10 relative w-full col-start-6 row-start-4 h-28 translate-y-5 hover:scale-125"
            document.getElementById("rb").classList.value="z-10 relative w-full col-start-8 row-start-4 h-28  hover:scale-125"
            document.getElementById("gk").classList.value="z-10 relative w-full col-start-5 row-start-5 h-28  hover:scale-125"
            break;
        case "532":
            document.getElementById("st").classList.value="z-10 relative w-full h-28 col-start-4 translate-y-4 hover:scale-125"
            document.getElementById("lw").classList.value="z-10 relative w-full col-start-6 row-start-1 h-28 translate-y-5 hover:scale-125"
            document.getElementById("rw").classList.value="z-10 relative w-full col-start-2 row-start-4 h-28 -translate-y-14 -translate-x-6 hover:scale-125"
            document.getElementById("cmc").classList.value="z-10 relative w-full col-start-3 row-start-2 h-28 translate-y-14 hover:scale-125"
            document.getElementById("cml").classList.value="z-10 relative w-full col-start-5 row-start-2 h-28 translate-y-14 hover:scale-125"
            document.getElementById("cmr").classList.value="z-10 relative w-full col-start-7 row-start-2 h-28 translate-y-14 hover:scale-125"
            document.getElementById("lb").classList.value="z-10 relative w-full col-start-8 row-start-4 h-28 -translate-y-14 translate-x-6 hover:scale-125"
            document.getElementById("cbl").classList.value="z-10 relative w-full col-start-3 row-start-4 h-28 hover:scale-125"
            document.getElementById("cbr").classList.value="z-10 relative w-full col-start-5 row-start-4 h-28 -translate-y-2 hover:scale-125"
            document.getElementById("rb").classList.value="z-10 relative w-full col-start-7 row-start-4 h-28  hover:scale-125"
            document.getElementById("gk").classList.value="z-10 relative w-full col-start-5 row-start-5 h-28  hover:scale-125"
            break;
    }
}




let players = JSON.parse(localStorage.data).players;
function playeradder(id) {
    document.getElementById("playerSelect").innerHTML = '';
    players.forEach(player => {
        if(player.position !=="GK" && id.toUpperCase()==player.position){
            document.getElementById("playerSelect").innerHTML +=`<button id="card"><div onClick= "" id="${player.name}" class="bg-[url('/assets/images/badge_total_rush.webp')] bg-cover bg-no-repeat w-40 h-52 justify-items-center pl-3 pr-3 pt-7 pb-2">
            <div class="flex ">
                <div class="mr-[-10px] mt-5 text-xl font-bold text-white leading-3">
                    <p>${player.rating}</p>
                    <p class="text-lg">${player.position}</p>
                </div>
                
                <img class="ml-[-9px] mt-1 mb-[-10px] z-10" src="${player.photo}" style="mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 8%);" width="100" alt="">
            </div>
            
            <h1 class="font-bold text-white z-20 text-sm">${player.name}</h1>
            <div class="text-white text-[8px] flex gap-1 font-black justify-items-center">
                <ul>
                    <li>PAC</li>
                    <li>${player.pace}</li>
                </ul>
                <ul>
                    <li>SHO</li>
                    <li>${player.shooting}</li>
                </ul>
                <ul>
                    <li>PAS</li>
                    <li>${player.passing}</li>
                </ul>
                <ul>
                    <li>DRI</li>
                    <li>${player.dribbling}</li>
                </ul>
                <ul>
                    <li>DEF</li>
                    <li>${player.defending}</li>
                </ul>
                <ul>
                    <li>PHY</li>
                    <li>${player.physical}</li>
                </ul>
            </div>
            <div class="flex gap-3 mt-1">
                <img src="${player.flag}" width="12" alt="">
                <img src="${player.logo}" width="12" alt="">
            </div>
        </div></button>`
        }else if(player.position ==="GK" && id.toUpperCase()==player.position){
            document.getElementById("playerSelect").innerHTML +=`<button id="card"><div onClick= "" class="bg-[url('/assets/images/badge_total_rush.webp')] bg-cover bg-no-repeat w-40 h-52  justify-items-center pl-3 pr-3 pt-7 pb-2"  id="${player.name}">
            <div class="flex ">
                <div class="mr-[-10px] mt-5 text-xl font-bold text-white leading-3">
                    <p>${player.rating}</p>
                    <p class="text-lg">${player.position}</p>
                </div>
                
                <img class="ml-[-9px] mt-1 mb-[-10px] z-10" src="${player.photo}" style="mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 8%);" width="100" alt="">
            </div>
            
            <h1 class="font-bold text-white z-20 text-sm">${player.name}</h1>
            <div class="text-white text-[8px] flex gap-1 font-black justify-items-center">
                <ul>
                    <li>DIV</li>
                    <li>${player.diving}</li>
                </ul>
                <ul>
                    <li>REF</li>
                    <li>${player.reflexes}</li>
                </ul>
                <ul>
                    <li>SPD</li>
                    <li>${player.speed}</li>
                </ul>
                <ul>
                    <li>POS</li>
                    <li>${player.positioning}</li>
                </ul>
                <ul>
                    <li>KIC</li>
                    <li>${player.kicking}</li>
                </ul>
                <ul>
                    <li>HAN</li>
                    <li>${player.handling}</li>
                </ul>
            </div>
            <div class="flex gap-3 mt-1">
                <img src="${player.flag}" width="12" alt="">
                <img src="${player.logo}" width="12" alt="">
            </div>
        </div></button>`
        }
    });
}
let posid ="";
function add(idpl){
    document.getElementById("addpop").classList.toggle("hidden")
    document.getElementById("addpop").classList.toggle("flex")
    posid=idpl;
}

function cancle(event) {
    let tar = event.target.id;
    
    if(tar!=="playerSelect"){
        document.getElementById("addpop").classList.toggle("hidden")
        document.getElementById("addpop").classList.toggle("flex")
    }
}
// document.getElementById("").replaceChild(document.getElementById(""))
// const newNode = document.getElementById("Joshua Kimmich");
// const element = document.getElementById("st").children[0];

// document.getElementById("st").firstChild.replaceWith(document.getElementById("Joshua Kimmich"));
