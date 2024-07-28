import UIComponentPrototype from "./UIComponentPrototype";
import UIButton from "./UIButton";
import UIButtonDraggable from "./UIButtonDraggable";

interface StepConfig {
    stepValue: number;
    config: { [key: string]: any };
}

/**
 * @class UIScrollBar
 * @memberOf PhaserComps.UIComponents
 * @classdesc
 * A scrollbar component that can be vertical or horizontal, with draggable thumb button and buttons to step the value.
 *
 * @extends PhaserComps.UIComponents.UIComponentPrototype
 * @property {number} value - The current value of the scrollbar, ranging from the minimum to maximum values.
 *
 * @param {PhaserComps.UIComponents.UIComponentPrototype} [parent] - The parent component instance.
 * @param {string} [key] - The key to identify the component within the parent.
 * @param {boolean} [vertical=false] - Determines if the scrollbar is vertical or horizontal.
 */
export default class UIScrollBar extends UIComponentPrototype {
    private _vertical: boolean;
    private _value: number;
    private _minValue: number;
    private _maxValue: number;
    private _valueStep: number;
    private _buttonStep: number;
    private _trackStart: number;
    private _trackLength: number;
    private _thumbClip: any | null;

    public btnPrev: UIButton;
    public btnNext: UIButton;
    public thumb: UIButtonDraggable;

    constructor(parent?: UIComponentPrototype, key?: string, vertical?: boolean);

    /**
     * @event PhaserComps.UIComponents.UIScrollBar.EVENT_CHANGE
     * Emitted when the scrollbar value changes.
     * @param {number} value - The current scrollbar value.
     */
    static get EVENT_CHANGE(): string;

    /**
     * Sets the bounds for the scrollbar values and the value step.
     * @param {number} minValue - The minimum value.
     * @param {number} maxValue - The maximum value.
     * @param {number} [valueStep=0] - The step size for the value.
     */
    setValueBounds(minValue: number, maxValue: number, valueStep?: number): void;

    /**
     * Sets the step size for the scroll buttons.
     * @param {number} val - The new step size.
     */
    setButtonStep(val: number): void;

    protected onClipAppend(clip: any): void;

    private _updateClips(): void;

    protected onClipProcess(): void;

    protected onPrevClick(): void;

    protected onNextClick(): void;

    private _updateThumbFromValue(): void;

    get value(): number;

    set value(val: number);

    private _onThumbDrag(positionX: number, positionY: number): void;

    private _onZoneDown(): void;
}
