const navigateToDetailPage = () => {
    window.location = "detail.html";
}

function goBack() {
    window.history.back();
}

const alertLocation = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((location) => {
            alert(`I am at ${location.coords.latitude} latitute by ${location.coords.longitude} longitute`);
            
            if (!localStorage.getItem("latitute")) {
                localStorage.setItem("latitute", location.coords.latitude);
            } else {
                alert("latitute is already stored on this browser")
            }
        })
    } else {
        debugger;
        console.log("no geolocation available")
    }
}