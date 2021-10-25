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

//nav content
const nav1 = document.querySelector('nav a:nth-of-type(1)');
const nav2 = document.querySelector('nav a:nth-of-type(2)');
const nav3 = document.querySelector('nav a:nth-of-type(3)');
const nav4 = document.querySelector('nav a:nth-of-type(4)');
const nav5 = document.querySelector('nav a:nth-of-type(5)');
const nav6 = document.querySelector('nav a:nth-of-type(6)');
// const navArr = Array.from(nav);
nav1.textContent = siteContent["nav"]["nav-item-1"];
nav2.textContent = siteContent["nav"]["nav-item-2"];
nav3.textContent = siteContent["nav"]["nav-item-3"];
nav4.textContent = siteContent["nav"]["nav-item-4"];
nav5.textContent = siteContent["nav"]["nav-item-5"];
nav6.textContent = siteContent["nav"]["nav-item-6"];
 
//cta section
const h1 = document.querySelector('.cta-text h1');
// h1.textContent = siteContent["cta"]["h1"];
const h1Word = siteContent["cta"]["h1"].split(" ");
h1.innerHTML = `${h1Word[0]} <br> ${h1Word[1]} <br> ${h1Word[2]}`

h1.prepend(document.createElement("br"));



//cta button
const button = document.querySelector('.cta-text button');
button.textContent = siteContent["cta"]["button"];

//cta image
const ctaImg = document.querySelector(".cta img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//Main section top content
const topTextContent1 = document.querySelector(".top-content .text-content:nth-of-type(1)");
const featureH4 = topTextContent1.querySelector("h4");
const featureContent = topTextContent1.querySelector("p");

featureH4.textContent = siteContent["main-content"]["features-h4"];
featureContent.textContent =  siteContent["main-content"]["features-content"];

const topTextContent2 = document.querySelector(".top-content .text-content:nth-of-type(2)");
const aboutH4 = topTextContent2.querySelector("h4");
const aboutContent = topTextContent2.querySelector("p");

aboutH4.textContent = siteContent["main-content"]["about-h4"];
aboutContent.textContent =  siteContent["main-content"]["about-content"];

//main section image 
 const mainImg = document.querySelector(".main-content img");
 mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);


 //Bottom content 
 //Text content 

const bottomText1 = document.querySelector(".bottom-content .text-content:nth-of-type(1)");
const servicesH4 = bottomText1.querySelector("h4");
const servicesContent = bottomText1.querySelector("p");

servicesH4.textContent = siteContent["main-content"]["services-h4"];
servicesContent.textContent = siteContent["main-content"]["services-content"];

const bottomText2 = document.querySelector(".bottom-content .text-content:nth-of-type(2)");
const productH4 = bottomText2.querySelector("h4");
const productContent = bottomText2.querySelector("p");

productH4.textContent = siteContent["main-content"]["product-h4"];
productContent.textContent = siteContent["main-content"]["product-content"];

const bottomText3 = document.querySelector(".bottom-content .text-content:nth-of-type(3)");
const visionH4 = bottomText3.querySelector("h4");
const visionContent = bottomText3.querySelector("p");

visionH4.textContent = siteContent["main-content"]["vision-h4"];
visionContent.textContent = siteContent["main-content"]["vision-content"];


//Contact section

const contact = document.querySelector(".contact");
const contactH4 = contact.querySelector("h4");
const contactContent1 = contact.querySelector("p:nth-of-type(1)");
const contactContent2 = contact.querySelector("p:nth-of-type(2)");
const contactContent3 = contact.querySelector("p:nth-of-type(3)");

//contact heading
contactH4.textContent = siteContent["contact"]["contact-h4"];

//Address
const address = siteContent["contact"]["address"].split(" "); 
console.log(address);
contactContent1.innerHTML = `${address[0]} ${address[1]} ${address[2]} ${address[3]} <br> ${address[4]} ${address[5]}`


//phone and email
contactContent2.textContent = siteContent["contact"]["phone"];
contactContent3.textContent = siteContent["contact"]["email"];


//Footer content

const footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"]


