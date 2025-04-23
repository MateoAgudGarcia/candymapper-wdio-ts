import { ChainablePromiseElement } from 'webdriverio';
import allure from '@wdio/allure-reporter';
import { HalloweenPartyPage } from './halloween-party.page';

export class HomePage {
  get headerSection(): ChainablePromiseElement {
    return $('header > [data-block-level-container="Section"]');
  }

  get firstNameInput(): ChainablePromiseElement {
    return $('input[aria-label="First name"]');
  }

  get lastNameInput(): ChainablePromiseElement {
    return $('input[aria-label="Last name"]');
  }

  get emailInput(): ChainablePromiseElement {
    return $('input[aria-label="Email"]');
  }

  get mobilePhoneInput(): ChainablePromiseElement {
    return $('input[aria-label="Mobile Phone SMS OPT-IN. Phone"]');
  }

  get messageTextarea(): ChainablePromiseElement {
    return $('textarea[aria-label="Message"]');
  }

  get submitButton(): ChainablePromiseElement {
    return $('button[data-hook="submit-button"]');
  }

  get contactUsContainer(): ChainablePromiseElement {
    return $('[aria-label="Contact us"]');
  }

  get notification(): ChainablePromiseElement {
    return this.contactUsContainer.$('div[role="region"][aria-live="polite"]');
  }

  /**
   * Gets the Halloween Party link inside the header section.
   */
  get halloweenPartyLink(): ChainablePromiseElement {
    return this.headerSection.$('a[href$="halloween-party"]');
  }

  /**
   * Enters the first name in the corresponding input field.
   * @param {string} firstName First name to enter
   */
  async setFirstName(firstName: string): Promise<void> {
    allure.startStep(`Enter first name: ${firstName}`);
    await this.firstNameInput.waitForDisplayed();
    await this.firstNameInput.setValue(firstName);
    allure.endStep();
  }

  /**
   * Enters the last name in the corresponding input field.
   * @param {string} lastName Last name to enter
   */
  async setLastName(lastName: string): Promise<void> {
    allure.startStep(`Enter last name: ${lastName}`);
    await this.lastNameInput.waitForDisplayed();
    await this.lastNameInput.setValue(lastName);
    allure.endStep();
  }

  /**
   * Enters the email in the corresponding input field.
   * @param {string} email Email to enter
   */
  async setEmail(email: string): Promise<void> {
    allure.startStep(`Enter email: ${email}`);
    await this.emailInput.waitForDisplayed();
    await this.emailInput.setValue(email);
    allure.endStep();
  }

  /**
   * Enters the mobile phone number in the corresponding input field.
   * @param {string} phone Mobile phone number to enter
   */
  async setMobilePhone(phone: string): Promise<void> {
    allure.startStep(`Enter mobile phone number: ${phone}`);
    await this.mobilePhoneInput.waitForDisplayed();
    await this.mobilePhoneInput.setValue(phone);
    allure.endStep();
  }

  /**
   * Enters the message in the corresponding textarea.
   * @param {string} message Message to enter
   */
  async setMessage(message: string): Promise<void> {
    allure.startStep(`Enter message: ${message}`);
    await this.messageTextarea.waitForDisplayed();
    await this.messageTextarea.setValue(message);
    allure.endStep();
  }

  /**
   * Clicks the submit button.
   */
  async clickSubmit(): Promise<void> {
    allure.startStep('Click submit button');
    await this.submitButton.waitForClickable();
    await this.submitButton.click();
    allure.endStep();
  }

  /**
   * Checks if a notification or confirmation message is displayed after submitting.
   * Uses expect assertion.
   */
  async verifyNotificationIsDisplayed(): Promise<void> {
    allure.startStep(
      'Assert notification/confirmation is displayed after submitting',
    );
    await expect(this.notification).toBeDisplayed();
    allure.endStep();
  }

  /**
   * Navigates to the Halloween Party page by clicking the corresponding link in the header section.
   * Waits for the link to be clickable before interacting.
   * @returns {HalloweenPartyPage} An instance of HalloweenPartyPage after navigation.
   */
  async navigateToHalloweenPartyPage(): Promise<HalloweenPartyPage> {
    allure.startStep(
      'Navigate to the Halloween Party page by clicking the header link',
    );
    await this.halloweenPartyLink.waitForClickable();
    await this.halloweenPartyLink.click();
    allure.endStep();
    return new HalloweenPartyPage();
  }
}
