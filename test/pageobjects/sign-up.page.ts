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

    public open () {
        return super.open('sign-up');
    }
}

export default new SignUpPage();
