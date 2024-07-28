import UIComponentPrototype from "./UIComponentPrototype";
import UIList from "./UIList";

/**
 * @class UIListBaseItem
 * @memberOf PhaserComps.UIComponents
 * @classdesc
 *
 * Base class for UIList component renderer. Extend it to create custom list items renderers.
 *
 * @emits PhaserComps.UIComponents.UIList.EVENT_ITEM_CHANGE
 * @property {*} data - The data from the UIList's data list.
 *
 * @param {PhaserComps.UIComponents.UIComponentPrototype} [parent] - The parent UIComponentPrototype instance to find the clip inside.
 * @param {String} [key] - The key to find the clip inside the parent.
 */
export default class UIListBaseItem extends UIComponentPrototype {
    private _data: any;

    constructor(parent: UIComponentPrototype, key: string);

    /**
     * @method PhaserComps.UIComponents.UIListBaseItem#notifyChange
     * @description Emits a change event to the containing UIList instance.
     */
    notifyChange(): void;

    /**
     * @method PhaserComps.UIComponents.UIListBaseItem#_commitData
     * @protected
     * @description Applies data from the setter. Override this method in subclasses to handle data changes.
     */
    protected _commitData(): void;

    /**
     * @property {*}
     * @description Gets or sets the data for this list item.
     */
    get data(): any;
    set data(value: any);
}
