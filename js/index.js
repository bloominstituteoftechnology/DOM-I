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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


//Navigation Bar
  const navBar = document.getElementsByTagName('a');
  const navBarArray = [];
  for(let i = 0; i < navBar; i++);{
  navBarArray.push(Array.from(navBar));
  };
  navBarArray[0][0].innerHTML = "Services";
  navBarArray[0][1].innerHTML = "Product";
  navBarArray[0][2].innerHTML = "Vision";
  navBarArray[0][3].innerHTML = "Features";
  navBarArray[0][4].innerHTML = "About";
  navBarArray[0][5].innerHTML = "Contact";

  navBarArray[0][0].style.color = "green";
  navBarArray[0][1].style.color = "green";
  navBarArray[0][2].style.color = "green";
  navBarArray[0][3].style.color = "green";
  navBarArray[0][4].style.color = "green";
  navBarArray[0][5].style.color = "green";

  let logo = document.getElementById("logo-img");
  logo.src = "img/logo.png"

  //New Items
    const navAppending = document.getElementsByTagName('nav');

    const newNavItemHome = document.createElement('a');
    newNavItemHome.style.marginRight = "0px";
    newNavItemHome.innerHTML = "Home";
    newNavItemHome.style.color = "green";

    const newNavItemGoogle = document.createElement('a');
    newNavItemGoogle.style.marginLeft = "0px"
    newNavItemGoogle.innerHTML = "Google";
    newNavItemGoogle.style.color = "green";

    navAppending[0].prepend(newNavItemHome);
    navAppending[0].appendChild(newNavItemGoogle)
  

//Top Content
  const slogan = document.querySelectorAll("h1")[0];
  slogan.innerHTML = "Dom<br>is<br>Awesome";

  let middleCodeSnippit = document.getElementById("cta-img");
  middleCodeSnippit.src = "img/header-img.png";

  const getStartedButton = document.querySelectorAll("button")[0];
  getStartedButton.innerHTML = "Get Started";

//Main Content
  const headersh4 = document.querySelectorAll("h4");
  const headerh4Array = [];
  for(let i = 0; i < headersh4.length; i++){
    headerh4Array.push(Array.from(headersh4));
  }
  const paragraphs = document.querySelectorAll("p");
  const paraArray = [];
  for(let i = 0; i < paragraphs.length; i++){
    paraArray.push(Array.from(paragraphs));
  }

  paraArray[0][0].innerHTML = siteContent["main-content"]["features-content"];
  paraArray[0][1].innerHTML = siteContent["main-content"]["about-content"];
  paraArray[0][2].innerHTML = siteContent["main-content"]["services-content"];
  paraArray[0][3].innerHTML = siteContent["main-content"]["product-content"];
  paraArray[0][4].innerHTML = siteContent["main-content"]["vision-content"];

  headerh4Array[0][0].innerHTML = "Features";
  headerh4Array[0][1].innerHTML = "About";
  headerh4Array[0][2].innerHTML = "Services";
  headerh4Array[0][3].innerHTML = "Product";
  headerh4Array[0][4].innerHTML = "Vision";


  const middleIMG = document.getElementById("middle-img");
  middleIMG.src = "img/mid-page-accent.jpg";

//Footer Content

  headerh4Array[0][5].innerHTML = "Contact";

  paraArray[0][5].innerHTML = siteContent["contact"]["address"];
  paraArray[0][6].innerHTML = siteContent["contact"]["phone"];
  paraArray[0][7].innerHTML = siteContent["contact"]["email"];

  paraArray[0][8].innerHTML = siteContent["footer"]["copyright"]