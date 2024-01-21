export default {
  images: {
    domains: [
      'books.google.com',
      'via.placeholder.com'
    ],
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/collection' : { page: '/collection' },
    }
  }
};