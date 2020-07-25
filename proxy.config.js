const proxy = [
    {
      context: '/api',
      target: 'http://localhost:2424',
      pathRewrite: {'^/api' : ''}
    }
  ];