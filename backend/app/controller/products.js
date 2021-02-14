const {Controller} = require("egg")

class ProductController extends Controller {
    async listProducts() {
        const {ctx, service} = this;
        const key = ctx.query.keyword;
        ctx.body = await service.products.findProducts(key);
    }
}

module.exports = ProductController;
