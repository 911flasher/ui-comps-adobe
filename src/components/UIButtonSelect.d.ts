import UIButton from "./UIButton";

/**
 * @class UIButtonSelect
 * @extends UIButton
 * @memberOf PhaserComps.UIComponents
 * @classdesc
 * A checkbox-like button component that extends the functionality of a standard button.
 * It includes an additional `select` state to indicate selection. The button can have various states:
 * `up`, `over`, `down`, `disable`, and corresponding selected states: `up_select`, `over_select`, `down_select`, `disable_select`.
 * Emits an EVENT_CLICK event when clicked.
 *
 * @property {boolean} enable - Activates or deactivates button interaction. If false, the button state is set to `disable`.
 * @property {string} label - Gets or sets the button label text.
 * @property {boolean} select - Gets or sets the selection state of the button.
 *
 * @param {PhaserComps.UIComponents.UIComponentPrototype} [parent] - The parent component in the UI hierarchy.
 * @param {string} [key] - The key to identify the button within its parent.
 * @param {string} [labelText] - The text to set as the button label.
 */
export default class UIButtonSelect extends UIButton {
    private _select: boolean;

    constructor(
        parent?: PhaserComps.UIComponents.UIComponentPrototype,
        key?: string,
        labelText?: string
    );

    /**
     * Returns the current state ID of the button, including selection state.
     * @returns {string} - The state ID, suffixed with "_select" if selected.
     */
    getStateId(): string;

    /**
     * Handles the click event on the button. Toggles the selection state.
     * @protected
     */
    protected _onClick(): void;

    /**
     * Gets the selection state of the button.
     * @returns {boolean} - True if the button is selected, otherwise false.
     */
    get select(): boolean;

    /**
     * Sets the selection state of the button.
     * @param {boolean} value - True to select the button, false to deselect.
     */
    set select(value: boolean);
}
