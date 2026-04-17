import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace customicons {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `CustomIcons`.
     */
    /**
     * In version 9.20.0: introduced
     */
    interface ICustomIcon extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsCustomIconCollection: ICustomIconCollection;
        readonly name: string;
        readonly characterCode: number;
        readonly tags: internal.IList<string>;
        asLoaded(): CustomIcon;
        load(callback: (element: CustomIcon) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CustomIcon>;
    }
    /**
     * In version 9.20.0: introduced
     */
    class CustomIcon extends internal.Element<IModel> implements ICustomIcon {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCustomIconCollection(): CustomIconCollection;
        get name(): string;
        set name(newValue: string);
        get characterCode(): number;
        set characterCode(newValue: number);
        get tags(): internal.IList<string>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CustomIcon instance in the SDK and on the server.
         * The new CustomIcon will be automatically stored in the 'icons' property
         * of the parent CustomIconCollection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.20.0 and higher
         */
        static createIn(container: CustomIconCollection): CustomIcon;
        /**
         * Creates and returns a new CustomIcon instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CustomIcon;
        get qualifiedName(): string | null;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/customicons relevant section in reference guide}
     *
     * In version 9.20.0: introduced
     */
    interface ICustomIconCollection extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 9.22.0: introduced
         */
        readonly collectionClass: string;
        /**
         * In version 9.22.0: introduced
         */
        readonly prefix: string;
        readonly fontData: string | null;
        readonly icons: internal.IList<ICustomIcon>;
        asLoaded(): CustomIconCollection;
        load(callback: (element: CustomIconCollection) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CustomIconCollection>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/customicons relevant section in reference guide}
     *
     * In version 9.20.0: introduced
     */
    class CustomIconCollection extends projects.Document implements ICustomIconCollection {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 9.22.0: introduced
         */
        get collectionClass(): string;
        set collectionClass(newValue: string);
        /**
         * In version 9.22.0: introduced
         */
        get prefix(): string;
        set prefix(newValue: string);
        get fontData(): string | null;
        set fontData(newValue: string | null);
        get icons(): internal.IList<CustomIcon>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new CustomIconCollection unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): CustomIconCollection;
    }
}
import { IModel } from "./base-model";
