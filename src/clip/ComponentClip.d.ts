import { Scene, GameObjects, TextStyle, GameObject } from "phaser";

declare module "PhaserComps" {
  export type ComponentType =
    | "image"
    | "component"
    | "text"
    | "tileSprite"
    | "polygon"
    | "zone";

  export interface StateConfig {
    x?: number;
    y?: number;
    scaleX?: number;
    scaleY?: number;
    angle?: number;
    alpha?: number;
  }

  export interface ComponentConfig {
    type: ComponentType;
    children?: ComponentConfig[];
    childId?: string;
    key?: string;
    image?: string;
    style?: TextStyle;
    states?: { [stateId: string]: StateConfig };
    masking?: string[];
    x?: number;
    y?: number;
    scaleX?: number;
    scaleY?: number;
    angle?: number;
    alpha?: number;
    width?: number;
    height?: number;
    vertices?: number[];
    color?: number;
  }

  export class ComponentClip extends GameObjects.Container {
    constructor(scene: Scene, config: ComponentConfig, textures: string | string[]);

    public getStateConfig(stateId: string): StateConfig | null;
    public getStateIds(): string[];
    public setState(stateId: string, force?: boolean): void;
    public applyChildParams(childId: string, params: StateConfig): void;
    public getChildClip(key: string): ComponentClip | GameObject | null;
    public getChildText(key: string): GameObjects.Text | null;
    public destroy(fromScene?: boolean): void;

    private _createImagesMap(textures: string[]): void;
    private _parseConfig(): void;
    private _createChildFromConfig(config: ComponentConfig): void;
    private _createPolygonFromConfig(config: ComponentConfig): GameObjects.Graphics;
    private _createTileSpriteFromConfig(config: ComponentConfig): GameObjects.TileSprite;
    private _createImageFromConfig(config: ComponentConfig): GameObjects.Image;
    private _createTextFromConfig(config: ComponentConfig): GameObjects.Text;
    private _createHitZoneFromConfig(config: ComponentConfig): GameObjects.Zone;

    private static _setupCommonParams(component: any, config: StateConfig): void;
  }

  class State {
    constructor(config: StateConfig);
    public config: StateConfig;
    public componentIds: string[];
  }

  class StateManager {
    constructor(clip: ComponentClip, config: { states: { [stateId: string]: StateConfig } });

    public getStateConfigById(stateId: string): StateConfig | null;
    public addComponent(component: ComponentClip | GameObjects.GameObject, childId: string, childKey?: string): void;
    public setState(stateId: string, force?: boolean): void;
    public getActiveComponentByKey(key: string): ComponentClip | GameObjects.Image | GameObjects.TileSprite | GameObjects.Text | null;

    private setupState(): void;
  }
}

export = PhaserComps;
export as namespace PhaserComps;
