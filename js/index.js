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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//nav bar
const navigation = document.querySelectorAll('a');
for(let i = 0; i < navigation.length; i++) {
  navigation[i].style.color = "green";
  navigation[i].innerText = siteContent["nav"]["nav-item-" + (i+1)];
}

const newATag = document.createElement('a');
const secondATag = document.createElement('a');
const homeElement = document.querySelector('nav');

homeElement.prepend(newATag);
homeElement.appendChild(secondATag);

newATag.innerText = "Home";
secondATag.innerText = "Blog";

newATag.style.color = "green";
secondATag.style.color = "green";




//cta
const jumboHeader = document.querySelector(".cta-text h1");
jumboHeader.innerText = siteContent["cta"]["h1"];

const jumboButton = document.querySelector(".cta-text button");
jumboButton.innerText = siteContent["cta"]["button"];

const jumboImg = document.getElementById("cta-img");
jumboImg.src = siteContent["cta"]["img-src"];



//main-content
// const firstTextHeader = document.querySelectorAll(".top-content .text-content h4");
// firstTextHeader[0].innerText = siteContent["main-content"]["features-h4"];
// firstTextHeader[1].innerText = siteContent["main-content"]["about-h4"];
// const firstTextParagraph = document.querySelectorAll(".top-content .text-content p");
// firstTextParagraph[0].innerText = siteContent["main-content"]["features-content"];
// firstTextParagraph[1].innerText = siteContent["main-content"]["about-content"];


// const secondTextHeader = document.querySelectorAll(".bottom-content .text-content h4");
// secondTextHeader[0].innerText = siteContent["main-content"]["services-h4"];
// secondTextHeader[1].innerText = siteContent["main-content"]["product-h4"];
// secondTextHeader[2].innerText = siteContent["main-content"]["vision-h4"];
// const secondTextParagraph = document.querySelectorAll(".bottom-content .text-content p");
// secondTextParagraph[0].innerText = siteContent["main-content"]["services-content"];
// secondTextParagraph[1].innerText = siteContent["main-content"]["product-content"];
// secondTextParagraph[2].innerText = siteContent["main-content"]["vision-content"];

const mainHeader = document.querySelectorAll(".main-content h4")

for(let i = 0; i < mainHeader.length; i++) {
  const keys = [];
  for(x in siteContent["main-content"]) {
    if(!!x.includes("h4")) {
      keys.push(x);
    }
  }
  mainHeader[i].innerText = siteContent["main-content"][keys[i]];
}

const middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

middleImg.style.borderRadius = "10px";


const mainParagraph = document.querySelectorAll(".main-content p");

for(let i = 0; i < mainParagraph.length; i++) {
  const keys = [];
  for(x in siteContent["main-content"]) {
    if(!!x.includes("content")) {
      keys.push(x);
      console.log(keys);
    }
  }
  mainParagraph[i].innerText = siteContent["main-content"][keys[i]];
}


for (let i = 0; i < mainParagraph.length; i++) {
  mainParagraph[i].style.color = "blue";  
}

for(let i = 0; i < mainHeader.length; i++) {
  mainHeader[i].style.color = "green";
  mainHeader[i].style.fontSize = "2.0rem";
}




//contact
const contactTitle = document.querySelector(".contact h4");
contactTitle.innerText = siteContent["contact"]["contact-h4"];

let contactParagraph = document.querySelectorAll(".contact p");

for(let i = 0; i < contactParagraph.length; i++) {
  const values = Object.values(siteContent["contact"]);
  contactParagraph[i].innerText = values[i + 1];
  contactParagraph[i].style.lineHeight = "1.3";
}

//footer
const footerText = document.querySelector("footer p");
footerText.innerText = siteContent["footer"]["copyright"];
