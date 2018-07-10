const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//Images 
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let image = document.getElementById("cta-img"); 
image.setAttribute('src', siteContent["cta"]["img-src"]);

let imageMiddle = document.getElementById("middle-img"); 
imageMiddle.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//navBar
const navItem = document.querySelectorAll("nav a"); 
navItem[0].innerHTML = siteContent["nav"]["nav-item-1"];
navItem[1].innerHTML = siteContent["nav"]["nav-item-2"];
navItem[2].innerHTML = siteContent["nav"]["nav-item-3"];
navItem[3].innerHTML = siteContent["nav"]["nav-item-4"];
navItem[4].innerHTML = siteContent["nav"]["nav-item-5"];
navItem[5].innerHTML = siteContent["nav"]["nav-item-6"];

navItem[0].style.color ="green";
navItem[1].style.color ="green";
navItem[2].style.color ="green";
navItem[3].style.color ="green";
navItem[4].style.color ="green";
navItem[5].style.color ="green";




//cta content
let buttonCTA = document.querySelector(".cta-text button"); 
buttonCTA.innerHTML = siteContent["cta"]["button"]; 

let hCTA = document.querySelector(".cta-text h1"); 
hCTA.innerHTML = siteContent["cta"]["h1"];

//middle content
let topHeader = document.querySelectorAll(".top-content h4"); 
topHeader[0].innerHTML = siteContent["main-content"]["features-h4"]
topHeader[1].innerHTML = siteContent["main-content"]["about-h4"]

let topContent = document.querySelectorAll(".top-content p"); 
topContent[0].innerHTML = siteContent["main-content"]["features-content"]
topContent[1].innerHTML = siteContent["main-content"]["about-content"]

let bottomHeader = document.querySelectorAll(".bottom-content h4"); 
bottomHeader[0].innerHTML = siteContent["main-content"]["services-h4"]
bottomHeader[1].innerHTML = siteContent["main-content"]["product-h4"]
bottomHeader[2].innerHTML = siteContent["main-content"]["vision-h4"]

let bottomContent = document.querySelectorAll(".bottom-content p")
bottomContent[0].innerHTML = siteContent["main-content"]["services-content"]
bottomContent[1].innerHTML = siteContent["main-content"]["product-content"]
bottomContent[2].innerHTML = siteContent["main-content"]["vision-content"]
//contact
let contactHeader = document.querySelector(".contact h4"); 
contactHeader.innerHTML = siteContent["contact"]["contact-h4"]

let contactItem = document.querySelectorAll(".contact p"); 
contactItem[0].innerHTML = siteContent["contact"]["address"];
contactItem[1].innerHTML = siteContent["contact"]["phone"];
contactItem[2].innerHTML = siteContent["contact"]["email"];

let footerItem = document.querySelector("footer p"); 
footerItem.innerHTML = siteContent["footer"]["copyright"];

//new content
const navBar = document.querySelector("nav");
let newTab = document.createElement("a"); 
let newContent = document.createTextNode("Social Media"); 
newTab.appendChild(newContent); 
navBar.prepend(newTab)

const newTab2 = document.createElement("a");
let newContent2 = document.createTextNode("Location");
navBar.appendChild(newTab2).appendChild(newContent2);

newTab.style.color = "green"
newTab2.style.color ="green"

//Events 
console.log(navItem); 

navBar.addEventListener("click", (event) => {
  console.log("Clicked")
  event.target.style.color="red"; 
}); 

buttonCTA.addEventListener("mouseout",(event)=>{
  event.target.style.color = "orange"
  console.log("clicked 22 ")
})

image.addEventListener("mousemove", (event)=> {
  event.target.style.display ="none"; 
  console.log("move")
})

hCTA.addEventListener("mousedown", (event)=>{
event.target.style.color = "pink"; 
})

imageMiddle.addEventListener("dblclick", (event)=> {
  event.target.style.opacity = .5; 
  console.log("move1")
})

logo.addEventListener("contextmenu", (event)=>{
  event.target.style.opacity = .1;
})

contactHeader.addEventListener("mouseenter", (event)=>{
  event.target.style.fontSize = "xx-large"
  console.log("mousey") 
}); 

footerItem.addEventListener("mouseup", (event)=>{
  event.target.style.fontSize ="xx-large"; 
}); 

footerItem.addEventListener("mouseup", (event)=>{
  event.target.style.color ="yellow"; 
}); 

topHeader[0].addEventListener("wheel", (event)=>{
event.target.style.fontSize = "xx-large"; 
})

topHeader[1].addEventListener("dblclick", (event)=>{
  event.target.style.backgroundColor = "pink"; 
  })
topHeader[1].addEventListener("dblclick", (event)=>{
    event.target.style.fontSize = "xx-large"; 
    })
 topHeader[1].addEventListener("dblclick", (event)=>{
      event.target.style.float = "right"; 
      })


      var dragged;

      /* events fired on the draggable target */
      document.addEventListener("drag", function( event ) {
    
      }, false);
    
      document.addEventListener("dragstart", function( event ) {
          // store a ref. on the dragged elem
          dragged = event.target;
          // make it half transparent
          event.target.style.opacity = .5;
      }, false);
    
      document.addEventListener("dragend", function( event ) {
          // reset the transparency
          event.target.style.opacity = "";
      }, false);
    
      /* events fired on the drop targets */
      document.addEventListener("dragover", function( event ) {
          // prevent default to allow drop
          event.preventDefault();
      }, false);
    
      document.addEventListener("dragenter", function( event ) {
          // highlight potential drop target when the draggable element enters it
          if ( event.target.className == "dropzone" ) {
              event.target.style.background = "purple";
          }
    
      }, false);
    
      document.addEventListener("dragleave", function( event ) {
          // reset background of potential drop target when the draggable element leaves it
          if ( event.target.className == "dropzone" ) {
              event.target.style.background = "";
          }
    
      }, false);
    
      document.addEventListener("drop", function( event ) {
          // prevent default action (open as link for some elements)
          event.preventDefault();
          // move dragged elem to the selected drop target
          if ( event.target.className == "dropzone" ) {
              event.target.style.background = "";
              dragged.parentNode.removeChild( dragged );
              event.target.appendChild( dragged );
          }
        
      }, false);