import UIComponentPrototype from "./UIComponentPrototype";

interface StepConfig {
    stepValue: number;
    config: { [key: string]: any };
}

/**
 * @class UIProgressBar
 * @memberOf PhaserComps.UIComponents
 * @classdesc
 * A progress bar component that interpolates between different states based on the current progress value.
 *
 * @extends PhaserComps.UIComponents.UIComponentPrototype
 * @property {number} value - The current progress value, ranging from 0 to 1.
 *
 * @param {PhaserComps.UIComponents.UIComponentPrototype} [parent] - The parent UIComponentPrototype instance to find the clip inside.
 * @param {string} [key] - The key to find the clip inside the parent.
 */
export default class UIProgressBar extends UIComponentPrototype {
    private _value: number;
    private _steps: StepConfig[];

    constructor(parent?: UIComponentPrototype, key?: string);

    /**
     * Gets the current progress value.
     * @returns {number}
     */
    get value(): number;

    /**
     * Sets the current progress value and applies it to the component.
     * @param {number} v - The new progress value.
     */
    set value(v: number);

    protected onClipAppend(clip: any): void;

    private _applyValue(): void;

    private _makeSteps(clip: any): void;

    static _makeFullConfig(config: any): { x: number, y: number, scaleX: number, scaleY: number, angle: number, alpha: number };
}
