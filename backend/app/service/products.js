const {Service} = require("egg");

class ProductService extends Service {
    async findProducts(keyword) {
        const client = this.app.mysql
        const sql = "select * from products"
        if (!keyword) {
            return await client.query(sql)
        } else {
            return await client.query(`${sql} where name like ?`, [`%${keyword}%`])
        }
    }
}

module.exports = ProductService;
