import UIComponentPrototype from "./UIComponentPrototype";
import UIScrollBar from "./UIScrollBar";

/**
 * @typedef ScrollBoundsObject
 * @description
 * Represents the bounds of the scrollable area in the panel.
 * @property {number} x - Start x position of the container, used if the panel is horizontal.
 * @property {number} y - Start y position of the container, used if the panel is vertical.
 * @property {number} len - Scroll distance of the container; `x` or `y` position will be adjusted by `len` multiplied by the scrollbar value.
 */
interface ScrollBoundsObject {
    x: number;
    y: number;
    len: number;
}

/**
 * @class UIScrollPanel
 * @memberOf PhaserComps.UIComponents
 * @classdesc
 * A scrolling panel component with an integrated scrollbar.
 * It manages a panel and a scrollbar, allowing for content to be scrolled within the panel.
 * 
 * @param {PhaserComps.UIComponents.UIComponentPrototype} container - The parent container component.
 * @param {string} panelKey - Key to identify the panel within the container.
 * @param {string} scrollBarKey - Key to identify the scrollbar within the container.
 * @param {string} dimensionsKey - Key to identify the dimensions of the scrollable area within the container.
 * @param {boolean} [vertical=false] - Determines if the scrolling is vertical or horizontal.
 */
export default class UIScrollPanel {
    private _container: UIComponentPrototype;
    private _panelKey: string;
    private _dimensionsKey: string;
    private _scrollBar: UIScrollBar;
    private _vertical: boolean;
    private _panel: any;
    private _scrollBounds: ScrollBoundsObject | null;

    constructor(
        container: UIComponentPrototype,
        panelKey: string,
        scrollBarKey: string,
        dimensionsKey: string,
        vertical?: boolean
    );

    /**
     * Handles updates to the container, refreshing the panel and dimension clips.
     * @private
     */
    private _onContainerUpdate(): void;

    /**
     * Updates the panel's position based on the scrollbar's value.
     * @param {number} value - The current value of the scrollbar.
     * @private
     */
    private _onScrollBar(value: number): void;
}
