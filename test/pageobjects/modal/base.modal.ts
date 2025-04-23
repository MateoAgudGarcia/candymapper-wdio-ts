import { ChainablePromiseElement } from 'webdriverio';
import allure from '@wdio/allure-reporter';

export class BaseModal {
  protected rootElement: ChainablePromiseElement;

  constructor() {
    this.rootElement = $('#POPUPS_ROOT');
  }

  get closeModalButton(): ChainablePromiseElement {
    return this.rootElement.$(
      '[data-testid="popupCloseIconButtonRoot"] [role="button"]',
    );
  }

  get closeButton(): ChainablePromiseElement {
    return this.rootElement.$('div[aria-label="Close"]');
  }

  /**
   * Closes the modal by clicking the close button.
   */
  async close(): Promise<void> {
    allure.startStep('Attempt to close modal using the main close icon button');
    try {
      await this.closeModalButton.waitForClickable();
      await this.closeModalButton.click();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      allure.startStep(
        'Main close icon button not found or not interactable, trying fallback close button',
      );
      await this.closeButton.waitForClickable();
      await this.closeButton.click();
      allure.endStep();
    }
    await this.rootElement.waitForDisplayed({ reverse: true });
    allure.endStep();
  }

  /**
   * Asserts that the modal root element is displayed.
   */
  async expectIsDisplayed(): Promise<void> {
    allure.startStep('Assert modal root element is displayed');
    await expect(this.rootElement).toBeDisplayed();
    allure.endStep();
  }
}
