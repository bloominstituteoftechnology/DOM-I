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


// Header
{
  const nav = siteContent.nav;
  let navTags = document.querySelectorAll('nav > a');
  // console.log(navTags);
  navTags.forEach((e, i) => {
    e.innerText = nav[`nav-item-${i+1}`]
  });
}

//CTA
{
  const cta = siteContent.cta;
  let ctaTitle = document.querySelector('.cta > .cta-text > h1');
  let ctaButton = document.querySelector('.cta > .cta-text > button');
  let ctaImg = document.querySelector('.cta > img');

  ctaTitle.innerText = cta.h1;
  ctaButton.innerText = cta.button;
  ctaImg.src = cta['img-src'];
}

// Main Content
{
  const mainContent = siteContent["main-content"];
  const sections = ['features', 'about', 'services', 'product', 'vision'];
  
  let contentH4 = document.querySelectorAll('.text-content > h4')
  let contentP = document.querySelectorAll('.text-content > P')
  // console.log(contentH4);

  contentH4.forEach((e, i) => {
    e.innerText = mainContent[`${sections[i]}-h4`]
  })
  contentP.forEach((e, i) => {
    e.innerText = mainContent[`${sections[i]}-content`]
  })

  let contentIMG = document.querySelector('.main-content > .middle-img');
  contentIMG.src = mainContent["middle-img-src"];
}

//Contact
{
  const contact = siteContent.contact;

  let address = contact.address.split(' '); // "123 Way 456 Street Somewhere, USA"
  address.splice(4, 0, '<br />')
  const newAddress = address.join(' ');
  
  document.querySelector('.contact > h4').innerText = contact["contact-h4"];
  let info = document.querySelectorAll('.contact > p');

  info[0].innerHTML = newAddress;
  info[1].innerText = contact.phone;
  info[2].innerText = contact.email;
}

//Footer
{
  const copyright = siteContent.footer.copyright;
  document.querySelector('footer > p').innerText = copyright;
}


document.querySelectorAll('nav> a').forEach(e => e.style.color = 'green');