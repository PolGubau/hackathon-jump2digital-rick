describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");
		cy.findByRole("heading", {
			name: /Rick && Morty/i,
		}).should("exist");
	});
});
