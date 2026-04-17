"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectorkit = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
const microflows_1 = require("./microflows");
/**
 * @ignore
 */
var connectorkit;
(function (connectorkit) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ConnectorKit`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class Connector extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__connector = new internal.ByNameReferenceProperty(Connector, this, "connector", null, "ConnectorKit$ConnectorType");
            /** @internal */
            this.__propertyMapping = new internal.PartListProperty(Connector, this, "propertyMapping", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get connector() {
            return this.__connector.get();
        }
        set connector(newValue) {
            this.__connector.set(newValue);
        }
        get connectorQualifiedName() {
            return this.__connector.qualifiedName();
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get propertyMapping() {
            return this.__propertyMapping.get();
        }
        /**
         * Creates a new Connector unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Connector);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Connector.structureTypeName = "ConnectorKit$Connector";
    Connector.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    connectorkit.Connector = Connector;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorAction extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(ConnectorAction, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__caption = new internal.PrimitiveProperty(ConnectorAction, this, "caption", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(ConnectorAction, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__icon = new internal.PrimitiveProperty(ConnectorAction, this, "icon", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__iconDark = new internal.PrimitiveProperty(ConnectorAction, this, "iconDark", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__javaAction = new internal.ByNameReferenceProperty(ConnectorAction, this, "javaAction", null, "JavaActions$JavaAction");
            if (arguments.length < 4) {
                throw new Error("new ConnectorAction() cannot be invoked directly, please use 'model.connectorkit.createConnectorAction()'");
            }
        }
        get containerAsConnectorType() {
            return super.getContainerAs(ConnectorType);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get caption() {
            return this.__caption.get();
        }
        set caption(newValue) {
            this.__caption.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        get icon() {
            return this.__icon.get();
        }
        set icon(newValue) {
            this.__icon.set(newValue);
        }
        get iconDark() {
            return this.__iconDark.get();
        }
        set iconDark(newValue) {
            this.__iconDark.set(newValue);
        }
        get javaAction() {
            return this.__javaAction.get();
        }
        set javaAction(newValue) {
            this.__javaAction.set(newValue);
        }
        get javaActionQualifiedName() {
            return this.__javaAction.qualifiedName();
        }
        /**
         * Creates and returns a new ConnectorAction instance in the SDK and on the server.
         * The new ConnectorAction will be automatically stored in the 'connectorActions' property
         * of the parent ConnectorType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ConnectorAction.structureTypeName, { start: "11.0.0" });
            return internal.instancehelpers.createElement(container, ConnectorAction, "connectorActions", true);
        }
        /**
         * Creates and returns a new ConnectorAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConnectorAction);
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
    ConnectorAction.structureTypeName = "ConnectorKit$ConnectorAction";
    ConnectorAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    connectorkit.ConnectorAction = ConnectorAction;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorActionCallAction extends microflows_1.microflows.MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__connectorAction = new internal.ByNameReferenceProperty(ConnectorActionCallAction, this, "connectorAction", null, "ConnectorKit$ConnectorAction");
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(ConnectorActionCallAction, this, "outputVariableName", "Variable", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(ConnectorActionCallAction, this, "parameterMappings", []);
            if (arguments.length < 4) {
                throw new Error("new ConnectorActionCallAction() cannot be invoked directly, please use 'model.connectorkit.createConnectorActionCallAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(microflows_1.microflows.ActionActivity);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get connectorAction() {
            return this.__connectorAction.get();
        }
        set connectorAction(newValue) {
            this.__connectorAction.set(newValue);
        }
        get connectorActionQualifiedName() {
            return this.__connectorAction.qualifiedName();
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * Creates and returns a new ConnectorActionCallAction instance in the SDK and on the server.
         * The new ConnectorActionCallAction will be automatically stored in the 'action' property
         * of the parent microflows.ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ConnectorActionCallAction.structureTypeName, { start: "11.0.0" });
            return internal.instancehelpers.createElement(container, ConnectorActionCallAction, "action", false);
        }
        /**
         * Creates and returns a new ConnectorActionCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConnectorActionCallAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.outputVariableName = "Variable";
        }
    }
    ConnectorActionCallAction.structureTypeName = "ConnectorKit$ConnectorActionCallAction";
    ConnectorActionCallAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    connectorkit.ConnectorActionCallAction = ConnectorActionCallAction;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorActionParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__javaActionParameter = new internal.ByNameReferenceProperty(ConnectorActionParameterMapping, this, "javaActionParameter", null, "JavaActions$JavaActionParameter");
            /** @internal */
            this.__parameterValueExpression = new internal.PrimitiveProperty(ConnectorActionParameterMapping, this, "parameterValueExpression", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ConnectorActionParameterMapping() cannot be invoked directly, please use 'model.connectorkit.createConnectorActionParameterMapping()'");
            }
        }
        get containerAsConnectorActionCallAction() {
            return super.getContainerAs(ConnectorActionCallAction);
        }
        get javaActionParameter() {
            return this.__javaActionParameter.get();
        }
        set javaActionParameter(newValue) {
            this.__javaActionParameter.set(newValue);
        }
        get javaActionParameterQualifiedName() {
            return this.__javaActionParameter.qualifiedName();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get parameterValueExpression() {
            return this.__parameterValueExpression.get();
        }
        set parameterValueExpression(newValue) {
            this.__parameterValueExpression.set(newValue);
        }
        /**
         * Creates and returns a new ConnectorActionParameterMapping instance in the SDK and on the server.
         * The new ConnectorActionParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent ConnectorActionCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ConnectorActionParameterMapping.structureTypeName, { start: "11.0.0" });
            return internal.instancehelpers.createElement(container, ConnectorActionParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new ConnectorActionParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConnectorActionParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConnectorActionParameterMapping.structureTypeName = "ConnectorKit$ConnectorActionParameterMapping";
    ConnectorActionParameterMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0",
        properties: {
            javaActionParameter: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    connectorkit.ConnectorActionParameterMapping = ConnectorActionParameterMapping;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorProperty extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(ConnectorProperty, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__propertyType = new internal.PartProperty(ConnectorProperty, this, "propertyType", null, true);
            /** @internal */
            this.__isOptional = new internal.PrimitiveProperty(ConnectorProperty, this, "isOptional", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(ConnectorProperty, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ConnectorProperty() cannot be invoked directly, please use 'model.connectorkit.createConnectorProperty()'");
            }
        }
        get containerAsConnectorType() {
            return super.getContainerAs(ConnectorType);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get propertyType() {
            return this.__propertyType.get();
        }
        set propertyType(newValue) {
            this.__propertyType.set(newValue);
        }
        get isOptional() {
            return this.__isOptional.get();
        }
        set isOptional(newValue) {
            this.__isOptional.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new ConnectorProperty instance in the SDK and on the server.
         * The new ConnectorProperty will be automatically stored in the 'connectorProperties' property
         * of the parent ConnectorType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ConnectorProperty.structureTypeName, { start: "11.0.0" });
            return internal.instancehelpers.createElement(container, ConnectorProperty, "connectorProperties", true);
        }
        /**
         * Creates and returns a new ConnectorProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConnectorProperty);
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
            this.propertyType = datatypes_1.datatypes.UnknownType.create(this.model);
        }
    }
    ConnectorProperty.structureTypeName = "ConnectorKit$ConnectorProperty";
    ConnectorProperty.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            propertyType: {
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    connectorkit.ConnectorProperty = ConnectorProperty;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorPropertyMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__connectorProperty = new internal.ByNameReferenceProperty(ConnectorPropertyMapping, this, "connectorProperty", null, "ConnectorKit$ConnectorProperty");
            /** @internal */
            this.__propertyValueExpression = new internal.PrimitiveProperty(ConnectorPropertyMapping, this, "propertyValueExpression", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ConnectorPropertyMapping() cannot be invoked directly, please use 'model.connectorkit.createConnectorPropertyMapping()'");
            }
        }
        get containerAsConnector() {
            return super.getContainerAs(Connector);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get connectorProperty() {
            return this.__connectorProperty.get();
        }
        set connectorProperty(newValue) {
            this.__connectorProperty.set(newValue);
        }
        get connectorPropertyQualifiedName() {
            return this.__connectorProperty.qualifiedName();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get propertyValueExpression() {
            return this.__propertyValueExpression.get();
        }
        set propertyValueExpression(newValue) {
            this.__propertyValueExpression.set(newValue);
        }
        /**
         * Creates and returns a new ConnectorPropertyMapping instance in the SDK and on the server.
         * The new ConnectorPropertyMapping will be automatically stored in the 'propertyMapping' property
         * of the parent Connector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ConnectorPropertyMapping.structureTypeName, { start: "11.0.0" });
            return internal.instancehelpers.createElement(container, ConnectorPropertyMapping, "propertyMapping", true);
        }
        /**
         * Creates and returns a new ConnectorPropertyMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConnectorPropertyMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConnectorPropertyMapping.structureTypeName = "ConnectorKit$ConnectorPropertyMapping";
    ConnectorPropertyMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0",
        properties: {
            connectorProperty: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    connectorkit.ConnectorPropertyMapping = ConnectorPropertyMapping;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorType extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__connectorName = new internal.PrimitiveProperty(ConnectorType, this, "connectorName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(ConnectorType, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__icon = new internal.PrimitiveProperty(ConnectorType, this, "icon", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__iconDark = new internal.PrimitiveProperty(ConnectorType, this, "iconDark", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(ConnectorType, this, "version", "1.0.0", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__connectorActions = new internal.PartListProperty(ConnectorType, this, "connectorActions", []);
            /** @internal */
            this.__connectorProperties = new internal.PartListProperty(ConnectorType, this, "connectorProperties", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get connectorName() {
            return this.__connectorName.get();
        }
        set connectorName(newValue) {
            this.__connectorName.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get icon() {
            return this.__icon.get();
        }
        set icon(newValue) {
            this.__icon.set(newValue);
        }
        get iconDark() {
            return this.__iconDark.get();
        }
        set iconDark(newValue) {
            this.__iconDark.set(newValue);
        }
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get connectorActions() {
            return this.__connectorActions.get();
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get connectorProperties() {
            return this.__connectorProperties.get();
        }
        /**
         * Creates a new ConnectorType unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ConnectorType);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.version = "1.0.0";
        }
    }
    ConnectorType.structureTypeName = "ConnectorKit$ConnectorType";
    ConnectorType.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0",
        properties: {
            connectorActions: {
                public: {
                    currentValue: true
                }
            },
            connectorProperties: {
                public: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    connectorkit.ConnectorType = ConnectorType;
})(connectorkit = exports.connectorkit || (exports.connectorkit = {}));
const datatypes_1 = require("./datatypes");
//# sourceMappingURL=connectorkit.js.map