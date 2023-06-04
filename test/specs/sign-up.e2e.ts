import SignUpPage from  '../pageobjects/sign-up.page';

describe('Fedex Assessment e2e test', () => {
  it('should sign up with valid credentials', async () => {
    await SignUpPage.open();
    await SignUpPage.signUp(
      'Homer',
      'Simpson',
      'homer@simpson.com',
      'P@$$word'
    );
    await expect(SignUpPage.success).toBeExisting();
    await expect(SignUpPage.success).toHaveTextContaining(
      'Registration form has been successfully sent and saved in our servers'
    );
  });

  it('should click submit sign up without inputs, get validation errors messages', async () => {
    await SignUpPage.open();
    await SignUpPage.signUp(
      '',
      '',
      '',
      ''
    );
    await expect(SignUpPage.requiredFirstName).toBeExisting();
    await expect(SignUpPage.requiredFirstName).toHaveTextContaining(
      'First name required'
    );
    await expect(SignUpPage.requiredLastName).toBeExisting();
    await expect(SignUpPage.requiredLastName).toHaveTextContaining(
      'Last name required'
    );
    await expect(SignUpPage.requiredEmail).toBeExisting();
    await expect(SignUpPage.requiredEmail).toHaveTextContaining(
      'Email required'
    );
    await expect(SignUpPage.requiredPassword).toBeExisting();
    await expect(SignUpPage.requiredPassword).toHaveTextContaining(
      'Password required'
    );
  });

  describe('Should test password validations', () => {
    it('should test password minimum length', async () => {
      await SignUpPage.open();
      await SignUpPage.testPassword(
        'Ab1',
      );
      await expect(SignUpPage.minLengthPassword).toBeExisting();
      await expect(SignUpPage.minLengthPassword).toHaveTextContaining(
        'Minimum of eight characters'
      );
    });

    it('should test password with at least lower and upper case present', async () => {
      await SignUpPage.open();
      await SignUpPage.testPassword(
        'abcde123fgh',
      );
      await expect(SignUpPage.atLeastLowerUpperPassword).toBeExisting();
      await expect(SignUpPage.atLeastLowerUpperPassword).toHaveTextContaining(
        'At least one small and/or capital letter is missing'
      );
    });

    it('should test password with no: first name and/or last name, sensitive case', async () => {
      await SignUpPage.open();
      await SignUpPage.testPassword(
        'Homer1234po',
      );
      await expect(SignUpPage.forbiddenWordsPassword).toBeExisting();
      await expect(SignUpPage.forbiddenWordsPassword).toHaveTextContaining(
        'Should not contain first name or last name'
      );
      await SignUpPage.testPassword(
        '@#$%-simpsonA',
      );
      await expect(SignUpPage.forbiddenWordsPassword).toHaveTextContaining(
        'Should not contain first name or last name'
      );
    });
  });

  describe('Should test email validations', () => {
    it('should test email format using angular validator email', async () => {
      await SignUpPage.open();
      await SignUpPage.testEmail(
        'abc',
      );
      await expect(SignUpPage.invalidFormatEmail).toBeExisting();
      await expect(SignUpPage.invalidFormatEmail).toHaveTextContaining(
        'Invalid email format'
      );

      await SignUpPage.testEmail(
        'abc@',
      );
      await expect(SignUpPage.invalidFormatEmail).toHaveTextContaining(
        'Invalid email format'
      );
      await SignUpPage.testEmail(
        'abc@com.',
      );
      await expect(SignUpPage.invalidFormatEmail).toHaveTextContaining(
        'Invalid email format'
      );
    });
  });
});





