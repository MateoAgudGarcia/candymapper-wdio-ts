import allure from '@wdio/allure-reporter';
import { BaseModal } from './base.modal';
import { HomePage } from '../pages/home.page';

export class FindCandyModal extends BaseModal {
  get findMyCandy(): ChainablePromiseElement {
    return this.rootElement.$('a[aria-label="FIND MY CANDY"]');
  }
  /**
   * Clicks the 'Find My Candy' link and navigates to the homepage.
   * @returns {Promise<HomePage>} An instance of the HomePage.
   */
  async goToHomepage(): Promise<HomePage> {
    allure.startStep(
      'Click the "Find My Candy" link to navigate to the homepage',
    );
    await this.findMyCandy.waitForDisplayed();
    await this.findMyCandy.waitForClickable();
    await this.findMyCandy.click();
    allure.endStep();
    return new HomePage();
  }
}
