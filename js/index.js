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

///NAVIGATION
let logo = document.getElementById("logo-img");
let navLinks = document.querySelectorAll(".container header nav a");

for(let i = 0; i < navLinks.length; i++){
  navLinks[i].innerText = siteContent["nav"]["nav-item-" + [i+1]];
  navLinks[i].style.color = "green";
}

logo.setAttribute('src', siteContent["nav"]["img-src"]);

///CTA 
let ctaElementH1 =  document.querySelector(".container .cta .cta-text h1");
let ctaElementBtn =  document.querySelector(".container .cta .cta-text button");
let ctaElementIMG = document.getElementById("cta-img");


//H1
ctaElementH1.innerHTML = siteContent["cta"]["h1"];
//Button
ctaElementBtn.innerText = siteContent["cta"]["button"];
//Image
ctaElementIMG.setAttribute("src", siteContent["cta"]["img-src"]);


//main-content
let textContent = document.getElementsByClassName("text-content");
let contentIMG = document.getElementById("middle-img");


//Features
textContent[0].childNodes[1].innerText = siteContent["main-content"]["features-h4"]
textContent[0].childNodes[3].innerText = siteContent["main-content"]["features-content"];
//About
textContent[1].childNodes[1].innerText = siteContent["main-content"]["about-h4"]
textContent[1].childNodes[3].innerText = siteContent["main-content"]["about-content"];

contentIMG.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//services
textContent[2].childNodes[1].innerText = siteContent["main-content"]["services-h4"]
textContent[2].childNodes[3].innerText = siteContent["main-content"]["services-content"];
//Product
textContent[3].childNodes[1].innerText = siteContent["main-content"]["product-h4"]
textContent[3].childNodes[3].innerText = siteContent["main-content"]["product-content"];
//
textContent[4].childNodes[1].innerText = siteContent["main-content"]["vision-h4"]
textContent[4].childNodes[3].innerText = siteContent["main-content"]["vision-content"];

let contact = document.getElementsByClassName("contact");
contact[0].childNodes[1].innerText = siteContent["contact"]["contact-h4"];
contact[0].childNodes[3].innerText = siteContent["contact"]["address"];
contact[0].childNodes[5].innerText = siteContent["contact"]["phone"];
contact[0].childNodes[7].innerText = siteContent["contact"]["email"];


let footer = document.querySelector("footer p");
footer.innerText = siteContent["footer"]["copyright"];


///added to navigation
//create new elements

let homeLink = document.createElement("a");
let blogLink = document.createElement("a");

//find nav
let newLinks = document.querySelector(".container header nav")

//new elements styling/text
homeLink.innerHTML = "Home";
homeLink.style.color = "green";
blogLink.innerHTML = "Blog";
blogLink.style.color = "green";

///add newly created elements to nav
//front of nav
newLinks.prepend(homeLink);
//end of nav
newLinks.appendChild(blogLink)


