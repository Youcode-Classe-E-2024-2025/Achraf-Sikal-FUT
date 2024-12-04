function rest() {
    fetch('./data.json').then((response) => response.json()).then((json) => {localStorage.setItem("data",JSON.stringify(json))});
}
let players = JSON.parse(localStorage.data).players;
players.forEach(player => {
    if (player.position !=="GK") {
        document.getElementById("playerlist").innerHTML +=`
        <button id=${player.id} class="grid">
        <div class="bg-[url('/assets/images/rush.webp')] bg-cover bg-no-repeat w-40 h-52 justify-items-center pl-3 pr-3 pt-7 pb-2">
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
        </div>
        <div class="flex justify-between p-3">
            <p class="rounded-md p-1 text-red-600 border-red-600 border-2 font-semibold transition-colors hover:bg-red-600 hover:text-white" onClick= "remove(this.parentElement.parentElement.id)">delete</p>
            <p class="rounded-md p-1 text-purple-600 font-semibold border-purple-600 border-2 transition-colors hover:bg-purple-600 hover:text-white" onClick= "modbtn(this.parentElement.parentElement.id)">modify</p>
        </div>
        
        </button>`
    }else if(player.position ==="GK"){
        document.getElementById("playerlist").innerHTML +=`
        <button id=${player.id} class="grid">
        <div class="bg-[url('/assets/images/rush.webp')] bg-cover bg-no-repeat w-40 h-52  justify-items-center pl-3 pr-3 pt-7 pb-2"  id="${player.name}">
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
    </div>
    <div class="flex justify-between p-3">
        <p class="rounded-md p-1 text-red-600 border-red-600 border-2 font-semibold transition-colors hover:bg-red-600 hover:text-white" onClick= "remove(this.parentElement.parentElement.id)">delete</p>
        <p class="rounded-md p-1 text-purple-600 font-semibold border-purple-600 border-2 transition-colors hover:bg-purple-600 hover:text-white" onClick= "modbtn(this.parentElement.parentElement.id)">modify</p>
    </div>
    </button>`
    }});
    function remove(index) {
        document.getElementById(index).remove()
        players.forEach(player => {
            
            if (player.id==index) {
                players.splice(players.indexOf(player), 1)
                localStorage.setItem("data",JSON.stringify({"players":players}))
                
            }
        });
    }
let playerindex;
    function modbtn(index){
        players.forEach(player => {
            document.getElementById("modform").classList.remove("hidden");
            document.querySelector("main").classList.add("blur-sm");
            if (player.id==index && player.position=="GK") {
                playerindex = players.indexOf(player)
                document.getElementById("name").value=player.name
                document.getElementById("photo").value=player.photo
                document.getElementById("club").value=player.club
                document.getElementById("logo").value=player.logo
                document.getElementById("pac").value=player.kicking
                document.getElementById("sho").value=player.positioning
                document.getElementById("pas").value=player.reflexes
                document.getElementById("dri").value=player.speed
                document.getElementById("nationality").value=player.nationality
                document.getElementById("def").value=player.handling
                document.getElementById("phy").value=player.diving
                document.getElementById("flag").value=player.flag
                document.getElementById("position").value=player.position
            }else if (player.id==index && player.position!="GK") {
                playerindex = players.indexOf(player)
                document.getElementById("name").value=player.name
                document.getElementById("photo").value=player.photo
                document.getElementById("club").value=player.club
                document.getElementById("logo").value=player.logo
                document.getElementById("pac").value=player.pace
                document.getElementById("sho").value=player.shooting
                document.getElementById("pas").value=player.passing
                document.getElementById("dri").value=player.dribbling
                document.getElementById("nationality").value=player.nationality
                document.getElementById("def").value=player.defending
                document.getElementById("phy").value=player.physical
                document.getElementById("flag").value=player.flag
                document.getElementById("position").value=player.position
            }
            // players.splice(players.indexOf(player), 1)
            // localStorage.setItem("data",JSON.stringify({"players":players}))
        });
    }
    function modify() {
        const name = document.getElementById("name").value
        const photo = document.getElementById("photo").value
        const pos = document.getElementById("position").value.toUpperCase()
        const national = document.getElementById("nationality").value
        const flag = document.getElementById("flag").value
        const logo = document.getElementById("logo").value
        const club = document.getElementById("club").value
        const pac = Number(document.getElementById("pac").value)
        const sho = Number(document.getElementById("sho").value)
        const pas = Number(document.getElementById("pas").value)
        const dri = Number(document.getElementById("dri").value)
        const def = Number(document.getElementById("def").value)
        const phy = Number(document.getElementById("phy").value)
        const rat = parseInt((pac+sho+pas+dri+def+phy)/6)
        let players= JSON.parse(localStorage.data);        
        if (pos!="GK"){
                players.players[playerindex].name= name
                players.players[playerindex].photo = photo
                players.players[playerindex].position = pos
                players.players[playerindex].nationality =  national
                players.players[playerindex].flag = flag
                players.players[playerindex].club = club
                players.players[playerindex].logo = logo
                players.players[playerindex].rating = rat
                players.players[playerindex].pace = pac
                players.players[playerindex].shooting = sho
                players.players[playerindex].passing = pas
                players.players[playerindex].dribbling = dri
                players.players[playerindex].defending = def
                players.players[playerindex].physical = phy
        }else{
                players.players[playerindex].name = name
                players.players[playerindex].photo = photo
                players.players[playerindex].position = pos
                players.players[playerindex].nationality = national
                players.players[playerindex].flag = flag
                players.players[playerindex].club = club
                players.players[playerindex].logo = logo
                players.players[playerindex].rating = rat
                players.players[playerindex].diving = phy
                players.players[playerindex].handling = def
                players.players[playerindex].kicking = pac
                players.players[playerindex].reflexes = pas
                players.players[playerindex].speed = dri
                players.players[playerindex].positioning = sho
        }
        localStorage.setItem("data",JSON.stringify(players))
        document.getElementById("modform").classList.add("hidden");
        document.querySelector("main").classList.remove("blur-sm");
    };
    // if(JSON.parse(localStorage.data).players.length==0){
    //     localStorage.removeItem("data")
    // }