import Page from './page';

class SignUpPage extends Page {
    public get inputFirstName () {
        return $('#first-name');
    }

    public get inputLastName () {
      return $('#last-name');
    }

  public get inputEmail () {
    return $('#email');
  }

  public get inputPassword () {
    return $('#password');
  }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

  get success () { return $('#success') }

  get requiredFirstName () { return $('#required-first-name') }
  get requiredLastName () { return $('#required-last-name') }
  get requiredEmail () { return $('#required-email') }
  get requiredPassword () { return $('#required-password') }
  get minLengthPassword () { return $('#min-length-password') }
  get atLeastLowerUpperPassword () { return $('#at-least-lower-upper-password') }
  get forbiddenWordsPassword () { return $('#forbidden-words-password') }
  get invalidFormatEmail () { return $('#invalid-format-email') }

    public async signUp (
      firstName: string,
      lastName: string,
      email: string,
      password: string
    ) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

  public async testPassword (
    password: string,
  ) {
    await this.inputFirstName.setValue('Homer');
    await this.inputLastName.setValue('Simpson');
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  public async testEmail (
    email: string,
  ) {
    await this.inputEmail.setValue(email);
    await this.btnSubmit.click();
  }

    public open () {
        return super.open('sign-up');
    }
}

export default new SignUpPage();
