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
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
const nav = document.querySelector( 'nav' );
const navItem = nav.querySelectorAll( 'a' );
let logo = document.getElementById( "logo-img" );
const ctaImg = document.getElementById( 'cta-img' );
const middleImg = document.getElementById( 'middle-img' );
const title = document.getElementsByTagName( 'h1' )[ 0 ];
const main = document.querySelector( '.main-content' );
const mainItem = main.querySelectorAll( 'h4' );
const mainContent = main.querySelectorAll( 'p' );
const button = document.getElementsByTagName( 'button' )[ 0 ];
const img = document.getElementById( 'cta-img' );
const contact = document.querySelector( '.contact' );
const contactTitle = contact.querySelector( 'h4' );
const contactContent = contact.querySelectorAll( 'p' );
const footer = document.querySelector( 'footer' );
const copyright = footer.querySelector( 'p' );


logo.setAttribute( 'src', siteContent[ "nav" ][ "img-src" ] )
ctaImg.setAttribute( 'src', siteContent[ 'cta' ][ 'img-src' ] );
middleImg.setAttribute( 'src', siteContent[ 'main-content' ][ 'middle-img-src' ] );
navItem[ 0 ].textContent = siteContent[ 'nav' ][ 'nav-item-1' ];
navItem[ 1 ].textContent = siteContent[ 'nav' ][ 'nav-item-2' ];
navItem[ 2 ].textContent = siteContent[ 'nav' ][ 'nav-item-3' ];
navItem[ 3 ].textContent = siteContent[ 'nav' ][ 'nav-item-4' ];
navItem[ 4 ].textContent = siteContent[ 'nav' ][ 'nav-item-5' ];
navItem[ 5 ].textContent = siteContent[ 'nav' ][ 'nav-item-6' ];
title.innerHTML = siteContent[ "cta" ][ "h1" ].split( ' ' ).join( '<br>' );
img.src = siteContent[ "cta" ][ "img-src" ];
button.innerText = siteContent[ "cta" ][ "button" ];
mainItem[ 0 ].textContent = siteContent[ 'main-content' ][ 'features-h4' ];
mainItem[ 1 ].textContent = siteContent[ 'main-content' ][ 'about-h4' ];
mainItem[ 2 ].textContent = siteContent[ 'main-content' ][ 'services-h4' ];
mainItem[ 3 ].textContent = siteContent[ 'main-content' ][ 'product-h4' ];
mainItem[ 4 ].textContent = siteContent[ 'main-content' ][ 'vision-h4' ];
mainContent[ 0 ].textContent = siteContent[ 'main-content' ][ 'features-content' ];
mainContent[ 1 ].textContent = siteContent[ 'main-content' ][ 'about-content' ];
mainContent[ 2 ].textContent = siteContent[ 'main-content' ][ 'services-content' ];
mainContent[ 3 ].textContent = siteContent[ 'main-content' ][ 'product-content' ];
mainContent[ 4 ].textContent = siteContent[ 'main-content' ][ 'vision-content' ];
contactTitle.textContent = siteContent[ 'contact' ][ 'contact-h4' ];
contactContent[ 0 ].textContent = siteContent[ 'contact' ][ 'address' ];
contactContent[ 1 ].textContent = siteContent[ 'contact' ][ 'phone' ];
contactContent[ 2 ].textContent = siteContent[ 'contact' ][ 'email' ];
copyright.textContent = siteContent[ 'footer' ][ 'copyright' ];
navItem.forEach( ( item ) => {
    item.style.color = 'green';
} );
const home = navItem[ 0 ].cloneNode( true );
home.textContent = 'Yeet';
nav.prepend( home );

const projects = navItem[ 0 ].cloneNode( true );
projects.textContent = 'ClickBait';
nav.appendChild( projects );




