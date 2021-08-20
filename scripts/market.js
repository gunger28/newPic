let nameProd = document.getElementById("name"); // Название продукта (div)
let desc = document.getElementById("desc"); // Описание продукта (div)
let cost = document.getElementById("cost"); // Цена продукта (div)
let addons = document.querySelectorAll(".cardA"); // Дополнения продукта (div[])
let defSpec = document.getElementById("defaultSpec"); // Стандартная спецификация продукта (div)
let lenghts = document.querySelectorAll(".option"); // Длина продукта (div[])
let materials = document.querySelectorAll(".cardM"); // Материаллы продукта (div[])
let colors = document.querySelectorAll(".color"); // Цвета продукта (div[])

let product_data = {
  name: "не выбрано",
  cost: "не выбрано",
  addon1: "",
  addon2: "",
  addon3: "",
  lenght: "не выбрано",
  material: "не выбрано",
  color: "не выбрано",



  getConsoleAll(){
console.log("--------Product_data--------")
    console.log(this.name);
  console.log(this.cost);
  console.log(this.addon1);
  console.log(this.addon2);
  console.log(this.addon3);
  console.log(this.lenght);
  console.log(this.material);
  console.log(this.color);

  }
};

function getAll() {
    console.log(nameProd);
    console.log(cost);
    console.log(addons[0].className);
    console.log(defSpec);
    console.log(lenghts);
    console.log(materials);
    console.log(colors);
}

function addonColector(element){

switch (element.id) {
    case "1":
        
        if(product_data.addon1 == ""){
            product_data.addon1 = element.textContent;
            }else{
            product_data.addon1 = ""
        }
        
        break;

        case "2":
            if(product_data.addon2 == ""){
                product_data.addon2 = element.textContent;
            }else{
                product_data.addon2 = ""
            }
        break;

        case "3":
            if(product_data.addon3 == ""){
                product_data.addon3 = element.textContent;
            }else{
                product_data.addon3 = ""
            }
        break;
    default:
        break;
}

product_data.getConsoleAll();
   
}

function dataCollector(element) {
  switch (element.className) {
    case "cardA":
        addonColector(element);
      break;
    case "option":
        product_data.lenght = element.textContent
      break;
    case "cardM":
        product_data.material = element.dataset.mat
      break;
    case "color":
        product_data.color = element.style.backgroundColor
      break;
    default:
      break;
  }
}

function activeAnimSeveral(element) {
  if (element.style.border == "") {
    element.style.border = "3px solid #63E18E";
   // element.style.backgroundColor = "#63E18E";
    dataCollector(element)
    console.log(element);
  } else {
    element.style.border = "";
 
    dataCollector(element)
  }
}

function activeAnimSolo(all,element) {
    if (element.style.border == "") {
        all.forEach(el =>{
            el.style.border = "";
        })
      element.style.border = "3px solid #63E18E";
      dataCollector(element)
            console.log(element);
    } else {
      element.style.border = "";
   
      dataCollector(element)
    }
  }

  function autoSizeFont(){
let allText = document.getElementById('body')
console.log(allText)
allText.style.fontSize = "10px";
// allText.forEach((element) => {
//   console.log(element)
// element.style.fontSize = "10px";
//})


  }

  function nameHover(element){
    element.addEventListener("mouseover", (event) => {
      event.target.textContent = event.target.dataset.mat
      event.target.style.backgroundBlendMode = "color-burn"
    });

    element.addEventListener("mouseout", (event) => {
      event.target.textContent = ""
      event.target.style.backgroundBlendMode = "normal"
    });
  }

function activateActionSeveral(element) {
  element.addEventListener("click", (event) => {
    activeAnimSeveral(event.target);
    product_data.getConsoleAll()
  });
}

function activateActionSolo(all,element) {
    element.addEventListener("click", (event) => {
      activeAnimSolo(all,event.target);
      product_data.getConsoleAll()
    });
  }

  function sendForm() {
    document.querySelector('#form').addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = Object.fromEntries(new FormData(event.target).entries());
        const {name, phone, message} = formData;
        let type = "prod"
        const body = `
        type=${type}
        &name=${name}
        &phone=${phone}
        &mes=${message}
        &product=${product_data.nameProd}
        &addons=${product_data.addon1 + product_data.addon2 + product_data.addon3}
        &lenght=${product_data.lenght}
        &material=${product_data.material}
        &color=${product_data.color}
                `;

        url = '../php/sendMail.php';
        options = {
            method : 'POST',
            body,
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        };

        const response = await fetch(url, options);
        const status = await response.text();

        if (+status === 1) {
            alert('Заявка успешно отправлена! Скоро с вами свяжется наш сотрудник.');
             document.querySelectorAll('.input').forEach(input => input.value = '');
             window.history.replaceState({}, document.title, location.protocol + '//' + location.host + location.pathname);
        }
        else alert("Произошла ошибка, попробуйте позже");
    });
};


window.onload = () => {
sendForm();
  autoSizeFont()

product_data.nameProd = nameProd.textContent
product_data.cost = cost.textContent

  addons.forEach((element) => {
    activateActionSeveral(element);
  });

  lenghts.forEach((element) => {
    activateActionSolo(lenghts,element);
  });

  materials.forEach((element) => {
    activateActionSolo(materials,element);
    nameHover(element)
  });

  colors.forEach((element) => {
    activateActionSolo(colors,element);
  });

  getAll();
};
