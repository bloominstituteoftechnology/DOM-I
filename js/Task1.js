
// Ans. 1.0
// const bar = document.querySelectorAll('a');
// bar.forEach((item, index) => {
//   item.textContent = siteContent['nav'][`nav-item-${index+1}`]
//   item.style.color = 'green';
// })

// Ans. 1.1
// const bar = document.querySelectorAll("a");
// arr = siteContent["nav"]; // (1)
// bar.forEach((i, x) => { // (2)
//   i.textContent = arr[`nav-item-${x + 1}`];
//   i.style.color = 'green'; // (3)
// });
// (1) or.. arr = siteContent.nav. This is to simplify the code but it adds a line so its not better I guess.
// (2) where i = item & x = index
// (3) make it green.

// Ans. 1.2
bar = document.querySelectorAll("a"); //(1)
bar.forEach((item, index) => { //(2,3)
  item.textContent = siteContent["nav"][`nav-item-${index + 1}`]; //(4)
  item.style.color = "red";
});
// (1) First thing is to create a variable that is the area of the document I want to effect.  I use All and 'a' because they are an array and a is the exact item I'm changing.
// (2) Next I create a forEach over the items in document that are 'a' which is my variable. I can't put anything before the () like "function".
// (3) I use a brace because Im going to also turn it green. Multiple functions get {}.
// (4) In the arrow function Im going to textContent for each empty item in document (which is equal to bar.item[index]) with siteContent @ 'nav'.'a' using the 'a' names provided and adding one to each as a template literal because of zero index.
