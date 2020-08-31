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

//stretch goal
document.body.style.backgroundColor = "white";
document.body.style.color = "black"; 

let navbar = document.querySelectorAll('nav a');
navbar[0].textContent = siteContent['nav']['nav-item-1'];
navbar[1].textContent = siteContent['nav']['nav-item-2'];
navbar[2].textContent = siteContent['nav']['nav-item-3'];
navbar[3].textContent = siteContent['nav']['nav-item-4'];
navbar[4].textContent = siteContent['nav']['nav-item-5'];
navbar[5].textContent = siteContent['nav']['nav-item-6'];

//change nav color to green
navbar.forEach((color) =>{
  return color.style.color ='green';})

let h1 = document.querySelector("h1");
h1.textContent = "DOM Is Awesome";

let button = document.querySelector("button");
button.textContent = "Get Started";

const ctaimg = document.getElementById('cta-img')
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])

const tp1 = document.querySelectorAll('.top-content .text-content h4')
tp1[0].textContent = (siteContent['main-content']['features-h4'])

const tp2 = document.querySelectorAll('.top-content .text-content p')
tp2[0].textContent = (siteContent['main-content']['features-content'])

const tp3 = document.querySelectorAll('.top-content .text-content h4')
tp3[1].textContent = (siteContent['main-content']['about-h4'])

const tp4 = document.querySelectorAll('.top-content .text-content p')
tp4[1].textContent = (siteContent['main-content']['about-content'])

const tpimg = document.getElementById('middle-img')
tpimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const bc1 = document.querySelectorAll('.bottom-content .text-content h4')
bc1[0].textContent = (siteContent['main-content']['services-h4'])

const bc2 = document.querySelectorAll('.bottom-content .text-content p')
bc2[0].textContent = (siteContent['main-content']['services-content'])

const bc3 = document.querySelectorAll('.bottom-content .text-content h4')
bc3[1].textContent = (siteContent['main-content']['product-h4'])

const bc4 = document.querySelectorAll('.bottom-content .text-content p')
bc4[1].textContent = (siteContent['main-content']['product-content'])

const bc5 = document.querySelectorAll('.bottom-content .text-content h4')
bc5[2].textContent = (siteContent['main-content']['vision-h4'])

const bc6 = document.querySelectorAll('.bottom-content .text-content p')
bc6[2].textContent = (siteContent['main-content']['vision-content'])

const lastSection = document.querySelector('.contact h4')
lastSection.textContent = (siteContent['contact']['contact-h4'])

const last = document.querySelectorAll('.contact p')

last[0].textContent = (siteContent['contact']['address'])

last[1].textContent = (siteContent['contact']['phone'])

last[2].textContent = (siteContent['contact']['email'])

//stretch
last.forEach((color) =>{
  return color.style.color ='green';})

let footer = document.querySelector("footer");
footer.textContent = "Copyright Great Idea! 2018";

  //on-click button to changer bc color
function function1() {
  document.body.style.backgroundColor = "gray";
}

function function2() {
  document.body.style.backgroundColor = "white";
}

//.appendChild()
let p = document.createElement("p");
document.body.appendChild(p);
// Create a new paragraph element, and append it to the end of the document body

//.prepend()
let app = document.querySelector('#navbar');

let langs = ['Home'];

let nodes = langs.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});

app.prepend(...nodes);