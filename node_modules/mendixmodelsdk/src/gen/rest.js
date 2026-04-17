"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.rest = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const domainmodels_1 = require("./domainmodels");
const projects_1 = require("./projects");
const enumerations_1 = require("./enumerations");
const webservices_1 = require("./webservices");
var rest;
(function (rest) {
    class AssociationNavigability extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "rest.AssociationNavigability";
        }
    }
    AssociationNavigability.BothDirections = new AssociationNavigability("BothDirections", {});
    AssociationNavigability.ParentToChild = new AssociationNavigability("ParentToChild", {});
    AssociationNavigability.ChildToParent = new AssociationNavigability("ChildToParent", {});
    rest.AssociationNavigability = AssociationNavigability;
    class ODataVersion extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "rest.ODataVersion";
        }
    }
    ODataVersion.OData2 = new ODataVersion("OData2", {
        introduced: "8.15.0"
    });
    ODataVersion.OData3 = new ODataVersion("OData3", {});
    ODataVersion.OData4 = new ODataVersion("OData4", {});
    rest.ODataVersion = ODataVersion;
    class PublishedODataVersion extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "rest.PublishedODataVersion";
        }
    }
    PublishedODataVersion.OData4 = new PublishedODataVersion("OData4", {});
    PublishedODataVersion.OData3 = new PublishedODataVersion("OData3", {});
    rest.PublishedODataVersion = PublishedODataVersion;
    class RestAuthenticationType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "rest.RestAuthenticationType";
        }
    }
    RestAuthenticationType.Basic = new RestAuthenticationType("Basic", {});
    RestAuthenticationType.None = new RestAuthenticationType("None", {
        deleted: "7.13.0",
        deletionMessage: null
    });
    RestAuthenticationType.Session = new RestAuthenticationType("Session", {
        introduced: "7.13.0"
    });
    RestAuthenticationType.Microflow = new RestAuthenticationType("Microflow", {
        introduced: "7.17.0"
    });
    RestAuthenticationType.Guest = new RestAuthenticationType("Guest", {
        introduced: "8.3.0"
    });
    rest.RestAuthenticationType = RestAuthenticationType;
    class RestOperationParameterType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "rest.RestOperationParameterType";
        }
    }
    RestOperationParameterType.Path = new RestOperationParameterType("Path", {});
    RestOperationParameterType.Query = new RestOperationParameterType("Query", {});
    RestOperationParameterType.Body = new RestOperationParameterType("Body", {
        introduced: "7.13.0"
    });
    RestOperationParameterType.Header = new RestOperationParameterType("Header", {
        introduced: "7.17.0"
    });
    RestOperationParameterType.Form = new RestOperationParameterType("Form", {
        introduced: "8.2.0"
    });
    rest.RestOperationParameterType = RestOperationParameterType;
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Rest`.
     */
    /**
     * In version 10.7.0: removed experimental
     * In version 10.2.0: introduced
     */
    class AuthenticationScheme extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new AuthenticationScheme() cannot be invoked directly, please use 'model.rest.createAuthenticationScheme()'");
            }
        }
        get containerAsConsumedRestService() {
            return super.getContainerAs(ConsumedRestService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AuthenticationScheme.structureTypeName = "Rest$AuthenticationScheme";
    AuthenticationScheme.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.2.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.AuthenticationScheme = AuthenticationScheme;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.2.0: introduced
     */
    class BasicAuthenticationScheme extends AuthenticationScheme {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__username = new internal.PartProperty(BasicAuthenticationScheme, this, "username", null, true);
            /** @internal */
            this.__password = new internal.PartProperty(BasicAuthenticationScheme, this, "password", null, true);
            if (arguments.length < 4) {
                throw new Error("new BasicAuthenticationScheme() cannot be invoked directly, please use 'model.rest.createBasicAuthenticationScheme()'");
            }
        }
        get containerAsConsumedRestService() {
            return super.getContainerAs(ConsumedRestService);
        }
        get username() {
            return this.__username.get();
        }
        set username(newValue) {
            this.__username.set(newValue);
        }
        get password() {
            return this.__password.get();
        }
        set password(newValue) {
            this.__password.set(newValue);
        }
        /**
         * Creates and returns a new BasicAuthenticationScheme instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BasicAuthenticationScheme);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.password = ConstantValue.create(this.model);
            this.username = ConstantValue.create(this.model);
        }
    }
    BasicAuthenticationScheme.structureTypeName = "Rest$BasicAuthenticationScheme";
    BasicAuthenticationScheme.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.2.0",
        properties: {
            username: {
                required: {
                    currentValue: true
                }
            },
            password: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.BasicAuthenticationScheme = BasicAuthenticationScheme;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    class Body extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Body() cannot be invoked directly, please use 'model.rest.createBody()'");
            }
        }
        get containerAsRestOperationMethodWithBody() {
            return super.getContainerAs(RestOperationMethodWithBody);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Body.structureTypeName = "Rest$Body";
    Body.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.Body = Body;
    /**
     * In version 10.4.0: deleted
     * In version 9.11.0: introduced
     */
    class ChangeMode extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ChangeMode() cannot be invoked directly, please use 'model.rest.createChangeMode()'");
            }
        }
        get containerAsPublishedRestResource() {
            return super.getContainerAs(PublishedRestResource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ChangeMode.structureTypeName = "Rest$ChangeMode";
    ChangeMode.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        deleted: "10.4.0",
        deletionMessage: null
    }, internal.StructureType.Element);
    rest.ChangeMode = ChangeMode;
    /**
     * In version 10.4.0: deleted
     * In version 9.11.0: introduced
     */
    class CallMicroflowToChange extends ChangeMode {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(CallMicroflowToChange, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new CallMicroflowToChange() cannot be invoked directly, please use 'model.rest.createCallMicroflowToChange()'");
            }
        }
        get containerAsPublishedRestResource() {
            return super.getContainerAs(PublishedRestResource);
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
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'deleteMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderDeleteMode(container) {
            internal.createInVersionCheck(container.model, CallMicroflowToChange.structureTypeName, { start: "9.11.0", end: "10.3.0" });
            return internal.instancehelpers.createElement(container, CallMicroflowToChange, "deleteMode", false);
        }
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'insertMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderInsertMode(container) {
            internal.createInVersionCheck(container.model, CallMicroflowToChange.structureTypeName, { start: "9.11.0", end: "10.3.0" });
            return internal.instancehelpers.createElement(container, CallMicroflowToChange, "insertMode", false);
        }
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'updateMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderUpdateMode(container) {
            internal.createInVersionCheck(container.model, CallMicroflowToChange.structureTypeName, { start: "9.11.0", end: "10.3.0" });
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
    CallMicroflowToChange.structureTypeName = "Rest$CallMicroflowToChange";
    CallMicroflowToChange.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        deleted: "10.4.0",
        deletionMessage: null,
        properties: {
            microflow: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    rest.CallMicroflowToChange = CallMicroflowToChange;
    /**
     * In version 10.4.0: deleted
     * In version 9.14.0: introduced
     */
    class ReadMode extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ReadMode() cannot be invoked directly, please use 'model.rest.createReadMode()'");
            }
        }
        get containerAsPublishedRestResource() {
            return super.getContainerAs(PublishedRestResource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ReadMode.structureTypeName = "Rest$ReadMode";
    ReadMode.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.14.0",
        deleted: "10.4.0",
        deletionMessage: null
    }, internal.StructureType.Element);
    rest.ReadMode = ReadMode;
    /**
     * In version 10.4.0: deleted
     * In version 9.14.0: introduced
     */
    class CallMicroflowToRead extends ReadMode {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(CallMicroflowToRead, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new CallMicroflowToRead() cannot be invoked directly, please use 'model.rest.createCallMicroflowToRead()'");
            }
        }
        get containerAsPublishedRestResource() {
            return super.getContainerAs(PublishedRestResource);
        }
        /**
         * In version 9.19.0: added optional
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
         * Creates and returns a new CallMicroflowToRead instance in the SDK and on the server.
         * The new CallMicroflowToRead will be automatically stored in the 'readMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 to 10.3.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CallMicroflowToRead.structureTypeName, { start: "9.14.0", end: "10.3.0" });
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
    CallMicroflowToRead.structureTypeName = "Rest$CallMicroflowToRead";
    CallMicroflowToRead.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.14.0",
        deleted: "10.4.0",
        deletionMessage: null,
        properties: {
            microflow: {
                required: {
                    currentValue: false,
                    changedIn: ["9.19.0"]
                }
            }
        }
    }, internal.StructureType.Element);
    rest.CallMicroflowToRead = CallMicroflowToRead;
    /**
     * In version 10.4.0: deleted
     * In version 9.11.0: introduced
     */
    class ChangeNotSupported extends ChangeMode {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ChangeNotSupported() cannot be invoked directly, please use 'model.rest.createChangeNotSupported()'");
            }
        }
        get containerAsPublishedRestResource() {
            return super.getContainerAs(PublishedRestResource);
        }
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'deleteMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderDeleteMode(container) {
            internal.createInVersionCheck(container.model, ChangeNotSupported.structureTypeName, { start: "9.11.0", end: "10.3.0" });
            return internal.instancehelpers.createElement(container, ChangeNotSupported, "deleteMode", false);
        }
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'insertMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderInsertMode(container) {
            internal.createInVersionCheck(container.model, ChangeNotSupported.structureTypeName, { start: "9.11.0", end: "10.3.0" });
            return internal.instancehelpers.createElement(container, ChangeNotSupported, "insertMode", false);
        }
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'updateMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderUpdateMode(container) {
            internal.createInVersionCheck(container.model, ChangeNotSupported.structureTypeName, { start: "9.11.0", end: "10.3.0" });
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
    ChangeNotSupported.structureTypeName = "Rest$ChangeNotSupported";
    ChangeNotSupported.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        deleted: "10.4.0",
        deletionMessage: null
    }, internal.StructureType.Element);
    rest.ChangeNotSupported = ChangeNotSupported;
    /**
     * In version 10.4.0: deleted
     * In version 9.11.0: introduced
     */
    class ChangeSource extends ChangeMode {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ChangeSource() cannot be invoked directly, please use 'model.rest.createChangeSource()'");
            }
        }
        get containerAsPublishedRestResource() {
            return super.getContainerAs(PublishedRestResource);
        }
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'deleteMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderDeleteMode(container) {
            internal.createInVersionCheck(container.model, ChangeSource.structureTypeName, { start: "9.11.0", end: "10.3.0" });
            return internal.instancehelpers.createElement(container, ChangeSource, "deleteMode", false);
        }
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'insertMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderInsertMode(container) {
            internal.createInVersionCheck(container.model, ChangeSource.structureTypeName, { start: "9.11.0", end: "10.3.0" });
            return internal.instancehelpers.createElement(container, ChangeSource, "insertMode", false);
        }
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'updateMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderUpdateMode(container) {
            internal.createInVersionCheck(container.model, ChangeSource.structureTypeName, { start: "9.11.0", end: "10.3.0" });
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
    ChangeSource.structureTypeName = "Rest$ChangeSource";
    ChangeSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        deleted: "10.4.0",
        deletionMessage: null
    }, internal.StructureType.Element);
    rest.ChangeSource = ChangeSource;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class Value extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Value() cannot be invoked directly, please use 'model.rest.createValue()'");
            }
        }
        get containerAsBasicAuthenticationScheme() {
            return super.getContainerAs(BasicAuthenticationScheme);
        }
        get containerAsImplicitMappingBody() {
            return super.getContainerAs(ImplicitMappingBody);
        }
        get containerAsOperationParameter() {
            return super.getContainerAs(OperationParameter);
        }
        get containerAsRestParameter() {
            return super.getContainerAs(RestParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Value.structureTypeName = "Rest$Value";
    Value.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.1.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.Value = Value;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.2.0: introduced
     */
    class ConstantValue extends Value {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.ByNameReferenceProperty(ConstantValue, this, "value", null, "Constants$Constant");
            if (arguments.length < 4) {
                throw new Error("new ConstantValue() cannot be invoked directly, please use 'model.rest.createConstantValue()'");
            }
        }
        get containerAsBasicAuthenticationScheme() {
            return super.getContainerAs(BasicAuthenticationScheme);
        }
        get containerAsImplicitMappingBody() {
            return super.getContainerAs(ImplicitMappingBody);
        }
        get containerAsOperationParameter() {
            return super.getContainerAs(OperationParameter);
        }
        get containerAsRestParameter() {
            return super.getContainerAs(RestParameter);
        }
        /**
         * In version 10.20.0: added optional
         */
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
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'password' property
         * of the parent BasicAuthenticationScheme element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createInBasicAuthenticationSchemeUnderPassword(container) {
            internal.createInVersionCheck(container.model, ConstantValue.structureTypeName, { start: "10.2.0" });
            return internal.instancehelpers.createElement(container, ConstantValue, "password", false);
        }
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'username' property
         * of the parent BasicAuthenticationScheme element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createInBasicAuthenticationSchemeUnderUsername(container) {
            internal.createInVersionCheck(container.model, ConstantValue.structureTypeName, { start: "10.2.0" });
            return internal.instancehelpers.createElement(container, ConstantValue, "username", false);
        }
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'testValue' property
         * of the parent ImplicitMappingBody element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInImplicitMappingBodyUnderTestValue(container) {
            internal.createInVersionCheck(container.model, ConstantValue.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, ConstantValue, "testValue", false);
        }
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'testValue' property
         * of the parent OperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createInOperationParameterUnderTestValue(container) {
            internal.createInVersionCheck(container.model, ConstantValue.structureTypeName, { start: "10.2.0" });
            return internal.instancehelpers.createElement(container, ConstantValue, "testValue", false);
        }
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'testValue' property
         * of the parent RestParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.17.0 and higher
         */
        static createInRestParameterUnderTestValue(container) {
            internal.createInVersionCheck(container.model, ConstantValue.structureTypeName, { start: "10.17.0" });
            return internal.instancehelpers.createElement(container, ConstantValue, "testValue", false);
        }
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConstantValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConstantValue.structureTypeName = "Rest$ConstantValue";
    ConstantValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.2.0",
        properties: {
            value: {
                required: {
                    currentValue: false,
                    changedIn: ["10.20.0"]
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.ConstantValue = ConstantValue;
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-odata-service-properties relevant section in reference guide}
     *
     * In version 10.0.0: removed experimental
     * In version 7.18.0: introduced
     */
    class ConsumedODataService extends domainmodels_1.domainmodels.RemoteEntitySourceDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__metadataReferences = new internal.PartListProperty(ConsumedODataService, this, "metadataReferences", []);
            /** @internal */
            this.__proxyType = new internal.EnumProperty(ConsumedODataService, this, "proxyType", microflows_1.microflows.RequestProxyType.DefaultProxy, microflows_1.microflows.RequestProxyType);
            /** @internal */
            this.__proxyHost = new internal.ByNameReferenceProperty(ConsumedODataService, this, "proxyHost", null, "Constants$Constant");
            /** @internal */
            this.__proxyPort = new internal.ByNameReferenceProperty(ConsumedODataService, this, "proxyPort", null, "Constants$Constant");
            /** @internal */
            this.__proxyUsername = new internal.ByNameReferenceProperty(ConsumedODataService, this, "proxyUsername", null, "Constants$Constant");
            /** @internal */
            this.__proxyPassword = new internal.ByNameReferenceProperty(ConsumedODataService, this, "proxyPassword", null, "Constants$Constant");
            /** @internal */
            this.__httpConfiguration = new internal.PartProperty(ConsumedODataService, this, "httpConfiguration", null, true);
            /** @internal */
            this.__headersMicroflow = new internal.ByNameReferenceProperty(ConsumedODataService, this, "headersMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__configurationMicroflow = new internal.ByNameReferenceProperty(ConsumedODataService, this, "configurationMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__timeoutModel = new internal.PartProperty(ConsumedODataService, this, "timeoutModel", null, true);
            /** @internal */
            this.__timeoutExpression = new internal.PrimitiveProperty(ConsumedODataService, this, "timeoutExpression", "300", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__oDataVersion = new internal.EnumProperty(ConsumedODataService, this, "oDataVersion", ODataVersion.OData3, ODataVersion);
            /** @internal */
            this.__versionApiMockResults = new internal.PrimitiveProperty(ConsumedODataService, this, "versionApiMockResults", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__serviceId = new internal.PrimitiveProperty(ConsumedODataService, this, "serviceId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__lastUpdated = new internal.PrimitiveProperty(ConsumedODataService, this, "lastUpdated", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__useQuerySegment = new internal.PrimitiveProperty(ConsumedODataService, this, "useQuerySegment", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__errorHandlingMicroflow = new internal.ByNameReferenceProperty(ConsumedODataService, this, "errorHandlingMicroflow", null, "Microflows$Microflow");
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 8.6.0: introduced
         */
        get metadataReferences() {
            return this.__metadataReferences.get();
        }
        get proxyType() {
            return this.__proxyType.get();
        }
        set proxyType(newValue) {
            this.__proxyType.set(newValue);
        }
        get proxyHost() {
            return this.__proxyHost.get();
        }
        set proxyHost(newValue) {
            this.__proxyHost.set(newValue);
        }
        get proxyHostQualifiedName() {
            return this.__proxyHost.qualifiedName();
        }
        get proxyPort() {
            return this.__proxyPort.get();
        }
        set proxyPort(newValue) {
            this.__proxyPort.set(newValue);
        }
        get proxyPortQualifiedName() {
            return this.__proxyPort.qualifiedName();
        }
        get proxyUsername() {
            return this.__proxyUsername.get();
        }
        set proxyUsername(newValue) {
            this.__proxyUsername.set(newValue);
        }
        get proxyUsernameQualifiedName() {
            return this.__proxyUsername.qualifiedName();
        }
        get proxyPassword() {
            return this.__proxyPassword.get();
        }
        set proxyPassword(newValue) {
            this.__proxyPassword.set(newValue);
        }
        get proxyPasswordQualifiedName() {
            return this.__proxyPassword.qualifiedName();
        }
        /**
         * In version 8.0.0: introduced
         */
        get httpConfiguration() {
            return this.__httpConfiguration.get();
        }
        set httpConfiguration(newValue) {
            this.__httpConfiguration.set(newValue);
        }
        /**
         * In version 10.12.0: deleted
         * In version 8.4.0: introduced
         */
        get headersMicroflow() {
            return this.__headersMicroflow.get();
        }
        set headersMicroflow(newValue) {
            this.__headersMicroflow.set(newValue);
        }
        get headersMicroflowQualifiedName() {
            return this.__headersMicroflow.qualifiedName();
        }
        /**
         * In version 10.12.0: introduced
         */
        get configurationMicroflow() {
            return this.__configurationMicroflow.get();
        }
        set configurationMicroflow(newValue) {
            this.__configurationMicroflow.set(newValue);
        }
        get configurationMicroflowQualifiedName() {
            return this.__configurationMicroflow.qualifiedName();
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 8.5.0: introduced
         */
        get timeoutModel() {
            return this.__timeoutModel.get();
        }
        set timeoutModel(newValue) {
            this.__timeoutModel.set(newValue);
        }
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.5.0: introduced
         */
        get timeoutExpression() {
            return this.__timeoutExpression.get();
        }
        set timeoutExpression(newValue) {
            this.__timeoutExpression.set(newValue);
        }
        /**
         * In version 8.6.0: introduced
         */
        get oDataVersion() {
            return this.__oDataVersion.get();
        }
        set oDataVersion(newValue) {
            this.__oDataVersion.set(newValue);
        }
        /**
         * In version 8.14.0: deleted
         * In version 8.13.0: introduced
         */
        get versionApiMockResults() {
            return this.__versionApiMockResults.get();
        }
        set versionApiMockResults(newValue) {
            this.__versionApiMockResults.set(newValue);
        }
        /**
         * In version 8.14.0: deleted
         * In version 8.0.0: introduced
         */
        get serviceId() {
            return this.__serviceId.get();
        }
        set serviceId(newValue) {
            this.__serviceId.set(newValue);
        }
        /**
         * In version 8.14.0: introduced
         */
        get lastUpdated() {
            return this.__lastUpdated.get();
        }
        set lastUpdated(newValue) {
            this.__lastUpdated.set(newValue);
        }
        /**
         * In version 9.6.0: introduced
         */
        get useQuerySegment() {
            return this.__useQuerySegment.get();
        }
        set useQuerySegment(newValue) {
            this.__useQuerySegment.set(newValue);
        }
        /**
         * In version 9.6.0: introduced
         */
        get errorHandlingMicroflow() {
            return this.__errorHandlingMicroflow.get();
        }
        set errorHandlingMicroflow(newValue) {
            this.__errorHandlingMicroflow.set(newValue);
        }
        get errorHandlingMicroflowQualifiedName() {
            return this.__errorHandlingMicroflow.qualifiedName();
        }
        /**
         * Creates a new ConsumedODataService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ConsumedODataService);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__httpConfiguration.isAvailable) {
                this.httpConfiguration = microflows_1.microflows.HttpConfiguration.create(this.model);
            }
            if (this.__oDataVersion.isAvailable) {
                this.oDataVersion = ODataVersion.OData3;
            }
            this.proxyType = microflows_1.microflows.RequestProxyType.DefaultProxy;
            if (this.__timeoutExpression.isAvailable) {
                this.timeoutExpression = "300";
            }
            if (this.__timeoutModel.isAvailable) {
                this.timeoutModel = ((integerLiteral) => {
                    integerLiteral.value = 300;
                    return integerLiteral;
                })(expressions_1.expressions.IntegerLiteral.create(this.model));
            }
        }
    }
    ConsumedODataService.structureTypeName = "Rest$ConsumedODataService";
    ConsumedODataService.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.18.0",
        properties: {
            metadataReferences: {
                introduced: "8.6.0"
            },
            httpConfiguration: {
                introduced: "8.0.0",
                required: {
                    currentValue: true
                }
            },
            headersMicroflow: {
                introduced: "8.4.0",
                deleted: "10.12.0",
                deletionMessage: "Replaced by configurationMicroflow"
            },
            configurationMicroflow: {
                introduced: "10.12.0"
            },
            timeoutModel: {
                introduced: "8.5.0",
                deleted: "9.8.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            },
            timeoutExpression: {
                introduced: "8.5.0"
            },
            oDataVersion: {
                introduced: "8.6.0"
            },
            versionApiMockResults: {
                introduced: "8.13.0",
                deleted: "8.14.0",
                deletionMessage: "Use real payload from the Version API"
            },
            serviceId: {
                introduced: "8.0.0",
                deleted: "8.14.0",
                deletionMessage: null
            },
            lastUpdated: {
                introduced: "8.14.0",
                public: {
                    currentValue: true
                }
            },
            useQuerySegment: {
                introduced: "9.6.0"
            },
            errorHandlingMicroflow: {
                introduced: "9.6.0"
            }
        },
        experimental: {
            currentValue: true,
            changedIn: ["10.0.0"]
        }
    }, internal.StructureType.ModelUnit);
    rest.ConsumedODataService = ConsumedODataService;
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service relevant section in reference guide}
     *
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class ConsumedRestService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__openApiFile = new internal.PartProperty(ConsumedRestService, this, "openApiFile", null, false);
            /** @internal */
            this.__baseUrl = new internal.PartProperty(ConsumedRestService, this, "baseUrl", null, true);
            /** @internal */
            this.__authenticationScheme = new internal.PartProperty(ConsumedRestService, this, "authenticationScheme", null, false);
            /** @internal */
            this.__operations = new internal.PartListProperty(ConsumedRestService, this, "operations", []);
            /** @internal */
            this.__baseUrlParameter = new internal.PartProperty(ConsumedRestService, this, "baseUrlParameter", null, false);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 10.21.0: introduced
         */
        get openApiFile() {
            return this.__openApiFile.get();
        }
        set openApiFile(newValue) {
            this.__openApiFile.set(newValue);
        }
        get baseUrl() {
            return this.__baseUrl.get();
        }
        set baseUrl(newValue) {
            this.__baseUrl.set(newValue);
        }
        /**
         * In version 10.2.0: introduced
         */
        get authenticationScheme() {
            return this.__authenticationScheme.get();
        }
        set authenticationScheme(newValue) {
            this.__authenticationScheme.set(newValue);
        }
        get operations() {
            return this.__operations.get();
        }
        /**
         * In version 10.17.0: introduced
         */
        get baseUrlParameter() {
            return this.__baseUrlParameter.get();
        }
        set baseUrlParameter(newValue) {
            this.__baseUrlParameter.set(newValue);
        }
        /**
         * Creates a new ConsumedRestService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ConsumedRestService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.baseUrl = ValueTemplate.create(this.model);
        }
    }
    ConsumedRestService.structureTypeName = "Rest$ConsumedRestService";
    ConsumedRestService.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.1.0",
        properties: {
            openApiFile: {
                introduced: "10.21.0"
            },
            baseUrl: {
                required: {
                    currentValue: true
                }
            },
            authenticationScheme: {
                introduced: "10.2.0"
            },
            operations: {
                public: {
                    currentValue: true
                }
            },
            baseUrlParameter: {
                introduced: "10.17.0",
                public: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.ModelUnit);
    rest.ConsumedRestService = ConsumedRestService;
    /**
     * See: {@link https://docs.mendix.com/refguide/cors-settings relevant section in reference guide}
     *
     * In version 7.18.0: introduced
     */
    class CorsConfiguration extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__allowedOrigins = new internal.ByNameReferenceProperty(CorsConfiguration, this, "allowedOrigins", null, "Constants$Constant");
            /** @internal */
            this.__allowAuthentication = new internal.PrimitiveProperty(CorsConfiguration, this, "allowAuthentication", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__maxAge = new internal.ByNameReferenceProperty(CorsConfiguration, this, "maxAge", null, "Constants$Constant");
            if (arguments.length < 4) {
                throw new Error("new CorsConfiguration() cannot be invoked directly, please use 'model.rest.createCorsConfiguration()'");
            }
        }
        get containerAsPublishedRestService() {
            return super.getContainerAs(PublishedRestService);
        }
        get allowedOrigins() {
            return this.__allowedOrigins.get();
        }
        set allowedOrigins(newValue) {
            this.__allowedOrigins.set(newValue);
        }
        get allowedOriginsQualifiedName() {
            return this.__allowedOrigins.qualifiedName();
        }
        get allowAuthentication() {
            return this.__allowAuthentication.get();
        }
        set allowAuthentication(newValue) {
            this.__allowAuthentication.set(newValue);
        }
        get maxAge() {
            return this.__maxAge.get();
        }
        set maxAge(newValue) {
            this.__maxAge.set(newValue);
        }
        get maxAgeQualifiedName() {
            return this.__maxAge.qualifiedName();
        }
        /**
         * Creates and returns a new CorsConfiguration instance in the SDK and on the server.
         * The new CorsConfiguration will be automatically stored in the 'corsConfiguration' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.18.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CorsConfiguration.structureTypeName, { start: "7.18.0" });
            return internal.instancehelpers.createElement(container, CorsConfiguration, "corsConfiguration", false);
        }
        /**
         * Creates and returns a new CorsConfiguration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CorsConfiguration);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.allowAuthentication = true;
        }
    }
    CorsConfiguration.structureTypeName = "Rest$CorsConfiguration";
    CorsConfiguration.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.18.0"
    }, internal.StructureType.Element);
    rest.CorsConfiguration = CorsConfiguration;
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service/#add-headers relevant section in reference guide}
     *
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class HeaderWithValueTemplate extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(HeaderWithValueTemplate, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__value = new internal.PartProperty(HeaderWithValueTemplate, this, "value", null, true);
            if (arguments.length < 4) {
                throw new Error("new HeaderWithValueTemplate() cannot be invoked directly, please use 'model.rest.createHeaderWithValueTemplate()'");
            }
        }
        get containerAsRestOperation() {
            return super.getContainerAs(RestOperation);
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
         * Creates and returns a new HeaderWithValueTemplate instance in the SDK and on the server.
         * The new HeaderWithValueTemplate will be automatically stored in the 'headers' property
         * of the parent RestOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, HeaderWithValueTemplate.structureTypeName, { start: "10.1.0" });
            return internal.instancehelpers.createElement(container, HeaderWithValueTemplate, "headers", true);
        }
        /**
         * Creates and returns a new HeaderWithValueTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, HeaderWithValueTemplate);
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.value = ValueTemplate.create(this.model);
        }
    }
    HeaderWithValueTemplate.structureTypeName = "Rest$HeaderWithValueTemplate";
    HeaderWithValueTemplate.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.1.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            value: {
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
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.HeaderWithValueTemplate = HeaderWithValueTemplate;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    class ImplicitMappingBody extends Body {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__rootMappingElement = new internal.PartProperty(ImplicitMappingBody, this, "rootMappingElement", null, true);
            /** @internal */
            this.__testValue = new internal.PartProperty(ImplicitMappingBody, this, "testValue", null, true);
            if (arguments.length < 4) {
                throw new Error("new ImplicitMappingBody() cannot be invoked directly, please use 'model.rest.createImplicitMappingBody()'");
            }
        }
        get containerAsRestOperationMethodWithBody() {
            return super.getContainerAs(RestOperationMethodWithBody);
        }
        get rootMappingElement() {
            return this.__rootMappingElement.get();
        }
        set rootMappingElement(newValue) {
            this.__rootMappingElement.set(newValue);
        }
        get testValue() {
            return this.__testValue.get();
        }
        set testValue(newValue) {
            this.__testValue.set(newValue);
        }
        /**
         * Creates and returns a new ImplicitMappingBody instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImplicitMappingBody);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.rootMappingElement = exportmappings_1.exportmappings.ExportObjectMappingElement.create(this.model);
            this.testValue = StringValue.create(this.model);
        }
    }
    ImplicitMappingBody.structureTypeName = "Rest$ImplicitMappingBody";
    ImplicitMappingBody.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            rootMappingElement: {
                required: {
                    currentValue: true
                }
            },
            testValue: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.ImplicitMappingBody = ImplicitMappingBody;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.3.0: introduced
     */
    class RestOperationResponseHandling extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__statusCode = new internal.PrimitiveProperty(RestOperationResponseHandling, this, "statusCode", 200, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__contentType = new internal.PrimitiveProperty(RestOperationResponseHandling, this, "contentType", "application/json", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new RestOperationResponseHandling() cannot be invoked directly, please use 'model.rest.createRestOperationResponseHandling()'");
            }
        }
        get containerAsRestOperation() {
            return super.getContainerAs(RestOperation);
        }
        get statusCode() {
            return this.__statusCode.get();
        }
        set statusCode(newValue) {
            this.__statusCode.set(newValue);
        }
        get contentType() {
            return this.__contentType.get();
        }
        set contentType(newValue) {
            this.__contentType.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.contentType = "application/json";
            this.statusCode = 200;
        }
    }
    RestOperationResponseHandling.structureTypeName = "Rest$RestOperationResponseHandling";
    RestOperationResponseHandling.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.3.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.RestOperationResponseHandling = RestOperationResponseHandling;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.3.0: introduced
     */
    class ImplicitMappingResponseHandling extends RestOperationResponseHandling {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__rootMappingElement = new internal.PartProperty(ImplicitMappingResponseHandling, this, "rootMappingElement", null, true);
            if (arguments.length < 4) {
                throw new Error("new ImplicitMappingResponseHandling() cannot be invoked directly, please use 'model.rest.createImplicitMappingResponseHandling()'");
            }
        }
        get containerAsRestOperation() {
            return super.getContainerAs(RestOperation);
        }
        get rootMappingElement() {
            return this.__rootMappingElement.get();
        }
        set rootMappingElement(newValue) {
            this.__rootMappingElement.set(newValue);
        }
        /**
         * Creates and returns a new ImplicitMappingResponseHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImplicitMappingResponseHandling);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.rootMappingElement = importmappings_1.importmappings.ImportObjectMappingElement.create(this.model);
        }
    }
    ImplicitMappingResponseHandling.structureTypeName = "Rest$ImplicitMappingResponseHandling";
    ImplicitMappingResponseHandling.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.3.0",
        properties: {
            rootMappingElement: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.ImplicitMappingResponseHandling = ImplicitMappingResponseHandling;
    /**
     * In version 11.0.0: introduced
     */
    class JsonBody extends Body {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(JsonBody, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new JsonBody() cannot be invoked directly, please use 'model.rest.createJsonBody()'");
            }
        }
        get containerAsRestOperationMethodWithBody() {
            return super.getContainerAs(RestOperationMethodWithBody);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new JsonBody instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, JsonBody);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.value = "";
        }
    }
    JsonBody.structureTypeName = "Rest$JsonBody";
    JsonBody.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0"
    }, internal.StructureType.Element);
    rest.JsonBody = JsonBody;
    /**
     * In version 8.6.0: introduced
     */
    class MetadataReference extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__uri = new internal.PrimitiveProperty(MetadataReference, this, "uri", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__metadata = new internal.PrimitiveProperty(MetadataReference, this, "metadata", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__metadataReferences = new internal.PartListProperty(MetadataReference, this, "metadataReferences", []);
            if (arguments.length < 4) {
                throw new Error("new MetadataReference() cannot be invoked directly, please use 'model.rest.createMetadataReference()'");
            }
        }
        get containerAsConsumedKafkaService() {
            return super.getContainerAs(kafka_1.kafka.ConsumedKafkaService);
        }
        get containerAsConsumedODataService() {
            return super.getContainerAs(ConsumedODataService);
        }
        get containerAsMetadataReference() {
            return super.getContainerAs(MetadataReference);
        }
        get uri() {
            return this.__uri.get();
        }
        set uri(newValue) {
            this.__uri.set(newValue);
        }
        get metadata() {
            return this.__metadata.get();
        }
        set metadata(newValue) {
            this.__metadata.set(newValue);
        }
        /**
         * In version 8.8.0: introduced
         */
        get metadataReferences() {
            return this.__metadataReferences.get();
        }
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 to 8.7.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MetadataReference.structureTypeName, { start: "8.6.0", end: "8.7.0" });
            return internal.instancehelpers.createElement(container, MetadataReference, "metadataReferences", true);
        }
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent kafka.ConsumedKafkaService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 to 10.1.0
         */
        static createInConsumedKafkaServiceUnderMetadataReferences(container) {
            internal.createInVersionCheck(container.model, MetadataReference.structureTypeName, { start: "8.11.0", end: "10.1.0" });
            return internal.instancehelpers.createElement(container, MetadataReference, "metadataReferences", true);
        }
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 and higher
         */
        static createInConsumedODataServiceUnderMetadataReferences(container) {
            internal.createInVersionCheck(container.model, MetadataReference.structureTypeName, { start: "8.6.0" });
            return internal.instancehelpers.createElement(container, MetadataReference, "metadataReferences", true);
        }
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent MetadataReference element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createInMetadataReferenceUnderMetadataReferences(container) {
            internal.createInVersionCheck(container.model, MetadataReference.structureTypeName, { start: "8.8.0" });
            return internal.instancehelpers.createElement(container, MetadataReference, "metadataReferences", true);
        }
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MetadataReference);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    MetadataReference.structureTypeName = "Rest$MetadataReference";
    MetadataReference.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.6.0",
        properties: {
            metadataReferences: {
                introduced: "8.8.0"
            }
        }
    }, internal.StructureType.Element);
    rest.MetadataReference = MetadataReference;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.3.0: introduced
     */
    class NoResponseHandling extends RestOperationResponseHandling {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new NoResponseHandling() cannot be invoked directly, please use 'model.rest.createNoResponseHandling()'");
            }
        }
        get containerAsRestOperation() {
            return super.getContainerAs(RestOperation);
        }
        /**
         * Creates and returns a new NoResponseHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NoResponseHandling);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NoResponseHandling.structureTypeName = "Rest$NoResponseHandling";
    NoResponseHandling.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.3.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.NoResponseHandling = NoResponseHandling;
    /**
     * In version 10.8.0: introduced
     */
    class ODataEntityTypeSource extends domainmodels_1.domainmodels.RemoteEntitySource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__sourceDocument = new internal.ByNameReferenceProperty(ODataEntityTypeSource, this, "sourceDocument", null, "Rest$ConsumedODataService");
            /** @internal */
            this.__entityTypeName = new internal.PrimitiveProperty(ODataEntityTypeSource, this, "entityTypeName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__key = new internal.PartProperty(ODataEntityTypeSource, this, "key", null, false);
            /** @internal */
            this.__isOpen = new internal.PrimitiveProperty(ODataEntityTypeSource, this, "isOpen", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ODataEntityTypeSource() cannot be invoked directly, please use 'model.rest.createODataEntityTypeSource()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(domainmodels_1.domainmodels.Entity);
        }
        get sourceDocument() {
            return this.__sourceDocument.get();
        }
        set sourceDocument(newValue) {
            this.__sourceDocument.set(newValue);
        }
        get sourceDocumentQualifiedName() {
            return this.__sourceDocument.qualifiedName();
        }
        get entityTypeName() {
            return this.__entityTypeName.get();
        }
        set entityTypeName(newValue) {
            this.__entityTypeName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get key() {
            return this.__key.get();
        }
        set key(newValue) {
            this.__key.set(newValue);
        }
        /**
         * In version 11.5.0: introduced
         */
        get isOpen() {
            return this.__isOpen.get();
        }
        set isOpen(newValue) {
            this.__isOpen.set(newValue);
        }
        /**
         * Creates and returns a new ODataEntityTypeSource instance in the SDK and on the server.
         * The new ODataEntityTypeSource will be automatically stored in the 'source' property
         * of the parent domainmodels.Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.8.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataEntityTypeSource.structureTypeName, { start: "10.8.0" });
            return internal.instancehelpers.createElement(container, ODataEntityTypeSource, "source", false);
        }
        /**
         * Creates and returns a new ODataEntityTypeSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataEntityTypeSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__isOpen.isAvailable) {
                this.isOpen = false;
            }
        }
    }
    ODataEntityTypeSource.structureTypeName = "Rest$ODataEntityTypeSource";
    ODataEntityTypeSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.8.0",
        properties: {
            key: {
                public: {
                    currentValue: true
                }
            },
            isOpen: {
                introduced: "11.5.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.ODataEntityTypeSource = ODataEntityTypeSource;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.9.0: introduced
     */
    class ODataKey extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__parts = new internal.PartListProperty(ODataKey, this, "parts", []);
            if (arguments.length < 4) {
                throw new Error("new ODataKey() cannot be invoked directly, please use 'model.rest.createODataKey()'");
            }
        }
        get containerAsODataEntityTypeSource() {
            return super.getContainerAs(ODataEntityTypeSource);
        }
        get containerAsODataRemoteEntitySource() {
            return super.getContainerAs(ODataRemoteEntitySource);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get parts() {
            return this.__parts.get();
        }
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * The new ODataKey will be automatically stored in the 'key' property
         * of the parent ODataRemoteEntitySource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 to 10.7.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataKey.structureTypeName, { start: "8.11.0", end: "10.7.0" });
            return internal.instancehelpers.createElement(container, ODataKey, "key", false);
        }
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * The new ODataKey will be automatically stored in the 'key' property
         * of the parent ODataEntityTypeSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.8.0 and higher
         */
        static createInODataEntityTypeSourceUnderKey(container) {
            internal.createInVersionCheck(container.model, ODataKey.structureTypeName, { start: "10.8.0" });
            return internal.instancehelpers.createElement(container, ODataKey, "key", false);
        }
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * The new ODataKey will be automatically stored in the 'key' property
         * of the parent ODataRemoteEntitySource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createInODataRemoteEntitySourceUnderKey(container) {
            internal.createInVersionCheck(container.model, ODataKey.structureTypeName, { start: "8.11.0" });
            return internal.instancehelpers.createElement(container, ODataKey, "key", false);
        }
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataKey);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ODataKey.structureTypeName = "Rest$ODataKey";
    ODataKey.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.9.0",
        properties: {
            parts: {
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
    rest.ODataKey = ODataKey;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.9.0: introduced
     */
    class ODataKeyPart extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(ODataKeyPart, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entityKeyPartName = new internal.PrimitiveProperty(ODataKeyPart, this, "entityKeyPartName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__type = new internal.PartProperty(ODataKeyPart, this, "type", null, true);
            /** @internal */
            this.__remoteType = new internal.PrimitiveProperty(ODataKeyPart, this, "remoteType", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__filterable = new internal.PrimitiveProperty(ODataKeyPart, this, "filterable", true, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ODataKeyPart() cannot be invoked directly, please use 'model.rest.createODataKeyPart()'");
            }
        }
        get containerAsODataKey() {
            return super.getContainerAs(ODataKey);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get entityKeyPartName() {
            return this.__entityKeyPartName.get();
        }
        set entityKeyPartName(newValue) {
            this.__entityKeyPartName.set(newValue);
        }
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * In version 9.9.0: introduced
         */
        get remoteType() {
            return this.__remoteType.get();
        }
        set remoteType(newValue) {
            this.__remoteType.set(newValue);
        }
        /**
         * In version 9.16.0: introduced
         */
        get filterable() {
            return this.__filterable.get();
        }
        set filterable(newValue) {
            this.__filterable.set(newValue);
        }
        /**
         * Creates and returns a new ODataKeyPart instance in the SDK and on the server.
         * The new ODataKeyPart will be automatically stored in the 'parts' property
         * of the parent ODataKey element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataKeyPart.structureTypeName, { start: "8.9.0" });
            return internal.instancehelpers.createElement(container, ODataKeyPart, "parts", true);
        }
        /**
         * Creates and returns a new ODataKeyPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataKeyPart);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__filterable.isAvailable) {
                this.filterable = true;
            }
            this.type = domainmodels_1.domainmodels.LongAttributeType.create(this.model);
        }
    }
    ODataKeyPart.structureTypeName = "Rest$ODataKeyPart";
    ODataKeyPart.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.9.0",
        properties: {
            type: {
                public: {
                    currentValue: true
                },
                required: {
                    currentValue: true
                }
            },
            remoteType: {
                introduced: "9.9.0"
            },
            filterable: {
                introduced: "9.16.0"
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.ODataKeyPart = ODataKeyPart;
    /**
     * In version 11.6.0: introduced
     */
    class ODataMappedPrimitiveCollectionValue extends domainmodels_1.domainmodels.MappedValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__remoteName = new internal.PrimitiveProperty(ODataMappedPrimitiveCollectionValue, this, "remoteName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__remoteType = new internal.PrimitiveProperty(ODataMappedPrimitiveCollectionValue, this, "remoteType", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ODataMappedPrimitiveCollectionValue() cannot be invoked directly, please use 'model.rest.createODataMappedPrimitiveCollectionValue()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(domainmodels_1.domainmodels.Attribute);
        }
        get remoteName() {
            return this.__remoteName.get();
        }
        set remoteName(newValue) {
            this.__remoteName.set(newValue);
        }
        get remoteType() {
            return this.__remoteType.get();
        }
        set remoteType(newValue) {
            this.__remoteType.set(newValue);
        }
        /**
         * Creates and returns a new ODataMappedPrimitiveCollectionValue instance in the SDK and on the server.
         * The new ODataMappedPrimitiveCollectionValue will be automatically stored in the 'value' property
         * of the parent domainmodels.Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataMappedPrimitiveCollectionValue.structureTypeName, { start: "11.6.0" });
            return internal.instancehelpers.createElement(container, ODataMappedPrimitiveCollectionValue, "value", false);
        }
        /**
         * Creates and returns a new ODataMappedPrimitiveCollectionValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataMappedPrimitiveCollectionValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ODataMappedPrimitiveCollectionValue.structureTypeName = "Rest$ODataMappedPrimitiveCollectionValue";
    ODataMappedPrimitiveCollectionValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.6.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.ODataMappedPrimitiveCollectionValue = ODataMappedPrimitiveCollectionValue;
    /**
     * In version 8.10.0: introduced
     */
    class ODataMappedValue extends domainmodels_1.domainmodels.MappedValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__remoteName = new internal.PrimitiveProperty(ODataMappedValue, this, "remoteName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__remoteType = new internal.PrimitiveProperty(ODataMappedValue, this, "remoteType", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__filterable = new internal.PrimitiveProperty(ODataMappedValue, this, "filterable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__sortable = new internal.PrimitiveProperty(ODataMappedValue, this, "sortable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__representsStream = new internal.PrimitiveProperty(ODataMappedValue, this, "representsStream", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__updatable = new internal.PrimitiveProperty(ODataMappedValue, this, "updatable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__creatable = new internal.PrimitiveProperty(ODataMappedValue, this, "creatable", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ODataMappedValue() cannot be invoked directly, please use 'model.rest.createODataMappedValue()'");
            }
        }
        get containerAsAttribute() {
            return super.getContainerAs(domainmodels_1.domainmodels.Attribute);
        }
        get remoteName() {
            return this.__remoteName.get();
        }
        set remoteName(newValue) {
            this.__remoteName.set(newValue);
        }
        /**
         * In version 8.15.0: introduced
         */
        get remoteType() {
            return this.__remoteType.get();
        }
        set remoteType(newValue) {
            this.__remoteType.set(newValue);
        }
        /**
         * In version 8.16.0: introduced
         */
        get filterable() {
            return this.__filterable.get();
        }
        set filterable(newValue) {
            this.__filterable.set(newValue);
        }
        /**
         * In version 8.16.0: introduced
         */
        get sortable() {
            return this.__sortable.get();
        }
        set sortable(newValue) {
            this.__sortable.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get representsStream() {
            return this.__representsStream.get();
        }
        set representsStream(newValue) {
            this.__representsStream.set(newValue);
        }
        /**
         * In version 9.6.0: introduced
         */
        get updatable() {
            return this.__updatable.get();
        }
        set updatable(newValue) {
            this.__updatable.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get creatable() {
            return this.__creatable.get();
        }
        set creatable(newValue) {
            this.__creatable.set(newValue);
        }
        /**
         * Creates and returns a new ODataMappedValue instance in the SDK and on the server.
         * The new ODataMappedValue will be automatically stored in the 'value' property
         * of the parent domainmodels.Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataMappedValue.structureTypeName, { start: "8.10.0" });
            return internal.instancehelpers.createElement(container, ODataMappedValue, "value", false);
        }
        /**
         * Creates and returns a new ODataMappedValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataMappedValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__creatable.isAvailable) {
                this.creatable = false;
            }
            if (this.__filterable.isAvailable) {
                this.filterable = true;
            }
            if (this.__representsStream.isAvailable) {
                this.representsStream = false;
            }
            if (this.__sortable.isAvailable) {
                this.sortable = true;
            }
            if (this.__updatable.isAvailable) {
                this.updatable = false;
            }
        }
    }
    ODataMappedValue.structureTypeName = "Rest$ODataMappedValue";
    ODataMappedValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        properties: {
            remoteType: {
                introduced: "8.15.0"
            },
            filterable: {
                introduced: "8.16.0",
                public: {
                    currentValue: true
                }
            },
            sortable: {
                introduced: "8.16.0",
                public: {
                    currentValue: true
                }
            },
            representsStream: {
                introduced: "9.11.0",
                public: {
                    currentValue: true
                }
            },
            updatable: {
                introduced: "9.6.0"
            },
            creatable: {
                introduced: "9.11.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.ODataMappedValue = ODataMappedValue;
    /**
     * In version 11.6.0: introduced
     */
    class ODataPrimitiveCollectionAssociationSource extends domainmodels_1.domainmodels.RemoteAssociationSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ODataPrimitiveCollectionAssociationSource() cannot be invoked directly, please use 'model.rest.createODataPrimitiveCollectionAssociationSource()'");
            }
        }
        get containerAsAssociationBase() {
            return super.getContainerAs(domainmodels_1.domainmodels.AssociationBase);
        }
        /**
         * Creates and returns a new ODataPrimitiveCollectionAssociationSource instance in the SDK and on the server.
         * The new ODataPrimitiveCollectionAssociationSource will be automatically stored in the 'source' property
         * of the parent domainmodels.AssociationBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataPrimitiveCollectionAssociationSource.structureTypeName, {
                start: "11.6.0"
            });
            return internal.instancehelpers.createElement(container, ODataPrimitiveCollectionAssociationSource, "source", false);
        }
        /**
         * Creates and returns a new ODataPrimitiveCollectionAssociationSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataPrimitiveCollectionAssociationSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ODataPrimitiveCollectionAssociationSource.structureTypeName = "Rest$ODataPrimitiveCollectionAssociationSource";
    ODataPrimitiveCollectionAssociationSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.6.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.ODataPrimitiveCollectionAssociationSource = ODataPrimitiveCollectionAssociationSource;
    /**
     * In version 11.6.0: introduced
     */
    class ODataPrimitiveCollectionEntitySource extends domainmodels_1.domainmodels.RemoteEntitySource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__sourceDocument = new internal.ByNameReferenceProperty(ODataPrimitiveCollectionEntitySource, this, "sourceDocument", null, "Rest$ConsumedODataService");
            if (arguments.length < 4) {
                throw new Error("new ODataPrimitiveCollectionEntitySource() cannot be invoked directly, please use 'model.rest.createODataPrimitiveCollectionEntitySource()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(domainmodels_1.domainmodels.Entity);
        }
        get sourceDocument() {
            return this.__sourceDocument.get();
        }
        set sourceDocument(newValue) {
            this.__sourceDocument.set(newValue);
        }
        get sourceDocumentQualifiedName() {
            return this.__sourceDocument.qualifiedName();
        }
        /**
         * Creates and returns a new ODataPrimitiveCollectionEntitySource instance in the SDK and on the server.
         * The new ODataPrimitiveCollectionEntitySource will be automatically stored in the 'source' property
         * of the parent domainmodels.Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataPrimitiveCollectionEntitySource.structureTypeName, { start: "11.6.0" });
            return internal.instancehelpers.createElement(container, ODataPrimitiveCollectionEntitySource, "source", false);
        }
        /**
         * Creates and returns a new ODataPrimitiveCollectionEntitySource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataPrimitiveCollectionEntitySource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ODataPrimitiveCollectionEntitySource.structureTypeName = "Rest$ODataPrimitiveCollectionEntitySource";
    ODataPrimitiveCollectionEntitySource.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.6.0",
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.ODataPrimitiveCollectionEntitySource = ODataPrimitiveCollectionEntitySource;
    /**
     * In version 8.10.0: introduced
     */
    class ODataRemoteAssociationSource extends domainmodels_1.domainmodels.RemoteAssociationSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__remoteParentNavigationProperty = new internal.PrimitiveProperty(ODataRemoteAssociationSource, this, "remoteParentNavigationProperty", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__remoteChildNavigationProperty = new internal.PrimitiveProperty(ODataRemoteAssociationSource, this, "remoteChildNavigationProperty", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__navigability = new internal.EnumProperty(ODataRemoteAssociationSource, this, "navigability", AssociationNavigability.BothDirections, AssociationNavigability);
            /** @internal */
            this.__navigability2 = new internal.EnumProperty(ODataRemoteAssociationSource, this, "navigability2", domainmodels_1.domainmodels.Navigability.BothDirections, domainmodels_1.domainmodels.Navigability);
            /** @internal */
            this.__updatableFromChild = new internal.PrimitiveProperty(ODataRemoteAssociationSource, this, "updatableFromChild", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__updatableFromParent = new internal.PrimitiveProperty(ODataRemoteAssociationSource, this, "updatableFromParent", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__creatableFromChild = new internal.PrimitiveProperty(ODataRemoteAssociationSource, this, "creatableFromChild", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__creatableFromParent = new internal.PrimitiveProperty(ODataRemoteAssociationSource, this, "creatableFromParent", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ODataRemoteAssociationSource() cannot be invoked directly, please use 'model.rest.createODataRemoteAssociationSource()'");
            }
        }
        get containerAsAssociationBase() {
            return super.getContainerAs(domainmodels_1.domainmodels.AssociationBase);
        }
        get remoteParentNavigationProperty() {
            return this.__remoteParentNavigationProperty.get();
        }
        set remoteParentNavigationProperty(newValue) {
            this.__remoteParentNavigationProperty.set(newValue);
        }
        get remoteChildNavigationProperty() {
            return this.__remoteChildNavigationProperty.get();
        }
        set remoteChildNavigationProperty(newValue) {
            this.__remoteChildNavigationProperty.set(newValue);
        }
        /**
         * In version 9.14.0: deleted
         * In version 8.16.0: introduced
         */
        get navigability() {
            return this.__navigability.get();
        }
        set navigability(newValue) {
            this.__navigability.set(newValue);
        }
        /**
         * In version 9.14.0: introduced
         */
        get navigability2() {
            return this.__navigability2.get();
        }
        set navigability2(newValue) {
            this.__navigability2.set(newValue);
        }
        /**
         * In version 9.6.0: introduced
         */
        get updatableFromChild() {
            return this.__updatableFromChild.get();
        }
        set updatableFromChild(newValue) {
            this.__updatableFromChild.set(newValue);
        }
        /**
         * In version 9.6.0: introduced
         */
        get updatableFromParent() {
            return this.__updatableFromParent.get();
        }
        set updatableFromParent(newValue) {
            this.__updatableFromParent.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get creatableFromChild() {
            return this.__creatableFromChild.get();
        }
        set creatableFromChild(newValue) {
            this.__creatableFromChild.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get creatableFromParent() {
            return this.__creatableFromParent.get();
        }
        set creatableFromParent(newValue) {
            this.__creatableFromParent.set(newValue);
        }
        /**
         * Creates and returns a new ODataRemoteAssociationSource instance in the SDK and on the server.
         * The new ODataRemoteAssociationSource will be automatically stored in the 'source' property
         * of the parent domainmodels.AssociationBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataRemoteAssociationSource.structureTypeName, { start: "8.10.0" });
            return internal.instancehelpers.createElement(container, ODataRemoteAssociationSource, "source", false);
        }
        /**
         * Creates and returns a new ODataRemoteAssociationSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataRemoteAssociationSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__navigability.isAvailable) {
                this.navigability = AssociationNavigability.BothDirections;
            }
            if (this.__navigability2.isAvailable) {
                this.navigability2 = domainmodels_1.domainmodels.Navigability.BothDirections;
            }
        }
    }
    ODataRemoteAssociationSource.structureTypeName = "Rest$ODataRemoteAssociationSource";
    ODataRemoteAssociationSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        properties: {
            navigability: {
                introduced: "8.16.0",
                deleted: "9.14.0",
                deletionMessage: "Replaced by navigability2"
            },
            navigability2: {
                introduced: "9.14.0"
            },
            updatableFromChild: {
                introduced: "9.6.0"
            },
            updatableFromParent: {
                introduced: "9.6.0"
            },
            creatableFromChild: {
                introduced: "9.11.0"
            },
            creatableFromParent: {
                introduced: "9.11.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.ODataRemoteAssociationSource = ODataRemoteAssociationSource;
    /**
     * In version 8.10.0: introduced
     */
    class ODataRemoteEntitySource extends domainmodels_1.domainmodels.QueryBasedRemoteEntitySource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__sourceDocument = new internal.ByNameReferenceProperty(ODataRemoteEntitySource, this, "sourceDocument", null, "Rest$ConsumedODataService");
            /** @internal */
            this.__remoteName = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "remoteName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entityTypeName = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "entityTypeName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entitySet = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "entitySet", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entitySetName = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "entitySetName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__key = new internal.PartProperty(ODataRemoteEntitySource, this, "key", null, false);
            /** @internal */
            this.__countable = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "countable", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__creatable = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "creatable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__deletable = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "deletable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__topSupported = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "topSupported", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__skipSupported = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "skipSupported", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__createChangeLocally = new internal.PrimitiveProperty(ODataRemoteEntitySource, this, "createChangeLocally", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new ODataRemoteEntitySource() cannot be invoked directly, please use 'model.rest.createODataRemoteEntitySource()'");
            }
        }
        get containerAsEntity() {
            return super.getContainerAs(domainmodels_1.domainmodels.Entity);
        }
        get sourceDocument() {
            return this.__sourceDocument.get();
        }
        set sourceDocument(newValue) {
            this.__sourceDocument.set(newValue);
        }
        get sourceDocumentQualifiedName() {
            return this.__sourceDocument.qualifiedName();
        }
        /**
         * In version 9.5.0: deleted
         */
        get remoteName() {
            return this.__remoteName.get();
        }
        set remoteName(newValue) {
            this.__remoteName.set(newValue);
        }
        /**
         * In version 9.5.0: introduced
         */
        get entityTypeName() {
            return this.__entityTypeName.get();
        }
        set entityTypeName(newValue) {
            this.__entityTypeName.set(newValue);
        }
        /**
         * In version 9.5.0: deleted
         * In version 8.11.0: introduced
         */
        get entitySet() {
            return this.__entitySet.get();
        }
        set entitySet(newValue) {
            this.__entitySet.set(newValue);
        }
        /**
         * In version 9.5.0: introduced
         */
        get entitySetName() {
            return this.__entitySetName.get();
        }
        set entitySetName(newValue) {
            this.__entitySetName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.11.0: introduced
         */
        get key() {
            return this.__key.get();
        }
        set key(newValue) {
            this.__key.set(newValue);
        }
        /**
         * In version 8.16.0: introduced
         */
        get countable() {
            return this.__countable.get();
        }
        set countable(newValue) {
            this.__countable.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get creatable() {
            return this.__creatable.get();
        }
        set creatable(newValue) {
            this.__creatable.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get deletable() {
            return this.__deletable.get();
        }
        set deletable(newValue) {
            this.__deletable.set(newValue);
        }
        /**
         * In version 9.21.0: introduced
         */
        get topSupported() {
            return this.__topSupported.get();
        }
        set topSupported(newValue) {
            this.__topSupported.set(newValue);
        }
        /**
         * In version 9.21.0: introduced
         */
        get skipSupported() {
            return this.__skipSupported.get();
        }
        set skipSupported(newValue) {
            this.__skipSupported.set(newValue);
        }
        /**
         * In version 10.4.0: introduced
         */
        get createChangeLocally() {
            return this.__createChangeLocally.get();
        }
        set createChangeLocally(newValue) {
            this.__createChangeLocally.set(newValue);
        }
        /**
         * Creates and returns a new ODataRemoteEntitySource instance in the SDK and on the server.
         * The new ODataRemoteEntitySource will be automatically stored in the 'source' property
         * of the parent domainmodels.Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataRemoteEntitySource.structureTypeName, { start: "8.10.0" });
            return internal.instancehelpers.createElement(container, ODataRemoteEntitySource, "source", false);
        }
        /**
         * Creates and returns a new ODataRemoteEntitySource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataRemoteEntitySource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__countable.isAvailable) {
                this.countable = true;
            }
            if (this.__creatable.isAvailable) {
                this.creatable = false;
            }
            if (this.__createChangeLocally.isAvailable) {
                this.createChangeLocally = false;
            }
            if (this.__deletable.isAvailable) {
                this.deletable = false;
            }
            if (this.__skipSupported.isAvailable) {
                this.skipSupported = true;
            }
            if (this.__topSupported.isAvailable) {
                this.topSupported = true;
            }
        }
    }
    ODataRemoteEntitySource.structureTypeName = "Rest$ODataRemoteEntitySource";
    ODataRemoteEntitySource.versionInfo = new exports.StructureVersionInfo({
        introduced: "8.10.0",
        properties: {
            remoteName: {
                deleted: "9.5.0",
                deletionMessage: "The remote name is replaced by entity type name"
            },
            entityTypeName: {
                introduced: "9.5.0"
            },
            entitySet: {
                introduced: "8.11.0",
                deleted: "9.5.0",
                deletionMessage: "The entity set is replaced by entity set name"
            },
            entitySetName: {
                introduced: "9.5.0"
            },
            key: {
                introduced: "8.11.0",
                public: {
                    currentValue: true
                }
            },
            countable: {
                introduced: "8.16.0",
                public: {
                    currentValue: true
                }
            },
            creatable: {
                introduced: "9.11.0"
            },
            deletable: {
                introduced: "9.11.0"
            },
            topSupported: {
                introduced: "9.21.0"
            },
            skipSupported: {
                introduced: "9.21.0"
            },
            createChangeLocally: {
                introduced: "10.4.0"
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.ODataRemoteEntitySource = ODataRemoteEntitySource;
    /**
     * In version 10.2.0: introduced
     */
    class ODataRemoteEnumerationSource extends enumerations_1.enumerations.RemoteEnumerationSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__consumedODataService = new internal.ByNameReferenceProperty(ODataRemoteEnumerationSource, this, "consumedODataService", null, "Rest$ConsumedODataService");
            /** @internal */
            this.__remoteName = new internal.PrimitiveProperty(ODataRemoteEnumerationSource, this, "remoteName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ODataRemoteEnumerationSource() cannot be invoked directly, please use 'model.rest.createODataRemoteEnumerationSource()'");
            }
        }
        get containerAsEnumeration() {
            return super.getContainerAs(enumerations_1.enumerations.Enumeration);
        }
        get consumedODataService() {
            return this.__consumedODataService.get();
        }
        set consumedODataService(newValue) {
            this.__consumedODataService.set(newValue);
        }
        get consumedODataServiceQualifiedName() {
            return this.__consumedODataService.qualifiedName();
        }
        get remoteName() {
            return this.__remoteName.get();
        }
        set remoteName(newValue) {
            this.__remoteName.set(newValue);
        }
        /**
         * Creates and returns a new ODataRemoteEnumerationSource instance in the SDK and on the server.
         * The new ODataRemoteEnumerationSource will be automatically stored in the 'remoteSource' property
         * of the parent enumerations.Enumeration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataRemoteEnumerationSource.structureTypeName, { start: "10.2.0" });
            return internal.instancehelpers.createElement(container, ODataRemoteEnumerationSource, "remoteSource", false);
        }
        /**
         * Creates and returns a new ODataRemoteEnumerationSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataRemoteEnumerationSource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ODataRemoteEnumerationSource.structureTypeName = "Rest$ODataRemoteEnumerationSource";
    ODataRemoteEnumerationSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.2.0"
    }, internal.StructureType.Element);
    rest.ODataRemoteEnumerationSource = ODataRemoteEnumerationSource;
    /**
     * In version 10.12.0: introduced
     */
    class ODataRemoteEnumerationValue extends enumerations_1.enumerations.RemoteEnumerationValue {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__remoteName = new internal.PrimitiveProperty(ODataRemoteEnumerationValue, this, "remoteName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ODataRemoteEnumerationValue() cannot be invoked directly, please use 'model.rest.createODataRemoteEnumerationValue()'");
            }
        }
        get containerAsEnumerationValue() {
            return super.getContainerAs(enumerations_1.enumerations.EnumerationValue);
        }
        get remoteName() {
            return this.__remoteName.get();
        }
        set remoteName(newValue) {
            this.__remoteName.set(newValue);
        }
        /**
         * Creates and returns a new ODataRemoteEnumerationValue instance in the SDK and on the server.
         * The new ODataRemoteEnumerationValue will be automatically stored in the 'remoteValue' property
         * of the parent enumerations.EnumerationValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ODataRemoteEnumerationValue.structureTypeName, { start: "10.12.0" });
            return internal.instancehelpers.createElement(container, ODataRemoteEnumerationValue, "remoteValue", false);
        }
        /**
         * Creates and returns a new ODataRemoteEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ODataRemoteEnumerationValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ODataRemoteEnumerationValue.structureTypeName = "Rest$ODataRemoteEnumerationValue";
    ODataRemoteEnumerationValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.12.0"
    }, internal.StructureType.Element);
    rest.ODataRemoteEnumerationValue = ODataRemoteEnumerationValue;
    /**
     * In version 10.21.0: introduced
     */
    class OpenApiFile extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__content = new internal.PrimitiveProperty(OpenApiFile, this, "content", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new OpenApiFile() cannot be invoked directly, please use 'model.rest.createOpenApiFile()'");
            }
        }
        get containerAsConsumedRestService() {
            return super.getContainerAs(ConsumedRestService);
        }
        get content() {
            return this.__content.get();
        }
        set content(newValue) {
            this.__content.set(newValue);
        }
        /**
         * Creates and returns a new OpenApiFile instance in the SDK and on the server.
         * The new OpenApiFile will be automatically stored in the 'openApiFile' property
         * of the parent ConsumedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.21.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, OpenApiFile.structureTypeName, { start: "10.21.0" });
            return internal.instancehelpers.createElement(container, OpenApiFile, "openApiFile", false);
        }
        /**
         * Creates and returns a new OpenApiFile instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, OpenApiFile);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    OpenApiFile.structureTypeName = "Rest$OpenApiFile";
    OpenApiFile.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.21.0"
    }, internal.StructureType.Element);
    rest.OpenApiFile = OpenApiFile;
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service/#add-parameters relevant section in reference guide}
     *
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class OperationParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(OperationParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__dataType = new internal.PartProperty(OperationParameter, this, "dataType", null, true);
            /** @internal */
            this.__testValue = new internal.PartProperty(OperationParameter, this, "testValue", null, true);
            if (arguments.length < 4) {
                throw new Error("new OperationParameter() cannot be invoked directly, please use 'model.rest.createOperationParameter()'");
            }
        }
        get containerAsRestOperation() {
            return super.getContainerAs(RestOperation);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get dataType() {
            return this.__dataType.get();
        }
        set dataType(newValue) {
            this.__dataType.set(newValue);
        }
        get testValue() {
            return this.__testValue.get();
        }
        set testValue(newValue) {
            this.__testValue.set(newValue);
        }
        /**
         * Creates and returns a new OperationParameter instance in the SDK and on the server.
         * The new OperationParameter will be automatically stored in the 'parameters' property
         * of the parent RestOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, OperationParameter.structureTypeName, { start: "10.1.0" });
            return internal.instancehelpers.createElement(container, OperationParameter, "parameters", true);
        }
        /**
         * Creates and returns a new OperationParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, OperationParameter);
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
            this.dataType = datatypes_1.datatypes.StringType.create(this.model);
            this.testValue = StringValue.create(this.model);
        }
    }
    OperationParameter.structureTypeName = "Rest$OperationParameter";
    OperationParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.1.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            dataType: {
                required: {
                    currentValue: true
                }
            },
            testValue: {
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
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.OperationParameter = OperationParameter;
    /**
     * In version 11.0.0: introduced
     */
    class QueryParameterUsage extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new QueryParameterUsage() cannot be invoked directly, please use 'model.rest.createQueryParameterUsage()'");
            }
        }
        get containerAsQueryParameter() {
            return super.getContainerAs(QueryParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    QueryParameterUsage.structureTypeName = "Rest$QueryParameterUsage";
    QueryParameterUsage.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0"
    }, internal.StructureType.Element);
    rest.QueryParameterUsage = QueryParameterUsage;
    /**
     * In version 11.0.0: introduced
     */
    class OptionalQueryParameterUsage extends QueryParameterUsage {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__included = new internal.PrimitiveProperty(OptionalQueryParameterUsage, this, "included", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new OptionalQueryParameterUsage() cannot be invoked directly, please use 'model.rest.createOptionalQueryParameterUsage()'");
            }
        }
        get containerAsQueryParameter() {
            return super.getContainerAs(QueryParameter);
        }
        get included() {
            return this.__included.get();
        }
        set included(newValue) {
            this.__included.set(newValue);
        }
        /**
         * Creates and returns a new OptionalQueryParameterUsage instance in the SDK and on the server.
         * The new OptionalQueryParameterUsage will be automatically stored in the 'parameterUsage' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, OptionalQueryParameterUsage.structureTypeName, { start: "11.0.0" });
            return internal.instancehelpers.createElement(container, OptionalQueryParameterUsage, "parameterUsage", false);
        }
        /**
         * Creates and returns a new OptionalQueryParameterUsage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, OptionalQueryParameterUsage);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.included = false;
        }
    }
    OptionalQueryParameterUsage.structureTypeName = "Rest$OptionalQueryParameterUsage";
    OptionalQueryParameterUsage.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0"
    }, internal.StructureType.Element);
    rest.OptionalQueryParameterUsage = OptionalQueryParameterUsage;
    /**
     * In version 10.4.0: deleted
     * In version 9.14.0: introduced
     */
    class PublishedODataContract extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__serviceFeed = new internal.PartProperty(PublishedODataContract, this, "serviceFeed", null, true);
            /** @internal */
            this.__metadata = new internal.PrimitiveProperty(PublishedODataContract, this, "metadata", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__openApi = new internal.PrimitiveProperty(PublishedODataContract, this, "openApi", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedODataContract() cannot be invoked directly, please use 'model.rest.createPublishedODataContract()'");
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
        /**
         * In version 9.17.0: introduced
         */
        get openApi() {
            return this.__openApi.get();
        }
        set openApi(newValue) {
            this.__openApi.set(newValue);
        }
        /**
         * Creates and returns a new PublishedODataContract instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedODataContract);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.serviceFeed = ServiceFeed.create(this.model);
        }
    }
    PublishedODataContract.structureTypeName = "Rest$PublishedODataContract";
    PublishedODataContract.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.14.0",
        deleted: "10.4.0",
        deletionMessage: null,
        properties: {
            serviceFeed: {
                required: {
                    currentValue: true
                }
            },
            openApi: {
                introduced: "9.17.0"
            }
        }
    }, internal.StructureType.Element);
    rest.PublishedODataContract = PublishedODataContract;
    /**
     * In version 10.4.0: deleted
     * In version 9.21.0: introduced
     */
    class PublishedODataEnumeration extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedODataEnumeration, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__enumeration = new internal.ByNameReferenceProperty(PublishedODataEnumeration, this, "enumeration", null, "Enumerations$Enumeration");
            /** @internal */
            this.__values = new internal.PartListProperty(PublishedODataEnumeration, this, "values", []);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedODataEnumeration, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedODataEnumeration, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedODataEnumeration() cannot be invoked directly, please use 'model.rest.createPublishedODataEnumeration()'");
            }
        }
        get containerAsPublishedODataService() {
            return super.getContainerAs(PublishedODataService);
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
         * Creates and returns a new PublishedODataEnumeration instance in the SDK and on the server.
         * The new PublishedODataEnumeration will be automatically stored in the 'enumerations' property
         * of the parent PublishedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.21.0 to 10.3.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedODataEnumeration.structureTypeName, { start: "9.21.0", end: "10.3.0" });
            return internal.instancehelpers.createElement(container, PublishedODataEnumeration, "enumerations", true);
        }
        /**
         * Creates and returns a new PublishedODataEnumeration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedODataEnumeration);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedODataEnumeration.structureTypeName = "Rest$PublishedODataEnumeration";
    PublishedODataEnumeration.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.21.0",
        deleted: "10.4.0",
        deletionMessage: null,
        properties: {
            enumeration: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    rest.PublishedODataEnumeration = PublishedODataEnumeration;
    /**
     * In version 10.4.0: deleted
     * In version 9.21.0: introduced
     */
    class PublishedODataEnumerationValue extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedODataEnumerationValue, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__enumerationValue = new internal.ByNameReferenceProperty(PublishedODataEnumerationValue, this, "enumerationValue", null, "Enumerations$EnumerationValue");
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedODataEnumerationValue, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedODataEnumerationValue, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedODataEnumerationValue() cannot be invoked directly, please use 'model.rest.createPublishedODataEnumerationValue()'");
            }
        }
        get containerAsPublishedODataEnumeration() {
            return super.getContainerAs(PublishedODataEnumeration);
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
         * Creates and returns a new PublishedODataEnumerationValue instance in the SDK and on the server.
         * The new PublishedODataEnumerationValue will be automatically stored in the 'values' property
         * of the parent PublishedODataEnumeration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.21.0 to 10.3.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedODataEnumerationValue.structureTypeName, {
                start: "9.21.0",
                end: "10.3.0"
            });
            return internal.instancehelpers.createElement(container, PublishedODataEnumerationValue, "values", true);
        }
        /**
         * Creates and returns a new PublishedODataEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedODataEnumerationValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedODataEnumerationValue.structureTypeName = "Rest$PublishedODataEnumerationValue";
    PublishedODataEnumerationValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.21.0",
        deleted: "10.4.0",
        deletionMessage: null,
        properties: {
            enumerationValue: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    rest.PublishedODataEnumerationValue = PublishedODataEnumerationValue;
    /**
     * In version 10.4.0: deleted
     * In version 9.19.0: introduced
     */
    class PublishedODataMicroflow extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedODataMicroflow, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(PublishedODataMicroflow, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__parameters = new internal.PartListProperty(PublishedODataMicroflow, this, "parameters", []);
            /** @internal */
            this.__returnType = new internal.PartProperty(PublishedODataMicroflow, this, "returnType", null, true);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedODataMicroflow, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedODataMicroflow, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedODataMicroflow() cannot be invoked directly, please use 'model.rest.createPublishedODataMicroflow()'");
            }
        }
        get containerAsPublishedODataService() {
            return super.getContainerAs(PublishedODataService);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
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
         * In version 10.0.0: introduced
         */
        get parameters() {
            return this.__parameters.get();
        }
        /**
         * In version 10.2.0: introduced
         */
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
         * Creates and returns a new PublishedODataMicroflow instance in the SDK and on the server.
         * The new PublishedODataMicroflow will be automatically stored in the 'microflows' property
         * of the parent PublishedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.19.0 to 10.3.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedODataMicroflow.structureTypeName, { start: "9.19.0", end: "10.3.0" });
            return internal.instancehelpers.createElement(container, PublishedODataMicroflow, "microflows", true);
        }
        /**
         * Creates and returns a new PublishedODataMicroflow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedODataMicroflow);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__returnType.isAvailable) {
                this.returnType = datatypes_1.datatypes.UnknownType.create(this.model);
            }
        }
    }
    PublishedODataMicroflow.structureTypeName = "Rest$PublishedODataMicroflow";
    PublishedODataMicroflow.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.19.0",
        deleted: "10.4.0",
        deletionMessage: null,
        properties: {
            microflow: {
                required: {
                    currentValue: true
                }
            },
            parameters: {
                introduced: "10.0.0"
            },
            returnType: {
                introduced: "10.2.0",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    rest.PublishedODataMicroflow = PublishedODataMicroflow;
    /**
     * In version 10.4.0: deleted
     * In version 10.0.0: introduced
     */
    class PublishedODataMicroflowParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedODataMicroflowParameter, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__microflowParameter = new internal.ByNameReferenceProperty(PublishedODataMicroflowParameter, this, "microflowParameter", null, "Microflows$MicroflowParameter");
            /** @internal */
            this.__type = new internal.PartProperty(PublishedODataMicroflowParameter, this, "type", null, true);
            /** @internal */
            this.__dataType = new internal.PartProperty(PublishedODataMicroflowParameter, this, "dataType", null, true);
            /** @internal */
            this.__canBeEmpty = new internal.PrimitiveProperty(PublishedODataMicroflowParameter, this, "canBeEmpty", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedODataMicroflowParameter, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedODataMicroflowParameter, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedODataMicroflowParameter() cannot be invoked directly, please use 'model.rest.createPublishedODataMicroflowParameter()'");
            }
        }
        get containerAsPublishedODataMicroflow() {
            return super.getContainerAs(PublishedODataMicroflow);
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
        /**
         * In version 10.2.0: deleted
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        /**
         * In version 10.2.0: introduced
         */
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
         * Creates and returns a new PublishedODataMicroflowParameter instance in the SDK and on the server.
         * The new PublishedODataMicroflowParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedODataMicroflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 to 10.3.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedODataMicroflowParameter.structureTypeName, {
                start: "10.0.0",
                end: "10.3.0"
            });
            return internal.instancehelpers.createElement(container, PublishedODataMicroflowParameter, "parameters", true);
        }
        /**
         * Creates and returns a new PublishedODataMicroflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedODataMicroflowParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__dataType.isAvailable) {
                this.dataType = datatypes_1.datatypes.UnknownType.create(this.model);
            }
            if (this.__type.isAvailable) {
                this.type = datatypes_1.datatypes.UnknownType.create(this.model);
            }
        }
    }
    PublishedODataMicroflowParameter.structureTypeName = "Rest$PublishedODataMicroflowParameter";
    PublishedODataMicroflowParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.0.0",
        deleted: "10.4.0",
        deletionMessage: null,
        properties: {
            microflowParameter: {
                required: {
                    currentValue: true
                }
            },
            type: {
                deleted: "10.2.0",
                deletionMessage: "Replaced with dataType",
                required: {
                    currentValue: true
                }
            },
            dataType: {
                introduced: "10.2.0",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    rest.PublishedODataMicroflowParameter = PublishedODataMicroflowParameter;
    /**
     * In version 10.4.0: deleted
     */
    class PublishedODataService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__namespace = new internal.PrimitiveProperty(PublishedODataService, this, "namespace", "DefaultNamespace", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__path = new internal.PrimitiveProperty(PublishedODataService, this, "path", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__allowedModuleRoles = new internal.ByNameReferenceListProperty(PublishedODataService, this, "allowedModuleRoles", [], "Security$ModuleRole");
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(PublishedODataService, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__resources = new internal.PartListProperty(PublishedODataService, this, "resources", []);
            /** @internal */
            this.__microflows = new internal.PartListProperty(PublishedODataService, this, "microflows", []);
            /** @internal */
            this.__enumerations = new internal.PartListProperty(PublishedODataService, this, "enumerations", []);
            /** @internal */
            this.__publishAssociations = new internal.PrimitiveProperty(PublishedODataService, this, "publishAssociations", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(PublishedODataService, this, "version", "1.0.0", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__authenticationMicroflow = new internal.ByNameReferenceProperty(PublishedODataService, this, "authenticationMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__authenticationTypes = new internal.EnumListProperty(PublishedODataService, this, "authenticationTypes", [], RestAuthenticationType);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedODataService, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedODataService, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__replaceIllegalChars = new internal.PrimitiveProperty(PublishedODataService, this, "replaceIllegalChars", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__useGeneralization = new internal.PrimitiveProperty(PublishedODataService, this, "useGeneralization", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__oDataVersion = new internal.EnumProperty(PublishedODataService, this, "oDataVersion", PublishedODataVersion.OData4, PublishedODataVersion);
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
        /**
         * In version 8.0.0: introduced
         */
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        get resources() {
            return this.__resources.get();
        }
        /**
         * In version 9.19.0: introduced
         */
        get microflows() {
            return this.__microflows.get();
        }
        /**
         * In version 9.21.0: introduced
         */
        get enumerations() {
            return this.__enumerations.get();
        }
        /**
         * In version 7.19.0: introduced
         */
        get publishAssociations() {
            return this.__publishAssociations.get();
        }
        set publishAssociations(newValue) {
            this.__publishAssociations.set(newValue);
        }
        /**
         * In version 8.0.0: introduced
         */
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        /**
         * In version 8.0.0: introduced
         */
        get authenticationMicroflow() {
            return this.__authenticationMicroflow.get();
        }
        set authenticationMicroflow(newValue) {
            this.__authenticationMicroflow.set(newValue);
        }
        get authenticationMicroflowQualifiedName() {
            return this.__authenticationMicroflow.qualifiedName();
        }
        /**
         * In version 8.0.0: introduced
         */
        get authenticationTypes() {
            return this.__authenticationTypes.get();
        }
        /**
         * In version 8.4.0: introduced
         */
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        /**
         * In version 8.4.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * In version 8.12.0: introduced
         */
        get replaceIllegalChars() {
            return this.__replaceIllegalChars.get();
        }
        set replaceIllegalChars(newValue) {
            this.__replaceIllegalChars.set(newValue);
        }
        /**
         * In version 8.18.0: introduced
         */
        get useGeneralization() {
            return this.__useGeneralization.get();
        }
        set useGeneralization(newValue) {
            this.__useGeneralization.set(newValue);
        }
        /**
         * In version 9.1.0: introduced
         */
        get oDataVersion() {
            return this.__oDataVersion.get();
        }
        set oDataVersion(newValue) {
            this.__oDataVersion.set(newValue);
        }
        /**
         * Creates a new PublishedODataService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, PublishedODataService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__authenticationTypes.isAvailable) {
                this.authenticationTypes.replace([RestAuthenticationType.Basic]);
            }
            this.namespace = "DefaultNamespace";
            if (this.__oDataVersion.isAvailable) {
                this.oDataVersion = PublishedODataVersion.OData4;
            }
            if (this.__publishAssociations.isAvailable) {
                this.publishAssociations = true;
            }
            if (this.__replaceIllegalChars.isAvailable) {
                this.replaceIllegalChars = false;
            }
            if (this.__useGeneralization.isAvailable) {
                this.useGeneralization = false;
            }
            if (this.__version.isAvailable) {
                this.version = "1.0.0";
            }
        }
    }
    PublishedODataService.structureTypeName = "Rest$PublishedODataService";
    PublishedODataService.versionInfo = new exports.StructureVersionInfo({
        deleted: "10.4.0",
        deletionMessage: null,
        properties: {
            serviceName: {
                introduced: "8.0.0"
            },
            microflows: {
                introduced: "9.19.0"
            },
            enumerations: {
                introduced: "9.21.0"
            },
            publishAssociations: {
                introduced: "7.19.0"
            },
            version: {
                introduced: "8.0.0"
            },
            authenticationMicroflow: {
                introduced: "8.0.0"
            },
            authenticationTypes: {
                introduced: "8.0.0"
            },
            summary: {
                introduced: "8.4.0"
            },
            description: {
                introduced: "8.4.0"
            },
            replaceIllegalChars: {
                introduced: "8.12.0"
            },
            useGeneralization: {
                introduced: "8.18.0"
            },
            oDataVersion: {
                introduced: "9.1.0"
            }
        }
    }, internal.StructureType.ModelUnit);
    rest.PublishedODataService = PublishedODataService;
    /**
     * In version 10.4.0: deleted
     */
    class PublishedRestResource extends webservices_1.webservices.PublishedResource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__path = new internal.PrimitiveProperty(PublishedRestResource, this, "path", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedRestResource, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedRestResource, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedRestResource, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__usePaging = new internal.PrimitiveProperty(PublishedRestResource, this, "usePaging", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__pageSize = new internal.PrimitiveProperty(PublishedRestResource, this, "pageSize", 10000, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__updatable = new internal.PrimitiveProperty(PublishedRestResource, this, "updatable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__updateMicroflow = new internal.ByNameReferenceProperty(PublishedRestResource, this, "updateMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__insertable = new internal.PrimitiveProperty(PublishedRestResource, this, "insertable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__deletable = new internal.PrimitiveProperty(PublishedRestResource, this, "deletable", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__updateMode = new internal.PartProperty(PublishedRestResource, this, "updateMode", null, true);
            /** @internal */
            this.__insertMode = new internal.PartProperty(PublishedRestResource, this, "insertMode", null, true);
            /** @internal */
            this.__deleteMode = new internal.PartProperty(PublishedRestResource, this, "deleteMode", null, true);
            /** @internal */
            this.__readMode = new internal.PartProperty(PublishedRestResource, this, "readMode", null, true);
            /** @internal */
            this.__queryOptions = new internal.PartProperty(PublishedRestResource, this, "queryOptions", null, true);
            /** @internal */
            this.__queryMicroflow = new internal.ByNameReferenceProperty(PublishedRestResource, this, "queryMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__countMicroflow = new internal.ByNameReferenceProperty(PublishedRestResource, this, "countMicroflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new PublishedRestResource() cannot be invoked directly, please use 'model.rest.createPublishedRestResource()'");
            }
        }
        get containerAsPublishedODataService() {
            return super.getContainerAs(PublishedODataService);
        }
        get path() {
            return this.__path.get();
        }
        set path(newValue) {
            this.__path.set(newValue);
        }
        /**
         * In version 7.19.0: introduced
         */
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * In version 8.0.0: introduced
         */
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        /**
         * In version 8.0.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
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
        /**
         * In version 9.11.0: deleted
         * In version 9.4.0: introduced
         */
        get updatable() {
            return this.__updatable.get();
        }
        set updatable(newValue) {
            this.__updatable.set(newValue);
        }
        /**
         * In version 9.11.0: deleted
         * In version 9.9.0: introduced
         */
        get updateMicroflow() {
            return this.__updateMicroflow.get();
        }
        set updateMicroflow(newValue) {
            this.__updateMicroflow.set(newValue);
        }
        get updateMicroflowQualifiedName() {
            return this.__updateMicroflow.qualifiedName();
        }
        /**
         * In version 9.11.0: deleted
         * In version 9.10.0: introduced
         */
        get insertable() {
            return this.__insertable.get();
        }
        set insertable(newValue) {
            this.__insertable.set(newValue);
        }
        /**
         * In version 9.11.0: deleted
         * In version 9.10.0: introduced
         */
        get deletable() {
            return this.__deletable.get();
        }
        set deletable(newValue) {
            this.__deletable.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get updateMode() {
            return this.__updateMode.get();
        }
        set updateMode(newValue) {
            this.__updateMode.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get insertMode() {
            return this.__insertMode.get();
        }
        set insertMode(newValue) {
            this.__insertMode.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get deleteMode() {
            return this.__deleteMode.get();
        }
        set deleteMode(newValue) {
            this.__deleteMode.set(newValue);
        }
        /**
         * In version 9.14.0: introduced
         */
        get readMode() {
            return this.__readMode.get();
        }
        set readMode(newValue) {
            this.__readMode.set(newValue);
        }
        /**
         * In version 9.17.0: introduced
         */
        get queryOptions() {
            return this.__queryOptions.get();
        }
        set queryOptions(newValue) {
            this.__queryOptions.set(newValue);
        }
        /**
         * In version 9.14.0: deleted
         * In version 9.9.0: introduced
         */
        get queryMicroflow() {
            return this.__queryMicroflow.get();
        }
        set queryMicroflow(newValue) {
            this.__queryMicroflow.set(newValue);
        }
        get queryMicroflowQualifiedName() {
            return this.__queryMicroflow.qualifiedName();
        }
        /**
         * In version 9.14.0: deleted
         * In version 9.9.0: introduced
         */
        get countMicroflow() {
            return this.__countMicroflow.get();
        }
        set countMicroflow(newValue) {
            this.__countMicroflow.set(newValue);
        }
        get countMicroflowQualifiedName() {
            return this.__countMicroflow.qualifiedName();
        }
        /**
         * Creates and returns a new PublishedRestResource instance in the SDK and on the server.
         * The new PublishedRestResource will be automatically stored in the 'resources' property
         * of the parent PublishedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 10.3.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedRestResource.structureTypeName, { end: "10.3.0" });
            return internal.instancehelpers.createElement(container, PublishedRestResource, "resources", true);
        }
        /**
         * Creates and returns a new PublishedRestResource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedRestResource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__deletable.isAvailable) {
                this.deletable = false;
            }
            if (this.__deleteMode.isAvailable) {
                this.deleteMode = ChangeNotSupported.create(this.model);
            }
            if (this.__insertMode.isAvailable) {
                this.insertMode = ChangeNotSupported.create(this.model);
            }
            if (this.__insertable.isAvailable) {
                this.insertable = false;
            }
            this.pageSize = 10000;
            if (this.__queryOptions.isAvailable) {
                this.queryOptions = QueryOptions.create(this.model);
            }
            if (this.__readMode.isAvailable) {
                this.readMode = ReadSource.create(this.model);
            }
            if (this.__updatable.isAvailable) {
                this.updatable = false;
            }
            if (this.__updateMode.isAvailable) {
                this.updateMode = ChangeNotSupported.create(this.model);
            }
        }
    }
    PublishedRestResource.structureTypeName = "Rest$PublishedRestResource";
    PublishedRestResource.versionInfo = new exports.StructureVersionInfo({
        deleted: "10.4.0",
        deletionMessage: null,
        properties: {
            exposedName: {
                introduced: "7.19.0"
            },
            summary: {
                introduced: "8.0.0"
            },
            description: {
                introduced: "8.0.0"
            },
            updatable: {
                introduced: "9.4.0",
                deleted: "9.11.0",
                deletionMessage: "Replaced by updateMode"
            },
            updateMicroflow: {
                introduced: "9.9.0",
                deleted: "9.11.0",
                deletionMessage: "Replaced by updateMode"
            },
            insertable: {
                introduced: "9.10.0",
                deleted: "9.11.0",
                deletionMessage: "Replaced by insertMode"
            },
            deletable: {
                introduced: "9.10.0",
                deleted: "9.11.0",
                deletionMessage: "Replaced by deleteMode"
            },
            updateMode: {
                introduced: "9.11.0",
                required: {
                    currentValue: true
                }
            },
            insertMode: {
                introduced: "9.11.0",
                required: {
                    currentValue: true
                }
            },
            deleteMode: {
                introduced: "9.11.0",
                required: {
                    currentValue: true
                }
            },
            readMode: {
                introduced: "9.14.0",
                required: {
                    currentValue: true
                }
            },
            queryOptions: {
                introduced: "9.17.0",
                required: {
                    currentValue: true
                }
            },
            queryMicroflow: {
                introduced: "9.9.0",
                deleted: "9.14.0",
                deletionMessage: "Replaced by readMode"
            },
            countMicroflow: {
                introduced: "9.9.0",
                deleted: "9.14.0",
                deletionMessage: "Replaced by readMode"
            }
        }
    }, internal.StructureType.Element);
    rest.PublishedRestResource = PublishedRestResource;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-services relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.6.0: introduced
     */
    class PublishedRestService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__path = new internal.PrimitiveProperty(PublishedRestService, this, "path", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(PublishedRestService, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(PublishedRestService, this, "version", "1.0.0", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__authenticationType = new internal.EnumProperty(PublishedRestService, this, "authenticationType", RestAuthenticationType.Basic, RestAuthenticationType);
            /** @internal */
            this.__authenticationTypes = new internal.EnumListProperty(PublishedRestService, this, "authenticationTypes", [], RestAuthenticationType);
            /** @internal */
            this.__authenticationMicroflow = new internal.ByNameReferenceProperty(PublishedRestService, this, "authenticationMicroflow", null, "Microflows$Microflow");
            /** @internal */
            this.__corsConfiguration = new internal.PartProperty(PublishedRestService, this, "corsConfiguration", null, false);
            /** @internal */
            this.__allowedRoles = new internal.ByNameReferenceListProperty(PublishedRestService, this, "allowedRoles", [], "Security$ModuleRole");
            /** @internal */
            this.__resources = new internal.PartListProperty(PublishedRestService, this, "resources", []);
            /** @internal */
            this.__parameters = new internal.PartListProperty(PublishedRestService, this, "parameters", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get path() {
            return this.__path.get();
        }
        set path(newValue) {
            this.__path.set(newValue);
        }
        /**
         * In version 7.12.0: introduced
         */
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        /**
         * In version 7.12.0: introduced
         */
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        /**
         * In version 7.13.0: deleted
         * In version 7.11.0: introduced
         */
        get authenticationType() {
            return this.__authenticationType.get();
        }
        set authenticationType(newValue) {
            this.__authenticationType.set(newValue);
        }
        /**
         * In version 7.13.0: introduced
         */
        get authenticationTypes() {
            return this.__authenticationTypes.get();
        }
        /**
         * In version 7.17.0: introduced
         */
        get authenticationMicroflow() {
            return this.__authenticationMicroflow.get();
        }
        set authenticationMicroflow(newValue) {
            this.__authenticationMicroflow.set(newValue);
        }
        get authenticationMicroflowQualifiedName() {
            return this.__authenticationMicroflow.qualifiedName();
        }
        /**
         * In version 7.18.0: introduced
         */
        get corsConfiguration() {
            return this.__corsConfiguration.get();
        }
        set corsConfiguration(newValue) {
            this.__corsConfiguration.set(newValue);
        }
        get allowedRoles() {
            return this.__allowedRoles.get();
        }
        get allowedRolesQualifiedNames() {
            return this.__allowedRoles.qualifiedNames();
        }
        /**
         * In version 7.7.0: introduced
         */
        get resources() {
            return this.__resources.get();
        }
        /**
         * In version 7.17.0: introduced
         */
        get parameters() {
            return this.__parameters.get();
        }
        /**
         * Creates a new PublishedRestService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, PublishedRestService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__authenticationType.isAvailable) {
                this.authenticationType = RestAuthenticationType.Basic;
            }
            if (this.__authenticationTypes.isAvailable) {
                this.authenticationTypes.replace([RestAuthenticationType.Basic, RestAuthenticationType.Session]);
            }
            if (this.__version.isAvailable) {
                this.version = "1.0.0";
            }
        }
    }
    PublishedRestService.structureTypeName = "Rest$PublishedRestService";
    PublishedRestService.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.6.0",
        properties: {
            serviceName: {
                introduced: "7.12.0"
            },
            version: {
                introduced: "7.12.0"
            },
            authenticationType: {
                introduced: "7.11.0",
                deleted: "7.13.0",
                deletionMessage: null
            },
            authenticationTypes: {
                introduced: "7.13.0"
            },
            authenticationMicroflow: {
                introduced: "7.17.0"
            },
            corsConfiguration: {
                introduced: "7.18.0"
            },
            resources: {
                introduced: "7.7.0"
            },
            parameters: {
                introduced: "7.17.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["7.11.0"]
        }
    }, internal.StructureType.ModelUnit);
    rest.PublishedRestService = PublishedRestService;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-operation relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.7.0: introduced
     */
    class PublishedRestServiceOperation extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedRestServiceOperation, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(PublishedRestServiceOperation, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__path = new internal.PrimitiveProperty(PublishedRestServiceOperation, this, "path", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__deprecated = new internal.PrimitiveProperty(PublishedRestServiceOperation, this, "deprecated", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__parameters = new internal.PartListProperty(PublishedRestServiceOperation, this, "parameters", []);
            /** @internal */
            this.__httpMethod = new internal.EnumProperty(PublishedRestServiceOperation, this, "httpMethod", services_1.services.HttpMethod.Get, services_1.services.HttpMethod);
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(PublishedRestServiceOperation, this, "microflow", null, "Microflows$Microflow");
            /** @internal */
            this.__exportMapping = new internal.ByNameReferenceProperty(PublishedRestServiceOperation, this, "exportMapping", null, "ExportMappings$ExportMapping");
            /** @internal */
            this.__importMapping = new internal.ByNameReferenceProperty(PublishedRestServiceOperation, this, "importMapping", null, "ImportMappings$ImportMapping");
            /** @internal */
            this.__objectHandlingBackup = new internal.EnumProperty(PublishedRestServiceOperation, this, "objectHandlingBackup", mappings_1.mappings.ObjectHandlingBackupEnum.Create, mappings_1.mappings.ObjectHandlingBackupEnum);
            /** @internal */
            this.__commit = new internal.EnumProperty(PublishedRestServiceOperation, this, "commit", microflows_1.microflows.CommitEnum.No, microflows_1.microflows.CommitEnum);
            if (arguments.length < 4) {
                throw new Error("new PublishedRestServiceOperation() cannot be invoked directly, please use 'model.rest.createPublishedRestServiceOperation()'");
            }
        }
        get containerAsPublishedRestServiceResource() {
            return super.getContainerAs(PublishedRestServiceResource);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        get path() {
            return this.__path.get();
        }
        set path(newValue) {
            this.__path.set(newValue);
        }
        /**
         * In version 7.15.0: introduced
         */
        get deprecated() {
            return this.__deprecated.get();
        }
        set deprecated(newValue) {
            this.__deprecated.set(newValue);
        }
        /**
         * In version 7.17.0: introduced
         */
        get parameters() {
            return this.__parameters.get();
        }
        get httpMethod() {
            return this.__httpMethod.get();
        }
        set httpMethod(newValue) {
            this.__httpMethod.set(newValue);
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
         * In version 7.14.0: introduced
         */
        get exportMapping() {
            return this.__exportMapping.get();
        }
        set exportMapping(newValue) {
            this.__exportMapping.set(newValue);
        }
        get exportMappingQualifiedName() {
            return this.__exportMapping.qualifiedName();
        }
        /**
         * In version 7.14.0: introduced
         */
        get importMapping() {
            return this.__importMapping.get();
        }
        set importMapping(newValue) {
            this.__importMapping.set(newValue);
        }
        get importMappingQualifiedName() {
            return this.__importMapping.qualifiedName();
        }
        /**
         * In version 7.17.0: introduced
         */
        get objectHandlingBackup() {
            return this.__objectHandlingBackup.get();
        }
        set objectHandlingBackup(newValue) {
            this.__objectHandlingBackup.set(newValue);
        }
        /**
         * In version 7.14.0: introduced
         */
        get commit() {
            return this.__commit.get();
        }
        set commit(newValue) {
            this.__commit.set(newValue);
        }
        /**
         * Creates and returns a new PublishedRestServiceOperation instance in the SDK and on the server.
         * The new PublishedRestServiceOperation will be automatically stored in the 'operations' property
         * of the parent PublishedRestServiceResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedRestServiceOperation.structureTypeName, { start: "7.7.0" });
            return internal.instancehelpers.createElement(container, PublishedRestServiceOperation, "operations", true);
        }
        /**
         * Creates and returns a new PublishedRestServiceOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedRestServiceOperation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__commit.isAvailable) {
                this.commit = microflows_1.microflows.CommitEnum.No;
            }
            if (this.__deprecated.isAvailable) {
                this.deprecated = false;
            }
            this.httpMethod = services_1.services.HttpMethod.Get;
            if (this.__objectHandlingBackup.isAvailable) {
                this.objectHandlingBackup = mappings_1.mappings.ObjectHandlingBackupEnum.Create;
            }
        }
    }
    PublishedRestServiceOperation.structureTypeName = "Rest$PublishedRestServiceOperation";
    PublishedRestServiceOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.7.0",
        properties: {
            deprecated: {
                introduced: "7.15.0"
            },
            parameters: {
                introduced: "7.17.0"
            },
            exportMapping: {
                introduced: "7.14.0"
            },
            importMapping: {
                introduced: "7.14.0"
            },
            objectHandlingBackup: {
                introduced: "7.17.0"
            },
            commit: {
                introduced: "7.14.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["7.11.0"]
        }
    }, internal.StructureType.Element);
    rest.PublishedRestServiceOperation = PublishedRestServiceOperation;
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-resource relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.7.0: introduced
     */
    class PublishedRestServiceResource extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(PublishedRestServiceResource, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__documentation = new internal.PrimitiveProperty(PublishedRestServiceResource, this, "documentation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__operations = new internal.PartListProperty(PublishedRestServiceResource, this, "operations", []);
            if (arguments.length < 4) {
                throw new Error("new PublishedRestServiceResource() cannot be invoked directly, please use 'model.rest.createPublishedRestServiceResource()'");
            }
        }
        get containerAsPublishedRestService() {
            return super.getContainerAs(PublishedRestService);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get documentation() {
            return this.__documentation.get();
        }
        set documentation(newValue) {
            this.__documentation.set(newValue);
        }
        get operations() {
            return this.__operations.get();
        }
        /**
         * Creates and returns a new PublishedRestServiceResource instance in the SDK and on the server.
         * The new PublishedRestServiceResource will be automatically stored in the 'resources' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedRestServiceResource.structureTypeName, { start: "7.7.0" });
            return internal.instancehelpers.createElement(container, PublishedRestServiceResource, "resources", true);
        }
        /**
         * Creates and returns a new PublishedRestServiceResource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedRestServiceResource);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedRestServiceResource.structureTypeName = "Rest$PublishedRestServiceResource";
    PublishedRestServiceResource.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.7.0",
        experimental: {
            currentValue: false,
            changedIn: ["7.11.0"]
        }
    }, internal.StructureType.Element);
    rest.PublishedRestServiceResource = PublishedRestServiceResource;
    /**
     * In version 10.4.0: deleted
     * In version 9.17.0: introduced
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
                throw new Error("new QueryOptions() cannot be invoked directly, please use 'model.rest.createQueryOptions()'");
            }
        }
        get containerAsPublishedRestResource() {
            return super.getContainerAs(PublishedRestResource);
        }
        get countable() {
            return this.__countable.get();
        }
        set countable(newValue) {
            this.__countable.set(newValue);
        }
        /**
         * In version 9.19.0: introduced
         */
        get topSupported() {
            return this.__topSupported.get();
        }
        set topSupported(newValue) {
            this.__topSupported.set(newValue);
        }
        /**
         * In version 9.19.0: introduced
         */
        get skipSupported() {
            return this.__skipSupported.get();
        }
        set skipSupported(newValue) {
            this.__skipSupported.set(newValue);
        }
        /**
         * Creates and returns a new QueryOptions instance in the SDK and on the server.
         * The new QueryOptions will be automatically stored in the 'queryOptions' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 to 10.3.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, QueryOptions.structureTypeName, { start: "9.17.0", end: "10.3.0" });
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
            if (this.__skipSupported.isAvailable) {
                this.skipSupported = true;
            }
            if (this.__topSupported.isAvailable) {
                this.topSupported = true;
            }
        }
    }
    QueryOptions.structureTypeName = "Rest$QueryOptions";
    QueryOptions.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.17.0",
        deleted: "10.4.0",
        deletionMessage: null,
        properties: {
            topSupported: {
                introduced: "9.19.0"
            },
            skipSupported: {
                introduced: "9.19.0"
            }
        }
    }, internal.StructureType.Element);
    rest.QueryOptions = QueryOptions;
    /**
     * In version 11.0.0: introduced
     */
    class QueryParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(QueryParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__testValue = new internal.PrimitiveProperty(QueryParameter, this, "testValue", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__parameterUsage = new internal.PartProperty(QueryParameter, this, "parameterUsage", null, true);
            if (arguments.length < 4) {
                throw new Error("new QueryParameter() cannot be invoked directly, please use 'model.rest.createQueryParameter()'");
            }
        }
        get containerAsRestOperation() {
            return super.getContainerAs(RestOperation);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get testValue() {
            return this.__testValue.get();
        }
        set testValue(newValue) {
            this.__testValue.set(newValue);
        }
        get parameterUsage() {
            return this.__parameterUsage.get();
        }
        set parameterUsage(newValue) {
            this.__parameterUsage.set(newValue);
        }
        /**
         * Creates and returns a new QueryParameter instance in the SDK and on the server.
         * The new QueryParameter will be automatically stored in the 'queryParameters' property
         * of the parent RestOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, QueryParameter.structureTypeName, { start: "11.0.0" });
            return internal.instancehelpers.createElement(container, QueryParameter, "queryParameters", true);
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
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        get qualifiedName() {
            return this._getQualifiedName();
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.parameterUsage = RequiredQueryParameterUsage.create(this.model);
        }
    }
    QueryParameter.structureTypeName = "Rest$QueryParameter";
    QueryParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            parameterUsage: {
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.QueryParameter = QueryParameter;
    /**
     * In version 10.4.0: deleted
     * In version 9.14.0: introduced
     */
    class ReadSource extends ReadMode {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new ReadSource() cannot be invoked directly, please use 'model.rest.createReadSource()'");
            }
        }
        get containerAsPublishedRestResource() {
            return super.getContainerAs(PublishedRestResource);
        }
        /**
         * Creates and returns a new ReadSource instance in the SDK and on the server.
         * The new ReadSource will be automatically stored in the 'readMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 to 10.3.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ReadSource.structureTypeName, { start: "9.14.0", end: "10.3.0" });
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
    ReadSource.structureTypeName = "Rest$ReadSource";
    ReadSource.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.14.0",
        deleted: "10.4.0",
        deletionMessage: null
    }, internal.StructureType.Element);
    rest.ReadSource = ReadSource;
    /**
     * In version 11.0.0: introduced
     */
    class RequiredQueryParameterUsage extends QueryParameterUsage {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new RequiredQueryParameterUsage() cannot be invoked directly, please use 'model.rest.createRequiredQueryParameterUsage()'");
            }
        }
        get containerAsQueryParameter() {
            return super.getContainerAs(QueryParameter);
        }
        /**
         * Creates and returns a new RequiredQueryParameterUsage instance in the SDK and on the server.
         * The new RequiredQueryParameterUsage will be automatically stored in the 'parameterUsage' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, RequiredQueryParameterUsage.structureTypeName, { start: "11.0.0" });
            return internal.instancehelpers.createElement(container, RequiredQueryParameterUsage, "parameterUsage", false);
        }
        /**
         * Creates and returns a new RequiredQueryParameterUsage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RequiredQueryParameterUsage);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RequiredQueryParameterUsage.structureTypeName = "Rest$RequiredQueryParameterUsage";
    RequiredQueryParameterUsage.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.0.0"
    }, internal.StructureType.Element);
    rest.RequiredQueryParameterUsage = RequiredQueryParameterUsage;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class RestOperation extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(RestOperation, this, "name", "Operation", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__path = new internal.PartProperty(RestOperation, this, "path", null, true);
            /** @internal */
            this.__method = new internal.PartProperty(RestOperation, this, "method", null, true);
            /** @internal */
            this.__timeout = new internal.PrimitiveProperty(RestOperation, this, "timeout", 300, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__headers = new internal.PartListProperty(RestOperation, this, "headers", []);
            /** @internal */
            this.__parameters = new internal.PartListProperty(RestOperation, this, "parameters", []);
            /** @internal */
            this.__queryParameters = new internal.PartListProperty(RestOperation, this, "queryParameters", []);
            /** @internal */
            this.__responseHandling = new internal.PartProperty(RestOperation, this, "responseHandling", null, true);
            /** @internal */
            this.__tags = new internal.PrimitiveListProperty(RestOperation, this, "tags", [], internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new RestOperation() cannot be invoked directly, please use 'model.rest.createRestOperation()'");
            }
        }
        get containerAsConsumedRestService() {
            return super.getContainerAs(ConsumedRestService);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get path() {
            return this.__path.get();
        }
        set path(newValue) {
            this.__path.set(newValue);
        }
        /**
         * In version 10.4.0: introduced
         */
        get method() {
            return this.__method.get();
        }
        set method(newValue) {
            this.__method.set(newValue);
        }
        get timeout() {
            return this.__timeout.get();
        }
        set timeout(newValue) {
            this.__timeout.set(newValue);
        }
        get headers() {
            return this.__headers.get();
        }
        get parameters() {
            return this.__parameters.get();
        }
        /**
         * In version 11.0.0: introduced
         */
        get queryParameters() {
            return this.__queryParameters.get();
        }
        /**
         * In version 10.3.0: introduced
         */
        get responseHandling() {
            return this.__responseHandling.get();
        }
        set responseHandling(newValue) {
            this.__responseHandling.set(newValue);
        }
        /**
         * In version 10.21.0: introduced
         */
        get tags() {
            return this.__tags.get();
        }
        /**
         * Creates and returns a new RestOperation instance in the SDK and on the server.
         * The new RestOperation will be automatically stored in the 'operations' property
         * of the parent ConsumedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, RestOperation.structureTypeName, { start: "10.1.0" });
            return internal.instancehelpers.createElement(container, RestOperation, "operations", true);
        }
        /**
         * Creates and returns a new RestOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RestOperation);
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
            if (this.__method.isAvailable) {
                this.method = RestOperationMethodWithoutBody.create(this.model);
            }
            this.name = "Operation";
            this.path = ValueTemplate.create(this.model);
            if (this.__responseHandling.isAvailable) {
                this.responseHandling = NoResponseHandling.create(this.model);
            }
            this.timeout = 300;
        }
    }
    RestOperation.structureTypeName = "Rest$RestOperation";
    RestOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.1.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            path: {
                required: {
                    currentValue: true
                }
            },
            method: {
                introduced: "10.4.0",
                required: {
                    currentValue: true
                }
            },
            headers: {
                public: {
                    currentValue: true
                }
            },
            parameters: {
                public: {
                    currentValue: true
                }
            },
            queryParameters: {
                introduced: "11.0.0",
                public: {
                    currentValue: true
                }
            },
            responseHandling: {
                introduced: "10.3.0",
                required: {
                    currentValue: true
                }
            },
            tags: {
                introduced: "10.21.0"
            }
        },
        public: {
            currentValue: true
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.RestOperation = RestOperation;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    class RestOperationMethod extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__httpMethod = new internal.EnumProperty(RestOperationMethod, this, "httpMethod", services_1.services.HttpMethod.Get, services_1.services.HttpMethod);
            if (arguments.length < 4) {
                throw new Error("new RestOperationMethod() cannot be invoked directly, please use 'model.rest.createRestOperationMethod()'");
            }
        }
        get containerAsRestOperation() {
            return super.getContainerAs(RestOperation);
        }
        get httpMethod() {
            return this.__httpMethod.get();
        }
        set httpMethod(newValue) {
            this.__httpMethod.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    RestOperationMethod.structureTypeName = "Rest$RestOperationMethod";
    RestOperationMethod.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.RestOperationMethod = RestOperationMethod;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    class RestOperationMethodWithBody extends RestOperationMethod {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__body = new internal.PartProperty(RestOperationMethodWithBody, this, "body", null, true);
            if (arguments.length < 4) {
                throw new Error("new RestOperationMethodWithBody() cannot be invoked directly, please use 'model.rest.createRestOperationMethodWithBody()'");
            }
        }
        get containerAsRestOperation() {
            return super.getContainerAs(RestOperation);
        }
        get body() {
            return this.__body.get();
        }
        set body(newValue) {
            this.__body.set(newValue);
        }
        /**
         * Creates and returns a new RestOperationMethodWithBody instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RestOperationMethodWithBody);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.body = StringBody.create(this.model);
            this.httpMethod = services_1.services.HttpMethod.Post;
        }
    }
    RestOperationMethodWithBody.structureTypeName = "Rest$RestOperationMethodWithBody";
    RestOperationMethodWithBody.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            body: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.RestOperationMethodWithBody = RestOperationMethodWithBody;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    class RestOperationMethodWithoutBody extends RestOperationMethod {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new RestOperationMethodWithoutBody() cannot be invoked directly, please use 'model.rest.createRestOperationMethodWithoutBody()'");
            }
        }
        get containerAsRestOperation() {
            return super.getContainerAs(RestOperation);
        }
        /**
         * Creates and returns a new RestOperationMethodWithoutBody instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RestOperationMethodWithoutBody);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.httpMethod = services_1.services.HttpMethod.Get;
        }
    }
    RestOperationMethodWithoutBody.structureTypeName = "Rest$RestOperationMethodWithoutBody";
    RestOperationMethodWithoutBody.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.RestOperationMethodWithoutBody = RestOperationMethodWithoutBody;
    /**
     * In version 7.11.0: removed experimental
     * In version 7.8.0: introduced
     */
    class RestOperationParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(RestOperationParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__microflowParameter = new internal.ByNameReferenceProperty(RestOperationParameter, this, "microflowParameter", null, "Microflows$MicroflowParameter");
            /** @internal */
            this.__type = new internal.PartProperty(RestOperationParameter, this, "type", null, true);
            /** @internal */
            this.__parameterType = new internal.EnumProperty(RestOperationParameter, this, "parameterType", RestOperationParameterType.Query, RestOperationParameterType);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(RestOperationParameter, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__dataType = new internal.PrimitiveProperty(RestOperationParameter, this, "dataType", "String", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new RestOperationParameter() cannot be invoked directly, please use 'model.rest.createRestOperationParameter()'");
            }
        }
        get containerAsPublishedRestService() {
            return super.getContainerAs(PublishedRestService);
        }
        get containerAsPublishedRestServiceOperation() {
            return super.getContainerAs(PublishedRestServiceOperation);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        /**
         * In version 7.17.0: introduced
         */
        get microflowParameter() {
            return this.__microflowParameter.get();
        }
        set microflowParameter(newValue) {
            this.__microflowParameter.set(newValue);
        }
        get microflowParameterQualifiedName() {
            return this.__microflowParameter.qualifiedName();
        }
        /**
         * In version 7.17.0: introduced
         */
        get type() {
            return this.__type.get();
        }
        set type(newValue) {
            this.__type.set(newValue);
        }
        get parameterType() {
            return this.__parameterType.get();
        }
        set parameterType(newValue) {
            this.__parameterType.set(newValue);
        }
        /**
         * In version 8.3.0: introduced
         */
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get dataType() {
            return this.__dataType.get();
        }
        set dataType(newValue) {
            this.__dataType.set(newValue);
        }
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * The new RestOperationParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInPublishedRestServiceUnderParameters(container) {
            internal.createInVersionCheck(container.model, RestOperationParameter.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, RestOperationParameter, "parameters", true);
        }
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * The new RestOperationParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedRestServiceOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInPublishedRestServiceOperationUnderParameters(container) {
            internal.createInVersionCheck(container.model, RestOperationParameter.structureTypeName, { start: "7.17.0" });
            return internal.instancehelpers.createElement(container, RestOperationParameter, "parameters", true);
        }
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RestOperationParameter);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__dataType.isAvailable) {
                this.dataType = "String";
            }
            this.parameterType = RestOperationParameterType.Query;
            if (this.__type.isAvailable) {
                this.type = datatypes_1.datatypes.UnknownType.create(this.model);
            }
        }
    }
    RestOperationParameter.structureTypeName = "Rest$RestOperationParameter";
    RestOperationParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "7.8.0",
        properties: {
            microflowParameter: {
                introduced: "7.17.0"
            },
            type: {
                introduced: "7.17.0",
                required: {
                    currentValue: true
                }
            },
            description: {
                introduced: "8.3.0"
            },
            dataType: {
                deleted: "7.9.0",
                deletionMessage: null,
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["7.11.0"]
        }
    }, internal.StructureType.Element);
    rest.RestOperationParameter = RestOperationParameter;
    /**
     * In version 10.17.0: introduced
     */
    class RestParameter extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__name = new internal.PrimitiveProperty(RestParameter, this, "name", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__dataType = new internal.PartProperty(RestParameter, this, "dataType", null, true);
            /** @internal */
            this.__testValue = new internal.PartProperty(RestParameter, this, "testValue", null, true);
            if (arguments.length < 4) {
                throw new Error("new RestParameter() cannot be invoked directly, please use 'model.rest.createRestParameter()'");
            }
        }
        get containerAsConsumedRestService() {
            return super.getContainerAs(ConsumedRestService);
        }
        get name() {
            return this.__name.get();
        }
        set name(newValue) {
            this.__name.set(newValue);
        }
        get dataType() {
            return this.__dataType.get();
        }
        set dataType(newValue) {
            this.__dataType.set(newValue);
        }
        get testValue() {
            return this.__testValue.get();
        }
        set testValue(newValue) {
            this.__testValue.set(newValue);
        }
        /**
         * Creates and returns a new RestParameter instance in the SDK and on the server.
         * The new RestParameter will be automatically stored in the 'baseUrlParameter' property
         * of the parent ConsumedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.17.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, RestParameter.structureTypeName, { start: "10.17.0" });
            return internal.instancehelpers.createElement(container, RestParameter, "baseUrlParameter", false);
        }
        /**
         * Creates and returns a new RestParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, RestParameter);
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
            this.dataType = datatypes_1.datatypes.StringType.create(this.model);
            this.testValue = StringValue.create(this.model);
        }
    }
    RestParameter.structureTypeName = "Rest$RestParameter";
    RestParameter.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.17.0",
        properties: {
            name: {
                public: {
                    currentValue: true
                }
            },
            dataType: {
                required: {
                    currentValue: true
                }
            },
            testValue: {
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    rest.RestParameter = RestParameter;
    /**
     * In version 10.4.0: deleted
     * In version 9.14.0: introduced
     */
    class ServiceFeed extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__xml = new internal.PrimitiveProperty(ServiceFeed, this, "xml", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__json = new internal.PrimitiveProperty(ServiceFeed, this, "json", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ServiceFeed() cannot be invoked directly, please use 'model.rest.createServiceFeed()'");
            }
        }
        get containerAsPublishedODataContract() {
            return super.getContainerAs(PublishedODataContract);
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
    ServiceFeed.structureTypeName = "Rest$ServiceFeed";
    ServiceFeed.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.14.0",
        deleted: "10.4.0",
        deletionMessage: null
    }, internal.StructureType.Element);
    rest.ServiceFeed = ServiceFeed;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    class StringBody extends Body {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(StringBody, this, "value", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__valueTemplate = new internal.PartProperty(StringBody, this, "valueTemplate", null, true);
            if (arguments.length < 4) {
                throw new Error("new StringBody() cannot be invoked directly, please use 'model.rest.createStringBody()'");
            }
        }
        get containerAsRestOperationMethodWithBody() {
            return super.getContainerAs(RestOperationMethodWithBody);
        }
        /**
         * In version 10.11.0: deleted
         */
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * In version 10.11.0: introduced
         */
        get valueTemplate() {
            return this.__valueTemplate.get();
        }
        set valueTemplate(newValue) {
            this.__valueTemplate.set(newValue);
        }
        /**
         * Creates and returns a new StringBody instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StringBody);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__value.isAvailable) {
                this.value = "";
            }
            if (this.__valueTemplate.isAvailable) {
                this.valueTemplate = ValueTemplate.create(this.model);
            }
        }
    }
    StringBody.structureTypeName = "Rest$StringBody";
    StringBody.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.4.0",
        properties: {
            value: {
                deleted: "10.11.0",
                deletionMessage: "Use valueTemplate instead."
            },
            valueTemplate: {
                introduced: "10.11.0",
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.StringBody = StringBody;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class StringValue extends Value {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(StringValue, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new StringValue() cannot be invoked directly, please use 'model.rest.createStringValue()'");
            }
        }
        get containerAsBasicAuthenticationScheme() {
            return super.getContainerAs(BasicAuthenticationScheme);
        }
        get containerAsImplicitMappingBody() {
            return super.getContainerAs(ImplicitMappingBody);
        }
        get containerAsOperationParameter() {
            return super.getContainerAs(OperationParameter);
        }
        get containerAsRestParameter() {
            return super.getContainerAs(RestParameter);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'testValue' property
         * of the parent OperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 to 10.1.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, StringValue.structureTypeName, { start: "10.1.0", end: "10.1.0" });
            return internal.instancehelpers.createElement(container, StringValue, "testValue", false);
        }
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'password' property
         * of the parent BasicAuthenticationScheme element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createInBasicAuthenticationSchemeUnderPassword(container) {
            internal.createInVersionCheck(container.model, StringValue.structureTypeName, { start: "10.2.0" });
            return internal.instancehelpers.createElement(container, StringValue, "password", false);
        }
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'username' property
         * of the parent BasicAuthenticationScheme element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createInBasicAuthenticationSchemeUnderUsername(container) {
            internal.createInVersionCheck(container.model, StringValue.structureTypeName, { start: "10.2.0" });
            return internal.instancehelpers.createElement(container, StringValue, "username", false);
        }
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'testValue' property
         * of the parent ImplicitMappingBody element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInImplicitMappingBodyUnderTestValue(container) {
            internal.createInVersionCheck(container.model, StringValue.structureTypeName, { start: "10.4.0" });
            return internal.instancehelpers.createElement(container, StringValue, "testValue", false);
        }
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'testValue' property
         * of the parent OperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createInOperationParameterUnderTestValue(container) {
            internal.createInVersionCheck(container.model, StringValue.structureTypeName, { start: "10.1.0" });
            return internal.instancehelpers.createElement(container, StringValue, "testValue", false);
        }
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'testValue' property
         * of the parent RestParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.17.0 and higher
         */
        static createInRestParameterUnderTestValue(container) {
            internal.createInVersionCheck(container.model, StringValue.structureTypeName, { start: "10.17.0" });
            return internal.instancehelpers.createElement(container, StringValue, "testValue", false);
        }
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StringValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.value = "";
        }
    }
    StringValue.structureTypeName = "Rest$StringValue";
    StringValue.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.1.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.StringValue = StringValue;
    /**
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class ValueTemplate extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(ValueTemplate, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ValueTemplate() cannot be invoked directly, please use 'model.rest.createValueTemplate()'");
            }
        }
        get containerAsConsumedRestService() {
            return super.getContainerAs(ConsumedRestService);
        }
        get containerAsHeaderWithValueTemplate() {
            return super.getContainerAs(HeaderWithValueTemplate);
        }
        get containerAsRestOperation() {
            return super.getContainerAs(RestOperation);
        }
        get containerAsStringBody() {
            return super.getContainerAs(StringBody);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new ValueTemplate instance in the SDK and on the server.
         * The new ValueTemplate will be automatically stored in the 'baseUrl' property
         * of the parent ConsumedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createInConsumedRestServiceUnderBaseUrl(container) {
            internal.createInVersionCheck(container.model, ValueTemplate.structureTypeName, { start: "10.1.0" });
            return internal.instancehelpers.createElement(container, ValueTemplate, "baseUrl", false);
        }
        /**
         * Creates and returns a new ValueTemplate instance in the SDK and on the server.
         * The new ValueTemplate will be automatically stored in the 'value' property
         * of the parent HeaderWithValueTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createInHeaderWithValueTemplateUnderValue(container) {
            internal.createInVersionCheck(container.model, ValueTemplate.structureTypeName, { start: "10.1.0" });
            return internal.instancehelpers.createElement(container, ValueTemplate, "value", false);
        }
        /**
         * Creates and returns a new ValueTemplate instance in the SDK and on the server.
         * The new ValueTemplate will be automatically stored in the 'path' property
         * of the parent RestOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createInRestOperationUnderPath(container) {
            internal.createInVersionCheck(container.model, ValueTemplate.structureTypeName, { start: "10.1.0" });
            return internal.instancehelpers.createElement(container, ValueTemplate, "path", false);
        }
        /**
         * Creates and returns a new ValueTemplate instance in the SDK and on the server.
         * The new ValueTemplate will be automatically stored in the 'valueTemplate' property
         * of the parent StringBody element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.11.0 and higher
         */
        static createInStringBodyUnderValueTemplate(container) {
            internal.createInVersionCheck(container.model, ValueTemplate.structureTypeName, { start: "10.11.0" });
            return internal.instancehelpers.createElement(container, ValueTemplate, "valueTemplate", false);
        }
        /**
         * Creates and returns a new ValueTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ValueTemplate);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.value = "";
        }
    }
    ValueTemplate.structureTypeName = "Rest$ValueTemplate";
    ValueTemplate.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.1.0",
        experimental: {
            currentValue: false,
            changedIn: ["10.7.0"]
        }
    }, internal.StructureType.Element);
    rest.ValueTemplate = ValueTemplate;
})(rest = exports.rest || (exports.rest = {}));
const datatypes_1 = require("./datatypes");
const exportmappings_1 = require("./exportmappings");
const expressions_1 = require("./expressions");
const importmappings_1 = require("./importmappings");
const kafka_1 = require("./kafka");
const mappings_1 = require("./mappings");
const microflows_1 = require("./microflows");
const services_1 = require("./services");
//# sourceMappingURL=rest.js.map