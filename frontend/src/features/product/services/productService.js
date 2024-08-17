export const filterProducts = (products, query) => {
    const lowercasedQuery = query.toLowerCase();
    return products.filter(product =>
      product.id.toLowerCase().includes(lowercasedQuery) ||
      product.name.toLowerCase().includes(lowercasedQuery) ||
      product.sku.toLowerCase().includes(lowercasedQuery) ||
      product.location.toLowerCase().includes(lowercasedQuery) ||
      product.price.toLowerCase().includes(lowercasedQuery) ||
      product.stock.toLowerCase().includes(lowercasedQuery)
    );
  };