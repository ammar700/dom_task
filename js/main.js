
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector('#red').onclick =function(){
        document.querySelector('#title').style .color="red"
    }
    document.querySelector('#yellow').onclick =function(){
        document.querySelector('#title').style .color="yellow"
    }
    document.querySelector('#blue').onclick =function(){
        document.querySelector('#title').style .color="blue"
    }

})

// =========================================================================================================
// =========================================================================================================




document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll("button").forEach(function(colorChange){

        colorChange.onclick = function (){
            document.querySelector("#title").style .color= colorChange.dataset.colors;
        }
    })



})



























// document.querySelector('#red').addEventListener("click" , function({
//     document.querySelector('#title').style .color="red"
// }))

// document.querySelector('#red').addEventListener("click" , function({
//     document.querySelector("#title").style .color="red"
// }))
// document.querySelector('#red').addEventListener("click" , function({
//     document.querySelector("#title").style .color="red"
// }))
