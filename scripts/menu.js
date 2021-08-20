actionCatalog();

function openMenu() {
//   let body = document.getElementsByTagName("body");
let menuLine = '<div class="catalogMenu" id="menuProd">' +
'<a class="catalogItem" href="../pages/zabor.html" id="zabor">' +
'<div class="imgOtkatZbori"> </div>' +
'<div class="textC"> Заборы </div>' +
" </a>" +
'<a class="catalogItem" href="../pages/otkatVorota.html" id="otkat">' +
'<div class="imgOtkatVorota"> </div>' +
'<div class="textC"> Откат. ворота </div>' +
" </a>" +
'<a class="catalogItem" href="../pages/raspashVorota.html" id="raspash">' +
'<div class="imgRaspVorota"> </div>' +
'<div class="textC"> Расп. ворота </div>' +
" </a>" +
'<a class="catalogItem" href="../pages/kalitki.html" id="kalitka">' +
'<div class="imgKalitki"> </div>' +
'<div class="textC"> Калитки </div>' +
" </a>" +
'<a class="catalogItem" href="../pages/grill.html" id="grill">' +
'<div class="imgGrill"> </div>' +
'<div class="textC"> Зона барбекю </div>' +
" </a>" +
" </div>";

//   document.body.innerHTML += '<div class="catalogMenu" id="menuProd"> <a class="catalogItem" href="../pages/zabor.html" id="zabor"> <div class="imgOtkatZbori"> </div> <div class="textC"> Заборы </div>  </a> <a class="catalogItem" href="../pages/otkatVorota.html" id="otkat"> <div class="imgOtkatVorota"> </div> <div class="textC"> Откат. ворота </div>  </a>  <a class="catalogItem" href="../pages/raspashVorota.html" id="raspash"> <div class="imgRaspVorota"> </div> <div class="textC"> Расп. ворота </div> </a> <a class="catalogItem" href="../pages/kalitki.html" id="kalitka"> <div class="imgKalitki"> </div> <div class="textC"> Калитки </div> </a> <a class="catalogItem" href="../pages/grill.html" id="grill"> <div class="imgGrill"> </div> <div class="textC"> Зона барбекю </div>  </a>  </div>';
  document.body.insertAdjacentHTML('beforebegin', menuLine);
  console.log("true");
}

window.addEventListener('scroll', function() {
    if (isOpen == true) {
        closeMenu()
        catalog.style.backgroundColor = "";
        isOpen = false
    }
    
  });

function closeMenu() {
  let menu = document.getElementById("menuProd");
 menu.remove();
  console.log("false");
}
let isOpen = false;
function actionCatalog() {
  
  let catalog = document.getElementById("catalog");
  catalog.addEventListener("click", () => {
    console.log("here clicked");
    if (isOpen == false) {
    openMenu();
      catalog.style.backgroundColor = "#FFA775";
      isOpen = true;
      console.log("open");
    } else {
    closeMenu();
      catalog.style.backgroundColor = "";
      isOpen = false;
      console.log("close");
    }
  });
}
