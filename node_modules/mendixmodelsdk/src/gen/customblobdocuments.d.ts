import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace customblobdocuments {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `CustomBlobDocuments`.
     */
    /**
     * In version 11.4.0: introduced
     */
    interface ICustomBlobDocument extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): CustomBlobDocument;
        load(callback: (element: CustomBlobDocument) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CustomBlobDocument>;
    }
    /**
     * In version 11.4.0: introduced
     */
    class CustomBlobDocument extends projects.Document implements ICustomBlobDocument {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get customDocumentType(): string;
        set customDocumentType(newValue: string);
        get contents(): string;
        set contents(newValue: string);
        get metadata(): CustomBlobDocumentMetadata;
        set metadata(newValue: CustomBlobDocumentMetadata);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new CustomBlobDocument unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): CustomBlobDocument;
    }
    /**
     * In version 11.4.0: introduced
     */
    class CustomBlobDocumentMetadata extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCustomBlobDocument(): CustomBlobDocument;
        get createdByExtension(): string;
        set createdByExtension(newValue: string);
        get readableTypeName(): string;
        set readableTypeName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CustomBlobDocumentMetadata instance in the SDK and on the server.
         * The new CustomBlobDocumentMetadata will be automatically stored in the 'metadata' property
         * of the parent CustomBlobDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.4.0 and higher
         */
        static createIn(container: CustomBlobDocument): CustomBlobDocumentMetadata;
        /**
         * Creates and returns a new CustomBlobDocumentMetadata instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CustomBlobDocumentMetadata;
    }
}
import { IModel } from "./base-model";
