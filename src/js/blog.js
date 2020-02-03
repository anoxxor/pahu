(() => {

  let postsData = [
    {
      image: '/img/dist/blog1-md.jpg',
      header: 'our new workspace'
    },
    {
      image: '/img/dist/blog2-md.jpg',
      header: 'modern collection'
    },
    {
      image: '/img/dist/blog3-md.jpg',
      header: 'beautiful things'
    }
  ];

  let postTemplate = $('.templates .post');
  let blogContainer = $('.blog__posts');

  for (let postData of postsData) {
    let curPost = postTemplate.clone();
    if (postData.image) curPost.children('.post__image').prop('src', postData.image);
    if (postData.header) curPost.children('.post__content').children('.post__header').text(postData.header);
    if (postData.text) {}
    blogContainer.append(curPost);
  }

})();
