
function clone(name) {
    // console.log(`Getting ${name}`)
    fetch(`./${name}.html`)
        .then(response =>response.text())
        .then(data => {
            document.getElementById(name).innerHTML = data;
        })
        .catch();
}
clone("header")
clone("footer")