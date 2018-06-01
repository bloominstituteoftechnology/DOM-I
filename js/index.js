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

//MY CODE BELOW
//above is shortened below, using no VAR
// document.getElementById('logo-img').setAttribute('src', siteContent["nav"]["img-src"]) ;

let myNavItems = document.getElementsByTagName('a') ;
// console.log(myNavItems);
myNavItems[0].innerHTML = (siteContent['nav']['nav-item-1']) ;
myNavItems[1].innerHTML = (siteContent['nav']['nav-item-2']) ;
myNavItems[2].innerHTML = (siteContent['nav']['nav-item-3']) ;
myNavItems[3].innerHTML = (siteContent['nav']['nav-item-4']) ;
myNavItems[4].innerHTML = (siteContent['nav']['nav-item-5']) ;
myNavItems[5].innerHTML = (siteContent['nav']['nav-item-6']) ;


/*
FOR EACH EXAMPLE

let selectedNavLinks = document.querySelectorAll("nav a");
selectedNavLinks.forEach((link, i) => {
link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
})
*/

document.querySelector('.cta-text h1').innerHTML = (siteContent['cta']['h1'])

let myCtaClassButton = document.querySelector('.cta-text button') ;
// console.log(myCtaClassButton);
myCtaClassButton.innerHTML = (siteContent['cta']['button']) ;

document.getElementById('cta-img').setAttribute('src', siteContent['cta']['img-src']) ;


let myTopContent = document.querySelectorAll('.top-content') ;
// console.log(myTopContent[0].children[0].children[0]);
myTopContent[0].children[0].children[0].innerHTML = (siteContent['main-content']['features-h4']) ;
myTopContent[0].children[0].children[1].innerHTML = (siteContent['main-content']['features-content']) ;
myTopContent[0].children[1].children[0].innerHTML = (siteContent['main-content']['about-h4']) ;
myTopContent[0].children[1].children[1].innerHTML = (siteContent['main-content']['about-content']) ;

document.querySelector('#middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

// /* SRC https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText */
let myBottomContent = document.querySelector('.bottom-content') ;
myBottomContent.children[0].children[0].insertAdjacentText('afterbegin', siteContent['main-content']['services-h4']) ;

myBottomContent.children[0].children[1].insertAdjacentText('afterbegin', siteContent['main-content']['services-content']) ;

myBottomContent.children[1].children[0].insertAdjacentText('afterbegin', siteContent['main-content']['product-h4']) ;

myBottomContent.children[1].children[1].insertAdjacentText('afterbegin', siteContent['main-content']['product-content']) ;

myBottomContent.children[2].children[0].insertAdjacentText('afterbegin', siteContent['main-content']['vision-h4']) ;

myBottomContent.children[2].children[1].insertAdjacentText('afterbegin', siteContent['main-content']['vision-content']) ;



// /* I PREFER THIS WAY BELOW*/
let myContact = document.getElementsByClassName('contact')[0] ;
// console.log(myContact) ;
myContact.getElementsByTagName('h4')[0].innerHTML = siteContent['contact']['contact-h4'] ;
myContact.getElementsByTagName('p')[0].innerHTML = siteContent['contact']['address'] ;
myContact.getElementsByTagName('p')[1].innerHTML = siteContent['contact']['phone'] ;
myContact.getElementsByTagName('p')[2].innerHTML = siteContent['contact']['email'] ;


document.querySelector('footer p').innerHTML = (siteContent['footer']['copyright']) ;


// ## Task 3: Add new content
// * Change the color of the navigation text to be green.
let myNavItemsToGreen = document.querySelectorAll('nav a') ;
myNavItemsToGreen.forEach((myItem, i) => {
  myItem.style.color = 'green' ;
});

// * Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.

//SRC https://www.w3schools.com/jsref/met_node_appendchild.asp
//CREATE ELEMENT - a link tag
let myNewElement = document.createElement('A') ;
//CREATE TEXT NODE
let myNewTextNode = document.createTextNode('SUPER BOSS BUTTON') ;
//APPEND TEXT TO NEW HTML TAG
myNewElement.appendChild(myNewTextNode) ;
//APPEND <a> to html
document.querySelector('nav').appendChild(myNewElement) ;

//SRC https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend

//////DIDN'T GET prepend TO WORK


/*FUNCTION EXAMPLE
// Add two items to navigation
selectedNavLinks = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
}
selectedNavLinks.prepend(createNewNode("Extra Item 1"));
selectedNavLinks.append(createNewNode("Extra Item 2"));
*/