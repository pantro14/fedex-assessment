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
});





