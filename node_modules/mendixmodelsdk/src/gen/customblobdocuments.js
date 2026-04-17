"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.customblobdocuments = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var customblobdocuments;
(function (customblobdocuments) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `CustomBlobDocuments`.
     */
    /**
     * In version 11.4.0: introduced
     */
    class CustomBlobDocument extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__customDocumentType = new internal.PrimitiveProperty(CustomBlobDocument, this, "customDocumentType", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__contents = new internal.PrimitiveProperty(CustomBlobDocument, this, "contents", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__metadata = new internal.PartProperty(CustomBlobDocument, this, "metadata", null, true);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get customDocumentType() {
            return this.__customDocumentType.get();
        }
        set customDocumentType(newValue) {
            this.__customDocumentType.set(newValue);
        }
        get contents() {
            return this.__contents.get();
        }
        set contents(newValue) {
            this.__contents.set(newValue);
        }
        get metadata() {
            return this.__metadata.get();
        }
        set metadata(newValue) {
            this.__metadata.set(newValue);
        }
        /**
         * Creates a new CustomBlobDocument unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, CustomBlobDocument);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.metadata = CustomBlobDocumentMetadata.create(this.model);
        }
    }
    CustomBlobDocument.structureTypeName = "CustomBlobDocuments$CustomBlobDocument";
    CustomBlobDocument.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.4.0",
        properties: {
            metadata: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    customblobdocuments.CustomBlobDocument = CustomBlobDocument;
    /**
     * In version 11.4.0: introduced
     */
    class CustomBlobDocumentMetadata extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__createdByExtension = new internal.PrimitiveProperty(CustomBlobDocumentMetadata, this, "createdByExtension", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__readableTypeName = new internal.PrimitiveProperty(CustomBlobDocumentMetadata, this, "readableTypeName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new CustomBlobDocumentMetadata() cannot be invoked directly, please use 'model.customblobdocuments.createCustomBlobDocumentMetadata()'");
            }
        }
        get containerAsCustomBlobDocument() {
            return super.getContainerAs(CustomBlobDocument);
        }
        get createdByExtension() {
            return this.__createdByExtension.get();
        }
        set createdByExtension(newValue) {
            this.__createdByExtension.set(newValue);
        }
        get readableTypeName() {
            return this.__readableTypeName.get();
        }
        set readableTypeName(newValue) {
            this.__readableTypeName.set(newValue);
        }
        /**
         * Creates and returns a new CustomBlobDocumentMetadata instance in the SDK and on the server.
         * The new CustomBlobDocumentMetadata will be automatically stored in the 'metadata' property
         * of the parent CustomBlobDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CustomBlobDocumentMetadata.structureTypeName, { start: "11.4.0" });
            return internal.instancehelpers.createElement(container, CustomBlobDocumentMetadata, "metadata", false);
        }
        /**
         * Creates and returns a new CustomBlobDocumentMetadata instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CustomBlobDocumentMetadata);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CustomBlobDocumentMetadata.structureTypeName = "CustomBlobDocuments$CustomBlobDocumentMetadata";
    CustomBlobDocumentMetadata.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.4.0"
    }, internal.StructureType.Element);
    customblobdocuments.CustomBlobDocumentMetadata = CustomBlobDocumentMetadata;
})(customblobdocuments = exports.customblobdocuments || (exports.customblobdocuments = {}));
//# sourceMappingURL=customblobdocuments.js.map