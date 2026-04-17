"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.odatapublish = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var odatapublish;
(function (odatapublish) {
    class PublishedODataVersion extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "odatapublish.PublishedODataVersion";
        }
    }
    PublishedODataVersion.OData4 = new PublishedODataVersion("OData4", {});
    PublishedODataVersion.OData3 = new PublishedODataVersion("OData3", {});
    odatapublish.PublishedODataVersion = PublishedODataVersion;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ODataPublish`.
     */
    /**
     * In version 10.4.0: introduced
     */
    class ChangeMode extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ChangeMode() cannot be invoked directly, please use 'model.odatapublish.createChangeMode()'");
            }
        }
        get containerAsEntitySet() {
            return super.getContainerAs(EntitySet);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ChangeMode.structureTypeName = "ODataPublish$ChangeMode";
    ChangeMode.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0"
    }, internal.StructureType.Element);
    odatapublish.ChangeMode = ChangeMode;
    /**
     * In version 10.4.0: introduced
     */
    class CallMicroflowToChange extends ChangeMode {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(CallMicroflowToChange, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new CallMicroflowToChange() cannot be invoked directly, please use 'model.odatapublish.createCallMicroflowToChange()'");
            }
        }
        get containerAsEntitySet() {
            return super.getContainerAs(EntitySet);
        }
        /**
         * In version 11.1.0: added optional
         */
        get microflow() {
            return this.__microflow.get();
        }
        set microflow(newValue) {
            this.__microflow.set(newValue);
        }
        get microflowQualifiedName() {
            return this.__microflow.qualifiedName();
        }
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'deleteMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderDeleteMode(container) {
            internal.createInVersionCheck(container.model, CallMicroflowToChange.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, CallMicroflowToChange, "deleteMode", false);
        }
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'insertMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderInsertMode(container) {
            internal.createInVersionCheck(container.model, CallMicroflowToChange.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, CallMicroflowToChange, "insertMode", false);
        }
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'updateMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderUpdateMode(container) {
            internal.createInVersionCheck(container.model, CallMicroflowToChange.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, CallMicroflowToChange, "updateMode", false);
        }
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CallMicroflowToChange);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CallMicroflowToChange.structureTypeName = "ODataPublish$CallMicroflowToChange";
    CallMicroflowToChange.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            microflow: {
                required: {
                    currentValue: false,
                    changedIn: ["11.1.0"]
                }
            }
        }
    }, internal.StructureType.Element);
    odatapublish.CallMicroflowToChange = CallMicroflowToChange;
    /**
     * In version 10.4.0: introduced
     */
    class ReadMode extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ReadMode() cannot be invoked directly, please use 'model.odatapublish.createReadMode()'");
            }
        }
        get containerAsEntitySet() {
            return super.getContainerAs(EntitySet);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ReadMode.structureTypeName = "ODataPublish$ReadMode";
    ReadMode.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0"
    }, internal.StructureType.Element);
    odatapublish.ReadMode = ReadMode;
    /**
     * In version 10.4.0: introduced
     */
    class CallMicroflowToRead extends ReadMode {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(CallMicroflowToRead, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new CallMicroflowToRead() cannot be invoked directly, please use 'model.odatapublish.createCallMicroflowToRead()'");
            }
        }
        get containerAsEntitySet() {
            return super.getContainerAs(EntitySet);
        }
        get microflow() {
            return this.__microflow.get();
        }
        set microflow(newValue) {
            this.__microflow.set(newValue);
        }
        get microflowQualifiedName() {
            return this.__microflow.qualifiedName();
        }
        /**
         * Creates and returns a new CallMicroflowToRead instance in the SDK and on the server.
         * The new CallMicroflowToRead will be automatically stored in the 'readMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CallMicroflowToRead.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, CallMicroflowToRead, "readMode", false);
        }
        /**
         * Creates and returns a new CallMicroflowToRead instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CallMicroflowToRead);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CallMicroflowToRead.structureTypeName = "ODataPublish$CallMicroflowToRead";
    CallMicroflowToRead.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0"
    }, internal.StructureType.Element);
    odatapublish.CallMicroflowToRead = CallMicroflowToRead;
    /**
     * In version 10.4.0: introduced
     */
    class ChangeNotSupported extends ChangeMode {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ChangeNotSupported() cannot be invoked directly, please use 'model.odatapublish.createChangeNotSupported()'");
            }
        }
        get containerAsEntitySet() {
            return super.getContainerAs(EntitySet);
        }
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'deleteMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderDeleteMode(container) {
            internal.createInVersionCheck(container.model, ChangeNotSupported.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, ChangeNotSupported, "deleteMode", false);
        }
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'insertMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderInsertMode(container) {
            internal.createInVersionCheck(container.model, ChangeNotSupported.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, ChangeNotSupported, "insertMode", false);
        }
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'updateMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderUpdateMode(container) {
            internal.createInVersionCheck(container.model, ChangeNotSupported.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, ChangeNotSupported, "updateMode", false);
        }
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ChangeNotSupported);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ChangeNotSupported.structureTypeName = "ODataPublish$ChangeNotSupported";
    ChangeNotSupported.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0"
    }, internal.StructureType.Element);
    odatapublish.ChangeNotSupported = ChangeNotSupported;
    /**
     * In version 10.4.0: introduced
     */
    class ChangeSource extends ChangeMode {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ChangeSource() cannot be invoked directly, please use 'model.odatapublish.createChangeSource()'");
            }
        }
        get containerAsEntitySet() {
            return super.getContainerAs(EntitySet);
        }
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'deleteMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderDeleteMode(container) {
            internal.createInVersionCheck(container.model, ChangeSource.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, ChangeSource, "deleteMode", false);
        }
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'insertMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderInsertMode(container) {
            internal.createInVersionCheck(container.model, ChangeSource.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, ChangeSource, "insertMode", false);
        }
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'updateMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderUpdateMode(container) {
            internal.createInVersionCheck(container.model, ChangeSource.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, ChangeSource, "updateMode", false);
        }
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ChangeSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ChangeSource.structureTypeName = "ODataPublish$ChangeSource";
    ChangeSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0"
    }, internal.StructureType.Element);
    odatapublish.ChangeSource = ChangeSource;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-entity relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class EntitySet extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(EntitySet, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__alternativeExposedName = new internal.PrimitiveProperty(EntitySet, this, "alternativeExposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entityType = new internal.ByIdReferenceProperty(EntitySet, this, "entityType", null);
            /** @internal */
            this.__usePaging = new internal.PrimitiveProperty(EntitySet, this, "usePaging", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__pageSize = new internal.PrimitiveProperty(EntitySet, this, "pageSize", 10000, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__updateMode = new internal.PartProperty(EntitySet, this, "updateMode", null, true);
            /** @internal */
            this.__insertMode = new internal.PartProperty(EntitySet, this, "insertMode", null, true);
            /** @internal */
            this.__deleteMode = new internal.PartProperty(EntitySet, this, "deleteMode", null, true);
            /** @internal */
            this.__readMode = new internal.PartProperty(EntitySet, this, "readMode", null, true);
            /** @internal */
            this.__queryOptions = new internal.PartProperty(EntitySet, this, "queryOptions", null, true);
            if (arguments.length < 4) {
                throw new Error("new EntitySet() cannot be invoked directly, please use 'model.odatapublish.createEntitySet()'");
            }
        }
        get containerAsPublishedODataService2() {
            return super.getContainerAs(PublishedODataService2);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * In version 10.13.0: introduced
         */
        get alternativeExposedName() {
            return this.__alternativeExposedName.get();
        }
        set alternativeExposedName(newValue) {
            this.__alternativeExposedName.set(newValue);
        }
        get entityType() {
            return this.__entityType.get();
        }
        set entityType(newValue) {
            this.__entityType.set(newValue);
        }
        get usePaging() {
            return this.__usePaging.get();
        }
        set usePaging(newValue) {
            this.__usePaging.set(newValue);
        }
        get pageSize() {
            return this.__pageSize.get();
        }
        set pageSize(newValue) {
            this.__pageSize.set(newValue);
        }
        get updateMode() {
            return this.__updateMode.get();
        }
        set updateMode(newValue) {
            this.__updateMode.set(newValue);
        }
        get insertMode() {
            return this.__insertMode.get();
        }
        set insertMode(newValue) {
            this.__insertMode.set(newValue);
        }
        get deleteMode() {
            return this.__deleteMode.get();
        }
        set deleteMode(newValue) {
            this.__deleteMode.set(newValue);
        }
        get readMode() {
            return this.__readMode.get();
        }
        set readMode(newValue) {
            this.__readMode.set(newValue);
        }
        get queryOptions() {
            return this.__queryOptions.get();
        }
        set queryOptions(newValue) {
            this.__queryOptions.set(newValue);
        }
        /**
         * Creates and returns a new EntitySet instance in the SDK and on the server.
         * The new EntitySet will be automatically stored in the 'entitySets' property
         * of the parent PublishedODataService2 element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EntitySet.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, EntitySet, "entitySets", true);
        }
        /**
         * Creates and returns a new EntitySet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntitySet);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.deleteMode = ChangeNotSupported.create(this.model);
            this.insertMode = ChangeNotSupported.create(this.model);
            this.pageSize = 10000;
            this.queryOptions = QueryOptions.create(this.model);
            this.readMode = ReadSource.create(this.model);
            this.updateMode = ChangeNotSupported.create(this.model);
        }
    }
    EntitySet.structureTypeName = "ODataPublish$EntitySet";
    EntitySet.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            alternativeExposedName: {
                introduced: "10.13.0"
            },
            entityType: {
                required: {
                    currentValue: true
                }
            },
            updateMode: {
                required: {
                    currentValue: true
                }
            },
            insertMode: {
                required: {
                    currentValue: true
                }
            },
            deleteMode: {
                required: {
                    currentValue: true
                }
            },
            readMode: {
                required: {
                    currentValue: true
                }
            },
            queryOptions: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    odatapublish.EntitySet = EntitySet;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-entity relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class EntityType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(EntityType, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(EntityType, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__childMembers = new internal.PartListProperty(EntityType, this, "childMembers", []);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(EntityType, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(EntityType, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new EntityType() cannot be invoked directly, please use 'model.odatapublish.createEntityType()'");
            }
        }
        get containerAsPublishedODataService2() {
            return super.getContainerAs(PublishedODataService2);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        get childMembers() {
            return this.__childMembers.get();
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new EntityType instance in the SDK and on the server.
         * The new EntityType will be automatically stored in the 'entityTypes' property
         * of the parent PublishedODataService2 element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, EntityType.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, EntityType, "entityTypes", true);
        }
        /**
         * Creates and returns a new EntityType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, EntityType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    EntityType.structureTypeName = "ODataPublish$EntityType";
    EntityType.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            entity: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    odatapublish.EntityType = EntityType;
    /**
     * In version 10.4.0: introduced
     */
    class PublishedMember extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedMember, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedMember, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedMember, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedMember() cannot be invoked directly, please use 'model.odatapublish.createPublishedMember()'");
            }
        }
        get containerAsEntityType() {
            return super.getContainerAs(EntityType);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedMember.structureTypeName = "ODataPublish$PublishedMember";
    PublishedMember.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0"
    }, internal.StructureType.Element);
    odatapublish.PublishedMember = PublishedMember;
    /**
     * In version 10.4.0: introduced
     */
    class PublishedAssociationEnd extends PublishedMember {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__association = new internal.ByNameReferenceProperty(PublishedAssociationEnd, this, "association", null, "DomainModels$AssociationBase");
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(PublishedAssociationEnd, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__canBeEmpty = new internal.PrimitiveProperty(PublishedAssociationEnd, this, "canBeEmpty", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__exposedAssociationName = new internal.PrimitiveProperty(PublishedAssociationEnd, this, "exposedAssociationName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedAssociationEnd() cannot be invoked directly, please use 'model.odatapublish.createPublishedAssociationEnd()'");
            }
        }
        get containerAsEntityType() {
            return super.getContainerAs(EntityType);
        }
        get association() {
            return this.__association.get();
        }
        set association(newValue) {
            this.__association.set(newValue);
        }
        get associationQualifiedName() {
            return this.__association.qualifiedName();
        }
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        get canBeEmpty() {
            return this.__canBeEmpty.get();
        }
        set canBeEmpty(newValue) {
            this.__canBeEmpty.set(newValue);
        }
        get exposedAssociationName() {
            return this.__exposedAssociationName.get();
        }
        set exposedAssociationName(newValue) {
            this.__exposedAssociationName.set(newValue);
        }
        /**
         * Creates and returns a new PublishedAssociationEnd instance in the SDK and on the server.
         * The new PublishedAssociationEnd will be automatically stored in the 'childMembers' property
         * of the parent EntityType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedAssociationEnd.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, PublishedAssociationEnd, "childMembers", true);
        }
        /**
         * Creates and returns a new PublishedAssociationEnd instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedAssociationEnd);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedAssociationEnd.structureTypeName = "ODataPublish$PublishedAssociationEnd";
    PublishedAssociationEnd.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            entity: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    odatapublish.PublishedAssociationEnd = PublishedAssociationEnd;
    /**
     * In version 10.4.0: introduced
     */
    class PublishedAttribute extends PublishedMember {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(PublishedAttribute, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__canBeEmpty = new internal.PrimitiveProperty(PublishedAttribute, this, "canBeEmpty", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__isPartOfKey = new internal.PrimitiveProperty(PublishedAttribute, this, "isPartOfKey", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__filterable = new internal.PrimitiveProperty(PublishedAttribute, this, "filterable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__sortable = new internal.PrimitiveProperty(PublishedAttribute, this, "sortable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__enumerationAsString = new internal.PrimitiveProperty(PublishedAttribute, this, "enumerationAsString", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__stringAsGuid = new internal.PrimitiveProperty(PublishedAttribute, this, "stringAsGuid", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new PublishedAttribute() cannot be invoked directly, please use 'model.odatapublish.createPublishedAttribute()'");
            }
        }
        get containerAsEntityType() {
            return super.getContainerAs(EntityType);
        }
        get attribute() {
            return this.__attribute.get();
        }
        set attribute(newValue) {
            this.__attribute.set(newValue);
        }
        get attributeQualifiedName() {
            return this.__attribute.qualifiedName();
        }
        get canBeEmpty() {
            return this.__canBeEmpty.get();
        }
        set canBeEmpty(newValue) {
            this.__canBeEmpty.set(newValue);
        }
        get isPartOfKey() {
            return this.__isPartOfKey.get();
        }
        set isPartOfKey(newValue) {
            this.__isPartOfKey.set(newValue);
        }
        get filterable() {
            return this.__filterable.get();
        }
        set filterable(newValue) {
            this.__filterable.set(newValue);
        }
        get sortable() {
            return this.__sortable.get();
        }
        set sortable(newValue) {
            this.__sortable.set(newValue);
        }
        get enumerationAsString() {
            return this.__enumerationAsString.get();
        }
        set enumerationAsString(newValue) {
            this.__enumerationAsString.set(newValue);
        }
        /**
         * In version 10.12.0: introduced
         */
        get stringAsGuid() {
            return this.__stringAsGuid.get();
        }
        set stringAsGuid(newValue) {
            this.__stringAsGuid.set(newValue);
        }
        /**
         * Creates and returns a new PublishedAttribute instance in the SDK and on the server.
         * The new PublishedAttribute will be automatically stored in the 'childMembers' property
         * of the parent EntityType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedAttribute.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, PublishedAttribute, "childMembers", true);
        }
        /**
         * Creates and returns a new PublishedAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedAttribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.enumerationAsString = false;
            this.filterable = true;
            this.sortable = true;
            if (this.__stringAsGuid.isAvailable) {
                this.stringAsGuid = false;
            }
        }
    }
    PublishedAttribute.structureTypeName = "ODataPublish$PublishedAttribute";
    PublishedAttribute.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            stringAsGuid: {
                introduced: "10.12.0"
            }
        }
    }, internal.StructureType.Element);
    odatapublish.PublishedAttribute = PublishedAttribute;
    /**
     * In version 10.4.0: introduced
     */
    class PublishedContract extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__serviceFeed = new internal.PartProperty(PublishedContract, this, "serviceFeed", null, true);
            /** @internal */
            this.__metadata = new internal.PrimitiveProperty(PublishedContract, this, "metadata", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__openApi = new internal.PrimitiveProperty(PublishedContract, this, "openApi", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__graphQL = new internal.PrimitiveProperty(PublishedContract, this, "graphQL", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedContract() cannot be invoked directly, please use 'model.odatapublish.createPublishedContract()'");
            }
        }
        get serviceFeed() {
            return this.__serviceFeed.get();
        }
        set serviceFeed(newValue) {
            this.__serviceFeed.set(newValue);
        }
        get metadata() {
            return this.__metadata.get();
        }
        set metadata(newValue) {
            this.__metadata.set(newValue);
        }
        get openApi() {
            return this.__openApi.get();
        }
        set openApi(newValue) {
            this.__openApi.set(newValue);
        }
        /**
         * In version 10.13.0: introduced
         */
        get graphQL() {
            return this.__graphQL.get();
        }
        set graphQL(newValue) {
            this.__graphQL.set(newValue);
        }
        /**
         * Creates and returns a new PublishedContract instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedContract);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.serviceFeed = ServiceFeed.create(this.model);
        }
    }
    PublishedContract.structureTypeName = "ODataPublish$PublishedContract";
    PublishedContract.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            serviceFeed: {
                required: {
                    currentValue: true
                }
            },
            graphQL: {
                introduced: "10.13.0"
            }
        }
    }, internal.StructureType.Element);
    odatapublish.PublishedContract = PublishedContract;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-services/#enumerations relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class PublishedEnumeration extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedEnumeration, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__enumeration = new internal.ByNameReferenceProperty(PublishedEnumeration, this, "enumeration", null, "Enumerations$Enumeration");
            /** @internal */
            this.__values = new internal.PartListProperty(PublishedEnumeration, this, "values", []);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedEnumeration, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedEnumeration, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedEnumeration() cannot be invoked directly, please use 'model.odatapublish.createPublishedEnumeration()'");
            }
        }
        get containerAsPublishedODataService2() {
            return super.getContainerAs(PublishedODataService2);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        get enumeration() {
            return this.__enumeration.get();
        }
        set enumeration(newValue) {
            this.__enumeration.set(newValue);
        }
        get enumerationQualifiedName() {
            return this.__enumeration.qualifiedName();
        }
        get values() {
            return this.__values.get();
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new PublishedEnumeration instance in the SDK and on the server.
         * The new PublishedEnumeration will be automatically stored in the 'enumerations' property
         * of the parent PublishedODataService2 element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedEnumeration.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, PublishedEnumeration, "enumerations", true);
        }
        /**
         * Creates and returns a new PublishedEnumeration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedEnumeration);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedEnumeration.structureTypeName = "ODataPublish$PublishedEnumeration";
    PublishedEnumeration.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            enumeration: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    odatapublish.PublishedEnumeration = PublishedEnumeration;
    /**
     * In version 10.4.0: introduced
     */
    class PublishedEnumerationValue extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedEnumerationValue, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__enumerationValue = new internal.ByNameReferenceProperty(PublishedEnumerationValue, this, "enumerationValue", null, "Enumerations$EnumerationValue");
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedEnumerationValue, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedEnumerationValue, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedEnumerationValue() cannot be invoked directly, please use 'model.odatapublish.createPublishedEnumerationValue()'");
            }
        }
        get containerAsPublishedEnumeration() {
            return super.getContainerAs(PublishedEnumeration);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        get enumerationValue() {
            return this.__enumerationValue.get();
        }
        set enumerationValue(newValue) {
            this.__enumerationValue.set(newValue);
        }
        get enumerationValueQualifiedName() {
            return this.__enumerationValue.qualifiedName();
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new PublishedEnumerationValue instance in the SDK and on the server.
         * The new PublishedEnumerationValue will be automatically stored in the 'values' property
         * of the parent PublishedEnumeration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedEnumerationValue.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, PublishedEnumerationValue, "values", true);
        }
        /**
         * Creates and returns a new PublishedEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedEnumerationValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedEnumerationValue.structureTypeName = "ODataPublish$PublishedEnumerationValue";
    PublishedEnumerationValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            enumerationValue: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    odatapublish.PublishedEnumerationValue = PublishedEnumerationValue;
    /**
     * In version 10.4.0: introduced
     */
    class PublishedId extends PublishedMember {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__isPartOfKey = new internal.PrimitiveProperty(PublishedId, this, "isPartOfKey", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new PublishedId() cannot be invoked directly, please use 'model.odatapublish.createPublishedId()'");
            }
        }
        get containerAsEntityType() {
            return super.getContainerAs(EntityType);
        }
        get isPartOfKey() {
            return this.__isPartOfKey.get();
        }
        set isPartOfKey(newValue) {
            this.__isPartOfKey.set(newValue);
        }
        /**
         * Creates and returns a new PublishedId instance in the SDK and on the server.
         * The new PublishedId will be automatically stored in the 'childMembers' property
         * of the parent EntityType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedId.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, PublishedId, "childMembers", true);
        }
        /**
         * Creates and returns a new PublishedId instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedId);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedId.structureTypeName = "ODataPublish$PublishedId";
    PublishedId.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0"
    }, internal.StructureType.Element);
    odatapublish.PublishedId = PublishedId;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-microflow relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class PublishedMicroflow extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedMicroflow, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__alternativeExposedName = new internal.PrimitiveProperty(PublishedMicroflow, this, "alternativeExposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(PublishedMicroflow, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__parameters = new internal.PartListProperty(PublishedMicroflow, this, "parameters", []);
            /** @internal */
            this.__returnType = new internal.PartProperty(PublishedMicroflow, this, "returnType", null, true);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedMicroflow, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedMicroflow, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedMicroflow() cannot be invoked directly, please use 'model.odatapublish.createPublishedMicroflow()'");
            }
        }
        get containerAsPublishedODataService2() {
            return super.getContainerAs(PublishedODataService2);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * In version 10.13.0: introduced
         */
        get alternativeExposedName() {
            return this.__alternativeExposedName.get();
        }
        set alternativeExposedName(newValue) {
            this.__alternativeExposedName.set(newValue);
        }
        get microflow() {
            return this.__microflow.get();
        }
        set microflow(newValue) {
            this.__microflow.set(newValue);
        }
        get microflowQualifiedName() {
            return this.__microflow.qualifiedName();
        }
        get parameters() {
            return this.__parameters.get();
        }
        get returnType() {
            return this.__returnType.get();
        }
        set returnType(newValue) {
            this.__returnType.set(newValue);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new PublishedMicroflow instance in the SDK and on the server.
         * The new PublishedMicroflow will be automatically stored in the 'microflows' property
         * of the parent PublishedODataService2 element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedMicroflow.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, PublishedMicroflow, "microflows", true);
        }
        /**
         * Creates and returns a new PublishedMicroflow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedMicroflow);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.returnType = datatypes_1.datatypes.UnknownType.create(this.model);
        }
    }
    PublishedMicroflow.structureTypeName = "ODataPublish$PublishedMicroflow";
    PublishedMicroflow.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            alternativeExposedName: {
                introduced: "10.13.0"
            },
            microflow: {
                required: {
                    currentValue: true
                }
            },
            returnType: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    odatapublish.PublishedMicroflow = PublishedMicroflow;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-microflow-parameter relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class PublishedMicroflowParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedMicroflowParameter, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__microflowParameter = new internal.ByNameReferenceProperty(PublishedMicroflowParameter, this, "microflowParameter", null, "Microflows$MicroflowParameter");
            /** @internal */
            this.__dataType = new internal.PartProperty(PublishedMicroflowParameter, this, "dataType", null, true);
            /** @internal */
            this.__canBeEmpty = new internal.PrimitiveProperty(PublishedMicroflowParameter, this, "canBeEmpty", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedMicroflowParameter, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedMicroflowParameter, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedMicroflowParameter() cannot be invoked directly, please use 'model.odatapublish.createPublishedMicroflowParameter()'");
            }
        }
        get containerAsPublishedMicroflow() {
            return super.getContainerAs(PublishedMicroflow);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        get microflowParameter() {
            return this.__microflowParameter.get();
        }
        set microflowParameter(newValue) {
            this.__microflowParameter.set(newValue);
        }
        get microflowParameterQualifiedName() {
            return this.__microflowParameter.qualifiedName();
        }
        get dataType() {
            return this.__dataType.get();
        }
        set dataType(newValue) {
            this.__dataType.set(newValue);
        }
        get canBeEmpty() {
            return this.__canBeEmpty.get();
        }
        set canBeEmpty(newValue) {
            this.__canBeEmpty.set(newValue);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new PublishedMicroflowParameter instance in the SDK and on the server.
         * The new PublishedMicroflowParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedMicroflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedMicroflowParameter.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, PublishedMicroflowParameter, "parameters", true);
        }
        /**
         * Creates and returns a new PublishedMicroflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedMicroflowParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.dataType = datatypes_1.datatypes.UnknownType.create(this.model);
        }
    }
    PublishedMicroflowParameter.structureTypeName = "ODataPublish$PublishedMicroflowParameter";
    PublishedMicroflowParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            microflowParameter: {
                required: {
                    currentValue: true
                }
            },
            dataType: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    odatapublish.PublishedMicroflowParameter = PublishedMicroflowParameter;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-services relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class PublishedODataService2 extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__namespace = new internal.PrimitiveProperty(PublishedODataService2, this, "namespace", "DefaultNamespace", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__path = new internal.PrimitiveProperty(PublishedODataService2, this, "path", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__allowedModuleRoles = new internal.ByNameReferenceListProperty(PublishedODataService2, this, "allowedModuleRoles", [], "Security$ModuleRole");
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(PublishedODataService2, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entityTypes = new internal.PartListProperty(PublishedODataService2, this, "entityTypes", []);
            /** @internal */
            this.__entitySets = new internal.PartListProperty(PublishedODataService2, this, "entitySets", []);
            /** @internal */
            this.__microflows = new internal.PartListProperty(PublishedODataService2, this, "microflows", []);
            /** @internal */
            this.__enumerations = new internal.PartListProperty(PublishedODataService2, this, "enumerations", []);
            /** @internal */
            this.__publishAssociations = new internal.PrimitiveProperty(PublishedODataService2, this, "publishAssociations", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(PublishedODataService2, this, "version", "1.0.0", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__authenticationMicroflow = new internal.ByNameReferenceProperty(PublishedODataService2, this, "authenticationMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__authenticationTypes = new internal.EnumListProperty(PublishedODataService2, this, "authenticationTypes", [], rest_1.rest.RestAuthenticationType);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedODataService2, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedODataService2, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__replaceIllegalChars = new internal.PrimitiveProperty(PublishedODataService2, this, "replaceIllegalChars", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__useGeneralization = new internal.PrimitiveProperty(PublishedODataService2, this, "useGeneralization", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__oDataVersion = new internal.EnumProperty(PublishedODataService2, this, "oDataVersion", PublishedODataVersion.OData4, PublishedODataVersion);
            /** @internal */
            this.__includeMetadataByDefault = new internal.PrimitiveProperty(PublishedODataService2, this, "includeMetadataByDefault", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__supportsGraphQL = new internal.PrimitiveProperty(PublishedODataService2, this, "supportsGraphQL", false, internal.PrimitiveTypeEnum.Boolean);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get namespace() {
            return this.__namespace.get();
        }
        set namespace(newValue) {
            this.__namespace.set(newValue);
        }
        get path() {
            return this.__path.get();
        }
        set path(newValue) {
            this.__path.set(newValue);
        }
        get allowedModuleRoles() {
            return this.__allowedModuleRoles.get();
        }
        get allowedModuleRolesQualifiedNames() {
            return this.__allowedModuleRoles.qualifiedNames();
        }
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        get entityTypes() {
            return this.__entityTypes.get();
        }
        get entitySets() {
            return this.__entitySets.get();
        }
        get microflows() {
            return this.__microflows.get();
        }
        get enumerations() {
            return this.__enumerations.get();
        }
        get publishAssociations() {
            return this.__publishAssociations.get();
        }
        set publishAssociations(newValue) {
            this.__publishAssociations.set(newValue);
        }
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        get authenticationMicroflow() {
            return this.__authenticationMicroflow.get();
        }
        set authenticationMicroflow(newValue) {
            this.__authenticationMicroflow.set(newValue);
        }
        get authenticationMicroflowQualifiedName() {
            return this.__authenticationMicroflow.qualifiedName();
        }
        get authenticationTypes() {
            return this.__authenticationTypes.get();
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get replaceIllegalChars() {
            return this.__replaceIllegalChars.get();
        }
        set replaceIllegalChars(newValue) {
            this.__replaceIllegalChars.set(newValue);
        }
        get useGeneralization() {
            return this.__useGeneralization.get();
        }
        set useGeneralization(newValue) {
            this.__useGeneralization.set(newValue);
        }
        get oDataVersion() {
            return this.__oDataVersion.get();
        }
        set oDataVersion(newValue) {
            this.__oDataVersion.set(newValue);
        }
        /**
         * In version 10.8.0: introduced
         */
        get includeMetadataByDefault() {
            return this.__includeMetadataByDefault.get();
        }
        set includeMetadataByDefault(newValue) {
            this.__includeMetadataByDefault.set(newValue);
        }
        /**
         * In version 10.12.0: introduced
         */
        get supportsGraphQL() {
            return this.__supportsGraphQL.get();
        }
        set supportsGraphQL(newValue) {
            this.__supportsGraphQL.set(newValue);
        }
        /**
         * Creates a new PublishedODataService2 unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, PublishedODataService2);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.authenticationTypes.replace([rest_1.rest.RestAuthenticationType.Basic]);
            if (this.__includeMetadataByDefault.isAvailable) {
                this.includeMetadataByDefault = true;
            }
            this.namespace = "DefaultNamespace";
            this.oDataVersion = PublishedODataVersion.OData4;
            this.publishAssociations = true;
            this.replaceIllegalChars = false;
            if (this.__supportsGraphQL.isAvailable) {
                this.supportsGraphQL = false;
            }
            this.useGeneralization = false;
            this.version = "1.0.0";
        }
    }
    PublishedODataService2.structureTypeName = "ODataPublish$PublishedODataService2";
    PublishedODataService2.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            includeMetadataByDefault: {
                introduced: "10.8.0"
            },
            supportsGraphQL: {
                introduced: "10.12.0"
            }
        }
    }, internal.StructureType.ModelUnit);
    odatapublish.PublishedODataService2 = PublishedODataService2;
    /**
     * In version 10.4.0: introduced
     */
    class QueryOptions extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__countable = new internal.PrimitiveProperty(QueryOptions, this, "countable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__topSupported = new internal.PrimitiveProperty(QueryOptions, this, "topSupported", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__skipSupported = new internal.PrimitiveProperty(QueryOptions, this, "skipSupported", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new QueryOptions() cannot be invoked directly, please use 'model.odatapublish.createQueryOptions()'");
            }
        }
        get containerAsEntitySet() {
            return super.getContainerAs(EntitySet);
        }
        get countable() {
            return this.__countable.get();
        }
        set countable(newValue) {
            this.__countable.set(newValue);
        }
        get topSupported() {
            return this.__topSupported.get();
        }
        set topSupported(newValue) {
            this.__topSupported.set(newValue);
        }
        get skipSupported() {
            return this.__skipSupported.get();
        }
        set skipSupported(newValue) {
            this.__skipSupported.set(newValue);
        }
        /**
         * Creates and returns a new QueryOptions instance in the SDK and on the server.
         * The new QueryOptions will be automatically stored in the 'queryOptions' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, QueryOptions.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, QueryOptions, "queryOptions", false);
        }
        /**
         * Creates and returns a new QueryOptions instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, QueryOptions);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.countable = true;
            this.skipSupported = true;
            this.topSupported = true;
        }
    }
    QueryOptions.structureTypeName = "ODataPublish$QueryOptions";
    QueryOptions.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0"
    }, internal.StructureType.Element);
    odatapublish.QueryOptions = QueryOptions;
    /**
     * In version 10.4.0: introduced
     */
    class ReadSource extends ReadMode {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ReadSource() cannot be invoked directly, please use 'model.odatapublish.createReadSource()'");
            }
        }
        get containerAsEntitySet() {
            return super.getContainerAs(EntitySet);
        }
        /**
         * Creates and returns a new ReadSource instance in the SDK and on the server.
         * The new ReadSource will be automatically stored in the 'readMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ReadSource.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, ReadSource, "readMode", false);
        }
        /**
         * Creates and returns a new ReadSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ReadSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ReadSource.structureTypeName = "ODataPublish$ReadSource";
    ReadSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0"
    }, internal.StructureType.Element);
    odatapublish.ReadSource = ReadSource;
    /**
     * In version 10.4.0: introduced
     */
    class ServiceFeed extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__xml = new internal.PrimitiveProperty(ServiceFeed, this, "xml", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__json = new internal.PrimitiveProperty(ServiceFeed, this, "json", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ServiceFeed() cannot be invoked directly, please use 'model.odatapublish.createServiceFeed()'");
            }
        }
        get containerAsPublishedContract() {
            return super.getContainerAs(PublishedContract);
        }
        get xml() {
            return this.__xml.get();
        }
        set xml(newValue) {
            this.__xml.set(newValue);
        }
        get json() {
            return this.__json.get();
        }
        set json(newValue) {
            this.__json.set(newValue);
        }
        /**
         * Creates and returns a new ServiceFeed instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ServiceFeed);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ServiceFeed.structureTypeName = "ODataPublish$ServiceFeed";
    ServiceFeed.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0"
    }, internal.StructureType.Element);
    odatapublish.ServiceFeed = ServiceFeed;
})(odatapublish = exports.odatapublish || (exports.odatapublish = {}));
const datatypes_1 = require("./datatypes");
const rest_1 = require("./rest");
//# sourceMappingURL=odatapublish.js.map