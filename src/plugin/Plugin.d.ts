// plugin/Plugin.d.ts

import Phaser from "phaser";
import ComponentClip from "../clip/ComponentClip";

/**
 * Plugin class extending Phaser's BasePlugin.
 */
declare class Plugin extends Phaser.Plugins.BasePlugin {
    constructor(mgr: Phaser.Plugins.PluginManager);

    /**
     * Adds a UI component to the scene.
     * @param config The configuration object for the component.
     * @param textures Textures or frames to be used by the component.
     * @returns The created ComponentClip instance.
     */
    addComponent(config: any, textures: any): ComponentClip;

    /**
     * Creates a UI component but does not add it to the scene.
     * @param config The configuration object for the component.
     * @param textures Textures or frames to be used by the component.
     * @returns The created ComponentClip instance.
     */
    makeComponent(config: any, textures: any): ComponentClip;

    /**
     * The default configuration for the plugin.
     */
    static DefaultCfg: {
        key: string;
        plugin: typeof Plugin;
        start: boolean;
    };
}

export default Plugin;
