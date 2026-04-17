"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var authentication;
(function (authentication) {
    class AuthenticationMethod extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "authentication.AuthenticationMethod";
        }
    }
    AuthenticationMethod.Unknown = new AuthenticationMethod("Unknown", {});
    AuthenticationMethod.Basic = new AuthenticationMethod("Basic", {});
    AuthenticationMethod.OAuth20 = new AuthenticationMethod("OAuth20", {});
    authentication.AuthenticationMethod = AuthenticationMethod;
    class GrantType extends internal.AbstractEnum {
        constructor() {
            super(...arguments);
            this.qualifiedTsTypeName = "authentication.GrantType";
        }
    }
    GrantType.Unknown = new GrantType("Unknown", {});
    GrantType.AuthorizationCode = new GrantType("AuthorizationCode", {});
    GrantType.ClientCredentials = new GrantType("ClientCredentials", {});
    authentication.GrantType = GrantType;
    /**
     * In version 11.3.0: introduced
     */
    class Authentication extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__authenticationDetails = new internal.PartProperty(Authentication, this, "authenticationDetails", null, false);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get authenticationDetails() {
            return this.__authenticationDetails.get();
        }
        set authenticationDetails(newValue) {
            this.__authenticationDetails.set(newValue);
        }
        /**
         * Creates a new Authentication unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Authentication);
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
    Authentication.structureTypeName = "Authentication$Authentication";
    Authentication.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.3.0"
    }, internal.StructureType.ModelUnit);
    authentication.Authentication = Authentication;
    /**
     * In version 11.3.0: introduced
     */
    class AuthenticationDetails extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new AuthenticationDetails() cannot be invoked directly, please use 'model.authentication.createAuthenticationDetails()'");
            }
        }
        get containerAsAuthentication() {
            return super.getContainerAs(Authentication);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AuthenticationDetails.structureTypeName = "Authentication$AuthenticationDetails";
    AuthenticationDetails.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.3.0"
    }, internal.StructureType.Element);
    authentication.AuthenticationDetails = AuthenticationDetails;
    /**
     * In version 11.3.0: introduced
     */
    class BasicAuthenticationDetails extends AuthenticationDetails {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__username = new internal.ByNameReferenceProperty(BasicAuthenticationDetails, this, "username", null, "Constants$Constant");
            /** @internal */
            this.__password = new internal.ByNameReferenceProperty(BasicAuthenticationDetails, this, "password", null, "Constants$Constant");
            if (arguments.length < 4) {
                throw new Error("new BasicAuthenticationDetails() cannot be invoked directly, please use 'model.authentication.createBasicAuthenticationDetails()'");
            }
        }
        get containerAsAuthentication() {
            return super.getContainerAs(Authentication);
        }
        get username() {
            return this.__username.get();
        }
        set username(newValue) {
            this.__username.set(newValue);
        }
        get usernameQualifiedName() {
            return this.__username.qualifiedName();
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
         * Creates and returns a new BasicAuthenticationDetails instance in the SDK and on the server.
         * The new BasicAuthenticationDetails will be automatically stored in the 'authenticationDetails' property
         * of the parent Authentication element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.3.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BasicAuthenticationDetails.structureTypeName, { start: "11.3.0" });
            return internal.instancehelpers.createElement(container, BasicAuthenticationDetails, "authenticationDetails", false);
        }
        /**
         * Creates and returns a new BasicAuthenticationDetails instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BasicAuthenticationDetails);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BasicAuthenticationDetails.structureTypeName = "Authentication$BasicAuthenticationDetails";
    BasicAuthenticationDetails.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.3.0"
    }, internal.StructureType.Element);
    authentication.BasicAuthenticationDetails = BasicAuthenticationDetails;
    /**
     * In version 11.3.0: introduced
     */
    class OAuth20AuthenticationDetails extends AuthenticationDetails {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__providerName = new internal.PrimitiveProperty(OAuth20AuthenticationDetails, this, "providerName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__wellKnownEndPoint = new internal.PrimitiveProperty(OAuth20AuthenticationDetails, this, "wellKnownEndPoint", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__tenantId = new internal.ByNameReferenceProperty(OAuth20AuthenticationDetails, this, "tenantId", null, "Constants$Constant");
            /** @internal */
            this.__clientId = new internal.ByNameReferenceProperty(OAuth20AuthenticationDetails, this, "clientId", null, "Constants$Constant");
            /** @internal */
            this.__clientSecret = new internal.ByNameReferenceProperty(OAuth20AuthenticationDetails, this, "clientSecret", null, "Constants$Constant");
            /** @internal */
            this.__tokenEndPoint = new internal.ByNameReferenceProperty(OAuth20AuthenticationDetails, this, "tokenEndPoint", null, "Constants$Constant");
            /** @internal */
            this.__scopes = new internal.PrimitiveListProperty(OAuth20AuthenticationDetails, this, "scopes", [], internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__grantType = new internal.EnumProperty(OAuth20AuthenticationDetails, this, "grantType", GrantType.Unknown, GrantType);
            /** @internal */
            this.__audience = new internal.PrimitiveProperty(OAuth20AuthenticationDetails, this, "audience", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new OAuth20AuthenticationDetails() cannot be invoked directly, please use 'model.authentication.createOAuth20AuthenticationDetails()'");
            }
        }
        get containerAsAuthentication() {
            return super.getContainerAs(Authentication);
        }
        get providerName() {
            return this.__providerName.get();
        }
        set providerName(newValue) {
            this.__providerName.set(newValue);
        }
        get wellKnownEndPoint() {
            return this.__wellKnownEndPoint.get();
        }
        set wellKnownEndPoint(newValue) {
            this.__wellKnownEndPoint.set(newValue);
        }
        get tenantId() {
            return this.__tenantId.get();
        }
        set tenantId(newValue) {
            this.__tenantId.set(newValue);
        }
        get tenantIdQualifiedName() {
            return this.__tenantId.qualifiedName();
        }
        /**
         * In version 11.5.0: added optional
         */
        get clientId() {
            return this.__clientId.get();
        }
        set clientId(newValue) {
            this.__clientId.set(newValue);
        }
        get clientIdQualifiedName() {
            return this.__clientId.qualifiedName();
        }
        /**
         * In version 11.5.0: added optional
         */
        get clientSecret() {
            return this.__clientSecret.get();
        }
        set clientSecret(newValue) {
            this.__clientSecret.set(newValue);
        }
        get clientSecretQualifiedName() {
            return this.__clientSecret.qualifiedName();
        }
        /**
         * In version 11.5.0: added optional
         */
        get tokenEndPoint() {
            return this.__tokenEndPoint.get();
        }
        set tokenEndPoint(newValue) {
            this.__tokenEndPoint.set(newValue);
        }
        get tokenEndPointQualifiedName() {
            return this.__tokenEndPoint.qualifiedName();
        }
        get scopes() {
            return this.__scopes.get();
        }
        get grantType() {
            return this.__grantType.get();
        }
        set grantType(newValue) {
            this.__grantType.set(newValue);
        }
        /**
         * In version 11.5.0: introduced
         */
        get audience() {
            return this.__audience.get();
        }
        set audience(newValue) {
            this.__audience.set(newValue);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.grantType = GrantType.Unknown;
        }
    }
    OAuth20AuthenticationDetails.structureTypeName = "Authentication$OAuth20AuthenticationDetails";
    OAuth20AuthenticationDetails.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.3.0",
        properties: {
            clientId: {
                required: {
                    currentValue: false,
                    changedIn: ["11.5.0"]
                }
            },
            clientSecret: {
                required: {
                    currentValue: false,
                    changedIn: ["11.5.0"]
                }
            },
            tokenEndPoint: {
                required: {
                    currentValue: false,
                    changedIn: ["11.5.0"]
                }
            },
            audience: {
                introduced: "11.5.0"
            }
        }
    }, internal.StructureType.Element);
    authentication.OAuth20AuthenticationDetails = OAuth20AuthenticationDetails;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.3.0: introduced
     */
    class OAuth20AuthCodeDetails extends OAuth20AuthenticationDetails {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__responseType = new internal.PrimitiveProperty(OAuth20AuthCodeDetails, this, "responseType", "code", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__responseMode = new internal.PrimitiveProperty(OAuth20AuthCodeDetails, this, "responseMode", "query", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__authorizationEndpoint = new internal.ByNameReferenceProperty(OAuth20AuthCodeDetails, this, "authorizationEndpoint", null, "Constants$Constant");
            /** @internal */
            this.__callbackUrl = new internal.ByNameReferenceProperty(OAuth20AuthCodeDetails, this, "callbackUrl", null, "Constants$Constant");
            if (arguments.length < 4) {
                throw new Error("new OAuth20AuthCodeDetails() cannot be invoked directly, please use 'model.authentication.createOAuth20AuthCodeDetails()'");
            }
        }
        get containerAsAuthentication() {
            return super.getContainerAs(Authentication);
        }
        get responseType() {
            return this.__responseType.get();
        }
        set responseType(newValue) {
            this.__responseType.set(newValue);
        }
        get responseMode() {
            return this.__responseMode.get();
        }
        set responseMode(newValue) {
            this.__responseMode.set(newValue);
        }
        /**
         * In version 11.5.0: added optional
         */
        get authorizationEndpoint() {
            return this.__authorizationEndpoint.get();
        }
        set authorizationEndpoint(newValue) {
            this.__authorizationEndpoint.set(newValue);
        }
        get authorizationEndpointQualifiedName() {
            return this.__authorizationEndpoint.qualifiedName();
        }
        /**
         * In version 11.5.0: added optional
         */
        get callbackUrl() {
            return this.__callbackUrl.get();
        }
        set callbackUrl(newValue) {
            this.__callbackUrl.set(newValue);
        }
        get callbackUrlQualifiedName() {
            return this.__callbackUrl.qualifiedName();
        }
        /**
         * Creates and returns a new OAuth20AuthCodeDetails instance in the SDK and on the server.
         * The new OAuth20AuthCodeDetails will be automatically stored in the 'authenticationDetails' property
         * of the parent Authentication element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.3.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, OAuth20AuthCodeDetails.structureTypeName, { start: "11.3.0" });
            return internal.instancehelpers.createElement(container, OAuth20AuthCodeDetails, "authenticationDetails", false);
        }
        /**
         * Creates and returns a new OAuth20AuthCodeDetails instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, OAuth20AuthCodeDetails);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.responseMode = "query";
            this.responseType = "code";
        }
    }
    OAuth20AuthCodeDetails.structureTypeName = "Authentication$OAuth20AuthCodeDetails";
    OAuth20AuthCodeDetails.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.3.0",
        properties: {
            authorizationEndpoint: {
                required: {
                    currentValue: false,
                    changedIn: ["11.5.0"]
                }
            },
            callbackUrl: {
                required: {
                    currentValue: false,
                    changedIn: ["11.5.0"]
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    authentication.OAuth20AuthCodeDetails = OAuth20AuthCodeDetails;
    /**
     * In version 11.3.0: introduced
     */
    class OAuth20ClientCredentialsDetails extends OAuth20AuthenticationDetails {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new OAuth20ClientCredentialsDetails() cannot be invoked directly, please use 'model.authentication.createOAuth20ClientCredentialsDetails()'");
            }
        }
        get containerAsAuthentication() {
            return super.getContainerAs(Authentication);
        }
        /**
         * Creates and returns a new OAuth20ClientCredentialsDetails instance in the SDK and on the server.
         * The new OAuth20ClientCredentialsDetails will be automatically stored in the 'authenticationDetails' property
         * of the parent Authentication element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.3.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, OAuth20ClientCredentialsDetails.structureTypeName, { start: "11.3.0" });
            return internal.instancehelpers.createElement(container, OAuth20ClientCredentialsDetails, "authenticationDetails", false);
        }
        /**
         * Creates and returns a new OAuth20ClientCredentialsDetails instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, OAuth20ClientCredentialsDetails);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    OAuth20ClientCredentialsDetails.structureTypeName = "Authentication$OAuth20ClientCredentialsDetails";
    OAuth20ClientCredentialsDetails.versionInfo = new exports.StructureVersionInfo({
        introduced: "11.3.0"
    }, internal.StructureType.Element);
    authentication.OAuth20ClientCredentialsDetails = OAuth20ClientCredentialsDetails;
})(authentication = exports.authentication || (exports.authentication = {}));
//# sourceMappingURL=authentication.js.map