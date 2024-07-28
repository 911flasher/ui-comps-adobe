import UIComponentPrototype from "./UIComponentPrototype";

/**
 * @memberOf PhaserComps.UIComponents
 * @class UIContainer
 * @classdesc
 * Base container component. Allows dynamically adding UIComponents inside other components.
 *
 * Child components must be root components only, not children of any other clips.
 *
 * Note that UIContainer can only be a child component of another UIComponentPrototype instance.
 *
 * @extends PhaserComps.UIComponents.UIComponentPrototype
 */
export default class UIContainer extends UIComponentPrototype {
    private _children: Array<UIComponentPrototype>;

    /**
     * @param {PhaserComps.UIComponents.UIComponentPrototype} parent - The parent UIComponentPrototype instance to find the clip inside.
     * @param {String} key - The key to find the clip inside the parent.
     */
    constructor(parent: UIComponentPrototype, key: string);

    /**
     * @method PhaserComps.UIComponents.UIContainer#addChild
     * @description Adds a child to the children list and adds it to the Phaser container instance, if one exists.
     *
     * @param {PhaserComps.UIComponents.UIComponentPrototype} child - The child component to add.
     * @return {PhaserComps.UIComponents.UIComponentPrototype} The added child component.
     */
    addChild(child: UIComponentPrototype): UIComponentPrototype;

    /**
     * @method PhaserComps.UIComponents.UIContainer#removeChild
     * @description Removes a child from the children list and removes it from the Phaser container instance, if one exists.
     *
     * @param {PhaserComps.UIComponents.UIComponentPrototype} child - The child component to remove.
     * @return {PhaserComps.UIComponents.UIComponentPrototype} The removed child component.
     */
    removeChild(child: UIComponentPrototype): UIComponentPrototype;

    /**
     * @private
     * @param {PhaserComps.UIComponents.UIComponentPrototype} child - The child component to add to the container clip.
     */
    private _addUIComponentToContainerClip(child: UIComponentPrototype): void;

    /**
     * @private
     * @param {PhaserComps.UIComponents.UIComponentPrototype} child - The child component to remove from the container clip.
     * @param {Boolean} [destroyChild=false] - Whether to destroy the child component after removal.
     */
    private _removeUIComponentFromContainerClip(child: UIComponentPrototype, destroyChild?: boolean): void;

    /**
     * @override
     * @param {Phaser.GameObjects.GameObject} clip - The clip to append.
     */
    onClipAppend(clip: Phaser.GameObjects.GameObject): void;

    /**
     * @override
     * @param {Phaser.GameObjects.GameObject} clip - The clip to remove.
     */
    onClipRemove(clip: Phaser.GameObjects.GameObject): void;

    /**
     * @override
     */
    destroy(): void;
}
