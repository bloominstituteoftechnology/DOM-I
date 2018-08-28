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

//*****************Header / Navigation*************** */
let navItems = document.querySelector('nav').children;
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//change color of navigation text to green
Array.from(navItems).forEach((navItem) => {
  navItem.style.color = 'green';
});

//***************Section - .cta *********************/
let cta_h1 = document.querySelector(".cta-text h1");
let cta_button = document.querySelector(".cta-text button");
let cta_image = document.getElementById("cta-img");
cta_h1.innerHTML = 'DOM<br> Is <br> Awesome';
cta_button.textContent = siteContent['cta']['button'];
cta_image.src = siteContent['cta']['img-src'];


//******************Section - .main-content **************/
let top_h4_list = document.querySelectorAll('.top-content .text-content h4');
let top_p_list = document.querySelectorAll('.top-content .text-content p');
top_h4_list[0].textContent = siteContent['main-content']['features-h4'];
top_p_list[0].textContent = siteContent['main-content']['features-content'];
top_h4_list[1].textContent = siteContent['main-content']['about-h4'];
top_p_list[1].textContent = siteContent['main-content']['about-content'];

let middle_img = document.getElementById('middle-img');
middle_img.src = siteContent['main-content']['middle-img-src'];

let bottom_h4_list = document.querySelectorAll('.bottom-content .text-content h4');
let bottom_p_list = document.querySelectorAll('.bottom-content .text-content p');
bottom_h4_list[0].textContent = siteContent['main-content']['services-h4'];
bottom_p_list[0].textContent = siteContent['main-content']['services-content'];
bottom_h4_list[1].textContent = siteContent['main-content']['product-h4'];
bottom_p_list[1].textContent = siteContent['main-content']['product-content'];
bottom_h4_list[2].textContent = siteContent['main-content']['vision-h4'];
bottom_p_list[2].textContent = siteContent['main-content']['vision-content'];


//*******Section - .contact ************* */
let contact_h4 = document.querySelector('.contact h4');
let contact_p_list = document.querySelectorAll('.contact p');
contact_h4.textContent = siteContent['contact']['contact-h4'];
// contact_p_list[0].textContent = siteContent['contact']['address'];
contact_p_list[0].innerHTML = '123 Way 456 Street<br>Somewhere, USA</p >';
contact_p_list[1].textContent = siteContent['contact']['phone'];
contact_p_list[2].textContent = siteContent['contact']['email'];


//***********FOOTER *******/
let footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];


