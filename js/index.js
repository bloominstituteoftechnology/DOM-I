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
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
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

/*-- header ------------------------------------*/

const nav = document.querySelector('nav');
const newNav1 = document.createElement('a');
const newNav2 = document.createElement('a');
newNav1.innerText = 'Bruh';
newNav1.href = '#';
newNav2.innerText = 'Insta';
newNav2.href = '#';
nav.prepend(newNav1);
nav.appendChild(newNav2);

const navItems = document.querySelectorAll('a');
navItems[1].innerText = siteContent['nav']['nav-item-1'];
navItems[2].innerText = siteContent['nav']['nav-item-2'];
navItems[3].innerText = siteContent['nav']['nav-item-3'];
navItems[4].innerText = siteContent['nav']['nav-item-4'];
navItems[5].innerText = siteContent['nav']['nav-item-5'];
navItems[6].innerText = siteContent['nav']['nav-item-6'];
navItems.forEach(navItem => navItem.style.color = 'green');
// for (i = 0; i < navItems.length; i++) {
// 	navItems[i].style.color = 'green';
// }

/*-- cta section -------------------------------*/

const ctaTitle = document.querySelector('h1');
ctaTitle.innerHTML = `${siteContent['cta']['h1'].substring(0, 3)}<br>${siteContent['cta'][
	'h1'
].substring(4, 6)}</br>${siteContent['cta']['h1'].substring(7, 14)}`;

const ctaButton = document.querySelector('button');
ctaButton.innerText = siteContent['cta']['button'];
ctaButton.style.fontFamily = 'inherit';
ctaButton.style.fontSize = '17px';
ctaButton.style.fontWeight = '600';

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

/*-- main content section ----------------------*/

const topText = document.querySelectorAll('.main-content .top-content .text-content');
topText[0].children[0].innerText = siteContent['main-content']['features-h4'];
topText[0].children[1].innerText = siteContent['main-content']['features-content'];
topText[1].children[0].innerText = siteContent['main-content']['about-h4'];
topText[1].children[1].innerText = siteContent['main-content']['about-content'];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const bottomText = document.querySelectorAll('.main-content .bottom-content .text-content');
bottomText[0].children[0].innerText = siteContent['main-content']['services-h4'];
bottomText[0].children[1].innerText = siteContent['main-content']['services-content'];
bottomText[1].children[0].innerText = siteContent['main-content']['product-h4'];
bottomText[1].children[1].innerText = siteContent['main-content']['product-content'];
bottomText[2].children[0].innerText = siteContent['main-content']['vision-h4'];
bottomText[2].children[1].innerText = siteContent['main-content']['vision-content'];

/*-- contact section ---------------------------*/

const contact = document.querySelectorAll('.contact');
contact[0].children[0].innerText = siteContent['contact']['contact-h4'];
contact[0].children[1].innerHTML = `${siteContent['contact']['address'].substring(
	0,
	18
)}<br>${siteContent['contact']['address'].substring(19, 33)}`;
contact[0].children[2].innerText = siteContent['contact']['phone'];
contact[0].children[3].innerText = siteContent['contact']['email'];

/*-- footer ------------------------------------*/

const footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];
