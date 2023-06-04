import {hasForbiddenWords, hasLowerAndUpperCase} from './password-validations';

describe('Password Validations', () => {
  it('should check if password has upper OR lowercase', () => {
    expect(hasLowerAndUpperCase('abc')).toBeFalsy();
    expect(hasLowerAndUpperCase('ABC')).toBeFalsy();
    expect(hasLowerAndUpperCase('1234')).toBeFalsy();
    expect(hasLowerAndUpperCase('1234a')).toBeFalsy();
    expect(hasLowerAndUpperCase('1234A')).toBeFalsy();
    // OK password
    expect(hasLowerAndUpperCase('Ab')).toBeTruthy();
    expect(hasLowerAndUpperCase('Ab12')).toBeTruthy();
  });

  it('should check if password has forbidden words', () => {
    expect(hasForbiddenWords('homer1234', 'homer', 'simpson')).toBeTruthy();
    expect(hasForbiddenWords('12345simpson', 'homer', 'simpson')).toBeTruthy();
    expect(hasForbiddenWords('homer1234simpson', 'homer', 'simpson')).toBeTruthy();
    // case sensitive
    expect(hasForbiddenWords('homer1234', 'Homer', 'simpson')).toBeTruthy();
    expect(hasForbiddenWords('12345Simpson', 'homer', 'simpson')).toBeTruthy();
    // OK password
    expect(hasForbiddenWords('Pa$$word', 'homer', 'simpson')).toBeFalsy();
  });
});
