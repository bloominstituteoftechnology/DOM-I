const siteContent = {
  "nav": {
    "nav-item-0": "Portfolio",
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "nav-item-8": "Corporate",
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



//selectors
  //header
  let logo = document.getElementById("logo-img");
  let navLinks = document.querySelectorAll("nav a");
  let nav = document.querySelector("nav");
    //cta
  let ctaText = document.querySelector(".cta-text h1");
  let ctaButton = document.querySelector(".cta .cta-text button");
  let ctaImage = document.querySelector("#cta-img");
    //main-content
  let h4 = document.querySelectorAll(".main-content h4");
  let p = document.querySelectorAll(".main-content p");
  let mainContentImage = document.querySelector(".middle-img");
    //contact
  let contacth4 = document.querySelector(".contact h4");
  let contactP = document.querySelectorAll(".contact p");
    //footer
  let footer = document.querySelector("footer p");
  
  // Example: Update the img src for the logo
  logo.setAttribute('src', siteContent["nav"]["img-src"])
  let child1 = document.createElement("a");
  nav.appendChild(child1);
  let child2 = document.createElement("a");
  nav.prepend(child2);
  child1.textContent = siteContent['nav'][`nav-item-0`];
  child1.style.color = "green";
  child2.textContent = siteContent['nav'][`nav-item-8`];
  child2.style.color = "green";
  //Go through all the nav links and create one for contact
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].textContent = siteContent['nav'][`nav-item-${i + 1}`];
    navLinks[i].style.color = 'green';
  
  }
  
   ctaText.textContent = siteContent["cta"]["h1"];
   ctaButton.textContent = siteContent["cta"]["button"];
   ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);
  
   //Main content
   const mainContentArray = ["features", "about", "services", "product", "vision"];
   for (let i = 0; i < mainContentArray.length; i++) {
     h4[i].textContent = siteContent["main-content"][`${mainContentArray[i]}-h4`];
     p[i].textContent = siteContent["main-content"][`${mainContentArray[i]}-content`];
   }
  mainContentImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
  
  contacth4.textContent = siteContent["contact"]["contact-h4"];
  const contactText = ["address", "phone", "email"];
  for (let i = 0; i < contactP.length; i++) {
    contactP[i].textContent = siteContent["contact"][contactText[i]];
  }
  footer.textContent = siteContent["footer"]["copyright"];