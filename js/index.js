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

//updating Nav in header
const headerNav = document.querySelectorAll("nav a"); // get node list nav 
for ( let i =0; i <headerNav.length; i++){             // loop the nav items to index them
  let navIndex = "nav-item-" + i;
  headerNav[i].textContent = siteContent["nav"][navIndex];
}

const h1Header = document.querySelector("h1");  // set h1 Header
h1Header.textContent = siteContent["cta"]["h1"]; //send it to the DOM

const sectionOneButton = document.querySelector("button");   //set Button Selector
sectionOneButton.textContent = siteContent["cta"]["button"]; // send button to DOM


const sectionOneImg = document.querySelector("#cta-img");
sectionOneImg.setAttribute('src', siteContent["cta"]["img-src"]);

const mainContentH4 = document.querySelectorAll(".main-content h4"); //query for all h4 in html
mainContentH4[0].textContent = siteContent["main-content"]["features-h4"]; // assign each h4
mainContentH4[1].textContent = siteContent["main-content"]["about-h4"];
mainContentH4[2].textContent = siteContent["main-content"]["services-h4"];
mainContentH4[3].textContent = siteContent["main-content"]["product-h4"];
mainContentH4[4].textContent = siteContent["main-content"]["vision-h4"];

const ContentP = document.querySelectorAll(".text-content p");                              //query for all P tags
ContentP[0].textContent = siteContent["main-content"]["features-content"]; // assign all p text values
ContentP[1].textContent = siteContent["main-content"]["about-content"];
ContentP[2].textContent = siteContent["main-content"]["services-content"];
ContentP[3].textContent = siteContent["main-content"]["product-content"];
ContentP[4].textContent = siteContent["main-content"]["vision-content"];


const middleImg = document.querySelector("#middle-img");                      //set middle img
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const ContactH4 = document.querySelector(".contact h4");        //set contact section h4
ContactH4.textContent = siteContent["contact"]["contact-h4"];


























