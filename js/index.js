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
{//Image Links
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src',siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']["middle-img-src"]);
}

{//navigation bar
  // get elements from index.html
  // use innerText to change the text inside
  // set the inner text to siteContent-whatever
  //for loop so I don't have to write it all out?

  let topNavLinks = document.querySelectorAll('a');
  for(let i = 0;i<topNavLinks.length;i++){//cheated a bit
    topNavLinks[i].innerText = siteContent["nav"][`nav-item-${i+1}`]
  }
  //Creating extra nav links for task 4
  let extraNavLink1 = document.createElement('a');
  extraNavLink1.innerHTML = "Hello?";
  let extraNavLink2 = document.createElement('a');
  extraNavLink2.innerHTML = "Hi?";
  let topNav = document.querySelector('header nav');
  topNav.append(extraNavLink1,extraNavLink2);
  console.log(topNav)
}
{//cta
  let mainHeading = document.querySelector('.cta .cta-text h1');
  mainHeading.innerText = `${siteContent["cta"]["h1"]}`

  let getStartedBtn = document.querySelector('.cta .cta-text button');
  getStartedBtn.innerText = `${siteContent["cta"]["button"]}`;
}
{//main-content
  //h4 headings
  let featuresHeading = document.querySelector('.text-content h4');
  featuresHeading.innerText = `${siteContent["main-content"]["features-h4"]}`

  let aboutHeading = document.querySelector('.text-content:nth-child(2) h4');
  aboutHeading.innerText = `${siteContent["main-content"]["about-h4"]}`

  let servicesHeading = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
  servicesHeading.innerText = `${siteContent["main-content"]["services-h4"]}`

  let productHeading = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
  productHeading.innerText = `${siteContent["main-content"]["product-h4"]}`

  let visionHeading = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
  visionHeading.innerText = `${siteContent["main-content"]["vision-h4"]}`
  //End h4 headings

  //Content
  let featuresContent = document.querySelector('.text-content p');
  featuresContent.innerText = `${siteContent["main-content"]["features-content"]}`

  let aboutContent = document.querySelector('.text-content:nth-child(2) p');
  aboutContent.innerText = `${siteContent["main-content"]["about-content"]}`

  let servicesContent = document.querySelector('.bottom-content .text-content:nth-child(1) p');
  servicesContent.innerText = `${siteContent["main-content"]["services-content"]}`

  let productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
  productContent.innerText = `${siteContent["main-content"]["product-content"]}`

  let visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p');
  visionContent.innerText = `${siteContent["main-content"]["vision-content"]}`
}
{//Contact Section
  let contactHeading = document.querySelector('.contact h4');
  contactHeading.innerText = `${siteContent["contact"]["contact-h4"]}`;

  //p tags
  let addressTag = document.querySelector('.contact p:nth-child(2)');
  let numberTag = document.querySelector('.contact p:nth-child(3)');
  let emailTag = document.querySelector('.contact p:nth-child(4)');
  addressTag.innerText = `${siteContent["contact"]["address"]}`;
  numberTag.innerText = `${siteContent["contact"]["phone"]}`;
  emailTag.innerText = `${siteContent["contact"]["email"]}`;
}
{//Footer
  let footer = document.querySelector('footer p');
  footer.innerText = `${siteContent["footer"]["copyright"]}`
}