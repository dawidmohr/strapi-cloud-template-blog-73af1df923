'use strict';

/**
 * music-club service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::music-club.music-club');
