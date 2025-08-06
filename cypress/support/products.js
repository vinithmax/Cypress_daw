
export class ProductPage {
  // 🔹 Get all product cards (not currently used, but useful if needed)
  getAllProductCards() {
    return cy.get('.product-image-wrapper');
  }
d
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
  getAllProductIds() {
    return cy.get('a.add-to-cart').then(($btns) => {
      return Cypress._.map($btns, btn => btn.getAttribute('data-product-id'));
    });
  }

  // 🔹 Validate a randomly chosen product from the list
  validateRandomProductCard() {
    this.getAllProductIds().then((ids) => {
      const randomId = Cypress._.sample(ids);
      this.validateProductCard(randomId);
    });
  }
}
