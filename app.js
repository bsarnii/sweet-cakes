    // Search buttons //

let cakesBtn=document.querySelector(".cakes");
let cupcakesBtn=document.querySelector(".cupcakes");
let sweetsBtn=document.querySelector(".sweets");
let donutsBtn=document.querySelector(".donuts");
let allBtn=document.querySelector(".all");

cakesBtn.addEventListener("click",filterCakes);
cupcakesBtn.addEventListener("click",filterCupcakes);
sweetsBtn.addEventListener("click",filterSweets);
donutsBtn.addEventListener("click",filterDonuts);
allBtn.addEventListener("click",getAll);

let card=document.querySelectorAll(".card");

let newArr=[];
let imageCounter= 0 ;

card.forEach(x => newArr.push(x.firstElementChild.firstElementChild.getAttribute("src")));

function filterCakes(){
  cake.forEach(x=>x.style.display="flex");
  cupcake.forEach(x=>x.style.display="none");
  sweet.forEach(x=>x.style.display="none");
  donut.forEach(x=>x.style.display="none");

  newArr=[];
  card.forEach(x => {
  if (x.style.display != "none"){
    newArr.push(x.firstElementChild.firstElementChild.getAttribute("src"));
  }

});
console.log(newArr)
}
function filterCupcakes(){
  cake.forEach(x=>x.style.display="none");
  cupcake.forEach(x=>x.style.display="flex");
  sweet.forEach(x=>x.style.display="none");
  donut.forEach(x=>x.style.display="none");

  newArr=[];
  card.forEach(x => {
    if (x.style.display != "none"){
      newArr.push(x.firstElementChild.firstElementChild.getAttribute("src"));
    }
  
  });
  console.log(newArr)
}
function filterSweets(){
  cake.forEach(x=>x.style.display="none");
  cupcake.forEach(x=>x.style.display="none");
  sweet.forEach(x=>x.style.display="flex");
  donut.forEach(x=>x.style.display="none");

  newArr=[];
  card.forEach(x => {
    if (x.style.display != "none"){
      newArr.push(x.firstElementChild.firstElementChild.getAttribute("src"));
    }
  
  });
  console.log(newArr)
}
function filterDonuts(){
  cake.forEach(x=>x.style.display="none");
  cupcake.forEach(x=>x.style.display="none");
  sweet.forEach(x=>x.style.display="none");
  donut.forEach(x=>x.style.display="flex");

  newArr=[];
  card.forEach(x => {
    if (x.style.display != "none"){
      newArr.push(x.firstElementChild.firstElementChild.getAttribute("src"));
    }
  
  });
  console.log(newArr)
}
function getAll(){
  cake.forEach(x=>x.style.display="flex");
  cupcake.forEach(x=>x.style.display="flex");
  sweet.forEach(x=>x.style.display="flex");
  donut.forEach(x=>x.style.display="flex");

  newArr=[];
    card.forEach(x => {
    if (x.style.display != "none"){
      newArr.push(x.firstElementChild.firstElementChild.getAttribute("src"));
    }
  
  });
  console.log(newArr)
}


let cake=document.querySelectorAll(".cake");
let cupcake=document.querySelectorAll(".cupcake");
let sweet=document.querySelectorAll(".sweet");
let donut=document.querySelectorAll(".donut");

    // Search bar //

let searchBar= document.querySelector(".search");
let cardBodys = document.querySelectorAll(".card-body");


function searchElement(){
for (i=0; i < cardBodys.length; i++) {
  let h2= cardBodys[i].firstElementChild;
  let txtValue = h2.textContent || h2.innerText;
  if (txtValue.toLowerCase().indexOf(searchBar.value.toLowerCase()) > -1) {
    card[i].style.display = "";
  } else {
    card[i].style.display = "none"
    }
  }
}

    // Header hamburger //

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",openHamburger);
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");

function openHamburger(){
    if (nav.getAttribute("class")== "nav"){
      nav.setAttribute("class","nav2");
    } else if(nav.getAttribute("class")== "nav2") {
      nav.setAttribute("class","nav");
  }
} 

    // Slide show for images //
let exit = document.querySelector(".exit");
let imageContainer = document.querySelector(".img-cont");
let dark = document.querySelector(".dark");
let buttonLeft = document.querySelector(".left");
let buttonRight = document.querySelector(".right");


     // Click on the image //
  card.forEach(x => x.addEventListener("click",function showImage(e){
  
  let image= e.target.attributes.src.value;
  console.log(image)
  imageContainer.style.backgroundImage= `url(${image})`;
  imageCounter= newArr.indexOf(image);
  console.log(imageCounter);


  exit.style.display = "flex";
  imageContainer.style.display = "block";
  dark.style.display = "block";

  }))
 // right and left button //

buttonLeft.addEventListener("click",()=>{
  imageCounter--;
  if (imageCounter <0){
    imageCounter = newArr.length -1
  }
  imageContainer.style.backgroundImage= `url(${newArr[imageCounter]})`;
  console.log(imageCounter);
})

buttonRight.addEventListener("click",()=>{
  imageCounter++;
  if(imageCounter >= newArr.length){
    imageCounter=0;
  }
  imageContainer.style.backgroundImage= `url(${newArr[imageCounter]})`;
  console.log(imageCounter);
})


   //click on the exit button //
   exit.addEventListener("click",closeImage);
   function closeImage(){
    exit.style.display = "none";
    imageContainer.style.display = "none";
    dark.style.display = "none"; 
  }

// Making the shopping-cart box //
let cartBox=document.querySelector(".cart-box");
document.querySelector(".basket").addEventListener("click",()=>{
  
  if (cartBox.style.right=="-300px"){
    cartBox.style.right="0";
  } else {
    cartBox.style.right="-300px";
  }
  })
  //making a final price and an array for price//
  
  let arrayOfPrices=[];
  let price;
  let finalPrice=0;
  
  let basketText=document.querySelector(".basket-text");
  // add items to cart //
  let cartSvg=document.querySelectorAll(".cart-svg");
  cartSvg.forEach(x=>x.addEventListener("click",()=>{

    

  arrayOfPrices.push(parseInt(x.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstChild.nodeValue));
  price=arrayOfPrices.reduce((x,y)=> x + y);
  basketText.innerHTML=`${arrayOfPrices.length} items  ${price} €`;

      //adding items to the cart-box//
  let cartItemWrapper = document.querySelector(".cart-item-wrapper");
  let cartItem = document.createElement("div")
  cartItem.setAttribute("class","cart-item");
  cartItemWrapper.appendChild(cartItem);
              //image//
      let itemImg=document.createElement("img");
      itemImg.setAttribute("src",x.previousElementSibling.attributes.src.nodeValue);
      cartItem.appendChild(itemImg);
              //item and price wrapper //
      let textBox = document.createElement("div");
      textBox.setAttribute("class","text-box");
      cartItem.appendChild(textBox)
              //item//
        let text = document.createElement("div");
        text.setAttribute("class","text");
        text.innerHTML = x.parentElement.nextElementSibling.firstElementChild.firstChild.nodeValue;
        textBox.appendChild(text);
              //price//
        let itemPrice= document.createElement("div");
        itemPrice.setAttribute("class","item-price");
        itemPrice.innerHTML=x.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstChild.nodeValue;
        textBox.appendChild(itemPrice);
              //trash//
      let trashDiv = document.createElement("div")
      trashDiv.setAttribute("class","trash");
      trashDiv.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg>';
      cartItem.appendChild(trashDiv);
              // Final Price //
      
      finalPrice += parseInt(x.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstChild.nodeValue);
      console.log(finalPrice);
      totalPrice = document.querySelector(".total-price");
      totalPrice.innerHTML=`Total €${finalPrice}`;


      //shopping cart box delete item//
    /*let trash=document.querySelectorAll(".trash");
    console.log(trash)
    trash.forEach(x=>{
    x.addEventListener("click",()=>{
    console.log(trash)
    x.parentElement.remove();
    finalPrice = finalPrice - parseInt(x.previousElementSibling.lastChild.textContent)
    totalPrice.innerHTML=`Total €${finalPrice}`;
    basketText.innerHTML=`${arrayOfPrices.length-1} items  ${finalPrice} €`;
      })
    })*/

  }))

    



  
  




