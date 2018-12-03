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
    "address" : "123 Way 456 Street \r\n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Add text to nav links

const linkNames = Object.values(siteContent.nav);

document.querySelectorAll('nav a').forEach(
  function(link, index){
    link.textContent = linkNames[index];
  }
);



/*For Task 4,  two new nav links, with .appendChild() and .prepend(). This is done first, even though
this task is listed second, because if we don't put it first in the file, the newly created a nodes will
not be styled green*/
const node1 = document.createElement("a");
const textnode1 = document.createTextNode("History");
node1.appendChild(textnode1);
document.querySelector('nav').prepend(node1);
const node2 = document.createElement("a");
const textnode2 = document.createTextNode("Great Ideas");
node2.appendChild(textnode2);
document.querySelector('nav').appendChild(node2);

//For Task 4, change color of navigation text to be green

document.querySelectorAll('nav a').forEach(link => link.style.color = "green");

//Add content to cta

document.querySelector('.cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta-text button').textContent = siteContent.cta.button;
document.querySelector('#cta-img').setAttribute('src', siteContent.cta["img-src"]);

//For first stretch goal, change color of h1 to red.

document.querySelector('.cta-text h1').style.color = "red";

//For second stretch goal, add button that will toggle color of h1
const buttonNode = document.createElement('button');
const buttonTextNode = document.createTextNode('Click to Change H1');
buttonNode.appendChild(buttonTextNode);
document.querySelector('.cta-text').appendChild(buttonNode);

buttonNode.onclick = function(){
  h1Color = document.querySelector('.cta-text h1').style.color;
  console.log("Here's the color" + h1Color);
  if(h1Color === "green"){
    document.querySelector('.cta-text h1').style.color ="red";
  }
  else{
    document.querySelector('.cta-text h1').style.color ="green";
  }
};

//Update main section

const mainContentKeys = Object.keys(siteContent["main-content"]);
const headingsTextArray = [];
const contentTextArray = [];


mainContentKeys.forEach(function(key, index){
  if(key.includes('-h4')){
    headingsTextArray.push(siteContent["main-content"][key]);
  }
});

mainContentKeys.forEach(function(key, index){
  if(key.includes('-content')){
    contentTextArray.push(siteContent["main-content"][key]);
  }
});

document.querySelectorAll('.main-content h4').forEach(
  function(header, index){
    header.textContent = headingsTextArray[index];
  }
);

document.querySelector('#middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"]);

document.querySelectorAll('.main-content .text-content p').forEach(
  function(textBlock, index){
    textBlock.textContent = contentTextArray[index];
  }
);

//Update contact section

const contactContent = Object.values(siteContent.contact);
const contactNodes = document.getElementsByClassName("contact")[0].children;
document.querySelector('.contact p').style["white-space"] = 'pre';

Array.from(contactNodes).forEach(function(node, index){
  node.textContent = contactContent[index];
});

//Update footer

document.querySelector('footer p').textContent = siteContent.footer.copyright;
