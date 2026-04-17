import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
export declare namespace integrationoverview {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `IntegrationOverview`.
     */
    /**
     * In version 10.21.0: introduced
     */
    abstract class SourceApi extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBusinessEventService(): businessevents.BusinessEventService;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.21.0: introduced
     */
    class CatalogApi extends SourceApi {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBusinessEventService(): businessevents.BusinessEventService;
        get endpointId(): string;
        set endpointId(newValue: string);
        get version(): string;
        set version(newValue: string);
        get applicationId(): string;
        set applicationId(newValue: string);
        get environmentType(): domainmodels.EnvironmentType;
        set environmentType(newValue: domainmodels.EnvironmentType);
        get viewInCatalogUrl(): string;
        set viewInCatalogUrl(newValue: string);
        get validated(): boolean;
        set validated(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CatalogApi instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CatalogApi;
    }
}
import { businessevents } from "./businessevents";
import { domainmodels } from "./domainmodels";
import { IModel } from "./base-model";
