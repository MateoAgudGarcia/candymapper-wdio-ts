import { FindCandyModal } from '../pageobjects/modal';
import { PartyLocationPage } from '../pageobjects/pages';
import { faker } from '@faker-js/faker';
import allure from '@wdio/allure-reporter';

describe('Halloween Party', () => {
  allure.addSuite('Halloween Party Flow');

  afterEach(async () => {
    const fakeEmail = faker.internet.email();

    const partyLocationPage = new PartyLocationPage();

    await partyLocationPage.enterEmail(fakeEmail);
    await partyLocationPage.submitNotification();
    await partyLocationPage.verifyNotificationIsDisplayed();
  });

  it('should navigate from modal to homepage, go to Halloween, attend Ghostville party, and submit email', async () => {
    allure.addLabel(
      'test',
      'User can attend a Ghostville party and subscribe with email',
    );
    const findCandy = new FindCandyModal();
    const homePage = await findCandy.goToHomepage();
    const halloweenPartyPage = await homePage.navigateToHalloweenPartyPage();
    const attendPartyPage = await halloweenPartyPage.clickAttendPartyButton();
    await attendPartyPage.selectGhostvilleTheme();
  });

  it('should allow user to host a Zombies-themed Halloween party and subscribe with a generated email', async () => {
    allure.addLabel(
      'test',
      'User can host a Zombies party and subscribe with email',
    );
    const findCandy = new FindCandyModal();
    const homePage = await findCandy.goToHomepage();
    const halloweenPartyPage = await homePage.navigateToHalloweenPartyPage();
    const hostPartyPage = await halloweenPartyPage.clickHostPartyButton();
    await hostPartyPage.selectZombiesTheme();
  });
});
