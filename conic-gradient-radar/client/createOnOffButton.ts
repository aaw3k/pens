/**
 * Creates an on/off button that can be turned on and off by clicking on it
 * @param {string} selector The CSS selector used to find the button element
 * @returns {Object} An object with a `power` method that toggles the power
 */
export function createOnOffButton(selector: string): { power: () => void } {
  const button = document.querySelector(selector) as HTMLButtonElement

  function togglePower() {
    const isPressed = button.getAttribute('aria-pressed') === 'true'
    button.setAttribute('aria-pressed', String(!isPressed))
  }

  button.addEventListener('click', togglePower)

  return {
    power: togglePower,
  }
}
