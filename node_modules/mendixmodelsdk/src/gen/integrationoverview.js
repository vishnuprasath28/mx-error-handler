"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.integrationoverview = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
var integrationoverview;
(function (integrationoverview) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `IntegrationOverview`.
     */
    /**
     * In version 10.21.0: introduced
     */
    class SourceApi extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new SourceApi() cannot be invoked directly, please use 'model.integrationoverview.createSourceApi()'");
            }
        }
        get containerAsBusinessEventService() {
            return super.getContainerAs(businessevents_1.businessevents.BusinessEventService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    SourceApi.structureTypeName = "IntegrationOverview$SourceApi";
    SourceApi.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.21.0"
    }, internal.StructureType.Element);
    integrationoverview.SourceApi = SourceApi;
    /**
     * In version 10.21.0: introduced
     */
    class CatalogApi extends SourceApi {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__endpointId = new internal.PrimitiveProperty(CatalogApi, this, "endpointId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(CatalogApi, this, "version", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__applicationId = new internal.PrimitiveProperty(CatalogApi, this, "applicationId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__environmentType = new internal.EnumProperty(CatalogApi, this, "environmentType", domainmodels_1.domainmodels.EnvironmentType.Unknown, domainmodels_1.domainmodels.EnvironmentType);
            /** @internal */
            this.__viewInCatalogUrl = new internal.PrimitiveProperty(CatalogApi, this, "viewInCatalogUrl", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__validated = new internal.PrimitiveProperty(CatalogApi, this, "validated", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new CatalogApi() cannot be invoked directly, please use 'model.integrationoverview.createCatalogApi()'");
            }
        }
        get containerAsBusinessEventService() {
            return super.getContainerAs(businessevents_1.businessevents.BusinessEventService);
        }
        get endpointId() {
            return this.__endpointId.get();
        }
        set endpointId(newValue) {
            this.__endpointId.set(newValue);
        }
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        get applicationId() {
            return this.__applicationId.get();
        }
        set applicationId(newValue) {
            this.__applicationId.set(newValue);
        }
        get environmentType() {
            return this.__environmentType.get();
        }
        set environmentType(newValue) {
            this.__environmentType.set(newValue);
        }
        get viewInCatalogUrl() {
            return this.__viewInCatalogUrl.get();
        }
        set viewInCatalogUrl(newValue) {
            this.__viewInCatalogUrl.set(newValue);
        }
        get validated() {
            return this.__validated.get();
        }
        set validated(newValue) {
            this.__validated.set(newValue);
        }
        /**
         * Creates and returns a new CatalogApi instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CatalogApi);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.environmentType = domainmodels_1.domainmodels.EnvironmentType.Unknown;
        }
    }
    CatalogApi.structureTypeName = "IntegrationOverview$CatalogApi";
    CatalogApi.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.21.0"
    }, internal.StructureType.Element);
    integrationoverview.CatalogApi = CatalogApi;
})(integrationoverview = exports.integrationoverview || (exports.integrationoverview = {}));
const businessevents_1 = require("./businessevents");
const domainmodels_1 = require("./domainmodels");
//# sourceMappingURL=integrationoverview.js.map