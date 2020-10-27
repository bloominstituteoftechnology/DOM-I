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


 let midImg = document.getElementById("middle-img");
 midImg.setAttribute('src', siteContent['main-content']
 ['middle-img-src']);

 let hImg = document.getElementById('cta-img');
 hImg.setAttribute('src', siteContent['cta']
 ['img-src']);

 let navLinks = document.querySelectorAll('nav a');
 navLinks.forEach((item, i) => {
   item.textContent = siteContent['nav'][`nav-item-${i + 1}`]
 });

 let hButton = document.querySelector('.cta-text button');
 hButton.textContent = siteContent['cta']['button'];

 let hText = document.querySelector('.cta-text h1');
 hText.textContent = siteContent['cta']['h1'];

 let titles = document.querySelector('.text-content h4');
 titles.textContent = siteContent['main-content']['features-h4'];

 let titles2 = document.querySelector('.text-content:nth-of-type(2) h4');
 titles2.textContent = siteContent['main-content']['about-h4'];

 let titles3 = document.querySelector('.bottom-content .text-content h4');
 titles3.textContent = siteContent['main-content']['services-h4'];

 let titles4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
 titles4.textContent = siteContent['main-content']['product-h4'];

 let titles5 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
 titles5.textContent = siteContent['main-content']['vision-h4'];

 let paragraphs = document.querySelector('.text-content p');
 paragraphs.textContent = siteContent['main-content']['features-content'];

 let paragraphs2 = document.querySelector('.text-content:nth-of-type(2) p');
 paragraphs2.textContent = siteContent['main-content']['about-content'];

 let paragraphs3 = document.querySelector('.bottom-content .text-content p');
 paragraphs3.textContent = siteContent['main-content']['services-content'];

 let paragraphs4 = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
 paragraphs4.textContent = siteContent['main-content']['product-content'];

 let paragraphs5 = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
 paragraphs5.textContent = siteContent['main-content']['vision-content'];

 let contactUs = document.querySelector('.contact h4');
 contactUs.textContent = siteContent['contact']['contact-h4'];

 let p1 = document.querySelector('.contact p');
 p1.textContent = siteContent['contact']['address'];

 let p2 = document.querySelector('.contact p:nth-of-type(2)');
 p2.textContent = siteContent['contact']['phone'];

 let p3 = document.querySelector('.contact p:nth-of-type(3)');
 p3.textContent = siteContent['contact']['email'];

 let feet = document.querySelector('footer p');
 feet.textContent = siteContent['footer']['copyright'];






// const navLinks = document.querySelectorAll("nav a");
// navLinks.forEach(item, i){};
