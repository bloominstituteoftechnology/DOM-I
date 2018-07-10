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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaHeader = document.querySelector("#cta-img");
ctaHeader.setAttribute('src', siteContent["cta"]["img-src"]);

let navBar = document.querySelectorAll("nav a");
let indexSelect; 


for(let i = 0; i<navBar.length; i++){
  indexSelect = "nav-item-" + String(i+1);
  navBar[i].innerHTML = siteContent["nav"][indexSelect];
}

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = siteContent.cta.h1; 

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent.cta.button; 
//Middle image picture being added. 
let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];//Just trying the lecture way out. 

let arraySections = ["features", "about", "services", "product", "vision"];
//Grabbing all of the h4 titles  there is 5 in total. 
let contentTitles = document.querySelectorAll(".text-content h4");

//This will put the titles on the page for the content. 

let mainSelect = "main-content";
for(let i = 0; i< contentTitles.length; i++){
  indexSelect = arraySections[i] +"-h4";
  console.log(indexSelect); 
  contentTitles[i].innerHTML = siteContent[mainSelect][indexSelect];
}

//Titles completed

//Grabbing all of the content p elements 
let contentParagraphs = document.querySelectorAll(".text-content p");

//This will add the content in the form of paragraphs.

for(let i = 0; i< contentParagraphs.length; i++){
  indexSelect = arraySections[i] + "-content";
  console.log(indexSelect); 
  contentParagraphs[i].innerHTML = siteContent[mainSelect][indexSelect];
}
//End of content update. 

//Contact section grab
let contactHeader = document.querySelector(".contact h4");
//^header grabbed 
let contactInfo = document.querySelectorAll(".contact p");
//^Paragraphs grabbed three in total  0-2 index. 

//Updating the contact section 
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

contactInfo[0].innerHTML = siteContent.contact.address;
contactInfo[1].innerHTML = siteContent.contact.phone;
contactInfo[2].innerHTML = siteContent.contact.email;

//Footer section grab paragraph element
let footerParagraph = document.querySelector("footer p");
//Footer update
footerParagraph.innerHTML = siteContent.footer.copyright;

//Updating website content complete^^^ 

//Making changes and adding to content 

//use .appendChild() and .prepend() to add new elements. Placed above changing the color to green because I want all the colors to match. 

//Create the element desired to append or prepend
let newA = document.createElement("a");//creates an A tag. 
let newAText = document.createTextNode("Home");//Sets Place for text; 
//^end of first addition

let newA2 = document.createElement("a")
let newAText2 = document.createTextNode("Template Change");
//Now append the item to the NavBar

newA.appendChild(newAText);//sets the created element to include the desired text. 

document.querySelector("nav").prepend(newA); //Sets a Home atag to the begining of the navBar.

newA2.appendChild(newAText2);

document.querySelector("nav").appendChild(newA2); 


//Change the color of the navigation text to be green.
//There is 6 elements within this so a ForEach method would be best to keep the code dry here. 
navBar = document.querySelectorAll("nav a");

navBar.forEach(function (element){
  element.style.color = "green"; 
});
//^For each element in NavBar change the color of the text to green

//Stretch goals  
let containerText = document.querySelector(".container");
containerText.style.fontFamily = "Apple Chancery"; 


//My attempt to add an event handler 
let modifiedTemplate = 0; // set to false means regular orginal template. //true will use different template. 
function modifyTemplate (){
  if(modifiedTemplate === 0){
    containerText.style.color = "White";
    containerText.style.backgroundColor = "Black"
    modifiedTemplate = 1; 
  } else if (modifiedTemplate === 1){
    containerText.style.color = "Black";
    containerText.style.backgroundColor = "Yellow";
    modifiedTemplate = 2;  
  } else if (modifiedTemplate === 2){
    containerText.style.color = "Black";
    containerText.style.backgroundColor = "Pink";
    modifiedTemplate = 3;  
  } else if (modifiedTemplate === 3){
    containerText.style.color = "White";
    containerText.style.backgroundColor = "Red";
    modifiedTemplate = 4;
  } else if (modifiedTemplate === 4){
    containerText.style.color = "Black";
    containerText.style.backgroundColor = "White";
    modifiedTemplate = 0;
  }
}

navBar[7].addEventListener("click",modifyTemplate, false);
//^ this will change the template from orginal to 4 other template choices. 

