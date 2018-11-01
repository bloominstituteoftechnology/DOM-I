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
    "address" : `123 Way 456 Street Somewhere, USA`,
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
// add banner type img to middle of page
let midimg = document.getElementById("middle-img");
midimg.setAttribute('src',siteContent["main-content"]["middle-img-src" ]);
// -----------nav implementation starts here-----------------
// add text content to the a tags in the nav.
let navCon = document.querySelectorAll('nav a');
navCon[0].textContent = siteContent['nav']["nav-item-1"];
navCon[1].textContent = siteContent['nav']["nav-item-2"];
navCon[2].textContent = siteContent['nav']["nav-item-3"];
navCon[3].textContent = siteContent['nav']["nav-item-4"];
navCon[4].textContent = siteContent['nav']["nav-item-5"];
navCon[5].textContent = siteContent['nav']["nav-item-6"];
// change the text in the nav to green using a foreach to iterate over each nav element.
navCon.forEach((link,i)=>{link.style.color = "green";});
// append an item to the nav
const blog = document.createElement('a');
blog.style.color="green";
blog.href = '#';
blog.textContent = 'Blog';
document.querySelector('nav').appendChild(blog);
// prepend an item to the nav
const forums = document.createElement('a');
forums.style.color = "green";
forums.href = '#';
forums.textContent = 'Forums';
document.querySelector('nav').prepend(forums);
// ------------------nav implementation ends here ------------------------

//-------------------Cta content begins here -----------------------------
// Add round code img to page
let rndimg = document.getElementById("cta-img");
rndimg.setAttribute('src',siteContent["cta"]["img-src" ]);
// make the large text visible  and style with breaks h1 
const ctaText = document.querySelector('.cta-text h1');
siteContent.cta["h1"] = "DOM<br> Is<br> Awesome!";
ctaText.innerHTML = siteContent.cta["h1"];
// Add button below the h1 text
document.querySelector('.cta button').innerHTML = siteContent["cta"]['button'];
let ebut = document.querySelector('.cta button');
let cont = document.querySelector('.container');
cont.style.padding = "0 0 0 4px "
ebut.addEventListener("click", myFunction);
ebut.addEventListener("click", someOtherFunction);

function myFunction() {
    
    cont.style.backgroundColor = "black";
    navCon.forEach((link,i)=>{link.style.color = "red";});
}
function someOtherFunction() {
    cont.style.color = "white";
}
// -----------------Cta content ends here -------------------------------
// -----------------main content starts here ----------------------------
let mconh4 = document.querySelectorAll(".main-content .text-content h4");
mconh4[0].innerHTML = siteContent["main-content"]["features-h4"];
mconh4[1].innerHTML = siteContent["main-content"]["about-h4"];
mconh4[2].innerHTML = siteContent["main-content"]["services-h4"];
mconh4[3].innerHTML = siteContent["main-content"]["product-h4"];
mconh4[4].innerHTML = siteContent["main-content"]["vision-h4"];
let mconp = document.querySelectorAll(".main-content .text-content p")
mconp[0].innerHTML = siteContent["main-content"]["features-content"];
mconp[1].innerHTML = siteContent["main-content"]["about-content"];
mconp[2].innerHTML = siteContent["main-content"]["services-content"];
mconp[3].innerHTML = siteContent["main-content"]["product-content"];
mconp[4].innerHTML = siteContent["main-content"]["vision-content"];
// ------------------------End of main content--------------------
// ------------------------contact & footer content begins here----------
document.querySelectorAll('.contact p')[0].textContent = siteContent["contact"]["address"]; 
document.querySelectorAll('.contact p')[1].textContent = siteContent["contact"]["phone"];
document.querySelectorAll('.contact p')[2].textContent = siteContent["contact"]["email"];
document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];
let addre = document.querySelectorAll('.contact p')[0];
addre.style.width = '25%';
// -----------------------end of footer---------------------------
