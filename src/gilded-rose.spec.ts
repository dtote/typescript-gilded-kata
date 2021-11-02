import { GildedRose, Item, names } from "./gilded-rose"

describe("Default test", () => {
  beforeEach(() => {
    const usersRepository: Item[] = [
      new Item('laptop', 25,49), 
      new Item(names.agedBrie, 4, 50), 
      new Item(names.backstage, 6, 50),
      new Item(names.sulfuras, 11, 49)];
  })

  it("should work", () => {
    // TODO: implement your tests here
    expect(true).toEqual(true)
  })
  it('', () => {
    expect(true).toBe(true)
  })
})
