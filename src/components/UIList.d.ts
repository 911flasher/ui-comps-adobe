import UIComponentPrototype from "./UIComponentPrototype";
import UIListBaseItem from "./UIListBaseItem";

const EVENT_ITEM_CHANGE = "event_change";

/**
 * @class UIList
 * @memberOf PhaserComps.UIComponents
 * @classdesc
 *
 * List component. Item clip instances are supposed to exist as its children, with keys `item_0`, `item_1` and so on.
 *
 * When a data array is applied, each array item is set to its corresponding view instance.
 *
 * Useful for short lists and lists with custom items layout.
 *
 * @emits PhaserComps.UIComponents.UIList.EVENT_ITEM_CHANGE
 * @property {Array<*>} data - The data array to apply to list items.
 *
 * @param {PhaserComps.UIComponents.UIComponentPrototype} [parent] - The parent UIComponentPrototype instance to find the clip inside.
 * @param {String} [key] - The key to find the clip inside the parent.
 * @param {new (...args: any[]) => UIListBaseItem} rendererClass - The class for items, ideally extending `UIListBaseItem`.
 */
export default class UIList extends UIComponentPrototype {
    private _rendererClass: new (...args: any[]) => UIListBaseItem;
    private _items: Array<UIListBaseItem>;
    private _data: Array<any>;

    /**
     * @event PhaserComps.UIComponents.UIList.EVENT_ITEM_CHANGE
     * @description
     * Emitted when any item emits a change event.
     * @param {PhaserComps.UIComponents.UIListBaseItem} item - The item instance that emitted the change event.
     */
    static get EVENT_ITEM_CHANGE(): string;

    constructor(parent: UIComponentPrototype, key: string, rendererClass: new (...args: any[]) => UIListBaseItem);

    /**
     * Gets the data array.
     * @return {Array<any>}
     */
    get data(): Array<any>;

    /**
     * Sets the data array and updates the list items.
     * @param {Array<any>} value - The new data array.
     */
    set data(value: Array<any>);

    /**
     * @method PhaserComps.UIComponents.UIList#clean
     * @description Destroy all item renderer instances.
     */
    clean(): void;

    private _updateData(): void;

    private _getRenderer(index: number): UIListBaseItem;

    /**
     * @method PhaserComps.UIComponents.UIList#getStateId
     * @inheritDoc
     * @returns {String}
     */
    getStateId(): string;

    /**
     * @method PhaserComps.UIComponents.UIList#destroy
     * @protected
     * @inheritDoc
     */
    destroy(fromScene?: boolean): void;

    private onItemChange(item: UIListBaseItem): void;
}
