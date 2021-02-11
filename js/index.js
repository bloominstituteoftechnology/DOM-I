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


const ser = document.getElementsByTagName('a')[0];
ser.textContent = "Service";

const pro = document.getElementsByTagName('a')[1];
pro.textContent = "Product";

const vis = document.getElementsByTagName('a')[2];
vis.textContent = "Vision";

const fea = document.getElementsByTagName('a')[3];
fea.textContent = "Features";

const abou = document.getElementsByTagName('a')[4];
abou.textContent = "About";

const con = document.getElementsByTagName('a')[5];
con.textContent = "Contact"

const codeImg = document.querySelector('#cta-img');
codeImg.setAttribute('src', "img/header-img.png");

const head = document.querySelector('.cta-text h1');
head.innerHTML = "Dom <br>  Is <br> Awesome";

const button = document.querySelector('.cta-text button');
button.textContent = "Get Started";

const toph4 = document.getElementsByTagName('h4')[0];
toph4.textContent = 'Features';

const topp = document.getElementsByTagName('p')[0];
topp.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,\
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus\
scelerisque quis.';

const texth4 = document.getElementsByTagName('h4')[1];
texth4.textContent = 'About';

const textp = document.getElementsByTagName('p')[1];
textp.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in\
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus\
scelerisque quis.';

const codesnip = document.querySelector('.main-content img');
codesnip.src= 'img/mid-page-accent.jpg';

const botser = document.getElementsByTagName('h4')[2];
botser.textContent = "Services";

const botserp = document.getElementsByTagName('p')[2];
botserp.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,\
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus\
scelerisque quis.';

const botpro = document.getElementsByTagName('h4')[3];
botpro.textContent = "Product";

const botprop = document.getElementsByTagName('p')[3];
botprop.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in\
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus\
scelerisque quis.';

const botvis = document.getElementsByTagName('h4')[4];
botvis.textContent = "Vision";

const botvisp = document.getElementsByTagName('p')[4];
botvisp.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in\
 interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus\
scelerisque quis.';

const cont = document.querySelector('.contact h4');
cont.textContent = "Contact"

const conp = document.querySelectorAll('.contact p')[0];
conp.innerHTML = '123 Way 456 Street <br> Somewhere, USA';

const conpp = document.querySelectorAll('.contact p')[1];
conpp.textContent = '1 (888) 888-8888';

const conppp = document.querySelectorAll('.contact p')[2];
conppp.textContent = 'sales@greatidea.io';

const foot = document.querySelector('footer p');
foot.textContent = 'Copyright Great Idea! 2018';