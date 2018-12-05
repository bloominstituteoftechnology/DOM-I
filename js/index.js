const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM \n Is \n Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
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
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// ------ Nav Bar

let aTags = document.querySelectorAll('a');

let aTagTexts = Object.values(siteContent.nav);
aTagTexts.pop();

// -------- Nav Bar Items (need refactor)
aTags.forEach(element => {
	for (let i = 0; i < aTagTexts.length; i++) {
		element.innerText = aTagTexts[i];
	}
});

// ------- CTA Section

const cta = document.querySelector('div.cta-text').children;

// ----- CTA H1

cta[0].innerText = siteContent.cta.h1;

// ----- CTA Button

cta[1].innerText = siteContent.cta.button;

// ------ CTA Img
document
	.querySelector('.cta')
	.children[1].setAttribute('src', 'img/header-img.png');

// ----- Main Content -- Top Content

const topTextContent1 = document.querySelector('.top-content').children[0];

topTextContent1.children[0].innerText =
	siteContent['main-content']['features-h4'];

topTextContent1.children[1].innerText =
	siteContent['main-content']['features-content'];

const topTextContent2 = document.querySelector('.top-content').children[1];

topTextContent2.children[0].innerText =
	siteContent['main-content']['features-h4'];

topTextContent2.children[1].innerText =
	siteContent['main-content']['features-content'];

const topContentImg = document
	.querySelector('.main-content')
	.children[1].setAttribute(
		'src',
		`${siteContent['main-content']['middle-img-src']}`,
	);

// ----- Bottom Content

const bottomContent = document.querySelector('.main-content').children[2]
	.children;

// ----- Services

bottomContent[0].children[0].innerText =
	siteContent['main-content']['services-h4'];

bottomContent[0].children[1].innerText =
	siteContent['main-content']['services-content'];

// ----- Product

bottomContent[1].children[0].innerText =
	siteContent['main-content']['services-h4'];

bottomContent[1].children[1].innerText =
	siteContent['main-content']['services-content'];

// ------ Vision

bottomContent[2].children[0].innerText =
	siteContent['main-content']['services-h4'];

bottomContent[2].children[1].innerText =
	siteContent['main-content']['services-content'];

// ----- Contact

document.querySelector('.contact').children[0].innerText =
	siteContent.contact['contact-h4'];

document.querySelector('.contact').children[1].innerText =
	siteContent.contact.address;

document.querySelector('.contact').children[2].innerText =
	siteContent.contact.phone;

document.querySelector('.contact').children[3].innerText =
	siteContent.contact.email;

// ----- Footer

document.querySelector('footer').innerText = siteContent.footer.copyright;
