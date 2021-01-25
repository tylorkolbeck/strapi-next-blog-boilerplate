module.exports = async (ctx, next) => {
  console.log("REQUESTING FRONT END");
  return await next();
};
