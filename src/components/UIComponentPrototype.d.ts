// UIComponentPrototype.d.ts
import * as Phaser from "phaser";
import * as PhaserComps from "../phasercomps";

declare module PhaserComps.UIComponents {
    interface ComponentClip {
        getChildText(key: string): Phaser.GameObjects.Text | null;
        setState(stateId: string): void;
        destroy(fromScene?: boolean): void;
        getChildClip(key: string): ComponentClip | null;
    }

    class UIComponentPrototype extends Phaser.Events.EventEmitter {
        constructor(parent?: UIComponentPrototype, key?: string);

        static readonly EVENT_STATE: string;

        _lockId: string | null;
        _parent: UIComponentPrototype | null;
        _key: string | null;
        _clip: ComponentClip | null;
        _texts: { [key: string]: string | string[] };

        appendClip(clip: ComponentClip): void;
        get lockId(): string;
        set lockId(value: string);
        get lockClipBounds(): Phaser.Geom.Rectangle | null;
        get lockClip(): Phaser.GameObjects.GameObject | null;

        onClipAppend(clip: ComponentClip): void;
        removeClip(): void;
        onClipRemove(clip: ComponentClip | null): void;
        doState(): void;
        getText(key: string): string | string[];
        setText(key: string, text: string | string[]): void;
        getStateId(): string;
        destroy(fromScene?: boolean): void;

        protected _clipUpdate(): void;
        protected _clipProcess(): void;
        protected onClipProcess(): void;
        private _setupState(stateId: string): void;
        private _onEventState(): void;
    }
}

export = PhaserComps.UIComponents;
