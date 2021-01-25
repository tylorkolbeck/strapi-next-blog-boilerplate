const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  findOne: async (ctx) => {
    const { slug } = ctx.params;
    const entity = await strapi.services.article.findOne({ slug });
    if (entity.premium) {
      return {
        ...entity,
        content: "This is premium content",
      };
    }
    console.log("[QUERY][FIND ONE]");
    return sanitizeEntity(entity, { model: strapi.models.article });
  },
  find: async (ctx) => {
    console.log("[QUERY][FIND]");
    const entity = await strapi.services.article.find();
    return removePremiumContent(entity);
  },
};

// module.exports = {
//   /**
//    * Retrieve a record.
//    *
//    * @return {Object}
//    */

//   async findOne(ctx) {
//     const { slug } = ctx.params;

//     const entity = await strapi.services.article.findOne({ slug });
//     console.log(">>>>> RUNNING FIND ONE");

//     return sanitizeEntity(entity, { model: strapi.models.article });
//   },

//   async find(ctx) {
//     const entity = await strapi.services.article.find();
//     return removePremiumContent(entity);
//   },
// };

function removePremiumContent(data) {
  return data.map((post) => {
    if (post.premium) {
      post.content = "This is premium content";
      return post;
    } else {
      return post;
    }
  });
}
