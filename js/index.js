var color 
var inicialColor= "#600600"

window.addEventListener("load", Begin,false)

function Begin() {
    color = document.querySelector("#colorSelector")
    color.value = inicialColor
    color.addEventListener("input", changeColor, false)
    color.addEventListener("change",AllBoxes, false)
}


function changeColor(event){
    var firstBox = document.querySelector(".ColorBox")
    var secondBox = document.querySelector(".ColorBox2")

    if (firstBox){
        firstBox.style.backgroundColor = event.target.value
    }
    if (secondBox){
        secondBox.style.backgroundColor = event.target.value
    }

}

// para selecionar todas as box com o msm class

 function AllBoxes(event){
    document.querySelectorAll(".ColorBox").forEach(function(firstBox) {
     firstBox.style.backgroundColor = event.target.value;
  })
  document.querySelectorAll(".ColorBox2").forEach(function(secondBox) {
    secondBox.style.backgroundColor = event.target.value;
  })
} 
