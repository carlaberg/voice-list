const withPlugins = require('next-compose-plugins');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.resolve('../.env'),
        systemvars: true
      })
    ]

    return config;
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/dashboard': { page: '/dashboard' }
    }
  }
}

module.exports = withPlugins([], nextConfig);
