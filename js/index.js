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

let ctaHeader = document.querySelector("#cta-img");
ctaHeader.setAttribute('src', siteContent["cta"]["img-src"]);

let navBar = document.querySelectorAll("nav a");

navBar[0].innerHTML = siteContent["nav"]["nav-item-1"];
navBar[1].innerHTML = siteContent["nav"]["nav-item-2"];
navBar[2].innerHTML = siteContent["nav"]["nav-item-3"];
navBar[3].innerHTML = siteContent["nav"]["nav-item-4"];
navBar[4].innerHTML = siteContent["nav"]["nav-item-5"];
navBar[5].innerHTML = siteContent["nav"]["nav-item-6"];

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerHTML = siteContent.cta.h1; 

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent.cta.button; 
//Middle image picture being added. 
let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];//Just trying the lecture way out. 

//Grabbing all of the h4 titles  there is 5 in total. 
let contentTitles = document.querySelectorAll(".text-content h4");

//This will put the titles on the page for the content. 
contentTitles[0].innerHTML = siteContent["main-content"]["features-h4"];
contentTitles[1].innerHTML = siteContent["main-content"]["about-h4"];
contentTitles[2].innerHTML = siteContent["main-content"]["services-h4"];
contentTitles[3].innerHTML = siteContent["main-content"]["product-h4"];
contentTitles[4].innerHTML = siteContent["main-content"]["vision-h4"];
//Titles completed

//Grabbing all of the content p elements 
let contentParagraphs = document.querySelectorAll(".text-content p");

//This will add the content in the form of paragraphs.
contentParagraphs[0].innerHTML = siteContent["main-content"]["features-content"];
contentParagraphs[1].innerHTML = siteContent["main-content"]["about-content"];
contentParagraphs[2].innerHTML = siteContent["main-content"]["services-content"];
contentParagraphs[3].innerHTML = siteContent["main-content"]["product-content"];
contentParagraphs[4].innerHTML = siteContent["main-content"]["vision-content"];
//End of content update. 

//Contact section grab
let contactHeader = document.querySelector(".contact h4");
//^header grabbed 
let contactInfo = document.querySelectorAll(".contact p");
//^Paragraphs grabbed three in total  0-2 index. 

//Updating the contact section 
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

contactInfo[0].innerHTML = siteContent.contact.address;
contactInfo[1].innerHTML = siteContent.contact.phone;
contactInfo[2].innerHTML = siteContent.contact.email;

//Footer section grab paragraph element
let footerParagraph = document.querySelector("footer p");
//Footer update
footerParagraph.innerHTML = siteContent.footer.copyright;

//Updating website content complete^^^ 

//Making changes and adding to content 

//Change the color of the navigation text to be green.
//There is 6 elements within this so a ForEach method would be best to keep the code dry here. 

navBar.forEach(function (element){
  element.style.color = "green"; 
});
//^For each element in NavBar change the color of the text to green


