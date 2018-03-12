import { IElements } from './interfaces'
import { main } from './App'

/**
 * EL
 *
 * Global constant containing references to
 * used DOM elements.
 *
 * In this case, the HTML file contains only
 * one visible element: `<main>`
 */
const EL: IElements = {
  root: document.querySelector('#root'),
};

/**
 * Call the `main` function when all DOM content has loaded.
 */
window.onload = e => main(e, EL.root);
