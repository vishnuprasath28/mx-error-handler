import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
export declare namespace url {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Url`.
     */
    /**
     * In version 10.1.0: introduced
     */
    abstract class UrlSegment extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.1.0: introduced
     */
    class StaticUrlSegment extends UrlSegment {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get segment(): string;
        set segment(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StaticUrlSegment instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StaticUrlSegment;
    }
}
import { IModel } from "./base-model";
