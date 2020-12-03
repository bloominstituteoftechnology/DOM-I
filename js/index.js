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


let navText = document.querySelectorAll("nav a");
navText[0].innerHTML = siteContent["nav"]["nav-item-1"];
navText[1].innerHTML = siteContent["nav"]["nav-item-2"];
navText[2].innerHTML = siteContent["nav"]["nav-item-3"];
navText[3].innerHTML = siteContent["nav"]["nav-item-4"];
navText[4].innerHTML = siteContent["nav"]["nav-item-5"];
navText[5].innerHTML = siteContent["nav"]["nav-item-6"];
navText.forEach((item, index) => {
  item.style.color = "green";
});
let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent["cta"]["h1"];
let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);
let textContent = document.querySelectorAll(".text-content");
textContent[0].getElementsByTagName("h4")[0].innerHTML =
  siteContent["main-content"]["features-h4"];
textContent[0].getElementsByTagName("p")[0].innerHTML =
  siteContent["main-content"]["features-content"];
textContent[1].getElementsByTagName("h4")[0].innerHTML =
  siteContent["main-content"]["about-h4"];
textContent[1].getElementsByTagName("p")[0].innerHTML =
  siteContent["main-content"]["about-content"];
textContent[2].getElementsByTagName("h4")[0].innerHTML =
  siteContent["main-content"]["services-h4"];
textContent[2].getElementsByTagName("p")[0].innerHTML =
  siteContent["main-content"]["services-content"];
textContent[3].getElementsByTagName("h4")[0].innerHTML =
  siteContent["main-content"]["product-h4"];
textContent[3].getElementsByTagName("p")[0].innerHTML =
  siteContent["main-content"]["product-content"];
textContent[4].getElementsByTagName("h4")[0].innerHTML =
  siteContent["main-content"]["vision-h4"];
textContent[4].getElementsByTagName("p")[0].innerHTML =
  siteContent["main-content"]["vision-content"];
let midPageAccent = document.getElementById("middle-img");
midPageAccent.src = siteContent["main-content"]["middle-img-src"];
let contact = document.querySelectorAll(".contact");
contact[0].getElementsByTagName("h4")[0].innerHTML =
  siteContent["contact"]["contact-h4"];
contact[0].getElementsByTagName("p")[0].innerHTML =
  siteContent["contact"]["address"];
contact[0].getElementsByTagName("p")[1].innerHTML =
  siteContent["contact"]["phone"];
contact[0].getElementsByTagName("p")[2].innerHTML =
  siteContent["contact"]["email"];
let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"];
