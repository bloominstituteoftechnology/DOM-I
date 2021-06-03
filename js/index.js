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

//* nav bar section 
// sets nav bar logo img
document
	.getElementById("logo-img")
	.setAttribute("src", siteContent.nav["img-src"]);

// sets nav bar items text
document.querySelectorAll(".container a")[0].textContent =
	siteContent.nav["nav-item-1"];
document.querySelectorAll(".container a")[1].textContent =
	siteContent.nav["nav-item-1"];
document.querySelectorAll(".container a")[2].textContent =
	siteContent.nav["nav-item-2"];
document.querySelectorAll(".container a")[3].textContent =
	siteContent.nav["nav-item-3"];
document.querySelectorAll(".container a")[4].textContent =
	siteContent.nav["nav-item-4"];
document.querySelectorAll(".container a")[5].textContent =
	siteContent.nav["nav-item-5"];

// sets cta text. Used inner html and += to experiment with ways to use line breaks
document.querySelector(".cta-text h1").innerHTML = "DOM <br />";
document.querySelector(".cta-text h1").innerHTML += "Is <br />";
document.querySelector(".cta-text h1").innerHTML += "Awesome";
// sets cta img 
document
	.getElementById("cta-img")
	.setAttribute("src", siteContent.cta["img-src"]);
// sets cta button text 
document.querySelector(".cta-text button").textContent = siteContent.cta.button;

document.querySelector(".top-content .text-content h4").textContent =
	siteContent["main-content"]["features-h4"];
document.querySelector(".top-content .text-content p").textContent =
	siteContent["main-content"]["features-content"];

document.querySelectorAll(".top-content .text-content h4")[1].textContent =
	siteContent["main-content"]["about-h4"];
document.querySelectorAll(".top-content .text-content p")[1].textContent =
	siteContent["main-content"]["about-content"];
