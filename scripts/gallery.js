let photos = document.querySelectorAll(".img");
let viewerWindow = document.getElementById("viewer");

//openViewer();
console.log(photos)
photos.forEach(image => {
    image.addEventListener('click',(event) =>{
        let body = document.getElementById("body");
        let viewerWindow = document.getElementById("viewer");
        let image = document.getElementById("picProd");
    image.style.backgroundImage =  event.target.style.backgroundImage
        viewerWindow.style.opacity = "1"
    viewerWindow.style.zIndex = "200"
    viewerWindow.style.pointerEvents = "all"
    body.style.overflowY = "hidden"
    
    console.log("viewer")
    })
})


viewerWindow.addEventListener('click',(event) =>{
    let body = document.getElementById("body");
    event.target.style.opacity = "0"
    event.target.style.zIndex = "0"
    viewerWindow.style.pointerEvents = "none"
console.log("viewer Closed")
body.style.overflow = "scroll";
})
