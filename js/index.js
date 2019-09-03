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

let links = document.querySelectorAll('a');
// links.style.color = 'green';
links[0].nav = siteContent['nav']['nav-item-1'];
links[1].nav = siteContent['nav']['nav-item-2'];
links[2].nav = siteContent['nav']['nav-item-3'];
links[3].nav = siteContent['nav']['nav-item-4'];
links[4].nav = siteContent['nav']['nav-item-5'];
links[5].nav = siteContent['nav']['nav-item-6'];


let newLinks = document.querySelector('nav');


let endLink = document.createElement('a');
endLink.textContent= "End";
newLinks.append(endLink);

let preLink = document.createElement('a')
preLink.textContent = "Start";
newLinks.prepend(preLink);


console.log(links);

links[0].textContent = "Services";
links[1].textContent = "Product";
links[2].textContent = "Vision";
links[3].textContent = "Features";
links[4].textContent = "About";
links[5].textContent = "Contact";


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src'])
console.log(logo);


let ctaH = document.querySelector('h1')
ctaH.ctaText = siteContent['cta']['h1'];
console.log(ctaH);

ctaH.textContent = "DOM Is Awesome";

let ctaBtn = document.querySelector('button');
ctaBtn.ctaText = siteContent['cta']['button'];
console.log(ctaBtn);
ctaBtn.textContent = "Get Started";


let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])
console.log(ctaImg);


let heading = document.querySelectorAll('h4');
heading[0].textContent = siteContent['main-content']['features-h4'];
heading[1].textContent = siteContent['main-content']['about-h4'];
heading[2].textContent = siteContent['main-content']['services-h4'];
heading[3].textContent = siteContent['main-content']['product-h4'];
heading[4].textContent = siteContent['main-content']['vision-h4'];
heading[5].contact = siteContent['contact']['contact-h4'];
console.log(heading);
heading[5].textContent = "Contact";


let mainText = document.querySelectorAll('p');
mainText[0].textContent = siteContent['main-content']['features-content'];
mainText[1].textContent = siteContent['main-content']['about-content'];
mainText[2].textContent = siteContent['main-content']['services-content'];
mainText[3].textContent = siteContent['main-content']['product-content'];
mainText[4].textContent = siteContent['main-content']['vision-content'];
mainText[5].contact = siteContent['contact']['address'];
mainText[6].contact = siteContent['contact']['phone'];
mainText[7].contact = siteContent['contact']['email'];
mainText[8].footer = siteContent['footer']['copyright'];
console.log(mainText);

mainText[5].textContent = "123 Way 456 Street /n Somewhere, USA";
mainText[6].textContent = "1 (888) 888-8888";
mainText[7].textContent = "sales@greatidea.io";


let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
console.log(middleImg);



let footer = document.createElement('footer');
mainText[8].textContent = 'Copyright Great Idea! 2018'

footer.container = siteContent['footer'];
console.log(newFooter);