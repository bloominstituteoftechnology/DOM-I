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

    let container = document.querySelector(".container");
    let nav = document.querySelector("nav");

    nav.children[0].innerHTML = siteContent["nav"]["nav-item-1"];
    nav.children[1].innerHTML = siteContent["nav"]["nav-item-2"];
    nav.children[2].innerHTML = siteContent["nav"]["nav-item-3"];
    nav.children[3].innerHTML = siteContent["nav"]["nav-item-4"];
    nav.children[4].innerHTML = siteContent["nav"]["nav-item-5"];
    nav.children[5].innerHTML = siteContent["nav"]["nav-item-6"];
      
      let logo = document.getElementById("logo-img");
      logo.setAttribute('src', siteContent["nav"]["img-src"])

      let h1 = container.querySelector("h1");
      h1.innerHTML = (siteContent["cta"]["h1"]);

      let button = container.querySelector("button");
      button.innerHTML = (siteContent["cta"]["button"]);

      let ctaImg = document.getElementById("cta-img");
      ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

      let topContent = container.querySelector("div.top-content");
        let tCTC1 = topContent.children[0];
          let tCTC1h4 = tCTC1.querySelector("h4");
            tCTC1h4.innerHTML = (siteContent["main-content"]["features-h4"]);

          let tCTC1p = tCTC1.querySelector("p");
            tCTC1p.innerHTML = (siteContent["main-content"]["features-content"]);

        let tCTC2 = topContent.children[1];
          let tCTC2h4 = tCTC2.querySelector("h4");
            tCTC2h4.innerHTML = (siteContent["main-content"]["about-h4"]);
        
          let tCTC2p = tCTC2.querySelector("p");  
            tCTC2p.innerHTML = (siteContent["main-content"]["about-content"]);

      let midImg = document.getElementById("middle-img");
      midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

      let botContent = container.querySelector("div.bottom-content");


      let bCBC1 = botContent.children[0];
        let bCBC1h4 = bCBC1.querySelector("h4");
          bCBC1h4.innerHTML = (siteContent["main-content"]["services-h4"]);

        let bCBC1p = bCBC1.querySelector("p");
          bCBC1p.innerHTML = (siteContent["main-content"]["services-content"]);

      let bCBC2 = botContent.children[1];
        let bCBC2h4 = bCBC2.querySelector("h4");
          bCBC2h4.innerHTML = (siteContent["main-content"]["product-h4"]);
      
        let bCBC2p = bCBC2.querySelector("p");  
          bCBC2p.innerHTML = (siteContent["main-content"]["product-content"]);

      let bCBC3 = botContent.children[1];
          let bCBC3h4 = bCBC2.querySelector("h4");
            bCBC3h4.innerHTML = (siteContent["main-content"]["vision-h4"]);
        
          let bCBC3p = bCBC2.querySelector("p");  
            bCBC3p.innerHTML = (siteContent["main-content"]["vision-content"]);
  
            
  let contact = container.querySelector(".contact");
  
  let contacth4 = contact.querySelector("h4");
  contacth4.innerHTML = (siteContent["contact"]["contact-h4"]);

  let contactp1 = contact.children[1];
    contactp1.innerHTML = (siteContent["contact"]["address"]);
  
  let contactp2 = contact.children[2];
    contactp2.innerHTML = (siteContent["contact"]["phone"]);

  let conctactp3 = contact.children[3];
    conctactp3.innerHTML = (siteContent["contact"]["email"]);

  let footer = container.querySelector("footer");
    footer.innerHTML = (siteContent["footer"]["copyright"])
  








