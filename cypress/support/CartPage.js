// support/cart.js
export class CartPage {
  // 🔹 Extract products from cart table
  getCartProducts() {
    return cy.get('#cart_info_table tbody tr').then(($rows) => {
      return Cypress._.map($rows, (row) => {
        const name = row.querySelector('.cart_description h4 a')?.innerText.trim();
        const priceText = row.querySelector('.cart_price p')?.innerText.trim();
        const price = parseFloat(priceText.replace(/[^0-9]/g, ''));
        return { name, price };
      });
    });
  }

  // 🔹 Verify products in cart match what we added
  verifyProducts(expectedProducts) {
    this.getCartProducts().then((cartProducts) => {
      expectedProducts.forEach((expected) => {
        const match = cartProducts.find(p => p.name === expected.name && p.price === expected.price);
        expect(match, `Product ${expected.name} with price ${expected.price} should exist in cart`)
          .to.not.be.undefined;
      });
    });
  }
}
