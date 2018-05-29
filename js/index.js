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

let navItem = document.querySelectorAll(".container header nav a");
navItem[0].innerHTML = siteContent["nav"]["nav-item-1"];
navItem[1].innerHTML = siteContent["nav"]["nav-item-2"];
navItem[2].innerHTML = siteContent["nav"]["nav-item-3"];
navItem[3].innerHTML = siteContent["nav"]["nav-item-4"];
navItem[4].innerHTML = siteContent["nav"]["nav-item-5"];
navItem[5].innerHTML = siteContent["nav"]["nav-item-6"];

for (let i = 0; i < navItem.length; i++) {
  navItem[i].style.color = "green";
}

let blogElement = document.createElement("a");
let blog = document.createTextNode("Blog");
blogElement.setAttribute("href", "#");
blogElement.appendChild(blog);
document.querySelector(".container nav").appendChild(blogElement);
blogElement.style.color = "green";

let homeElement = document.createElement("a");
let home = document.createTextNode("Home");
homeElement.setAttribute("href", "#");
homeElement.prepend(home);
document.querySelector(".container nav").prepend(homeElement);
homeElement.style.color = "green";

let ctaHeader = document.querySelector(".cta-text h1");
let ctaButton = document.querySelector(".cta-text button")
let ctaImage = document.querySelector("#cta-img");
ctaHeader.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]); 

let mainContentHeader = document.querySelectorAll(".text-content h4");
let mainContentParagraph = document.querySelectorAll(".text-content p");
let mainContentImage = document.querySelector("#middle-img");
mainContentHeader[0].textContent = siteContent["main-content"]["features-h4"];
mainContentParagraph[0].textContent = siteContent["main-content"]["features-content"]
mainContentHeader[1].textContent = siteContent["main-content"]["about-h4"];
mainContentParagraph[1].textContent = siteContent["main-content"]["about-content"]
mainContentHeader[2].textContent = siteContent["main-content"]["services-h4"];
mainContentParagraph[2].textContent = siteContent["main-content"]["services-content"]
mainContentHeader[3].textContent = siteContent["main-content"]["product-h4"];
mainContentParagraph[3].textContent = siteContent["main-content"]["product-content"]
mainContentHeader[4].textContent = siteContent["main-content"]["vision-h4"];
mainContentParagraph[4].textContent = siteContent["main-content"]["vision-content"]
mainContentImage.setAttribute("src", siteContent["main-content"]["middle-img-src"])

let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];
let contactParagraph = document.querySelectorAll(".contact p");
contactParagraph[0].textContent = siteContent["contact"]["address"];
contactParagraph[1].textContent = siteContent["contact"]["phone"];
contactParagraph[2].textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];