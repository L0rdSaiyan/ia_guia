// console.log(window.innerWidth);

let msg = document.getElementById("msgUser")
function sendMsg(){
    const msg = document.getElementById("msgUser")

    alert(msg.value)


}
document.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        alert("oi");
    }
});