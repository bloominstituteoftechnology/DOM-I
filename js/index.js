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
    "h1": "DOM <br>Is <br> Awesome",
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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


let nav = document.querySelectorAll('nav a');


nav.forEach(item => item.style = 'color: #94BFA7');
for (let i=0; i<nav.length; i++) {
        nav[i].innerHTML = siteContent.nav[`nav-item-${i+1}`];
      }
//could nest the color change into the for loop too





 //appended anchor 
var navParent = document.querySelector('nav');
var newAnchor = document.createElement('a');
newAnchor.innerHTML = 'FAQ';
newAnchor.style = 'color: #94BFA7';
navParent.appendChild(newAnchor);

//prepended anchor
var secondAnchor = document.createElement('a');
secondAnchor.innerHTML = 'Welcome';
secondAnchor.style = 'color: #94BFA7';
// navParent.insertBefore(secondAnchor, navParent.firstChild); //using .insertBefore
navParent.prepend(secondAnchor);


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let h1 = document.querySelector(".cta-text h1");
h1.innerHTML = siteContent.cta.h1;
h1.style = 'color: #F7A1C4';

let button = document.querySelector('button');
button.innerHTML = siteContent.cta.button;


let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta["img-src"]);



let arrH4 = ["features", "about", "services", "product", "vision"];
let h4 = document.querySelectorAll(".text-content h4");
for (let i=0; i<h4.length; i++) {
  h4[i].innerHTML = siteContent["main-content"][`${arrH4[i]}-h4`];
  h4[i].style = 'color: #2F2F2F';
}

let p = document.querySelectorAll(".text-content p");
for (let i=0; i<p.length; i++) {
  p[i].innerHTML = siteContent["main-content"][`${arrH4[i]}-content`];
  p[i].style= 'color: #DC7F9B'
}


let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);





let contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent.contact["contact-h4"];
contactH4.style = 'color: #2F2F2F';

let address = document.querySelectorAll(".contact p")[0];
address.innerHTML = siteContent.contact["address"];
address.style= 'color: #DC7F9B';

let phone = document.querySelectorAll(".contact p")[1];
phone.innerHTML = siteContent.contact["phone"];
phone.style= 'color: #DC7F9B';

let email = document.querySelectorAll(".contact p")[2];
email.innerHTML = siteContent.contact["email"];
email.style= 'color: #DC7F9B';




let footer = document.querySelector("footer");
footer.innerHTML = siteContent.footer.copyright;
footer.style = 'color: #2F2F2F';


// button.addEventListener('click', clickAction;
// const clickAction = (event) => {
//   button.innerHTML = 'Success!';
// }
