const total = require("./total");
describe("Тестирование функции total", () => {
  let shopList;
  beforeEach(() => {
    shopList = [500, 750, 2500, 5000];
    fn = jest.fn((x) => x * 1.2);
  });
  test("Вызов функции discount", () => {
    total(shopList, fn);
    expect(fn).toBeCalled();
  });
});
