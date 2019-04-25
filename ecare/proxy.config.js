const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8090/caregiverServices/',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;