"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
var url;
(function (url) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Url`.
     */
    /**
     * In version 10.1.0: introduced
     */
    class UrlSegment extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new UrlSegment() cannot be invoked directly, please use 'model.url.createUrlSegment()'");
            }
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    UrlSegment.structureTypeName = "Url$UrlSegment";
    UrlSegment.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.1.0"
    }, internal.StructureType.Element);
    url.UrlSegment = UrlSegment;
    /**
     * In version 10.1.0: introduced
     */
    class StaticUrlSegment extends UrlSegment {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__segment = new internal.PrimitiveProperty(StaticUrlSegment, this, "segment", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new StaticUrlSegment() cannot be invoked directly, please use 'model.url.createStaticUrlSegment()'");
            }
        }
        get segment() {
            return this.__segment.get();
        }
        set segment(newValue) {
            this.__segment.set(newValue);
        }
        /**
         * Creates and returns a new StaticUrlSegment instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, StaticUrlSegment);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    StaticUrlSegment.structureTypeName = "Url$StaticUrlSegment";
    StaticUrlSegment.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.1.0"
    }, internal.StructureType.Element);
    url.StaticUrlSegment = StaticUrlSegment;
})(url = exports.url || (exports.url = {}));
//# sourceMappingURL=url.js.map