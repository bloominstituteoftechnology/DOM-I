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
links[0].textContent = siteContent['nav']['nav-item-1'];
links[1].textContent = siteContent['nav']['nav-item-2'];
links[2].textContent = siteContent['nav']['nav-item-3'];
links[3].textContent = siteContent['nav']['nav-item-4'];
links[4].textContent = siteContent['nav']['nav-item-5'];
links[5].textContent = siteContent['nav']['nav-item-6'];

for(let i = 0; i < links.length; i++){
  links[i].style.color = 'green';
}

let newLinks = document.querySelector('nav');

let endLink = document.createElement('a');
endLink.textContent= "End";
newLinks.append(endLink);

let preLink = document.createElement('a')
preLink.textContent = "Start";
newLinks.prepend(preLink);


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent['nav']['img-src'])

let ctaH = document.querySelector('.cta h1')
ctaH.innerHTML = "Dom <br> Is <br /> Awesome";


let ctaBtn = document.querySelector('button');
ctaBtn.ctaText = siteContent['cta']['button'];
ctaBtn.textContent = "Get Started";


let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])


let heading = document.querySelectorAll('h4');
heading[0].textContent = siteContent['main-content']['features-h4'];
heading[1].textContent = siteContent['main-content']['about-h4'];
heading[2].textContent = siteContent['main-content']['services-h4'];
heading[3].textContent = siteContent['main-content']['product-h4'];
heading[4].textContent = siteContent['main-content']['vision-h4'];
heading[5].contact = siteContent['contact']['contact-h4'];
heading[5].textContent = "Contact";


let mainText = document.querySelectorAll('p');
mainText[0].textContent = siteContent['main-content']['features-content'];
mainText[1].textContent = siteContent['main-content']['about-content'];
mainText[2].textContent = siteContent['main-content']['services-content'];
mainText[3].textContent = siteContent['main-content']['product-content'];
mainText[4].textContent = siteContent['main-content']['vision-content'];
mainText[5].innerHTML = "123 Way 456 Street<br /> Somewhere, USA";
mainText[6].innerHTML = "1 (888) 888-8888";
mainText[7].innerHTML = "sales@greatidea.io";
mainText[8].textContent = 'Copyright Great Idea! 2018'


let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);



let footer = document.createElement('footer');

footer.container = siteContent['footer'];
