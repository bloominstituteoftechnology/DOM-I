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

const links = document.querySelectorAll('a');

let pValues = Object.values(siteContent.nav)

for(const x in links){links[x].textContent = pValues[x];}


function matchData(x,y){
  let newValues =  Object.values(y);

  for(const k in x){


    x[k].textContent = newValues[k];
  }
};

function giveImgAtr(id, x){
  document.getElementById(id).setAttribute('src', x);
}

matchData(document.querySelector('.cta-text').children,siteContent.cta);
giveImgAtr('cta-img', siteContent["cta"]["img-src"]);

matchData(document.getElementsByClassName('text-content')[0].children, siteContent["main-content"]);

giveImgAtr('middle-img', siteContent["main-content"]["middle-img-src"]);


document.getElementsByClassName('text-content')[1].children[0].textContent = siteContent["main-content"]["about-h4"];
document.getElementsByClassName('text-content')[1].children[1].textContent = siteContent["main-content"]["about-content"];
document.getElementsByClassName('text-content')[2].children[0].textContent = siteContent["main-content"]["services-h4"];
document.getElementsByClassName('text-content')[2].children[1].textContent = siteContent["main-content"]["services-content"];
document.getElementsByClassName('text-content')[3].children[0].textContent = siteContent["main-content"]["product-h4"];
document.getElementsByClassName('text-content')[3].children[1].textContent = siteContent["main-content"]["product-content"];
document.getElementsByClassName('text-content')[4].children[0].textContent = siteContent["main-content"]["vision-h4"];
document.getElementsByClassName('text-content')[4].children[1].textContent = siteContent["main-content"]["vision-content"];

matchData(document.getElementsByClassName('contact')[0].children, siteContent.contact);
matchData(document.querySelector('footer').children, siteContent.footer);

const newLink = document.createElement('a');
newLink.innerText = 'New1';
document.getElementsByTagName('nav')[0].prepend(newLink);

document.getElementsByTagName('nav')[0].appendChild(document.createElement('a')).innerText = 'ExitProgram';

const linksColor = document.getElementsByTagName('a');
for(var x=0; x<linksColor.length; x++){
  linksColor[x].style.color = 'green';
}









