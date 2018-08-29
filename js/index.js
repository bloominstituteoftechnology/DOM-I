const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-7": "Register",
    "nav-item-8": "Support",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is <br>Awesome",
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
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//*****************Header / Navigation*************** */
const navItems = document.querySelector('nav').children;
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Change color of navigation text to green
Array.from(navItems).forEach((navItem) => {
  navItem.style.color = 'green';
});

//Create and Add new items to navigation
const navItemRegister = document.createElement('a');
const navItemSupport = document.createElement('a');
navItemRegister.textContent = siteContent["nav"]["nav-item-7"];
navItemSupport.textContent = siteContent["nav"]["nav-item-8"];

const headerNav = document.querySelector('nav');
headerNav.appendChild(navItemSupport);
headerNav.prepend(navItemRegister);
navItemSupport.style.color = 'green';
navItemRegister.style.color = 'green';



//***************Section - .cta *********************/
const cta_h1 = document.querySelector(".cta-text h1");
const cta_button = document.querySelector(".cta-text button");
const cta_image = document.getElementById("cta-img");
cta_h1.innerHTML = siteContent['cta']['h1'];
cta_button.textContent = siteContent['cta']['button'];
cta_image.src = siteContent['cta']['img-src'];


//******************Section - .main-content **************/
const top_h4_list = document.querySelectorAll('.top-content .text-content h4');
const top_p_list = document.querySelectorAll('.top-content .text-content p');
top_h4_list[0].textContent = siteContent['main-content']['features-h4'];
top_p_list[0].textContent = siteContent['main-content']['features-content'];
top_h4_list[1].textContent = siteContent['main-content']['about-h4'];
top_p_list[1].textContent = siteContent['main-content']['about-content'];

const middle_img = document.getElementById('middle-img');
middle_img.src = siteContent['main-content']['middle-img-src'];

const bottom_h4_list = document.querySelectorAll('.bottom-content .text-content h4');
const bottom_p_list = document.querySelectorAll('.bottom-content .text-content p');
bottom_h4_list[0].textContent = siteContent['main-content']['services-h4'];
bottom_p_list[0].textContent = siteContent['main-content']['services-content'];
bottom_h4_list[1].textContent = siteContent['main-content']['product-h4'];
bottom_p_list[1].textContent = siteContent['main-content']['product-content'];
bottom_h4_list[2].textContent = siteContent['main-content']['vision-h4'];
bottom_p_list[2].textContent = siteContent['main-content']['vision-content'];


//*******Section - .contact ************* */
const contact_h4 = document.querySelector('.contact h4');
const contact_p_list = document.querySelectorAll('.contact p');
contact_h4.textContent = siteContent['contact']['contact-h4'];
contact_p_list[0].innerHTML = siteContent['contact']['address'];
contact_p_list[1].textContent = siteContent['contact']['phone'];
contact_p_list[2].textContent = siteContent['contact']['email'];


//***********FOOTER *******/
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];


//***********CHANGE STYLING OF WEBPAGE **************** */
const body = document.querySelector('body');
body.style.backgroundColor = '#bebebe';

cta_button.style.backgroundColor = '#02C7FF';
cta_button.style.color = '#FFF';
