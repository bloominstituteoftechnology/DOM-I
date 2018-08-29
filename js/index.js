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




/* Element selector methods
document.getElementById
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName
document.querySelector
document.querySelectorAll
*/

/* List of elements captured in variables. */

let logoImg = document.getElementById("logo-img");
let header = document.querySelector('header');
let anchors = document.getElementsByTagName('a');
let ctaImg = document.getElementById('cta-img');
let button = document.getElementsByTagName('button');
let buttonText = Array.from(button)[0] ;
let paragraphs = document.getElementsByClassName('text-content');
let pArr = Array.from(paragraphs);
let midImg = document.getElementsByClassName('middle-img')
let imgElement = Array.from(midImg)[0];

/* Text variables */
let featTxt = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.' ;

let aboutTxt = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let servText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'; 

let prodText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let visText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'; 

 pArr[0].innerHTML = featTxt ;
 pArr[1].innerHTML = aboutTxt ;
 pArr[2].innerHTML = servText ;
 pArr[3].innerHTML = prodText;
 pArr[4].innerHTML = visText ;
/* Console logs for testing variable accuracy.

console.log(logoImg);
console.log(header)
console.log(anchors)
console.log(ctaImg)
console.log(button)
console.log(buttonText)
console.log(paragraphs)
console.log(pArr) // Array of the array like object logged above it.
console.log(midImg)

*/

/* Changes registered via DOM manipulation. */

/* LogoImg effects */

logoImg.src = 'img/logo.png';
logoImg.setAttribute('src', siteContent["nav"]["img-src"])

/* Header effects */

header.className = 'header-class'; // How to add class name to element.

ctaImg.src = 'img/header-img.png' ;

buttonText.innerHTML = 'Get Started';

/* Middle image effects */

imgElement.src = 'img/mid-page-accent.jpg' ;

 pArr[0].innerHTML = featTxt ;
 pArr[1].innerHTML = aboutTxt ;
 pArr[2].innerHTML = servText ;
 pArr[3].innerHTML = prodText;
 pArr[4].innerHTML = visText ;
let h1 = document.createElement(h1) ;


 console.log(pArr);
// ^ Puts all of the elements with the class 'text-content' in an Array like object. Used .from to turn that into an array. Set the for loop to iterate through the length of that array minus the number of paragraphs with different text values than the first two.


let bottomContent = document.getElementsByClassName('bottom-content');
console.log(bottomContent);





/*
The :scope pseudo-class only matches selectors on descendants of the base element.
*/



/*

Add Text over button.

Add header tags.

resize bottom text paragraph widths.

Add footer.




*/