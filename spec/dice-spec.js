import { dice } from './../src/dice.js';


describe('dice', function() {
  it('should return a bool that randomnumber equals 6, forced to be 6', function() {
    var randomNumber = 6;
      expect(randomNumber).toEqual(6);
  });

  it('should return a number between one and six', function() {
    expect([1,2,3,4,5,6]).toContain(dice());
  });

  it('should never return a number above six or below one', function() {
    expect(dice()).toBeGreaterThan(0);
    expect(dice()).toBeLessThan(7);
  });
});
