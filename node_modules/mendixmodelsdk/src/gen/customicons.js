"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.customicons = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var customicons;
(function (customicons) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `CustomIcons`.
     */
    /**
     * In version 9.20.0: introduced
     */
    class CustomIcon extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(CustomIcon, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__characterCode = new internal.PrimitiveProperty(CustomIcon, this, "characterCode", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__tags = new internal.PrimitiveListProperty(CustomIcon, this, "tags", [], internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new CustomIcon() cannot be invoked directly, please use 'model.customicons.createCustomIcon()'");
            }
        }
        get containerAsCustomIconCollection() {
            return super.getContainerAs(CustomIconCollection);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get characterCode() {
            return this.__characterCode.get();
        }
        set characterCode(newValue) {
            this.__characterCode.set(newValue);
        }
        get tags() {
            return this.__tags.get();
        }
        /**
         * Creates and returns a new CustomIcon instance in the SDK and on the server.
         * The new CustomIcon will be automatically stored in the 'icons' property
         * of the parent CustomIconCollection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.20.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CustomIcon.structureTypeName, { start: "9.20.0" });
            return internal.instancehelpers.createElement(container, CustomIcon, "icons", true);
        }
        /**
         * Creates and returns a new CustomIcon instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CustomIcon);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CustomIcon.structureTypeName = "CustomIcons$CustomIcon";
    CustomIcon.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.20.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            characterCode: {
                public: {
                    currentValue: true
                }
            },
            tags: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    customicons.CustomIcon = CustomIcon;
    /**
     * See: {@link https://docs.mendix.com/refguide/customicons relevant section in reference guide}
     *
     * In version 9.20.0: introduced
     */
    class CustomIconCollection extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__collectionClass = new internal.PrimitiveProperty(CustomIconCollection, this, "collectionClass", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__prefix = new internal.PrimitiveProperty(CustomIconCollection, this, "prefix", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__fontData = new internal.PrimitiveProperty(CustomIconCollection, this, "fontData", null, internal.PrimitiveTypeEnum.Blob);
            /** @internal */
            this.__icons = new internal.PartListProperty(CustomIconCollection, this, "icons", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 9.22.0: introduced
         */
        get collectionClass() {
            return this.__collectionClass.get();
        }
        set collectionClass(newValue) {
            this.__collectionClass.set(newValue);
        }
        /**
         * In version 9.22.0: introduced
         */
        get prefix() {
            return this.__prefix.get();
        }
        set prefix(newValue) {
            this.__prefix.set(newValue);
        }
        get fontData() {
            return this.__fontData.get();
        }
        set fontData(newValue) {
            this.__fontData.set(newValue);
        }
        get icons() {
            return this.__icons.get();
        }
        /**
         * Creates a new CustomIconCollection unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, CustomIconCollection);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CustomIconCollection.structureTypeName = "CustomIcons$CustomIconCollection";
    CustomIconCollection.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.20.0",
        properties: {
            collectionClass: {
                introduced: "9.22.0",
                public: {
                    currentValue: true
                }
            },
            prefix: {
                introduced: "9.22.0",
                public: {
                    currentValue: true
                }
            },
            fontData: {
                public: {
                    currentValue: true
                }
            },
            icons: {
                public: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.ModelUnit);
    customicons.CustomIconCollection = CustomIconCollection;
})(customicons = exports.customicons || (exports.customicons = {}));
//# sourceMappingURL=customicons.js.map