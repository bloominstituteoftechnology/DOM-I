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

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

nav.appendChild(test)

document.querySelectorAll(".container header nav")[0].innerHTML = "<a>Services <a>Product <a>Vision <a>Features <a>About <a>Contact"
document.querySelectorAll(".container header nav a")[0].style.color = "green";
document.querySelectorAll(".container header nav a")[1].style.color = "green";
document.querySelectorAll(".container header nav a")[2].style.color = "green";
document.querySelectorAll(".container header nav a")[3].style.color = "green";
document.querySelectorAll(".container header nav a")[4].style.color = "green";
document.querySelectorAll(".container header nav a")[5].style.color = "green";
document.querySelector(".cta .cta-text h1").innerHTML = "DOM<br> is <br>Awesome";
document.querySelector(".cta .cta-text button").innerHTML = "Get Started";

document.querySelectorAll(".main-content .text-content h4")[0].innerHTML = "Features";
document.querySelectorAll(".main-content .text-content h4")[1].innerHTML = "About";
document.querySelectorAll(".main-content .text-content h4")[2].innerHTML = "Services";
document.querySelectorAll(".main-content .text-content h4")[3].innerHTML = "Product";
document.querySelectorAll(".main-content .text-content h4")[4].innerHTML = "Visions";
document.querySelectorAll(".main-content .text-content p")[0].innerHTML = "elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"
document.querySelectorAll(".main-content .text-content p")[1].innerHTML = "elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"
document.querySelectorAll(".main-content .text-content p")[2].innerHTML = "elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"
document.querySelectorAll(".main-content .text-content p")[3].innerHTML = "elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"
document.querySelectorAll(".main-content .text-content p")[4].innerHTML = "elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"
document.querySelector(".contact h4").innerHTML = "Contact"
document.querySelectorAll(".contact p")[0].innerHTML = "123 Way 456 Street <br> Somewhere, USA"
document.querySelectorAll(".contact p")[1].innerHTML = "1(888) 888-8888"
document.querySelectorAll(".contact p")[2].innerHTML = "sales@greatidea.io"
document.querySelector("footer p").innerHTML = "Copyright Great Idea! 2018"
