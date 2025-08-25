
export class ProductPage {
  // 🔹 Get all product cards (not currently used, but useful if needed)
  getAllProductCards() {
    return cy.get('.product-image-wrapper');
  }

  // 🔹 Validate a single product card by ID
  validateProductCard(productId) {
    cy.get(`[data-product-id="${productId}"]`)
      .parents('.product-image-wrapper')
      .within(() => {
        // ✅ Check if product image is visible
        cy.get(`img[src="/get_product_picture/${productId}"]`)
          .should('be.visible');

        // ✅ Check if View Product link is correct and visible
        cy.get(`a[href="/product_details/${productId}"]`)
          .should('be.visible');

        // ✅ Click Add to Cart button
        cy.get(`a[data-product-id="${productId}"]`)
          .first().click();

        // ✅ Click View Product link
        cy.get(`a[href="/product_details/${productId}"]`).first().click();
      });
  }

  // 🔹 Get all product IDs from Add to Cart buttons
 // Extract product details from UI
  getAllProducts() {
    return cy.get('.product-image-wrapper').then(($cards) => {
      return Cypress._.map($cards, (card) => {
        const id = card.querySelector('a.add-to-cart')?.getAttribute('data-product-id');
        const name = card.querySelector('.productinfo p')?.innerText.trim();
        const priceText = card.querySelector('.productinfo h2')?.innerText.trim();
        const price = parseFloat(priceText.replace(/[^0-9]/g, ''));

        return { id, name, price };
      });
    });
  }

  // Pick random N products
  selectRandomProducts(count = 2) {
    return this.getAllProducts().then((products) => {
      return Cypress._.sampleSize(products, count);
    });
  }

  // Add product to cart
  addProductToCart(product) {
    cy.get(`a[data-product-id="${product.id}"]`).click({ force: true });
  }

  // View product details (if needed)
  viewProduct(product) {
    cy.get(`a[href="/product_details/${product.id}"]`).click({ force: true });
  }
}


