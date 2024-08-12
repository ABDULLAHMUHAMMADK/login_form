function show() {
    let x = document.getElementById('ps');
    if (x.type === "password") {
        x.type = "text"
    }




}
function hide() {
    let x = document.getElementById('ps');
    if (x.type === "text") {
        x.type = "password"
    }
}