describe("Stock Cards Test", () => {
  it("Login pass", () => {
    cy.visit("/");
    cy.get(
      'img[src="app/images/uploaded/19275556e35d070c664419a04493147c.png?_ts=1687960193"]'
    ).should("exist");
    cy.get('input[placeholder="Prihlasovacie meno"]').eq(0).type("cypress_bga");
    cy.get('input[placeholder="Heslo"]')
      .eq(1)
      // lebo display none
      .type("NovaPr6325", { force: true });
    cy.contains("Prihlásiť").click();
    cy.contains(/CDESK Úvodný prehľad/i).should("exist");
  });
  it("Create new card", () => {
    cy.visit("/");
    cy.get(
      'img[src="app/images/uploaded/19275556e35d070c664419a04493147c.png?_ts=1687960193"]'
    ).should("exist");
    cy.get('input[placeholder="Prihlasovacie meno"]').eq(0).type("cypress_bga");
    cy.get('input[placeholder="Heslo"]')
      .eq(1)
      // lebo display none
      .type("NovaPr6325", { force: true });
    cy.contains("Prihlásiť").click();
    cy.contains(/CDESK Úvodný prehľad/i).should("exist");

    cy.get(".menu-item").contains("Sklad").click();
    cy.get('a[href="#!/cdesk/warehousecard"]').last().click({ force: true });
    cy.get("table").should("be.visible");

    cy.contains(/Nová skladová karta/i).should("not.exist");
    cy.get("button")
      .contains(/Pridať/i)
      .click();
    cy.contains(/Nová skladová karta/i).should("exist");

    cy.get('input[placeholder="Názov"]').type("Test_card_BG");
    cy.get('new-api-select[name="warehousecard_item_vat_id"]').click();
    cy.contains(/20 %/i).click();
    cy.get("button")
      .contains(/Vytvoriť/i)
      .click({ force: true });
    cy.contains(/Nová skladová karta bola úspešne vytvorená/i).should(
      "be.visible"
    );

    // "Skladová karta bola úspešne aktualizovaná" v pripadne ze sa nieco zmeni
  });
  it.only("Create new offer", () => {
    cy.visit("/");
    cy.get(
      'img[src="app/images/uploaded/19275556e35d070c664419a04493147c.png?_ts=1687960193"]'
    ).should("exist");
    cy.get('input[placeholder="Prihlasovacie meno"]').eq(0).type("cypress_bga");
    cy.get('input[placeholder="Heslo"]')
      .eq(1)
      // lebo display none
      .type("NovaPr6325", { force: true });
    cy.contains("Prihlásiť").click();
    cy.contains(/CDESK Úvodný prehľad/i).should("exist");

    cy.get(".menu-item").contains("Ponuky").click();
    cy.get('a[href="#!/cdesk/offer"]').first().click({ force: true });
    cy.contains(/Ponuky/i).should("exist");

    // cy.contains("button.btn-primary", "Pridať").click(); to ale nepreklikne na novy formular
    // cy.get('a[href="#!/cdesk/offer/new?pp=20&pg=1"]').click(); nefunguje
    cy.get("button.btn-primary")
      .contains(/Pridať/i)
      .click()
      .wait(1000)
      .then(() => {
        cy.url().should("include", "#!/cdesk/offer/new?pp=20&pg=1");
      });
  });
});
