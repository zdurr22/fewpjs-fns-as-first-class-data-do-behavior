describe("index.js", () => {
  describe("greet() function", () => {
    it("Returns Good Morning before 12pm", () => {
      expect(greet("8:40")).to.equal("Good Morning");
    });
    it("Returns Good Afternoon between 12pm and 5pm ", () => {
      expect(greet("14:21")).to.equal("Good Afternoon");
    });
    it("Returns Good Evening after 5pm", () => {
      expect(greet("19:00")).to.equal("Good Evening");
    });
  });

  describe("displayMessage() function", () => {
    it("updates the DOM with an appropriate message", () => {
      let testContent = "TEST";
      displayMessage(testContent);

      // The test library doesn't treat innerText and textContent the same, so we need to check for both
      // https://github.com/jsdom/jsdom/issues/1245
      let content = greetingEl.innerText
        ? greetingEl.innerText
        : greetingEl.textContent;
      expect(content).to.equal(testContent);
    });
  });
});
