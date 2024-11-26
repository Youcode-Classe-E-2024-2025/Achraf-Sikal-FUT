fetch('./data.json')
    .then((response) => response.json())
    .then((json) => localStorage.setItem("data",JSON.stringify(json)));

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


// JSON.parse(localStorage.data).players[0]
