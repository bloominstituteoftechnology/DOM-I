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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//pull and fill navigation text
let navigation = document.querySelectorAll('a');

for(let i = 0; i < navigation.length; i++) {
  navigation[i].innerText = siteContent["nav"][`nav-item-${i+1}`];
};

//pull and fill content head
let ctaHead = document.querySelector('h1');

let h1str = siteContent.cta.h1

const h1StrArr = h1str.split(' ');

for(let i = 0; i < h1StrArr.length; i++) {
  h1StrArr[i] = `${h1StrArr[i]} \n`
  console.log(h1StrArr[i])
}

h1str = h1StrArr.join(' ');

ctaHead.innerText = h1str;


//button and content image
let button = document.querySelector('button');
button.innerText = siteContent.cta.button;

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']["img-src"];


//Main Content H4 headings and paragraphs pulled and filled
let mainContentH4List = document.querySelectorAll('.main-content h4');
let mainContentPList = document.querySelectorAll('.text-content p');

const arr = Object.values(siteContent["main-content"]);

for(let i = 0; i < mainContentH4List.length; i++) {

  const arrH4 = arr.filter(item => !item.includes('.'));
  const arrP = arr.filter(item => item.includes(' '));

  mainContentH4List[i].innerText = arrH4[i]
  mainContentPList[i].innerText = arrP[i];
}

//Main Content image
let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

//Contact Header
let contactH4 = document.querySelector('.contact h4');
contactH4.innerText = siteContent["contact"]["contact-h4"];

//Pull and Fill Contact Information
let contactInfo = document.querySelectorAll('.contact p');
const contactArr = Object.values(siteContent["contact"]);
contactArr.shift();

for(let i = 0; i < contactInfo.length; i++) {
  contactInfo[i].innerText = contactArr[i];
}

//Footer and Copyright
let copyright = document.querySelector('footer p');
copyright.innerText = siteContent["footer"]["copyright"];

//Change navigation text green
for(let i = 0; i < navigation.length; i++) {
  navigation[i].style.color = 'green';
}

//prepend and appendChild
let nav = document.querySelector('nav');

//Prepend
const privatePolicy = document.createElement('a');
privatePolicy.href = '#';
privatePolicy.innerText = 'Private Policy';
privatePolicy.style.color = 'green';
nav.prepend(privatePolicy);

//appendChild
const news = document.createElement('a');
news.href = '#';
news.innerText = 'News';
news.style.color = 'green';
nav.appendChild(news);

//Adding event listener to get started button
function darkTheme() {
  let body = document.querySelector('body');
  body.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
  body.style.color = 'white';
  for(let i = 0; i < navigation.length; i++) {
    navigation[i].style.color = 'white';
  }
  privatePolicy.style.color = 'white';
  news.style.color = 'white';
  button.innerText = 'New Theme!'
}

button.addEventListener('click', darkTheme);
