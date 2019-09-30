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
    "h1": "DOM \n Is \n Awesome",
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


document.querySelector("#cta-img").src = "img/header-img.png";
document.querySelector("#middle-img").src = "img/mid-page-accent.jpg"
document.querySelector("button").style.borderRadius = ".25rem"
document.querySelector("button").style.marginRight = "4rem"
document.querySelector("#middle-img").style.padding = "2% 0% 2% 0% "
document.querySelector('h1').style.width = "100px"
document.querySelector("h1").style.wordBreak = "normal"
document.querySelector("h1").style.justifyContent= "center"
document.querySelector("h1").style.marginRight= "50px"
document.querySelector("h1").style.display = "flex"
document.querySelector("h1").style.flexWrap = "wrap"


document.querySelector(".contact").style.width = "11rem"









const links = document.querySelectorAll('a');
links.forEach((currentValue, i) => (currentValue.textContent = Object.values(siteContent.nav)[i]))
links.forEach((item) => (item.style.color = 'green'));


let header = document.querySelector("h1");
header.textContent = ('src', siteContent["cta"]["h1"])

let nav = document.querySelector("nav")



let clicker = document.querySelector('button');
clicker.textContent = ('src', siteContent['cta']['button'])
let nav0 = document.querySelectorAll('a');
nav0[0].textContent = ('src', siteContent['nav']['nav-item-1'])
let nav1 = document.querySelectorAll('a');
nav1[1].textContent = ('src', siteContent['nav']['nav-item-2'])
let nav2 = document.querySelectorAll('a');
nav2[2].textContent = ('src', siteContent['nav']['nav-item-3'])
let nav3 = document.querySelectorAll('a');
nav3[3].textContent = ('src', siteContent['nav']['nav-item-4'])
let nav4 = document.querySelectorAll('a');
nav4[4].textContent = ('src', siteContent['nav']['nav-item-5']);
let nav5 = document.querySelectorAll('a');
nav5[5].textContent = ('src', siteContent['nav']['nav-item-6'])
const nav6 = document.createElement('a');
const nav7 = document.createElement('a');
nav6.textContent = "Links"
nav7.textContent = "Events"
nav.appendChild(nav6);
nav6.style.color = 'green';
nav.appendChild(nav7);
nav7.style.color = 'green';




let para1 = document.querySelectorAll('p');
para1[0].textContent = ('src', siteContent["main-content"]["features-content"])
let head1 = document.querySelectorAll('h4');
head1[0].textContent = ('src', siteContent["main-content"]["features-h4"]);

let para2 = document.querySelectorAll('p');
para2[1].textContent = ('src', siteContent["main-content"]["about-content"])
let head2= document.querySelectorAll('h4');
head2[1].textContent = ('src', siteContent["main-content"]["about-h4"]);

let para3 = document.querySelectorAll('p');
para3[2].textContent = ('src', siteContent["main-content"]["services-content"])
let head3= document.querySelectorAll('h4');
head3[2].textContent = ('src', siteContent["main-content"]["services-h4"])
let para4 = document.querySelectorAll('p');
para4[3].textContent = ('src', siteContent["main-content"]["product-content"])
let head4 = document.querySelectorAll('h4');
head4[3].textContent = ('src', siteContent["main-content"]["product-h4"])
let para5 = document.querySelectorAll('p');
para5[4].textContent = ('src', siteContent["main-content"]["vision-content"])
let head5 = document.querySelectorAll('h4');
head5[4].textContent = ('src', siteContent["main-content"]["vision-h4"]);

let head6 = document.querySelectorAll('h4');
head6[5].textContent = ('src', siteContent["contact"]["contact-h4"])
let para6 = document.querySelectorAll('p')
para6[5].textContent = ('src', siteContent['contact']['address'])
let para7 = document.querySelectorAll('p')
para7[6].textContent = ('src', siteContent['contact']['phone'] )
let para8 = document.querySelectorAll('p');
para8[7].textContent = ('src', siteContent['contact']['email'])
para8[7].style.lineHeight = "2"




let para9 = document.querySelectorAll('p');
para9[8].textContent = ('src', siteContent['footer']['copyright'])


