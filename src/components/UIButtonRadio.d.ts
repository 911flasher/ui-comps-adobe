import UIButtonSelect from "./UIButtonSelect";

/**
 * @class UIButtonRadio
 * @extends UIButtonSelect
 * @memberOf PhaserComps.UIComponents
 * @classdesc
 * Represents a radio button component. Multiple radio buttons can be grouped together
 * to allow only one selection in the group. Grouping is achieved by appending them to the first button
 * in the group using the `appendTo` parameter or the `appendToRadio` method.
 * 
 * @param {PhaserComps.UIComponents.UIComponentPrototype} [parent] - The parent UI component.
 * @param {string} [key] - Key to identify this component within its parent.
 * @param {string} [labelText] - Text to display on the button.
 * @param {*} [value] - The value associated with this radio button.
 * @param {UIButtonRadio} [appendTo] - If specified, this button will be added to the same group as the given button.
 */
export default class UIButtonRadio extends UIButtonSelect {
    private _sibling: UIButtonRadio;
    private _value: any;

    static get EVENT_SELECT(): string;

    constructor(
        parent?: PhaserComps.UIComponents.UIComponentPrototype,
        key?: string,
        labelText?: string,
        value?: any,
        appendTo?: UIButtonRadio
    );

    /**
     * Appends this radio button to the group of the given radio button.
     * @param {UIButtonRadio} radio - The radio button to append this button to.
     */
    appendToRadio(radio: UIButtonRadio): void;

    /**
     * Removes this radio button from its current group.
     */
    removeFromSibling(): void;

    protected _onClick(): void;

    get select(): boolean;
    set select(val: boolean);

    get value(): any;
    set value(val: any);

    get valueSelected(): any;
    set valueSelected(val: any);
}
