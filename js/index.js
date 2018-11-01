const siteContent = {
  "nav": {
    "nav-item-1": "Services",   //header nav a
    "nav-item-2": "Product",    //header nav a
    "nav-item-3": "Vision",     //header nav a
    "nav-item-4": "Features",   //header nav a
    "nav-item-5": "About",      //header nav a
    "nav-item-6": "Contact",    //header nav a
    "img-src": "img/logo.png"   //ID = logo-img
  },
  "cta": {
    "h1": "DOM Is Awesome",     //section class cts; div class cta-text h1
    "button": "Get Started",    //section class cts; div class cta-text button
    "img-src": "img/header-img.png"   //section class cts; 
  },
  "main-content": {
    "features-h4":"Features",   //section class main-content; div class top-content;
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

// --------------------------------------------------------NAV
    // need to push object values to an array.. done
    //need to push the nav items to an array..
    //then set those equal to the array for nav
    const navA = document.querySelectorAll('a');
    const values = Object.values(siteContent.nav);

    for (let i = 0; i < navA.length; i++) {
      navA[i].textContent = values[i];
    }


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


