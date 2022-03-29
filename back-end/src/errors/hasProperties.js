// validation middleware - : checks whether or not the request body includes all th required fields.  (common file)
function hasProperties(...properties) {
    return function (res, req, next) {
      const { data = {} } = res.body;
  
      try {
        properties.forEach((property) => {
          if (!data[property]) {
            const error = new Error(`A '${property}' property is required.`);
            error.status = 400;
            throw error;
          }
        });
        next();
      } catch (error) {
        next(error);
      }
    };
  }
  
  module.exports = hasProperties;