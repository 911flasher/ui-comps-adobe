import UIComponentPrototype from "./UIComponentPrototype";
import UIManager from "../manager/UIManager";
import { GameObjects } from "phaser";

declare module "PhaserComps.UIComponents" {
  /**
   * @class UIButton
   * @extends PhaserComps.UIComponents.UIComponentPrototype
   * @description
   * Button component prototype, has states `up`, `over`, `down`, `disable`.
   * Emits EVENT_CLICK on click.
   * When disabled, doesn't interact with mouse events and moves to state `disable`.
   *
   * @property {boolean} enable - Activate/deactivate button interaction. If false, button state is set to `disable`.
   * @property {string} label - Get/set button label text.
   */
  export default class UIButton extends UIComponentPrototype {
    static readonly EVENT_CLICK: string;

    private _enable: boolean;
    private _isPressed: boolean;
    private _isOver: boolean;
    private _hitZone: GameObjects.Zone | null;

    constructor(parent?: UIComponentPrototype, key?: string, labelText?: string);

    onClipAppend(clip: UIComponentPrototype): void;
    onClipRemove(clip: UIComponentPrototype): void;

    get label(): string;
    set label(value: string);

    get enable(): boolean;
    set enable(value: boolean);

    private _setupInteractive(zone: GameObjects.Zone): void;
    private _removeInteractive(zone: GameObjects.Zone): void;

    get lockClipBounds(): Phaser.Geom.Rectangle | null;
    get lockClip(): GameObjects.Zone | null;

    private _updateInteractive(): void;

    getStateId(): string;

    protected _onClick(): void;

    get STATE_UP(): string;
    get STATE_DOWN(): string;
    get STATE_OVER(): string;
    get STATE_DISABLE(): string;

    protected _onPointerOut(): void;
    protected _onPointerOver(): void;
    protected _onPointerDown(pointer: Phaser.Input.Pointer, localX: number, localY: number, event: Phaser.Input.EventData): void;
    protected _onPointerUp(pointer: Phaser.Input.Pointer, localX: number, localY: number, event: Phaser.Input.EventData): void;

    destroy(fromScene?: boolean): void;
  }
}
