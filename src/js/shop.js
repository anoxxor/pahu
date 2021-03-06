(() => {

let productsData = [
  {image: 'img/dist/chair1-orig.jpg', isNew: true},
  {image: 'img/dist/chair6-orig.jpg'},
  {image: 'img/dist/chair2-orig.jpg'},
  {image: 'img/dist/chair3-orig.jpg', isNew: true},
  {image: 'img/dist/chair4-orig.jpg'},
  {image: 'img/dist/chair5-orig.jpg'},
  {image: 'img/dist/chair6-orig.jpg'},
  {image: 'img/dist/chair1-orig.jpg', isNew: true}
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