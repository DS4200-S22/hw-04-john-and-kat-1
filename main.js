let count = 0
function circle1Clicked(element) {
    console.log("Circle 1 was clicked: " + count); 
    count = count + 1
    document.getElementById(element).innerHTML = count;
}

function rect2MousedOver(element) {
    console.log("Rectangle 2 was hoverd on: " + document.getElementById(element));
    document.getElementById(element).style.stroke = "black"
}

function rect2MousedOff(element) {
    console.log("Rectangle 2 was hoverd off: " + document.getElementById(element)); 
    document.getElementById(element).style.stroke = "white"
}


let visible = true
function circle3Clicked(element) {
    if (visible) {
        console.log("Circle 3 was clicked: " + document.getElementById(element).style.opacity); 
        document.getElementById(element).style.opacity = 0
        visible = false
    } else {
        console.log("Circle 3 was clicked: " + document.getElementById(element).style.opacity); 
        document.getElementById(element).style.opacity = 1
        visible = true
    }

}