const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM<br> Is<br> Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
		'img-src-2': "img/get_started.jpg"
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// Update the img src for the other two images
let header_img = document.getElementById('cta-img');
header_img.setAttribute('src', siteContent['cta']['img-src']);

const middle_img = document.getElementById('middle-img');
middle_img.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Update content for the nav section
const linktext = document.querySelectorAll('nav a');
linktext[0].innerHTML = siteContent['nav']['nav-item-1'];
linktext[1].innerHTML = siteContent['nav']['nav-item-2'];
linktext[2].innerHTML = siteContent['nav']['nav-item-3'];
linktext[3].innerHTML = siteContent['nav']['nav-item-4'];
linktext[4].innerHTML = siteContent['nav']['nav-item-5'];
linktext[5].innerHTML = siteContent['nav']['nav-item-6'];

//Update the content for the cta section
const h1Cta = document.querySelector('.cta-text h1');
h1Cta.innerHTML = siteContent['cta']['h1'];

const btnCta = document.querySelector('.cta-text button');
btnCta.innerHTML = siteContent['cta']['button'];

//Update the content for the top section
const topH4 = document.querySelectorAll(
	'.main-content .top-content .text-content h4'
);
topH4[0].innerHTML = siteContent['main-content']['features-h4'];
topH4[1].innerHTML = siteContent['main-content']['about-h4'];

const topP = document.querySelectorAll(
	'.main-content .top-content .text-content p'
);
topP[0].innerHTML = siteContent['main-content']['features-content'];
topP[1].innerHTML = siteContent['main-content']['about-content'];

//Update the content for the botton section
const bottomH4 = document.querySelectorAll(
	'.main-content .bottom-content .text-content h4'
);
bottomH4[0].innerHTML = siteContent['main-content']['services-h4'];
bottomH4[1].innerHTML = siteContent['main-content']['product-h4'];
bottomH4[2].innerHTML = siteContent['main-content']['vision-h4'];

const bottomP = document.querySelectorAll(
	'.main-content .bottom-content .text-content p'
);
bottomP[0].innerHTML = siteContent['main-content']['services-content'];
bottomP[1].innerHTML = siteContent['main-content']['product-content'];
bottomP[2].innerHTML = siteContent['main-content']['vision-content'];

//Update the content for the contact section
const H4contact = document.querySelector('.contact h4');
H4contact.innerHTML = siteContent['contact']['contact-h4'];

const Pcontact = document.querySelectorAll('.contact p');
Pcontact[0].innerHTML = siteContent['contact']['address'];
Pcontact[1].innerHTML = siteContent['contact']['phone'];
Pcontact[2].innerHTML = siteContent['contact']['email'];

//Update the content for the footer section
const copyright = document.querySelector('footer p');
copyright.innerHTML = siteContent['footer']['copyright'];

//Add new navigation items
const a1 = document.createElement('a');
a1.innerHTML = 'Help';
const LastItemNav = document.querySelector('nav');
LastItemNav.appendChild(a1);

const a2 = document.createElement('a');
a2.innerHTML = 'Home';
const FirstItemNav = document.querySelector('nav');
FirstItemNav.prepend(a2);

//Change color of navigation text to green
const linkcolor = document.querySelectorAll('header nav a');
linkcolor[0].style.color = 'green';
linkcolor[1].style.color = 'green';
linkcolor[2].style.color = 'green';
linkcolor[3].style.color = 'green';
linkcolor[4].style.color = 'green';
linkcolor[5].style.color = 'green';
linkcolor[6].style.color = 'green';
linkcolor[7].style.color = 'green';

//Stretch goals
//Change body text color to grey and font family to roboto;
const textColor = document.querySelector('body');
textColor.style.color = 'grey';
const backgroundColor = document.querySelector('body');
backgroundColor.style.fontFamily = 'roboto';

//Set-up event listener to change header image when get started button is clicked 
document.querySelector(".cta button").addEventListener("click", function( event ) {
	header_img.setAttribute('src', siteContent["cta"]["img-src-2"]);
  }, false); 