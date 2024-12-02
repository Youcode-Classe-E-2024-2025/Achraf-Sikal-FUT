let players = JSON.parse(localStorage.data).players;
players.forEach(player => {
    if (player.position !=="GK") {
        document.getElementById("playerlist").innerHTML +=`<button id="card"><div onClick= "replace(this.id)" id=${players.indexOf(player)} class="bg-[url('/assets/images/rush.webp')] bg-cover bg-no-repeat w-40 h-52 justify-items-center pl-3 pr-3 pt-7 pb-2">
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
    }else if(player.position ==="GK"){
        document.getElementById("playerlist").innerHTML +=`<button id="card"><div onClick= "replace(this.id)" class="bg-[url('/assets/images/rush.webp')] bg-cover bg-no-repeat w-40 h-52  justify-items-center pl-3 pr-3 pt-7 pb-2"  id="${player.name}">
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
    }});