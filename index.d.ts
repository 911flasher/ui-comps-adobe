// index.d.ts

// Import type definitions from individual modules
import ComponentClip from "./clip/ComponentClip";
import UIComponents from "./components/UIComponents";
import Plugin from "./plugin/Plugin";
import UIManager from "./manager/UIManager";

/**
 * The main namespace for PhaserComps.
 */
declare namespace PhaserComps {
    /**
     * Represents a ComponentClip.
     */
    export const ComponentClip: typeof ComponentClip;

    /**
     * Represents UI components.
     */
    export const UIComponents: typeof UIComponents;

    /**
     * Represents a Plugin.
     */
    export const Plugin: typeof Plugin;

    /**
     * Manages UI elements.
     */
    export const UIManager: typeof UIManager;
}

// Exporting the namespace as the default export
export default PhaserComps;
/*
// index.d.ts

// Declarations for each module
declare class ComponentClip {
    // Define properties and methods here
}

declare class UIComponents {
    // Define properties and methods here
}

declare class Plugin {
    // Define properties and methods here
}

declare class UIManager {
    // Define properties and methods here
}

// Declare the main export
declare namespace PhaserComps {
    export { ComponentClip, UIComponents, Plugin, UIManager };
}

// Default export
export default PhaserComps;
 
*/

