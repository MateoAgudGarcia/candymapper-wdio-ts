import { ChainablePromiseElement } from 'webdriverio';
import allure from '@wdio/allure-reporter';
import { PartyLocationPage } from './party-location.page';

export class HostPartyPage {
  get zombiesButton(): ChainablePromiseElement {
    return $('a[aria-label="ZOMBIES"]');
  }

  get ghostsButton(): ChainablePromiseElement {
    return $('a[aria-label="GHOSTS"]');
  }

  /**
   * Navigates to the Party Location page by clicking the "Zombies" theme button.
   * Waits for the button to be clickable before interacting.
   * @returns {PartyLocationPage} An instance of PartyLocationPage after navigation.
   */
  async selectZombiesTheme(): Promise<PartyLocationPage> {
    allure.startStep(
      'Navigate to the Party Location page by clicking the "Zombies" theme button',
    );
    await this.zombiesButton.waitForClickable();
    await this.zombiesButton.click();
    allure.endStep();
    return new PartyLocationPage();
  }

  /**
   * Navigates to the Party Location page by clicking the "Ghosts" theme button.
   * Waits for the button to be clickable before interacting.
   * @returns {PartyLocationPage} An instance of PartyLocationPage after navigation.
   */
  async selectGhostsTheme(): Promise<PartyLocationPage> {
    allure.startStep(
      'Navigate to the Party Location page by clicking the "Ghosts" theme button',
    );
    await this.ghostsButton.waitForClickable();
    await this.ghostsButton.click();
    allure.endStep();
    return new PartyLocationPage();
  }
}
