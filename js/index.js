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
// logo.setAttribute('src', siteContent["nav"]["img-src"])
logo.src = (siteContent["nav"]["img-src"]);

// const middleImage = document.getElementById('middle-img');
// middleImage.src = (siteContent['main-content']['middle-img-src']);

// const newH1 = document.querySelector('h1');
// newH1.textContent = siteContent.cta.h1;

// const newButton = document.querySelector('button');
// newButton.textContent = siteContent.cta.button;

// const ctaImage = document.getElementById('cta-img');
// ctaImage.src = (siteContent["cta"]["img-src"]);

// const newMainContent = document.querySelector('.mainContent');

// const newContact = document.querySelector('.contact');

// const NewContactP = document.querySelectorAll('.contact p');
// console.log(NewContactP);

// const newFooter = document.querySelector('footer');
// console.log(siteContent.contact);

// newFooter.textContent - siteContent.footer.copyright;

let navTags = document.querySelectorAll('nav a');
navTags[0].textContent = siteContent.nav["nav-item-1"];
navTags[1].textContent = siteContent.nav["nav-item-2"];
navTags[2].textContent = siteContent.nav["nav-item-3"];
navTags[3].textContent = siteContent.nav["nav-item-4"];
navTags[4].textContent = siteContent.nav["nav-item-5"];
navTags[5].textContent = siteContent.nav["nav-item-6"];

let ctaTextH1 = document.querySelector('.cta-text h1');
ctaTextH1.textContent = siteContent.cta.h1;

let ctaTextBtn = document.querySelector('.cta-text button');
ctaTextBtn.textContent = siteContent.cta.button;

let ctaTextImg = document.querySelector('#cta-img');
ctaTextImg.src = siteContent.cta["img-src"];

let mainContentImg = document.querySelector('.main-content img');
let mainContentH4 = document.querySelectorAll('h4'); 
let mainContentP = document.querySelectorAll('.main-content p'); 
mainContentH4[0].textContent = siteContent["main-content"]["features-h4"];
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];

mainContentP[0].textContent = siteContent["main-content"]["features-content"];
mainContentP[1].textContent = siteContent["main-content"]["about-content"];
mainContentP[2].textContent = siteContent["main-content"]["services-content"];
mainContentP[3].textContent = siteContent["main-content"]["product-content"];
mainContentP[4].textContent = siteContent["main-content"]["vision-content"];

mainContentImg.src = siteContent["main-content"]["middle-img-src"];

let contactH4 = document.querySelector('.contact h4');
let contactP = document.querySelectorAll('.contact p');
contactH4.textContent = siteContent.contact["contact-h4"];

contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

let footer = document.querySelector('footer p');

footer.textContent = siteContent.footer.copyright;

//GARBAGE CODE BELOW!
//document.getElementById("nav a").style.color = "green";
//document.querySelectorAll('nav a').style.color = "green";
// function givemecolor(thecolor,thetext)
//     {
//     return '<span style="color:'+thecolor+'>'+thetext+'</span>';
//     }
// document.write(givemecolor('green'));
// document.write(givemecolor('yellow'));

// var navTags = document.getElementById("navTags");
// var navTags = document.createElement('hello');
// aTags.setAttribute('href',"done");
// aTags.innerHTML = "link text";
// mydiv.appendChild(navTags);

// var p = document.createElement("p");
// document.body.appendChild(p);
// p.attributes

// function pageLoad(){
//  document.getElementById("ahref1").innerHTML = "This";
//  document.getElementById("ahref2").innerHTML = "Failed";
// }
// window.onload = pageLoad;

// document.getElementById("p1").innerHTML = "This also failed";

// var x = document.getElementsByTagName("a");
// for (i = 0; i < x.length; i++) { 
//     if (x[i].innerHTML == "Select All")
//     x[i].click();
// }    

// const h1br = document.createElement('br');
// const h1br2 = document.createElement('br');
// const h1text = siteContent['cta']['h1'].split(' ');
// h1.append(h1br);
// h1.prepend(h1text[0]);
// h1.append(h1text[1]);
// h1.append(h1br2);
// h1.append(h1text[2]);

// g = document.createElement('a');
// g.setAttribute("id", "anchor1");
// document.getElementById("a1").style.color = "green";

// var div = document.createElement("a", {
//   "id": "a1",
//   "class": "anchor1",
//   "data": "text",
//  });
//  document.getElementById("a1").style.color = "green";
//^^^NON WORKING CODE ABOVE!

//WORKING CODE BELOW
let a = document.createElement("a");
a.textContent ="Click Here for free money!";
let header = document.querySelector("nav");
header.prepend(a);
let b = document.createElement("a");
let secondA = document.querySelector("nav a:nth-child(2)");
b.textContent ="Malicious link!";
header.appendChild(b);

let nav = document.querySelectorAll("a");
nav.forEach(function(element){
  element.style.color = "green";
});

//STRETCH PROBLEMS!
document.querySelector(".top-content").style.backgroundColor = "grey";

document.querySelector(".bottom-content").style.backgroundColor = "grey";

//ADDED A BUTTON, BUT NOT ONE THAT CHANGES THE PAGE, LOOK AT THE BOTTOM OF THE PAGE!

var h1 = document.createElement("button");
h1.innerHTML = "HEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHEREHERE";
document.body.appendChild(h1);