const ajaxRequest = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "ajaxData.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("text").innerHTML = this.responseText;
        }
    }
}

const fetchRequest = () => {
    fetch("fetchData.json")
    .then((response) => response.json())
    .then((body) => {
        document.getElementById("text").innerHTML = body[0]["make"];
    })
    .catch((error) => {
        console.log(error);
    })
}