import UIButton from "./UIButton";

/**
 * @typedef {Object} DragBounds
 * @description
 * Defines the bounds within which the UIButtonDraggable can be dragged.
 * @property {number} minX - The minimum x-coordinate for dragging.
 * @property {number} minY - The minimum y-coordinate for dragging.
 * @property {number} maxX - The maximum x-coordinate for dragging.
 * @property {number} maxY - The maximum y-coordinate for dragging.
 */
interface DragBounds {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}

/**
 * @class UIButtonDraggable
 * @extends UIButton
 * @memberOf PhaserComps.UIComponents
 * @classdesc
 * A button component that can be dragged, emitting an EVENT_DRAG event with movement deltas.
 * 
 * @property {boolean} enable - Whether the button is interactive. If false, the button state is set to 'disabled'.
 * @property {string} label - The text label displayed on the button.
 * 
 * @param {PhaserComps.UIComponents.UIComponentPrototype} [parent] - The parent component.
 * @param {string} [key] - Key to find the button instance within the parent.
 * @param {string} [labelText] - Initial text to display on the button.
 */
export default class UIButtonDraggable extends UIButton {
    private _dragBounds: DragBounds;
    private _startDragX: number;
    private _startDragY: number;
    private _dragZone: Phaser.GameObjects.Zone | null;

    constructor(parent?: UIComponentPrototype, key?: string, labelText?: string);

    /**
     * Sets the draggable bounds for the button.
     * @param {number} minX - The minimum x-coordinate for dragging.
     * @param {number} minY - The minimum y-coordinate for dragging.
     * @param {number} maxX - The maximum x-coordinate for dragging.
     * @param {number} maxY - The maximum y-coordinate for dragging.
     */
    setDragBounds(minX: number, minY: number, maxX: number, maxY: number): void;

    /**
     * Event handler for the drag start event.
     * @param pointer - The pointer object.
     * @param {Phaser.GameObjects.GameObject} gameObject - The game object being dragged.
     * @private
     */
    private _onDragStart(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject): void;

    /**
     * Event handler for the drag event.
     * @param pointer - The pointer object.
     * @param {Phaser.GameObjects.GameObject} gameObject - The game object being dragged.
     * @param {number} dragX - The x-coordinate of the drag.
     * @param {number} dragY - The y-coordinate of the drag.
     * @private
     */
    private _onDrag(pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject, dragX: number, dragY: number): void;

    /**
     * Sets up interactive events for the zone.
     * @param zone - The interactive zone.
     * @private
     */
    private _setupInteractive(zone: Phaser.GameObjects.Zone): void;

    /**
     * Removes interactive events from the zone.
     * @param zone - The interactive zone.
     * @private
     */
    private _removeInteractive(zone: Phaser.GameObjects.Zone): void;

    /**
     * @event EVENT_DRAG
     * @description
     * Emitted when the button is dragged.
     * @param {number} x - The horizontal drag movement from the start position.
     * @param {number} y - The vertical drag movement from the start position.
     */
    static get EVENT_DRAG(): string;
}
