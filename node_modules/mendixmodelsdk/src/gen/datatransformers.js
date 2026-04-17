"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.datatransformers = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var datatransformers;
(function (datatransformers) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DataTransformers`.
     */
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class StructureValueType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new StructureValueType() cannot be invoked directly, please use 'model.datatransformers.createStructureValueType()'");
            }
        }
        get containerAsStructureValue() {
            return super.getContainerAs(StructureValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StructureValueType.structureTypeName = "DataTransformers$StructureValueType";
    StructureValueType.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.StructureValueType = StructureValueType;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class BooleanValueType extends StructureValueType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new BooleanValueType() cannot be invoked directly, please use 'model.datatransformers.createBooleanValueType()'");
            }
        }
        get containerAsStructureValue() {
            return super.getContainerAs(StructureValue);
        }
        /**
         * Creates and returns a new BooleanValueType instance in the SDK and on the server.
         * The new BooleanValueType will be automatically stored in the 'type' property
         * of the parent StructureValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BooleanValueType.structureTypeName, { start: "11.1.0" });
            return internal.instancehelpers.createElement(container, BooleanValueType, "type", false);
        }
        /**
         * Creates and returns a new BooleanValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BooleanValueType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BooleanValueType.structureTypeName = "DataTransformers$BooleanValueType";
    BooleanValueType.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.BooleanValueType = BooleanValueType;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class DataTransformer extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__elements = new internal.PartListProperty(DataTransformer, this, "elements", []);
            /** @internal */
            this.__rootElement = new internal.ByIdReferenceProperty(DataTransformer, this, "rootElement", null);
            /** @internal */
            this.__steps = new internal.PartListProperty(DataTransformer, this, "steps", []);
            /** @internal */
            this.__source = new internal.PartProperty(DataTransformer, this, "source", null, false);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get elements() {
            return this.__elements.get();
        }
        get rootElement() {
            return this.__rootElement.get();
        }
        set rootElement(newValue) {
            this.__rootElement.set(newValue);
        }
        get steps() {
            return this.__steps.get();
        }
        get source() {
            return this.__source.get();
        }
        set source(newValue) {
            this.__source.set(newValue);
        }
        /**
         * Creates a new DataTransformer unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, DataTransformer);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataTransformer.structureTypeName = "DataTransformers$DataTransformer";
    DataTransformer.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        properties: {
            elements: {
                public: {
                    currentValue: true
                }
            },
            rootElement: {
                public: {
                    currentValue: true
                }
            },
            steps: {
                public: {
                    currentValue: true
                }
            },
            source: {
                public: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.ModelUnit);
    datatransformers.DataTransformer = DataTransformer;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class DateTimeValueType extends StructureValueType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DateTimeValueType() cannot be invoked directly, please use 'model.datatransformers.createDateTimeValueType()'");
            }
        }
        get containerAsStructureValue() {
            return super.getContainerAs(StructureValue);
        }
        /**
         * Creates and returns a new DateTimeValueType instance in the SDK and on the server.
         * The new DateTimeValueType will be automatically stored in the 'type' property
         * of the parent StructureValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, DateTimeValueType.structureTypeName, { start: "11.1.0" });
            return internal.instancehelpers.createElement(container, DateTimeValueType, "type", false);
        }
        /**
         * Creates and returns a new DateTimeValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DateTimeValueType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DateTimeValueType.structureTypeName = "DataTransformers$DateTimeValueType";
    DateTimeValueType.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.DateTimeValueType = DateTimeValueType;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class DecimalValueType extends StructureValueType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new DecimalValueType() cannot be invoked directly, please use 'model.datatransformers.createDecimalValueType()'");
            }
        }
        get containerAsStructureValue() {
            return super.getContainerAs(StructureValue);
        }
        /**
         * Creates and returns a new DecimalValueType instance in the SDK and on the server.
         * The new DecimalValueType will be automatically stored in the 'type' property
         * of the parent StructureValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, DecimalValueType.structureTypeName, { start: "11.1.0" });
            return internal.instancehelpers.createElement(container, DecimalValueType, "type", false);
        }
        /**
         * Creates and returns a new DecimalValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DecimalValueType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DecimalValueType.structureTypeName = "DataTransformers$DecimalValueType";
    DecimalValueType.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.DecimalValueType = DecimalValueType;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class TransformerAction extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new TransformerAction() cannot be invoked directly, please use 'model.datatransformers.createTransformerAction()'");
            }
        }
        get containerAsStep() {
            return super.getContainerAs(Step);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    TransformerAction.structureTypeName = "DataTransformers$TransformerAction";
    TransformerAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.TransformerAction = TransformerAction;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class JsltAction extends TransformerAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__jslt = new internal.PrimitiveProperty(JsltAction, this, "jslt", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new JsltAction() cannot be invoked directly, please use 'model.datatransformers.createJsltAction()'");
            }
        }
        get containerAsStep() {
            return super.getContainerAs(Step);
        }
        get jslt() {
            return this.__jslt.get();
        }
        set jslt(newValue) {
            this.__jslt.set(newValue);
        }
        /**
         * Creates and returns a new JsltAction instance in the SDK and on the server.
         * The new JsltAction will be automatically stored in the 'action' property
         * of the parent Step element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, JsltAction.structureTypeName, { start: "11.1.0" });
            return internal.instancehelpers.createElement(container, JsltAction, "action", false);
        }
        /**
         * Creates and returns a new JsltAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JsltAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.jslt = "";
        }
    }
    JsltAction.structureTypeName = "DataTransformers$JsltAction";
    JsltAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        properties: {
            jslt: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.JsltAction = JsltAction;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class Source extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Source() cannot be invoked directly, please use 'model.datatransformers.createSource()'");
            }
        }
        get containerAsDataTransformer() {
            return super.getContainerAs(DataTransformer);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Source.structureTypeName = "DataTransformers$Source";
    Source.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.Source = Source;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class JsonSource extends Source {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__content = new internal.PrimitiveProperty(JsonSource, this, "content", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new JsonSource() cannot be invoked directly, please use 'model.datatransformers.createJsonSource()'");
            }
        }
        get containerAsDataTransformer() {
            return super.getContainerAs(DataTransformer);
        }
        get content() {
            return this.__content.get();
        }
        set content(newValue) {
            this.__content.set(newValue);
        }
        /**
         * Creates and returns a new JsonSource instance in the SDK and on the server.
         * The new JsonSource will be automatically stored in the 'source' property
         * of the parent DataTransformer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, JsonSource.structureTypeName, { start: "11.1.0" });
            return internal.instancehelpers.createElement(container, JsonSource, "source", false);
        }
        /**
         * Creates and returns a new JsonSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JsonSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.content = "";
        }
    }
    JsonSource.structureTypeName = "DataTransformers$JsonSource";
    JsonSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        properties: {
            content: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.JsonSource = JsonSource;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class LongValueType extends StructureValueType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new LongValueType() cannot be invoked directly, please use 'model.datatransformers.createLongValueType()'");
            }
        }
        get containerAsStructureValue() {
            return super.getContainerAs(StructureValue);
        }
        /**
         * Creates and returns a new LongValueType instance in the SDK and on the server.
         * The new LongValueType will be automatically stored in the 'type' property
         * of the parent StructureValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, LongValueType.structureTypeName, { start: "11.1.0" });
            return internal.instancehelpers.createElement(container, LongValueType, "type", false);
        }
        /**
         * Creates and returns a new LongValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, LongValueType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    LongValueType.structureTypeName = "DataTransformers$LongValueType";
    LongValueType.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.LongValueType = LongValueType;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class Step extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__action = new internal.PartProperty(Step, this, "action", null, true);
            /** @internal */
            this.__inputElement = new internal.ByIdReferenceProperty(Step, this, "inputElement", null);
            /** @internal */
            this.__outputElement = new internal.ByIdReferenceProperty(Step, this, "outputElement", null);
            if (arguments.length < 4) {
                throw new Error("new Step() cannot be invoked directly, please use 'model.datatransformers.createStep()'");
            }
        }
        get containerAsDataTransformer() {
            return super.getContainerAs(DataTransformer);
        }
        get action() {
            return this.__action.get();
        }
        set action(newValue) {
            this.__action.set(newValue);
        }
        get inputElement() {
            return this.__inputElement.get();
        }
        set inputElement(newValue) {
            this.__inputElement.set(newValue);
        }
        get outputElement() {
            return this.__outputElement.get();
        }
        set outputElement(newValue) {
            this.__outputElement.set(newValue);
        }
        /**
         * Creates and returns a new Step instance in the SDK and on the server.
         * The new Step will be automatically stored in the 'steps' property
         * of the parent DataTransformer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, Step.structureTypeName, { start: "11.1.0" });
            return internal.instancehelpers.createElement(container, Step, "steps", true);
        }
        /**
         * Creates and returns a new Step instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Step);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.action = JsltAction.create(this.model);
        }
    }
    Step.structureTypeName = "DataTransformers$Step";
    Step.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        properties: {
            action: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            inputElement: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            outputElement: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.Step = Step;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class StringValueType extends StructureValueType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new StringValueType() cannot be invoked directly, please use 'model.datatransformers.createStringValueType()'");
            }
        }
        get containerAsStructureValue() {
            return super.getContainerAs(StructureValue);
        }
        /**
         * Creates and returns a new StringValueType instance in the SDK and on the server.
         * The new StringValueType will be automatically stored in the 'type' property
         * of the parent StructureValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, StringValueType.structureTypeName, { start: "11.1.0" });
            return internal.instancehelpers.createElement(container, StringValueType, "type", false);
        }
        /**
         * Creates and returns a new StringValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StringValueType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StringValueType.structureTypeName = "DataTransformers$StringValueType";
    StringValueType.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.StringValueType = StringValueType;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class StructureElement extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new StructureElement() cannot be invoked directly, please use 'model.datatransformers.createStructureElement()'");
            }
        }
        get containerAsDataTransformer() {
            return super.getContainerAs(DataTransformer);
        }
        get containerAsStructureObject() {
            return super.getContainerAs(StructureObject);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StructureElement.structureTypeName = "DataTransformers$StructureElement";
    StructureElement.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.StructureElement = StructureElement;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class StructureAttribute extends StructureElement {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(StructureAttribute, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.ByIdReferenceProperty(StructureAttribute, this, "value", null);
            if (arguments.length < 4) {
                throw new Error("new StructureAttribute() cannot be invoked directly, please use 'model.datatransformers.createStructureAttribute()'");
            }
        }
        get containerAsDataTransformer() {
            return super.getContainerAs(DataTransformer);
        }
        get containerAsStructureObject() {
            return super.getContainerAs(StructureObject);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new StructureAttribute instance in the SDK and on the server.
         * The new StructureAttribute will be automatically stored in the 'elements' property
         * of the parent DataTransformer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createInDataTransformerUnderElements(container) {
            internal.createInVersionCheck(container.model, StructureAttribute.structureTypeName, { start: "11.1.0" });
            return internal.instancehelpers.createElement(container, StructureAttribute, "elements", true);
        }
        /**
         * Creates and returns a new StructureAttribute instance in the SDK and on the server.
         * The new StructureAttribute will be automatically stored in the 'attributes' property
         * of the parent StructureObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createInStructureObjectUnderAttributes(container) {
            internal.createInVersionCheck(container.model, StructureAttribute.structureTypeName, { start: "11.1.0" });
            return internal.instancehelpers.createElement(container, StructureAttribute, "attributes", true);
        }
        /**
         * Creates and returns a new StructureAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StructureAttribute);
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StructureAttribute.structureTypeName = "DataTransformers$StructureAttribute";
    StructureAttribute.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            value: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.StructureAttribute = StructureAttribute;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class StructureObject extends StructureElement {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attributes = new internal.PartListProperty(StructureObject, this, "attributes", []);
            if (arguments.length < 4) {
                throw new Error("new StructureObject() cannot be invoked directly, please use 'model.datatransformers.createStructureObject()'");
            }
        }
        get containerAsDataTransformer() {
            return super.getContainerAs(DataTransformer);
        }
        get attributes() {
            return this.__attributes.get();
        }
        /**
         * Creates and returns a new StructureObject instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StructureObject);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StructureObject.structureTypeName = "DataTransformers$StructureObject";
    StructureObject.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        properties: {
            attributes: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.StructureObject = StructureObject;
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class StructureValue extends StructureElement {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__type = new internal.PartProperty(StructureValue, this, "type", null, true);
            if (arguments.length < 4) {
                throw new Error("new StructureValue() cannot be invoked directly, please use 'model.datatransformers.createStructureValue()'");
            }
        }
        get containerAsDataTransformer() {
            return super.getContainerAs(DataTransformer);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * Creates and returns a new StructureValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StructureValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.type = StringValueType.create(this.model);
        }
    }
    StructureValue.structureTypeName = "DataTransformers$StructureValue";
    StructureValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0",
        properties: {
            type: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.8.0"]
        }
    }, internal.StructureType.Element);
    datatransformers.StructureValue = StructureValue;
})(datatransformers = exports.datatransformers || (exports.datatransformers = {}));
//# sourceMappingURL=datatransformers.js.map