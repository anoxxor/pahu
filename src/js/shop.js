(() => {

let productsData = [
  {image: 'img/chair1.jpg', isNew: true},
  {image: 'img/chair6.jpg'},
  {image: 'img/chair2.jpg'},
  {image: 'img/chair3.jpg', isNew: true},
  {image: 'img/chair4.jpg'},
  {image: 'img/chair5.jpg'},
  {image: 'img/chair6.jpg'},
  {image: 'img/chair1.jpg', isNew: true}
];

let shopContainer$ = $('.shop__items');
let template$ = $('.templates .product');
for (let productData of productsData) {
  let productDist = {};
  for (let productProp in productData) {
    productDist[productProp] = productData[productProp];
  }

  let templateClone$ = template$.clone();
  if (productDist.image) templateClone$.children('.product__image').prop('src', productDist.image);
  if (productDist.header) templateClone$.children('.product__header').text(productDist.header);
  if (productDist.description) templateClone$.children('.product__description').text(productDist.description);
  if (productDist.price) templateClone$.children('.product__price').text(productDist.price);
  if (productDist.isNew) templateClone$.addClass('is-new');

  shopContainer$.append(templateClone$);
}

})();