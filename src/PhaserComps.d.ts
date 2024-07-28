// PhaserComps.d.ts

// Importing the types of the components, assuming they are defined in their respective modules.

/**
 * Namespace representing various Phaser components.
 */
declare namespace PhaserComps {
    /**
     * ComponentClip class
     */
    export const ComponentClip: typeof import("./clip/ComponentClip");

    /**
     * UIComponents class or object
     */
    export const UIComponents: typeof import("./components/UIComponents");

    /**
     * Plugin class
     */
    export const Plugin: typeof import("./plugin/Plugin");

    /**
     * UIManager class
     */
    export const UIManager: typeof import("./manager/UIManager");
}

// Exporting the namespace as the default export
export default PhaserComps;
