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

document.querySelectorAll("nav > a").forEach((e, i) => {
  e.textContent = siteContent["nav"][`nav-item-${i + 1}`];
});

document.querySelector("section.cta > div > h1").innerHTML = siteContent["cta"]["h1"].replace(/\s/g, "<br>");
document.querySelector("section.cta > div > button").textContent = siteContent["cta"]["button"];
document.querySelector("section.cta > img").src = siteContent["cta"]["img-src"];

document.querySelector("div.top-content > div.text-content:nth-child(1) > h4")
  .textContent = siteContent["main-content"]["features-h4"];
document.querySelector("div.top-content > div.text-content:nth-child(1) > p")
  .textContent = siteContent["main-content"]["features-content"];
document.querySelector("div.top-content > div.text-content:nth-child(2) > h4")
  .textContent = siteContent["main-content"]["about-h4"];
document.querySelector("div.top-content > div.text-content:nth-child(2) > p")
  .textContent = siteContent["main-content"]["about-content"];

document.querySelector("img.middle-img").src = siteContent["main-content"]["middle-img-src"];

document.querySelector("div.bottom-content > div.text-content:nth-child(1) > h4")
  .textContent = siteContent["main-content"]["services-h4"];
document.querySelector("div.bottom-content > div.text-content:nth-child(1) > p")
  .textContent = siteContent["main-content"]["services-content"];
document.querySelector("div.bottom-content > div.text-content:nth-child(2) > h4")
  .textContent = siteContent["main-content"]["product-h4"];
document.querySelector("div.bottom-content > div.text-content:nth-child(2) > p")
  .textContent = siteContent["main-content"]["product-content"];
document.querySelector("div.bottom-content > div.text-content:nth-child(3) > h4")
  .textContent = siteContent["main-content"]["vision-h4"];
document.querySelector("div.bottom-content > div.text-content:nth-child(3) > p")
  .textContent = siteContent["main-content"]["vision-content"];

document.querySelector("section.contact > h4")
  .textContent = siteContent["contact"]["contact-h4"];
document.querySelector("section.contact > p:nth-child(2)")
  .textContent = siteContent["contact"]["address"];
document.querySelector("section.contact > p:nth-child(3)")
  .textContent = siteContent["contact"]["phone"];
document.querySelector("section.contact > p:nth-child(4)")
  .textContent = siteContent["contact"]["email"];

//document.querySelectorAll("section.contact > p")[0].textContent = siteContent["contact"]["address"]
//document.querySelectorAll("section.contact > p")[1].textContent = siteContent["contact"]["phone"]
//document.querySelectorAll("section.contact > p")[2].textContent = siteContent["contact"]["email"]

document.querySelector("footer > p").textContent = siteContent["footer"]["copyright"];

document.querySelector("nav").appendChild(document.createElement("a")).textContent = "First";
document.querySelector("nav").appendChild(document.createElement("a")).textContent = "Second";
document.querySelector("nav").appendChild(document.createElement("a")).textContent = "Third";

document.querySelectorAll("nav > a").forEach((e) => {
  e.style.color = "green";
});