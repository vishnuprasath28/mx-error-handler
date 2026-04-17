"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseconnector = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
const microflows_1 = require("./microflows");
var databaseconnector;
(function (databaseconnector) {
    class QueryParameterMode extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "databaseconnector.QueryParameterMode";
        }
    }
    QueryParameterMode.Unknown = new QueryParameterMode("Unknown", {});
    QueryParameterMode.In = new QueryParameterMode("In", {});
    QueryParameterMode.Out = new QueryParameterMode("Out", {});
    QueryParameterMode.InOut = new QueryParameterMode("InOut", {});
    databaseconnector.QueryParameterMode = QueryParameterMode;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DatabaseConnector`.
     */
    /**
     * In version 10.12.0: introduced
     */
    class AdditionalProperty extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__key = new internal.PrimitiveProperty(AdditionalProperty, this, "key", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.PartProperty(AdditionalProperty, this, "value", null, false);
            if (arguments.length < 4) {
                throw new Error("new AdditionalProperty() cannot be invoked directly, please use 'model.databaseconnector.createAdditionalProperty()'");
            }
        }
        get containerAsDatabaseConnection() {
            return super.getContainerAs(DatabaseConnection);
        }
        get key() {
            return this.__key.get();
        }
        set key(newValue) {
            this.__key.set(newValue);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new AdditionalProperty instance in the SDK and on the server.
         * The new AdditionalProperty will be automatically stored in the 'additionalProperties' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AdditionalProperty.structureTypeName, { start: "10.12.0" });
            return internal.instancehelpers.createElement(container, AdditionalProperty, "additionalProperties", true);
        }
        /**
         * Creates and returns a new AdditionalProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AdditionalProperty);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AdditionalProperty.structureTypeName = "DatabaseConnector$AdditionalProperty";
    AdditionalProperty.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.12.0"
    }, internal.StructureType.Element);
    databaseconnector.AdditionalProperty = AdditionalProperty;
    /**
     * In version 10.12.0: introduced
     */
    class AdditionalPropertyValue extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new AdditionalPropertyValue() cannot be invoked directly, please use 'model.databaseconnector.createAdditionalPropertyValue()'");
            }
        }
        get containerAsAdditionalProperty() {
            return super.getContainerAs(AdditionalProperty);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AdditionalPropertyValue.structureTypeName = "DatabaseConnector$AdditionalPropertyValue";
    AdditionalPropertyValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.12.0"
    }, internal.StructureType.Element);
    databaseconnector.AdditionalPropertyValue = AdditionalPropertyValue;
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class ColumnMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__columnName = new internal.PrimitiveProperty(ColumnMapping, this, "columnName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__sqlDataType = new internal.PartProperty(ColumnMapping, this, "sqlDataType", null, false);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(ColumnMapping, this, "attribute", null, "DomainModels$Attribute");
            if (arguments.length < 4) {
                throw new Error("new ColumnMapping() cannot be invoked directly, please use 'model.databaseconnector.createColumnMapping()'");
            }
        }
        get containerAsTableMapping() {
            return super.getContainerAs(TableMapping);
        }
        get columnName() {
            return this.__columnName.get();
        }
        set columnName(newValue) {
            this.__columnName.set(newValue);
        }
        get sqlDataType() {
            return this.__sqlDataType.get();
        }
        set sqlDataType(newValue) {
            this.__sqlDataType.set(newValue);
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
        /**
         * Creates and returns a new ColumnMapping instance in the SDK and on the server.
         * The new ColumnMapping will be automatically stored in the 'columns' property
         * of the parent TableMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ColumnMapping.structureTypeName, { start: "9.22.0" });
            return internal.instancehelpers.createElement(container, ColumnMapping, "columns", true);
        }
        /**
         * Creates and returns a new ColumnMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ColumnMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ColumnMapping.structureTypeName = "DatabaseConnector$ColumnMapping";
    ColumnMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.22.0",
        properties: {
            attribute: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.10.0"]
        }
    }, internal.StructureType.Element);
    databaseconnector.ColumnMapping = ColumnMapping;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: deleted
     * In version 9.22.0: introduced
     */
    class ConnectionDetails extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__host = new internal.PrimitiveProperty(ConnectionDetails, this, "host", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__port = new internal.PrimitiveProperty(ConnectionDetails, this, "port", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__databaseName = new internal.PrimitiveProperty(ConnectionDetails, this, "databaseName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ConnectionDetails() cannot be invoked directly, please use 'model.databaseconnector.createConnectionDetails()'");
            }
        }
        get containerAsDatabaseConnection() {
            return super.getContainerAs(DatabaseConnection);
        }
        get host() {
            return this.__host.get();
        }
        set host(newValue) {
            this.__host.set(newValue);
        }
        get port() {
            return this.__port.get();
        }
        set port(newValue) {
            this.__port.set(newValue);
        }
        get databaseName() {
            return this.__databaseName.get();
        }
        set databaseName(newValue) {
            this.__databaseName.set(newValue);
        }
        /**
         * Creates and returns a new ConnectionDetails instance in the SDK and on the server.
         * The new ConnectionDetails will be automatically stored in the 'connectionDetails' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 9.24.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ConnectionDetails.structureTypeName, { start: "9.22.0", end: "9.24.0" });
            return internal.instancehelpers.createElement(container, ConnectionDetails, "connectionDetails", false);
        }
        /**
         * Creates and returns a new ConnectionDetails instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConnectionDetails);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConnectionDetails.structureTypeName = "DatabaseConnector$ConnectionDetails";
    ConnectionDetails.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.22.0",
        deleted: "10.0.0",
        deletionMessage: "Replaced by ConnectionInput",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    databaseconnector.ConnectionDetails = ConnectionDetails;
    /**
     * In version 10.10.0: removed experimental
     * In version 10.0.0: introduced
     */
    class ConnectionInput extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ConnectionInput() cannot be invoked directly, please use 'model.databaseconnector.createConnectionInput()'");
            }
        }
        get containerAsDatabaseConnection() {
            return super.getContainerAs(DatabaseConnection);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConnectionInput.structureTypeName = "DatabaseConnector$ConnectionInput";
    ConnectionInput.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.0.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.10.0"]
        }
    }, internal.StructureType.Element);
    databaseconnector.ConnectionInput = ConnectionInput;
    /**
     * In version 11.1.0: introduced
     */
    class ConnectionParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameterName = new internal.PrimitiveProperty(ConnectionParameterMapping, this, "parameterName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(ConnectionParameterMapping, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ConnectionParameterMapping() cannot be invoked directly, please use 'model.databaseconnector.createConnectionParameterMapping()'");
            }
        }
        get containerAsExecuteDatabaseQueryAction() {
            return super.getContainerAs(ExecuteDatabaseQueryAction);
        }
        get parameterName() {
            return this.__parameterName.get();
        }
        set parameterName(newValue) {
            this.__parameterName.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new ConnectionParameterMapping instance in the SDK and on the server.
         * The new ConnectionParameterMapping will be automatically stored in the 'connectionParameterMappings' property
         * of the parent ExecuteDatabaseQueryAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ConnectionParameterMapping.structureTypeName, { start: "11.1.0" });
            return internal.instancehelpers.createElement(container, ConnectionParameterMapping, "connectionParameterMappings", true);
        }
        /**
         * Creates and returns a new ConnectionParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConnectionParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConnectionParameterMapping.structureTypeName = "DatabaseConnector$ConnectionParameterMapping";
    ConnectionParameterMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.1.0"
    }, internal.StructureType.Element);
    databaseconnector.ConnectionParameterMapping = ConnectionParameterMapping;
    /**
     * In version 10.0.0: introduced
     */
    class ConnectionParts extends ConnectionInput {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__host = new internal.PrimitiveProperty(ConnectionParts, this, "host", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__port = new internal.PrimitiveProperty(ConnectionParts, this, "port", 0, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__databaseName = new internal.PrimitiveProperty(ConnectionParts, this, "databaseName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ConnectionParts() cannot be invoked directly, please use 'model.databaseconnector.createConnectionParts()'");
            }
        }
        get containerAsDatabaseConnection() {
            return super.getContainerAs(DatabaseConnection);
        }
        get host() {
            return this.__host.get();
        }
        set host(newValue) {
            this.__host.set(newValue);
        }
        get port() {
            return this.__port.get();
        }
        set port(newValue) {
            this.__port.set(newValue);
        }
        get databaseName() {
            return this.__databaseName.get();
        }
        set databaseName(newValue) {
            this.__databaseName.set(newValue);
        }
        /**
         * Creates and returns a new ConnectionParts instance in the SDK and on the server.
         * The new ConnectionParts will be automatically stored in the 'connectionInput' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ConnectionParts.structureTypeName, { start: "10.0.0" });
            return internal.instancehelpers.createElement(container, ConnectionParts, "connectionInput", false);
        }
        /**
         * Creates and returns a new ConnectionParts instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConnectionParts);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConnectionParts.structureTypeName = "DatabaseConnector$ConnectionParts";
    ConnectionParts.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.0.0"
    }, internal.StructureType.Element);
    databaseconnector.ConnectionParts = ConnectionParts;
    /**
     * In version 10.0.0: introduced
     */
    class ConnectionString extends ConnectionInput {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(ConnectionString, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ConnectionString() cannot be invoked directly, please use 'model.databaseconnector.createConnectionString()'");
            }
        }
        get containerAsDatabaseConnection() {
            return super.getContainerAs(DatabaseConnection);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new ConnectionString instance in the SDK and on the server.
         * The new ConnectionString will be automatically stored in the 'connectionInput' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ConnectionString.structureTypeName, { start: "10.0.0" });
            return internal.instancehelpers.createElement(container, ConnectionString, "connectionInput", false);
        }
        /**
         * Creates and returns a new ConnectionString instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConnectionString);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConnectionString.structureTypeName = "DatabaseConnector$ConnectionString";
    ConnectionString.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.0.0"
    }, internal.StructureType.Element);
    databaseconnector.ConnectionString = ConnectionString;
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class DatabaseConnection extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__databaseType = new internal.PrimitiveProperty(DatabaseConnection, this, "databaseType", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__connectionInput = new internal.PartProperty(DatabaseConnection, this, "connectionInput", null, false);
            /** @internal */
            this.__connectionDetails = new internal.PartProperty(DatabaseConnection, this, "connectionDetails", null, false);
            /** @internal */
            this.__connectionString = new internal.ByNameReferenceProperty(DatabaseConnection, this, "connectionString", null, "Constants$Constant");
            /** @internal */
            this.__userName = new internal.ByNameReferenceProperty(DatabaseConnection, this, "userName", null, "Constants$Constant");
            /** @internal */
            this.__password = new internal.ByNameReferenceProperty(DatabaseConnection, this, "password", null, "Constants$Constant");
            /** @internal */
            this.__lastSelectedQuery = new internal.ByNameReferenceProperty(DatabaseConnection, this, "lastSelectedQuery", null, "DatabaseConnector$DatabaseQuery");
            /** @internal */
            this.__queries = new internal.PartListProperty(DatabaseConnection, this, "queries", []);
            /** @internal */
            this.__additionalProperties = new internal.PartListProperty(DatabaseConnection, this, "additionalProperties", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get databaseType() {
            return this.__databaseType.get();
        }
        set databaseType(newValue) {
            this.__databaseType.set(newValue);
        }
        /**
         * In version 10.0.0: introduced
         */
        get connectionInput() {
            return this.__connectionInput.get();
        }
        set connectionInput(newValue) {
            this.__connectionInput.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.0.0: deleted
         */
        get connectionDetails() {
            return this.__connectionDetails.get();
        }
        set connectionDetails(newValue) {
            this.__connectionDetails.set(newValue);
        }
        get connectionString() {
            return this.__connectionString.get();
        }
        set connectionString(newValue) {
            this.__connectionString.set(newValue);
        }
        get connectionStringQualifiedName() {
            return this.__connectionString.qualifiedName();
        }
        get userName() {
            return this.__userName.get();
        }
        set userName(newValue) {
            this.__userName.set(newValue);
        }
        get userNameQualifiedName() {
            return this.__userName.qualifiedName();
        }
        get password() {
            return this.__password.get();
        }
        set password(newValue) {
            this.__password.set(newValue);
        }
        get passwordQualifiedName() {
            return this.__password.qualifiedName();
        }
        /**
         * In version 10.0.0: introduced
         */
        get lastSelectedQuery() {
            return this.__lastSelectedQuery.get();
        }
        set lastSelectedQuery(newValue) {
            this.__lastSelectedQuery.set(newValue);
        }
        get lastSelectedQueryQualifiedName() {
            return this.__lastSelectedQuery.qualifiedName();
        }
        get queries() {
            return this.__queries.get();
        }
        /**
         * In version 10.12.0: introduced
         */
        get additionalProperties() {
            return this.__additionalProperties.get();
        }
        /**
         * Creates a new DatabaseConnection unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, DatabaseConnection);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DatabaseConnection.structureTypeName = "DatabaseConnector$DatabaseConnection";
    DatabaseConnection.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.22.0",
        properties: {
            connectionInput: {
                introduced: "10.0.0"
            },
            connectionDetails: {
                deleted: "10.0.0",
                deletionMessage: null
            },
            lastSelectedQuery: {
                introduced: "10.0.0"
            },
            queries: {
                public: {
                    currentValue: true
                }
            },
            additionalProperties: {
                introduced: "10.12.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.10.0"]
        }
    }, internal.StructureType.ModelUnit);
    databaseconnector.DatabaseConnection = DatabaseConnection;
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class DatabaseQuery extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(DatabaseQuery, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__query = new internal.PrimitiveProperty(DatabaseQuery, this, "query", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__tableMapping = new internal.PartProperty(DatabaseQuery, this, "tableMapping", null, false);
            /** @internal */
            this.__tableMappings = new internal.PartListProperty(DatabaseQuery, this, "tableMappings", []);
            /** @internal */
            this.__parameters = new internal.PartListProperty(DatabaseQuery, this, "parameters", []);
            /** @internal */
            this.__queryType = new internal.PrimitiveProperty(DatabaseQuery, this, "queryType", -1, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new DatabaseQuery() cannot be invoked directly, please use 'model.databaseconnector.createDatabaseQuery()'");
            }
        }
        get containerAsDatabaseConnection() {
            return super.getContainerAs(DatabaseConnection);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get query() {
            return this.__query.get();
        }
        set query(newValue) {
            this.__query.set(newValue);
        }
        /**
         * In version 10.12.0: deleted
         * In version 10.6.0: added optional
         */
        get tableMapping() {
            return this.__tableMapping.get();
        }
        set tableMapping(newValue) {
            this.__tableMapping.set(newValue);
        }
        /**
         * In version 10.12.0: introduced
         */
        get tableMappings() {
            return this.__tableMappings.get();
        }
        get parameters() {
            return this.__parameters.get();
        }
        /**
         * In version 10.12.0: introduced
         */
        get queryType() {
            return this.__queryType.get();
        }
        set queryType(newValue) {
            this.__queryType.set(newValue);
        }
        /**
         * Creates and returns a new DatabaseQuery instance in the SDK and on the server.
         * The new DatabaseQuery will be automatically stored in the 'queries' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, DatabaseQuery.structureTypeName, { start: "9.22.0" });
            return internal.instancehelpers.createElement(container, DatabaseQuery, "queries", true);
        }
        /**
         * Creates and returns a new DatabaseQuery instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DatabaseQuery);
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
            if (this.__queryType.isAvailable) {
                this.queryType = -1;
            }
            if (this.__tableMapping.isAvailable) {
                (() => {
                    if (internal.isAtLeast("10.6.0", this.model)) {
                        return;
                    }
                    this.tableMapping = TableMapping.create(this.model);
                })();
            }
        }
    }
    DatabaseQuery.structureTypeName = "DatabaseConnector$DatabaseQuery";
    DatabaseQuery.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.22.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            tableMapping: {
                deleted: "10.12.0",
                deletionMessage: "moved to tableMappings",
                required: {
                    currentValue: false,
                    changedIn: ["10.6.0"]
                }
            },
            tableMappings: {
                introduced: "10.12.0"
            },
            queryType: {
                introduced: "10.12.0"
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.10.0"]
        }
    }, internal.StructureType.Element);
    databaseconnector.DatabaseQuery = DatabaseQuery;
    /**
     * In version 10.10.0: removed experimental
     * In version 9.24.0: introduced
     */
    class ExecuteDatabaseQueryAction extends microflows_1.microflows.MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__query = new internal.ByNameReferenceProperty(ExecuteDatabaseQueryAction, this, "query", null, "DatabaseConnector$DatabaseQuery");
            /** @internal */
            this.__connectionParameterMappings = new internal.PartListProperty(ExecuteDatabaseQueryAction, this, "connectionParameterMappings", []);
            /** @internal */
            this.__parameterMappings = new internal.PartListProperty(ExecuteDatabaseQueryAction, this, "parameterMappings", []);
            /** @internal */
            this.__dynamicQuery = new internal.PrimitiveProperty(ExecuteDatabaseQueryAction, this, "dynamicQuery", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(ExecuteDatabaseQueryAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ExecuteDatabaseQueryAction() cannot be invoked directly, please use 'model.databaseconnector.createExecuteDatabaseQueryAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(microflows_1.microflows.ActionActivity);
        }
        /**
         * In version 10.0.0: added optional
         */
        get query() {
            return this.__query.get();
        }
        set query(newValue) {
            this.__query.set(newValue);
        }
        get queryQualifiedName() {
            return this.__query.qualifiedName();
        }
        /**
         * In version 11.1.0: introduced
         */
        get connectionParameterMappings() {
            return this.__connectionParameterMappings.get();
        }
        get parameterMappings() {
            return this.__parameterMappings.get();
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 11.3.0: introduced
         */
        get dynamicQuery() {
            return this.__dynamicQuery.get();
        }
        set dynamicQuery(newValue) {
            this.__dynamicQuery.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * Creates and returns a new ExecuteDatabaseQueryAction instance in the SDK and on the server.
         * The new ExecuteDatabaseQueryAction will be automatically stored in the 'action' property
         * of the parent microflows.ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ExecuteDatabaseQueryAction.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, ExecuteDatabaseQueryAction, "action", false);
        }
        /**
         * Creates and returns a new ExecuteDatabaseQueryAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExecuteDatabaseQueryAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExecuteDatabaseQueryAction.structureTypeName = "DatabaseConnector$ExecuteDatabaseQueryAction";
    ExecuteDatabaseQueryAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        properties: {
            query: {
                required: {
                    currentValue: false,
                    changedIn: ["10.0.0"]
                }
            },
            connectionParameterMappings: {
                introduced: "11.1.0"
            },
            dynamicQuery: {
                introduced: "11.3.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.10.0"]
        }
    }, internal.StructureType.Element);
    databaseconnector.ExecuteDatabaseQueryAction = ExecuteDatabaseQueryAction;
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class SqlDataType extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__dataTypeName = new internal.PrimitiveProperty(SqlDataType, this, "dataTypeName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new SqlDataType() cannot be invoked directly, please use 'model.databaseconnector.createSqlDataType()'");
            }
        }
        get containerAsColumnMapping() {
            return super.getContainerAs(ColumnMapping);
        }
        get containerAsQueryParameter() {
            return super.getContainerAs(QueryParameter);
        }
        get dataTypeName() {
            return this.__dataTypeName.get();
        }
        set dataTypeName(newValue) {
            this.__dataTypeName.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    SqlDataType.structureTypeName = "DatabaseConnector$SqlDataType";
    SqlDataType.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.22.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.10.0"]
        }
    }, internal.StructureType.Element);
    databaseconnector.SqlDataType = SqlDataType;
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class LimitedLengthSqlDataType extends SqlDataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__length = new internal.PrimitiveProperty(LimitedLengthSqlDataType, this, "length", 0, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new LimitedLengthSqlDataType() cannot be invoked directly, please use 'model.databaseconnector.createLimitedLengthSqlDataType()'");
            }
        }
        get containerAsColumnMapping() {
            return super.getContainerAs(ColumnMapping);
        }
        get containerAsQueryParameter() {
            return super.getContainerAs(QueryParameter);
        }
        get length() {
            return this.__length.get();
        }
        set length(newValue) {
            this.__length.set(newValue);
        }
        /**
         * Creates and returns a new LimitedLengthSqlDataType instance in the SDK and on the server.
         * The new LimitedLengthSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent ColumnMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInColumnMappingUnderSqlDataType(container) {
            internal.createInVersionCheck(container.model, LimitedLengthSqlDataType.structureTypeName, { start: "9.22.0" });
            return internal.instancehelpers.createElement(container, LimitedLengthSqlDataType, "sqlDataType", false);
        }
        /**
         * Creates and returns a new LimitedLengthSqlDataType instance in the SDK and on the server.
         * The new LimitedLengthSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInQueryParameterUnderSqlDataType(container) {
            internal.createInVersionCheck(container.model, LimitedLengthSqlDataType.structureTypeName, { start: "9.22.0" });
            return internal.instancehelpers.createElement(container, LimitedLengthSqlDataType, "sqlDataType", false);
        }
        /**
         * Creates and returns a new LimitedLengthSqlDataType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, LimitedLengthSqlDataType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    LimitedLengthSqlDataType.structureTypeName = "DatabaseConnector$LimitedLengthSqlDataType";
    LimitedLengthSqlDataType.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.22.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.10.0"]
        }
    }, internal.StructureType.Element);
    databaseconnector.LimitedLengthSqlDataType = LimitedLengthSqlDataType;
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class QueryParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameterName = new internal.PrimitiveProperty(QueryParameter, this, "parameterName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__sqlDataType = new internal.PartProperty(QueryParameter, this, "sqlDataType", null, false);
            /** @internal */
            this.__dataType = new internal.PartProperty(QueryParameter, this, "dataType", null, true);
            /** @internal */
            this.__defaultValue = new internal.PrimitiveProperty(QueryParameter, this, "defaultValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__mode = new internal.EnumProperty(QueryParameter, this, "mode", QueryParameterMode.Unknown, QueryParameterMode);
            /** @internal */
            this.__databaseParameterName = new internal.PrimitiveProperty(QueryParameter, this, "databaseParameterName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__emptyValueBecomesNull = new internal.PrimitiveProperty(QueryParameter, this, "emptyValueBecomesNull", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__tableMapping = new internal.PartProperty(QueryParameter, this, "tableMapping", null, false);
            if (arguments.length < 4) {
                throw new Error("new QueryParameter() cannot be invoked directly, please use 'model.databaseconnector.createQueryParameter()'");
            }
        }
        get containerAsDatabaseQuery() {
            return super.getContainerAs(DatabaseQuery);
        }
        get parameterName() {
            return this.__parameterName.get();
        }
        set parameterName(newValue) {
            this.__parameterName.set(newValue);
        }
        get sqlDataType() {
            return this.__sqlDataType.get();
        }
        set sqlDataType(newValue) {
            this.__sqlDataType.set(newValue);
        }
        /**
         * In version 10.1.0: removed optional
         */
        get dataType() {
            return this.__dataType.get();
        }
        set dataType(newValue) {
            this.__dataType.set(newValue);
        }
        get defaultValue() {
            return this.__defaultValue.get();
        }
        set defaultValue(newValue) {
            this.__defaultValue.set(newValue);
        }
        /**
         * In version 10.10.0: introduced
         */
        get mode() {
            return this.__mode.get();
        }
        set mode(newValue) {
            this.__mode.set(newValue);
        }
        /**
         * In version 10.12.0: introduced
         */
        get databaseParameterName() {
            return this.__databaseParameterName.get();
        }
        set databaseParameterName(newValue) {
            this.__databaseParameterName.set(newValue);
        }
        /**
         * In version 10.12.0: introduced
         */
        get emptyValueBecomesNull() {
            return this.__emptyValueBecomesNull.get();
        }
        set emptyValueBecomesNull(newValue) {
            this.__emptyValueBecomesNull.set(newValue);
        }
        /**
         * In version 11.0.0: introduced
         */
        get tableMapping() {
            return this.__tableMapping.get();
        }
        set tableMapping(newValue) {
            this.__tableMapping.set(newValue);
        }
        /**
         * Creates and returns a new QueryParameter instance in the SDK and on the server.
         * The new QueryParameter will be automatically stored in the 'parameters' property
         * of the parent DatabaseQuery element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, QueryParameter.structureTypeName, { start: "9.22.0" });
            return internal.instancehelpers.createElement(container, QueryParameter, "parameters", true);
        }
        /**
         * Creates and returns a new QueryParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, QueryParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("10.1.0", this.model)) {
                    this.dataType = datatypes_1.datatypes.UnknownType.create(this.model);
                    return;
                }
            })();
            if (this.__mode.isAvailable) {
                this.mode = QueryParameterMode.Unknown;
            }
        }
    }
    QueryParameter.structureTypeName = "DatabaseConnector$QueryParameter";
    QueryParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.22.0",
        properties: {
            dataType: {
                required: {
                    currentValue: true,
                    changedIn: ["10.1.0"]
                }
            },
            mode: {
                introduced: "10.10.0"
            },
            databaseParameterName: {
                introduced: "10.12.0"
            },
            emptyValueBecomesNull: {
                introduced: "10.12.0"
            },
            tableMapping: {
                introduced: "11.0.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.10.0"]
        }
    }, internal.StructureType.Element);
    databaseconnector.QueryParameter = QueryParameter;
    /**
     * In version 10.10.0: removed experimental
     * In version 9.24.0: introduced
     */
    class QueryParameterMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parameterName = new internal.PrimitiveProperty(QueryParameterMapping, this, "parameterName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(QueryParameterMapping, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new QueryParameterMapping() cannot be invoked directly, please use 'model.databaseconnector.createQueryParameterMapping()'");
            }
        }
        get containerAsExecuteDatabaseQueryAction() {
            return super.getContainerAs(ExecuteDatabaseQueryAction);
        }
        get parameterName() {
            return this.__parameterName.get();
        }
        set parameterName(newValue) {
            this.__parameterName.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new QueryParameterMapping instance in the SDK and on the server.
         * The new QueryParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent ExecuteDatabaseQueryAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, QueryParameterMapping.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, QueryParameterMapping, "parameterMappings", true);
        }
        /**
         * Creates and returns a new QueryParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, QueryParameterMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    QueryParameterMapping.structureTypeName = "DatabaseConnector$QueryParameterMapping";
    QueryParameterMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.10.0"]
        }
    }, internal.StructureType.Element);
    databaseconnector.QueryParameterMapping = QueryParameterMapping;
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class SimpleSqlDataType extends SqlDataType {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new SimpleSqlDataType() cannot be invoked directly, please use 'model.databaseconnector.createSimpleSqlDataType()'");
            }
        }
        get containerAsColumnMapping() {
            return super.getContainerAs(ColumnMapping);
        }
        get containerAsQueryParameter() {
            return super.getContainerAs(QueryParameter);
        }
        /**
         * Creates and returns a new SimpleSqlDataType instance in the SDK and on the server.
         * The new SimpleSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent ColumnMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInColumnMappingUnderSqlDataType(container) {
            internal.createInVersionCheck(container.model, SimpleSqlDataType.structureTypeName, { start: "9.22.0" });
            return internal.instancehelpers.createElement(container, SimpleSqlDataType, "sqlDataType", false);
        }
        /**
         * Creates and returns a new SimpleSqlDataType instance in the SDK and on the server.
         * The new SimpleSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInQueryParameterUnderSqlDataType(container) {
            internal.createInVersionCheck(container.model, SimpleSqlDataType.structureTypeName, { start: "9.22.0" });
            return internal.instancehelpers.createElement(container, SimpleSqlDataType, "sqlDataType", false);
        }
        /**
         * Creates and returns a new SimpleSqlDataType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, SimpleSqlDataType);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    SimpleSqlDataType.structureTypeName = "DatabaseConnector$SimpleSqlDataType";
    SimpleSqlDataType.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.22.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.10.0"]
        }
    }, internal.StructureType.Element);
    databaseconnector.SimpleSqlDataType = SimpleSqlDataType;
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class TableMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__tableName = new internal.PrimitiveProperty(TableMapping, this, "tableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(TableMapping, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__columns = new internal.PartListProperty(TableMapping, this, "columns", []);
            if (arguments.length < 4) {
                throw new Error("new TableMapping() cannot be invoked directly, please use 'model.databaseconnector.createTableMapping()'");
            }
        }
        get containerAsDatabaseQuery() {
            return super.getContainerAs(DatabaseQuery);
        }
        get containerAsQueryParameter() {
            return super.getContainerAs(QueryParameter);
        }
        get tableName() {
            return this.__tableName.get();
        }
        set tableName(newValue) {
            this.__tableName.set(newValue);
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
        get columns() {
            return this.__columns.get();
        }
        /**
         * Creates and returns a new TableMapping instance in the SDK and on the server.
         * The new TableMapping will be automatically stored in the 'tableMapping' property
         * of the parent DatabaseQuery element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 10.11.0
         */
        static createInDatabaseQueryUnderTableMapping(container) {
            internal.createInVersionCheck(container.model, TableMapping.structureTypeName, { start: "9.22.0", end: "10.11.0" });
            return internal.instancehelpers.createElement(container, TableMapping, "tableMapping", false);
        }
        /**
         * Creates and returns a new TableMapping instance in the SDK and on the server.
         * The new TableMapping will be automatically stored in the 'tableMappings' property
         * of the parent DatabaseQuery element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInDatabaseQueryUnderTableMappings(container) {
            internal.createInVersionCheck(container.model, TableMapping.structureTypeName, { start: "10.12.0" });
            return internal.instancehelpers.createElement(container, TableMapping, "tableMappings", true);
        }
        /**
         * Creates and returns a new TableMapping instance in the SDK and on the server.
         * The new TableMapping will be automatically stored in the 'tableMapping' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createInQueryParameterUnderTableMapping(container) {
            internal.createInVersionCheck(container.model, TableMapping.structureTypeName, { start: "11.0.0" });
            return internal.instancehelpers.createElement(container, TableMapping, "tableMapping", false);
        }
        /**
         * Creates and returns a new TableMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, TableMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    TableMapping.structureTypeName = "DatabaseConnector$TableMapping";
    TableMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.22.0",
        properties: {
            entity: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.10.0"]
        }
    }, internal.StructureType.Element);
    databaseconnector.TableMapping = TableMapping;
    /**
     * In version 10.12.0: introduced
     */
    class ValueAsConstant extends AdditionalPropertyValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.ByNameReferenceProperty(ValueAsConstant, this, "value", null, "Constants$Constant");
            if (arguments.length < 4) {
                throw new Error("new ValueAsConstant() cannot be invoked directly, please use 'model.databaseconnector.createValueAsConstant()'");
            }
        }
        get containerAsAdditionalProperty() {
            return super.getContainerAs(AdditionalProperty);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        get valueQualifiedName() {
            return this.__value.qualifiedName();
        }
        /**
         * Creates and returns a new ValueAsConstant instance in the SDK and on the server.
         * The new ValueAsConstant will be automatically stored in the 'value' property
         * of the parent AdditionalProperty element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ValueAsConstant.structureTypeName, { start: "10.12.0" });
            return internal.instancehelpers.createElement(container, ValueAsConstant, "value", false);
        }
        /**
         * Creates and returns a new ValueAsConstant instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ValueAsConstant);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ValueAsConstant.structureTypeName = "DatabaseConnector$ValueAsConstant";
    ValueAsConstant.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.12.0"
    }, internal.StructureType.Element);
    databaseconnector.ValueAsConstant = ValueAsConstant;
    /**
     * In version 10.12.0: introduced
     */
    class ValueAsString extends AdditionalPropertyValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(ValueAsString, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ValueAsString() cannot be invoked directly, please use 'model.databaseconnector.createValueAsString()'");
            }
        }
        get containerAsAdditionalProperty() {
            return super.getContainerAs(AdditionalProperty);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new ValueAsString instance in the SDK and on the server.
         * The new ValueAsString will be automatically stored in the 'value' property
         * of the parent AdditionalProperty element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ValueAsString.structureTypeName, { start: "10.12.0" });
            return internal.instancehelpers.createElement(container, ValueAsString, "value", false);
        }
        /**
         * Creates and returns a new ValueAsString instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ValueAsString);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ValueAsString.structureTypeName = "DatabaseConnector$ValueAsString";
    ValueAsString.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.12.0"
    }, internal.StructureType.Element);
    databaseconnector.ValueAsString = ValueAsString;
})(databaseconnector = exports.databaseconnector || (exports.databaseconnector = {}));
const datatypes_1 = require("./datatypes");
//# sourceMappingURL=databaseconnector.js.map