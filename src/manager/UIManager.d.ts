declare module "phaser" {
	interface GameObjects {
	  Container: any;
	  Image: any;
	  Text: any;
	  TileSprite: any;
	  Zone: any;
	  Graphics: any;
	}
	interface Scene {
	  textures: {
		get: (key: string) => any;
	  };
	  add: {
		image: any;
		text: any;
		tileSprite: any;
		zone: any;
		existing: (gameObject: any) => void;
	  };
	  make: {
		graphics: () => any;
	  };
	}
  }
  
  declare namespace PhaserComps {
	interface UIComponentPrototype {
	  lockId: string;
	  lockClipBounds?: Phaser.Geom.Rectangle;
	  lockClip?: Phaser.GameObjects.GameObject;
	}
  
	interface StateConfig {
	  x?: number;
	  y?: number;
	  scaleX?: number;
	  scaleY?: number;
	  angle?: number;
	  alpha?: number;
	}
  
	interface ComponentConfig {
	  type: string;
	  children?: ComponentConfig[];
	  childId?: string;
	  key?: string;
	  image?: string;
	  style?: Phaser.GameObjects.TextStyle;
	  states?: Record<string, StateConfig>;
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
  
	class UIManager {
	  static lock(id: string | string[], rewrite?: boolean): void;
	  static unlock(): void;
	  static register(proto: UIComponentPrototype): void;
	  static unregister(proto: UIComponentPrototype): void;
	  static check(id: string): boolean;
	  static getById(id: string): UIComponentPrototype | undefined;
	  static getBoundsById(id: string): Phaser.Geom.Rectangle | null;
	  static getClipById(id: string): Phaser.GameObjects.GameObject | undefined;
	}
  
	class ComponentClip extends Phaser.GameObjects.Container {
	  constructor(scene: Phaser.Scene, config: ComponentConfig, textures: string | string[]);
	  getStateConfig(stateId: string): StateConfig | null;
	  getStateIds(): string[];
	  setState(stateId: string, force?: boolean): void;
	  applyChildParams(childId: string, params: StateConfig): void;
	  getChildClip(key: string): ComponentClip | Phaser.GameObjects.GameObject | undefined;
	  getChildText(key: string): Phaser.GameObjects.Text | undefined;
	  destroy(fromScene?: boolean): void;
  
	  private _createImagesMap(textures: string[]): void;
	  private _parseConfig(): void;
	  private _createChildFromConfig(config: ComponentConfig): void;
	  private _createPolygonFromConfig(config: ComponentConfig): Phaser.GameObjects.Graphics;
	  private _createTileSpriteFromConfig(config: ComponentConfig): Phaser.GameObjects.TileSprite;
	  private _createImageFromConfig(config: ComponentConfig): Phaser.GameObjects.Image;
	  private _createTextFromConfig(config: ComponentConfig): Phaser.GameObjects.Text;
	  private _createHitZoneFromConfig(config: ComponentConfig): Phaser.GameObjects.Zone;
  
	  static _setupCommonParams(component: any, config: any): void;
	}
  }
  