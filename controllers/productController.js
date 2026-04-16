const products = require('../data/products');

exports.getProducts = (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.page) || 1;
  const keyword = req.query.keyword ? req.query.keyword.toLowerCase() : '';

  let filtered = products;
  if (keyword) {
    filtered = products.filter((product) =>
      product.name.toLowerCase().includes(keyword) ||
      product.shortDescription.toLowerCase().includes(keyword) ||
      product.flavor.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
    );
  }

  const count = filtered.length;
  const pages = Math.max(Math.ceil(count / pageSize), 1);
  const result = filtered.slice((page - 1) * pageSize, page * pageSize);

  res.json({
    products: result,
    page,
    pages,
    count,
  });
};

exports.getProductById = (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};
