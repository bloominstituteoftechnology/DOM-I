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
	  "h1": "DOM<br> Is<br> Awesome",
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
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let links = document.querySelectorAll('nav a');
links[0].innerHTML = siteContent['nav']['nav-item-1'];
links[1].innerHTML = siteContent['nav']['nav-item-2'];
links[2].innerHTML = siteContent['nav']['nav-item-3'];
links[3].innerHTML = siteContent['nav']['nav-item-4'];
links[4].innerHTML = siteContent['nav']['nav-item-5'];
links[5].innerHTML = siteContent['nav']['nav-item-6'];

//two new nav elements
let nav = document.querySelector('header nav')
console.log(nav)
var link1 = document.createElement("a")
link1.innerHTML = 'Facebook Page';
nav.prepend(link1);
var link2 = document.createElement("a");
link2.innerHTML = 'Twitter';
nav.appendChild(link2);





links[0].style.color = 'green';
links[1].style.color = 'green';
links[2].style.color = 'green';
links[3].style.color = 'green';
links[4].style.color = 'green';
links[5].style.color = 'green';
link1.style.color = 'green';
link2.style.color = 'green';


let ctaText = document.querySelector('h1');
ctaText.innerHTML = siteContent.cta.h1;

const button = document.querySelector('button');
button.innerHTML = siteContent.cta.button;

const img1= document.getElementById('cta-img');
img1.src= siteContent.cta ['img-src'];


//headers
const headerh4= document.querySelectorAll('div.text-content > h4');
headerh4[0].innerHTML = siteContent ['main-content'] ['features-h4']
headerh4[1].innerHTML = siteContent ['main-content'] ['about-h4']
headerh4[2].innerHTML = siteContent ['main-content'] ['services-h4']
headerh4[3].innerHTML = siteContent ['main-content'] ['product-h4']
headerh4[4].innerHTML = siteContent ['main-content'] ['vision-h4']

//content
const content = document.querySelectorAll('div.text-content > p');
console.log(content)
content[0].innerHTML = siteContent ['main-content']['features-content'];
content[1].innerHTML = siteContent ['main-content']['about-content'];
content[2].innerHTML = siteContent ['main-content']['services-content'];
content[3].innerHTML = siteContent ['main-content']['product-content'];
content[4].innerHTML = siteContent ['main-content']['vision-content'];

document.getElementById('middle-img').src = siteContent ['main-content']['middle-img-src']

//contact 

let footer = document.querySelector('section.contact h4');

footer.innerHTML = siteContent.contact ['contact-h4']

let contactInfo = document.querySelectorAll('section.contact > p')

contactInfo[0].innerHTML= siteContent.contact.address;
contactInfo[1].innerHTML= siteContent.contact.phone;
contactInfo[2].innerHTML= siteContent.contact.email;
