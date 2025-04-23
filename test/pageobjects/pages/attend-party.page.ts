import { ChainablePromiseElement } from 'webdriverio';
import allure from '@wdio/allure-reporter';
import { PartyLocationPage } from './party-location.page';

export class AttendPartyPage {
  get zombietonButton(): ChainablePromiseElement {
    return $('a[aria-label="ZOMBIETON"]');
  }

  get ghostvilleButton(): ChainablePromiseElement {
    return $('a[aria-label="GHOSTVILLE"]');
  }

  get goBackButton(): ChainablePromiseElement {
    return $('a[aria-label="I\'M SCARED, LET\'S GO BACK!"]');
  }

  /**
   * Navigates to the Party Location page by clicking the "Zombieton" theme button.
   * Waits for the button to be clickable before interacting.
   * @returns {PartyLocationPage} An instance of PartyLocationPage after navigation.
   */
  async selectZombietonTheme(): Promise<PartyLocationPage> {
    allure.startStep(
      'Navigate to the Party Location page by clicking the "Zombieton" theme button',
    );
    await this.zombietonButton.waitForClickable();
    await this.zombietonButton.click();
    allure.endStep();
    return new PartyLocationPage();
  }

  /**
   * Navigates to the Party Location page by clicking the "Ghostville" theme button.
   * Waits for the button to be clickable before interacting.
   * @returns {PartyLocationPage} An instance of PartyLocationPage after navigation.
   */
  async selectGhostvilleTheme(): Promise<PartyLocationPage> {
    allure.startStep(
      'Navigate to the Party Location page by clicking the "Ghostville" theme button',
    );
    await this.ghostvilleButton.waitForClickable();
    await this.ghostvilleButton.click();
    allure.endStep();
    return new PartyLocationPage();
  }

  /**
   * Navigates to the Party Location page by clicking the "I\'M SCARED, LET\'S GO BACK!" button.
   * Waits for the button to be clickable before interacting.
   * @returns {PartyLocationPage} An instance of PartyLocationPage after navigation.
   */
  async goBackToPartyLocation(): Promise<PartyLocationPage> {
    allure.startStep(
      'Navigate to the Party Location page by clicking the "I\'m scared, let\'s go back!" button',
    );
    await this.goBackButton.waitForClickable();
    await this.goBackButton.click();
    allure.endStep();
    return new PartyLocationPage();
  }
}
