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

// Nav Bar
let navBarLinks = document.querySelectorAll('header nav a');
navBarLinks.forEach((element, index) => {
  element.innerText = siteContent["nav"][`nav-item-${index+1}`];
  element.style.color = 'green';
});

let start = document.createElement("a");
let end = document.createElement("a");
let navBar = document.querySelector("nav");
start.innerText = 'Start';
end.innerText = 'End';
start.href = '#';
end.href = '#';
navBar.appendChild(end);
navBar.prepend(start);



// CTA 
let ctaText = document.querySelector(".cta .cta-text h1");
let ctaButton = document.querySelector(".cta .cta-text button");
let ctaLogo = document.getElementById("cta-img");

ctaText.innerText = siteContent.cta.h1;
ctaButton.innerText = siteContent.cta.button;
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content
let titles = document.querySelectorAll('.main-content .text-content h4');
let content = document.querySelectorAll('.main-content .text-content p');

titles[0].innerText = siteContent['main-content']['features-h4'];
content[0].innerText = siteContent['main-content']['features-content'];
titles[1].innerText = siteContent['main-content']['about-h4'];
content[1].innerText = siteContent['main-content']['about-content'];
titles[2].innerText = siteContent['main-content']['services-h4'];
content[2].innerText = siteContent['main-content']['services-content'];
titles[3].innerText = siteContent['main-content']['product-h4'];
content[3].innerText = siteContent['main-content']['product-content'];
titles[4].innerText = siteContent['main-content']['vision-h4'];
content[4].innerText = siteContent['main-content']['vision-content'];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Contact
let contactTitle = document.querySelector('.contact h4');
let contactContent = document.querySelectorAll('.contact p');

contactTitle.innerText = siteContent['contact']['contact-h4'];
contactContent[0].innerText = siteContent['contact']['address'];
contactContent[1].innerText = siteContent['contact']['phone'];
contactContent[2].innerText = siteContent['contact']['email'];

// Footer
let copyright = document.querySelector('footer p');
copyright.innerText = siteContent.footer.copyright;

let changeColor = () => {
  document.querySelector('.container').style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}