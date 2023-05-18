/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */

const path = require('path');
require('dotenv').config({
  encoding: 'utf-8',
  path: path.join(__dirname, '.env.development.local'),
});

const config = {
  hygraphEndpoint: process.env.HYGRAPH_API_BASE_URL,
  hygraphToken: HYGRAPH_API_AUTH_TOKEN,
};

module.exports = config;
