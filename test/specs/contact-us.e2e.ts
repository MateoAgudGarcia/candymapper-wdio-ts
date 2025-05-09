import { faker } from '@faker-js/faker';
import allure from '@wdio/allure-reporter';
import { FindCandyModal } from '../pageobjects/modal';

describe('Contact Us Form', () => {
  allure.addSuite('Contact Us Submission');

  it('should fill and submit the contact us form successfully', async () => {
    allure.addLabel(
      'test',
      'User can submit the contact us form with valid data',
    );
    const findCandy = new FindCandyModal();
    const homePage = await findCandy.goToHomepage();

    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.number();
    const message = faker.lorem.sentence();

    await homePage.setFirstName(firstName);
    await homePage.setLastName(lastName);
    await homePage.setEmail(email);
    await homePage.setMobilePhone(phone);
    await homePage.setMessage(message);
    await homePage.clickSubmit();

    await homePage.verifyNotificationIsDisplayed();
  });
});
