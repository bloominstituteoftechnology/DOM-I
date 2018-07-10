

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
let logo = document.getElementById('logo-img');
console.log(logo)
logo.setAttribute('src', siteContent["nav"]["img-src"])
let menu = document.getElementsByTagName["nav"];
menuNav = document.querySelectorAll('a')
console.log(menuNav.length)
menuNav[0].innerHTML = siteContent['nav']['nav-item-1']
menuNav[1].innerHTML = siteContent['nav']['nav-item-2']
menuNav[2].innerHTML = siteContent['nav']['nav-item-3']
menuNav[3].innerHTML = siteContent['nav']['nav-item-4']
menuNav[4].innerHTML = siteContent['nav']['nav-item-5']
menuNav[5].innerHTML = siteContent['nav']['nav-item-6']

const customNav = document.querySelector('.customNav')
customNav.addEventListener('click', (event) ==>{(event.target.parentElement.style.color="yellow")})

let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = (siteContent["cta"]["h1"]);

let ctaTxt1 = document.getElementsByClassName("cta-text")[0];

ctaTxt1.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaTxt1.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

let midImg = document.getElementById("cta-img");
midImg.setAttribute('src', siteContent["cta"]["img-src"])

let rightImg = document.getElementById("middle-img");
rightImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let aboutContent = document.querySelector(".top-content .text-content"); 
aboutContent.innerHTML = ("p", siteContent["main-content"]["about-content"])

// 
let textContentList = document.querySelectorAll(".top-content");
console.log(textContentList)
textContentList[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
textContentList[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
textContentList[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
textContentList[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
textContentList[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
textContentList[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
textContentList[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
textContentList[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
textContentList[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
textContentList[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Update Contact
let contact = document.getElementsByClassName("contact")[0];
contact.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"]
contact.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"]
contact.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
contact.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]

// Update Footer
let footer = document.querySelector("footer");
footer.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];

// Add New Content
// Change navigation text color
menuNav.forEach((link,i) => {
  link.style.color = "red";
})

// Add two items to navigation
menuNav = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
}
menuNav.prepend(createNewNode("Extra Item 1"));
menuNav.append(createNewNode("Extra Item 2"));