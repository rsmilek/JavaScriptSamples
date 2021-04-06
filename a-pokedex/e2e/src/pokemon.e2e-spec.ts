import { PokemonPage } from './pokemon.po';
import { browser } from 'protractor';

function sleep() {
  browser.driver.sleep(1500); // sleep for demonstration reasons
}

describe('ng-pokedex pokemon view', () => {
  let page: PokemonPage;

  beforeEach(() => {
    page = new PokemonPage();
  });

  it('should display a list of pokemon', () => {
    page.navigateTo();
    expect(page.getPokemonCardElements().count()).toBe(151);
  });

  it('should open and view a particular pokemon', () => {
    page.navigateTo();
    page.getFirstPokemonCardElement().click();

    expect(page.getOpenModalElement()).toBeTruthy();
    expect(page.getOpenModalHeadingElement().getText()).toBe('Bulbasaur #1');
  });

  it('should open and allow arrow keys to navigate between pokemon', () => {
    page.navigateTo();

    // Open the modal
    page.getFirstPokemonCardElement().click();

    // Trigger the right arrow, check to make sure the view updated with a different Pokédex
    page.selectNextKey();
    expect(page.getOpenModalHeadingElement().getText()).toBe('Ivysaur #2');

    // Trigger the left arrow twice
    page.selectPrevKey();
    page.selectPrevKey();
    // Check to make sure the view updated with a different Pokédex
    expect(page.getOpenModalHeadingElement().getText()).toBe('Mew #151');
  });

  it('should open/close(escape) pokemon detail dialog', () => {
    page.navigateTo();

    // Check if modal dialog is open
    page.getFirstPokemonCardElement().click();
    expect(page.getOpenModalElement().isPresent()).toBeTruthy();

    // Check if modal dialog is open
    page.selectEscapeKey();
    expect(page.getOpenModalElement().isPresent()).toBeFalsy();
  });
});
