import { ChainablePromiseElement } from 'webdriverio';
import allure from '@wdio/allure-reporter';
import { HostPartyPage } from './host-party.page';
import { AttendPartyPage } from './attend-party.page';

export class HalloweenPartyPage {
  get hostPartyButton(): ChainablePromiseElement {
    return $('a[aria-label="I AM HOSTING A PARTY"]');
  }

  get attendPartyButton(): ChainablePromiseElement {
    return $('a[aria-label="I AM ATTENDING A PARTY"]');
  }

  /**
   * Clicks the button to indicate the user is hosting a party.
   * Waits for the button to be clickable before interacting.
   * @returns {HostPartyPage} An instance of HostPartyPage after clicking the button.
   */
  async clickHostPartyButton(): Promise<HostPartyPage> {
    allure.startStep('Click the "I am hosting a party" button');
    await this.hostPartyButton.waitForClickable();
    await this.hostPartyButton.click();
    allure.endStep();
    return new HostPartyPage();
  }

  /**
   * Clicks the button to indicate the user is attending a party.
   * Waits for the button to be clickable before interacting.
   * @returns {AttendPartyPage} An instance of AttendPartyPage after clicking the button.
   */
  async clickAttendPartyButton(): Promise<AttendPartyPage> {
    allure.startStep('Click the "I am attending a party" button');
    await this.attendPartyButton.waitForClickable();
    await this.attendPartyButton.click();
    allure.endStep();
    return new AttendPartyPage();
  }
}
