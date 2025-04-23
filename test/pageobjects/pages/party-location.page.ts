import { ChainablePromiseElement } from 'webdriverio';
import allure from '@wdio/allure-reporter';

export class PartyLocationPage {
  get emailInput(): ChainablePromiseElement {
    return $('input[aria-label="Email"]');
  }

  get submitButton(): ChainablePromiseElement {
    return $('button[data-hook="submit-button"]');
  }

  get notificationMessage(): ChainablePromiseElement {
    return $('div[role="region"][aria-live="polite"]');
  }

  /**
   * Enters the provided email address into the email input field.
   * Waits for the input to be displayed before interacting.
   * @param {string} email The email address to enter.
   */
  async enterEmail(email: string): Promise<void> {
    allure.startStep(`Enter email address: ${email} in the notification form`);
    await this.emailInput.waitForDisplayed();
    await this.emailInput.setValue(email);
    allure.endStep();
  }

  /**
   * Clicks the "REMIND ME" button to submit the notification form.
   * Waits for the button to be clickable before interacting.
   */
  async submitNotification(): Promise<void> {
    allure.startStep(
      'Click the "REMIND ME" button to submit the notification form',
    );
    await this.submitButton.waitForClickable();
    await this.submitButton.click();
    allure.endStep();
  }

  /**
   * Checks if a notification or confirmation message is displayed after submitting.
   * Update the selector if a specific notification element is available.
   * @returns {Promise<boolean>} True if the notification is displayed, false otherwise.
   */
  async verifyNotificationIsDisplayed(): Promise<void> {
    allure.startStep(
      'Expect notification/confirmation is displayed after submitting',
    );
    await expect(this.notificationMessage).toBeDisplayed();
    allure.endStep();
  }
}
