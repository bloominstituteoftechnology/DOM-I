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

// ANSWERS ------------------------------------------------------------------------


//TITLE - 
const title = document.querySelector('title');
// console.log(newTitle);
 title.textContent = 'Great Idea!';

//HEADER -
document.querySelector('h1').textContent = 'DOM  IS  AWESOME';
document.querySelector('h1').innerHTML = 'DOM <br> IS <br> AWESOME';

//BUTTON - 
document.querySelector('button').textContent = 'Get Started';


//NAV - 

 document.querySelector('nav a:nth-child(1)').textContent = 'Services'; 
 document.querySelector('nav a:nth-child(2)').textContent = 'Product'; 
 document.querySelector('nav a:nth-child(3)').textContent = 'Vision'; 
 document.querySelector('nav a:nth-child(4)').textContent = 'Features'; 
 document.querySelector('nav a:nth-child(5)').textContent = 'About'; 
 document.querySelector('nav a:nth-child(6)').textContent = 'Contact'; 
//  console.log(nav);

  

//IMAGES -
//Logo 
const logoImage = document.querySelector('#logo-img');
// console.log(logoImage);
logoImage.src = 'img/logo.png';

const middleImage = document.querySelector('.middle-img');
middleImage.src = 'img/mid-page-accent.jpg'

//Header Image 
const headerImage = document.querySelector('#cta-img');
// console.log(headerImage);
headerImage.src = 'img/header-img.png';

//MAIN BODY -


// document.querySelector('.top-content h4:nth-child(1)').textContent = 'Features';

//TOP content - 

let header1 = document.querySelectorAll('.top-content .text-content h4')[0];
header1.innerText = siteContent['main-content']['features-h4'];
// console.log(header1);

let para1 = document.querySelectorAll('.top-content .text-content p')[0];
para1.innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis';
// console.log(para1);


let header2 = document.querySelectorAll('.top-content .text-content h4')[1];
header2.innerText = siteContent['main-content']['about-h4'];
// console.log(header2);

let para2 = document.querySelectorAll('.top-content .text-content p')[1];
para2.innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// console.log(para2);


//BOTTOM Content - 


let header3 = document.querySelectorAll('.bottom-content .text-content h4')[0];
header3.innerText = siteContent['main-content']['services-h4'];
// console.log(header3);

let para3 = document.querySelectorAll('.bottom-content .text-content p')[0];
para3.innerText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// console.log(para3);

let header4 = document.querySelectorAll('.bottom-content .text-content h4')[1];
header4.innerText = siteContent['main-content']['product-h4'];
// console.log(header4);

let para4 = document.querySelectorAll('.bottom-content .text-content p')[1];
para4.innerText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// console.log(para4);

let header5 = document.querySelectorAll('.bottom-content .text-content h4')[2];
header5.innerText = siteContent['main-content']['vision-h4'];
// console.log(header5);

let para5 = document.querySelectorAll('.bottom-content .text-content p')[2];
para5.innerText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// console.log(para5);




//Contact -

document.querySelector('.contact h4').textContent = 'Contact';



document.querySelector('.contact p:nth-child(2)').innerHTML = '123 Way 456 Street <br> Somewhere, USA'; 
document.querySelector('.contact p:nth-child(3)').textContent = '1 (888) 888-8888'; 
document.querySelector('.contact p:nth-child(4)').textContent = 'sales@greatidea.io'; 


//FOOTER - 

document.querySelector('footer').textContent = 'Copyright Great Idea! 2018';