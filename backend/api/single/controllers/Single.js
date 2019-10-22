'use strict';

/**
 * Single.js controller
 *
 * @description: A set of functions called "actions" for managing `Single`.
 */

module.exports = {

  /**
   * Retrieve single records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.single.search(ctx.query);
    } else {
      return strapi.services.single.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a single record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.single.fetch(ctx.params);
  },

  /**
   * Count single records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.single.count(ctx.query, populate);
  },

  /**
   * Create a/an single record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.single.add(ctx.request.body);
  },

  /**
   * Update a/an single record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.single.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an single record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.single.remove(ctx.params);
  }
};
