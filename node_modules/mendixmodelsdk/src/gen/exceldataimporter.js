"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceldataimporter = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const mappings_1 = require("./mappings");
const microflows_1 = require("./microflows");
var exceldataimporter;
(function (exceldataimporter) {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ExcelDataImporter`.
     */
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    class CSVSheet extends mappings_1.mappings.MappingSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__delimiter = new internal.PrimitiveProperty(CSVSheet, this, "delimiter", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__quoteChar = new internal.PrimitiveProperty(CSVSheet, this, "quoteChar", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__escapeChar = new internal.PrimitiveProperty(CSVSheet, this, "escapeChar", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__headerIncluded = new internal.PrimitiveProperty(CSVSheet, this, "headerIncluded", true, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(CSVSheet, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__columnAttributeMappings = new internal.PartListProperty(CSVSheet, this, "columnAttributeMappings", []);
            /** @internal */
            this.__csvRootElement = new internal.PartProperty(CSVSheet, this, "csvRootElement", null, true);
            if (arguments.length < 4) {
                throw new Error("new CSVSheet() cannot be invoked directly, please use 'model.exceldataimporter.createCSVSheet()'");
            }
        }
        get containerAsCSVTemplateContents() {
            return super.getContainerAs(CSVTemplateContents);
        }
        get delimiter() {
            return this.__delimiter.get();
        }
        set delimiter(newValue) {
            this.__delimiter.set(newValue);
        }
        get quoteChar() {
            return this.__quoteChar.get();
        }
        set quoteChar(newValue) {
            this.__quoteChar.set(newValue);
        }
        get escapeChar() {
            return this.__escapeChar.get();
        }
        set escapeChar(newValue) {
            this.__escapeChar.set(newValue);
        }
        get headerIncluded() {
            return this.__headerIncluded.get();
        }
        set headerIncluded(newValue) {
            this.__headerIncluded.set(newValue);
        }
        /**
         * In version 10.16.0: added optional
         */
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        get columnAttributeMappings() {
            return this.__columnAttributeMappings.get();
        }
        /**
         * In version 10.15.0: introduced
         */
        get csvRootElement() {
            return this.__csvRootElement.get();
        }
        set csvRootElement(newValue) {
            this.__csvRootElement.set(newValue);
        }
        /**
         * Creates and returns a new CSVSheet instance in the SDK and on the server.
         * The new CSVSheet will be automatically stored in the 'sheet' property
         * of the parent CSVTemplateContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CSVSheet.structureTypeName, { start: "10.6.0" });
            return internal.instancehelpers.createElement(container, CSVSheet, "sheet", false);
        }
        /**
         * Creates and returns a new CSVSheet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CSVSheet);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__csvRootElement.isAvailable) {
                this.csvRootElement = DataImporterElement.create(this.model);
            }
            this.headerIncluded = true;
        }
    }
    CSVSheet.structureTypeName = "ExcelDataImporter$CSVSheet";
    CSVSheet.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.6.0",
        properties: {
            entity: {
                required: {
                    currentValue: false,
                    changedIn: ["10.16.0"]
                }
            },
            csvRootElement: {
                introduced: "10.15.0",
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["10.15.0"]
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.CSVSheet = CSVSheet;
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    class TemplateContents extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new TemplateContents() cannot be invoked directly, please use 'model.exceldataimporter.createTemplateContents()'");
            }
        }
        get containerAsTemplate() {
            return super.getContainerAs(Template);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    TemplateContents.structureTypeName = "ExcelDataImporter$TemplateContents";
    TemplateContents.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.6.0",
        public: {
            currentValue: true,
            changedIn: ["10.15.0"]
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.TemplateContents = TemplateContents;
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    class CSVTemplateContents extends TemplateContents {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__sheet = new internal.PartProperty(CSVTemplateContents, this, "sheet", null, true);
            if (arguments.length < 4) {
                throw new Error("new CSVTemplateContents() cannot be invoked directly, please use 'model.exceldataimporter.createCSVTemplateContents()'");
            }
        }
        get containerAsTemplate() {
            return super.getContainerAs(Template);
        }
        /**
         * In version 10.15.0: added public
         */
        get sheet() {
            return this.__sheet.get();
        }
        set sheet(newValue) {
            this.__sheet.set(newValue);
        }
        /**
         * Creates and returns a new CSVTemplateContents instance in the SDK and on the server.
         * The new CSVTemplateContents will be automatically stored in the 'contents' property
         * of the parent Template element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CSVTemplateContents.structureTypeName, { start: "10.6.0" });
            return internal.instancehelpers.createElement(container, CSVTemplateContents, "contents", false);
        }
        /**
         * Creates and returns a new CSVTemplateContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CSVTemplateContents);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            (() => {
                if (internal.isAtLeast("10.15.0", this.model)) {
                    this.sheet = ((cSVSheet) => {
                        cSVSheet.name = "CsvSheet";
                        return cSVSheet;
                    })(CSVSheet.create(this.model));
                    return;
                }
                this.sheet = CSVSheet.create(this.model);
            })();
        }
    }
    CSVTemplateContents.structureTypeName = "ExcelDataImporter$CSVTemplateContents";
    CSVTemplateContents.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.6.0",
        properties: {
            sheet: {
                public: {
                    currentValue: true,
                    changedIn: ["10.15.0"]
                },
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["10.15.0"]
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.CSVTemplateContents = CSVTemplateContents;
    /**
     * In version 11.7.0: removed experimental
     * In version 9.24.0: introduced
     */
    class ColumnAttributeMapping extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__reference = new internal.PartProperty(ColumnAttributeMapping, this, "reference", null, true);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(ColumnAttributeMapping, this, "attribute", null, "DomainModels$Attribute");
            if (arguments.length < 4) {
                throw new Error("new ColumnAttributeMapping() cannot be invoked directly, please use 'model.exceldataimporter.createColumnAttributeMapping()'");
            }
        }
        get containerAsCSVSheet() {
            return super.getContainerAs(CSVSheet);
        }
        get containerAsExcelSheet() {
            return super.getContainerAs(ExcelSheet);
        }
        get containerAsSheet() {
            return super.getContainerAs(Sheet);
        }
        get reference() {
            return this.__reference.get();
        }
        set reference(newValue) {
            this.__reference.set(newValue);
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
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ColumnAttributeMapping.structureTypeName, { start: "9.24.0", end: "10.5.0" });
            return internal.instancehelpers.createElement(container, ColumnAttributeMapping, "columnAttributeMappings", true);
        }
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent CSVSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInCSVSheetUnderColumnAttributeMappings(container) {
            internal.createInVersionCheck(container.model, ColumnAttributeMapping.structureTypeName, { start: "10.6.0" });
            return internal.instancehelpers.createElement(container, ColumnAttributeMapping, "columnAttributeMappings", true);
        }
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent ExcelSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInExcelSheetUnderColumnAttributeMappings(container) {
            internal.createInVersionCheck(container.model, ColumnAttributeMapping.structureTypeName, { start: "10.6.0" });
            return internal.instancehelpers.createElement(container, ColumnAttributeMapping, "columnAttributeMappings", true);
        }
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createInSheetUnderColumnAttributeMappings(container) {
            internal.createInVersionCheck(container.model, ColumnAttributeMapping.structureTypeName, { start: "9.24.0", end: "10.5.0" });
            return internal.instancehelpers.createElement(container, ColumnAttributeMapping, "columnAttributeMappings", true);
        }
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ColumnAttributeMapping);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.reference = IndexReference.create(this.model);
        }
    }
    ColumnAttributeMapping.structureTypeName = "ExcelDataImporter$ColumnAttributeMapping";
    ColumnAttributeMapping.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        properties: {
            reference: {
                required: {
                    currentValue: true
                }
            },
            attribute: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.ColumnAttributeMapping = ColumnAttributeMapping;
    /**
     * In version 11.7.0: removed experimental
     * In version 10.16.0: introduced
     */
    class CsvSheetMappingSourceReference extends mappings_1.mappings.MappingSourceReference {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__csvSheet = new internal.ByNameReferenceProperty(CsvSheetMappingSourceReference, this, "csvSheet", null, "ExcelDataImporter$CSVSheet");
            if (arguments.length < 4) {
                throw new Error("new CsvSheetMappingSourceReference() cannot be invoked directly, please use 'model.exceldataimporter.createCsvSheetMappingSourceReference()'");
            }
        }
        get containerAsMappingDocument() {
            return super.getContainerAs(mappings_1.mappings.MappingDocument);
        }
        get csvSheet() {
            return this.__csvSheet.get();
        }
        set csvSheet(newValue) {
            this.__csvSheet.set(newValue);
        }
        get csvSheetQualifiedName() {
            return this.__csvSheet.qualifiedName();
        }
        /**
         * Creates and returns a new CsvSheetMappingSourceReference instance in the SDK and on the server.
         * The new CsvSheetMappingSourceReference will be automatically stored in the 'mappingSourceReference' property
         * of the parent mappings.MappingDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.16.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, CsvSheetMappingSourceReference.structureTypeName, { start: "10.16.0" });
            return internal.instancehelpers.createElement(container, CsvSheetMappingSourceReference, "mappingSourceReference", false);
        }
        /**
         * Creates and returns a new CsvSheetMappingSourceReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, CsvSheetMappingSourceReference);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    CsvSheetMappingSourceReference.structureTypeName = "ExcelDataImporter$CsvSheetMappingSourceReference";
    CsvSheetMappingSourceReference.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.16.0",
        properties: {
            csvSheet: {
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
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.CsvSheetMappingSourceReference = CsvSheetMappingSourceReference;
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: introduced
     */
    class DataImporterElement extends mappings_1.mappings.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__originalValues = new internal.PrimitiveListProperty(DataImporterElement, this, "originalValues", [], internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new DataImporterElement() cannot be invoked directly, please use 'model.exceldataimporter.createDataImporterElement()'");
            }
        }
        get containerAsCSVSheet() {
            return super.getContainerAs(CSVSheet);
        }
        get containerAsExcelSheet() {
            return super.getContainerAs(ExcelSheet);
        }
        get containerAsJsonStructure() {
            return super.getContainerAs(jsonstructures_1.jsonstructures.JsonStructure);
        }
        get containerAsElement() {
            return super.getContainerAs(mappings_1.mappings.Element);
        }
        get originalValues() {
            return this.__originalValues.get();
        }
        /**
         * Creates and returns a new DataImporterElement instance in the SDK and on the server.
         * The new DataImporterElement will be automatically stored in the 'csvRootElement' property
         * of the parent CSVSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.15.0 and higher
         */
        static createInCSVSheetUnderCsvRootElement(container) {
            internal.createInVersionCheck(container.model, DataImporterElement.structureTypeName, { start: "10.15.0" });
            return internal.instancehelpers.createElement(container, DataImporterElement, "csvRootElement", false);
        }
        /**
         * Creates and returns a new DataImporterElement instance in the SDK and on the server.
         * The new DataImporterElement will be automatically stored in the 'excelRootElement' property
         * of the parent ExcelSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.15.0 and higher
         */
        static createInExcelSheetUnderExcelRootElement(container) {
            internal.createInVersionCheck(container.model, DataImporterElement.structureTypeName, { start: "10.15.0" });
            return internal.instancehelpers.createElement(container, DataImporterElement, "excelRootElement", false);
        }
        /**
         * Creates and returns a new DataImporterElement instance in the SDK and on the server.
         * The new DataImporterElement will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.15.0 and higher
         */
        static createInJsonStructureUnderElements(container) {
            internal.createInVersionCheck(container.model, DataImporterElement.structureTypeName, { start: "10.15.0" });
            return internal.instancehelpers.createElement(container, DataImporterElement, "elements", true);
        }
        /**
         * Creates and returns a new DataImporterElement instance in the SDK and on the server.
         * The new DataImporterElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.15.0 and higher
         */
        static createInElementUnderChildren(container) {
            internal.createInVersionCheck(container.model, DataImporterElement.structureTypeName, { start: "10.15.0" });
            return internal.instancehelpers.createElement(container, DataImporterElement, "children", true);
        }
        /**
         * Creates and returns a new DataImporterElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, DataImporterElement);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    DataImporterElement.structureTypeName = "ExcelDataImporter$DataImporterElement";
    DataImporterElement.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.15.0",
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.DataImporterElement = DataImporterElement;
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    class ExcelSheet extends mappings_1.mappings.MappingSource {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__reference = new internal.PartProperty(ExcelSheet, this, "reference", null, true);
            /** @internal */
            this.__headerRowStartsAt = new internal.PrimitiveProperty(ExcelSheet, this, "headerRowStartsAt", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__dataRowStartsAt = new internal.PrimitiveProperty(ExcelSheet, this, "dataRowStartsAt", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(ExcelSheet, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__columnAttributeMappings = new internal.PartListProperty(ExcelSheet, this, "columnAttributeMappings", []);
            /** @internal */
            this.__excelRootElement = new internal.PartProperty(ExcelSheet, this, "excelRootElement", null, true);
            if (arguments.length < 4) {
                throw new Error("new ExcelSheet() cannot be invoked directly, please use 'model.exceldataimporter.createExcelSheet()'");
            }
        }
        get containerAsExcelTemplateContents() {
            return super.getContainerAs(ExcelTemplateContents);
        }
        get reference() {
            return this.__reference.get();
        }
        set reference(newValue) {
            this.__reference.set(newValue);
        }
        get headerRowStartsAt() {
            return this.__headerRowStartsAt.get();
        }
        set headerRowStartsAt(newValue) {
            this.__headerRowStartsAt.set(newValue);
        }
        get dataRowStartsAt() {
            return this.__dataRowStartsAt.get();
        }
        set dataRowStartsAt(newValue) {
            this.__dataRowStartsAt.set(newValue);
        }
        /**
         * In version 10.16.0: added optional
         */
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        get columnAttributeMappings() {
            return this.__columnAttributeMappings.get();
        }
        /**
         * In version 10.15.0: introduced
         */
        get excelRootElement() {
            return this.__excelRootElement.get();
        }
        set excelRootElement(newValue) {
            this.__excelRootElement.set(newValue);
        }
        /**
         * Creates and returns a new ExcelSheet instance in the SDK and on the server.
         * The new ExcelSheet will be automatically stored in the 'sheets' property
         * of the parent ExcelTemplateContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ExcelSheet.structureTypeName, { start: "10.6.0" });
            return internal.instancehelpers.createElement(container, ExcelSheet, "sheets", true);
        }
        /**
         * Creates and returns a new ExcelSheet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExcelSheet);
        }
        /** @internal */
        _isByNameReferrable() {
            return this.__name.isAvailable;
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.dataRowStartsAt = 1;
            if (this.__excelRootElement.isAvailable) {
                this.excelRootElement = DataImporterElement.create(this.model);
            }
            this.headerRowStartsAt = 1;
            this.reference = IndexReference.create(this.model);
        }
    }
    ExcelSheet.structureTypeName = "ExcelDataImporter$ExcelSheet";
    ExcelSheet.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.6.0",
        properties: {
            reference: {
                required: {
                    currentValue: true
                }
            },
            entity: {
                required: {
                    currentValue: false,
                    changedIn: ["10.16.0"]
                }
            },
            excelRootElement: {
                introduced: "10.15.0",
                required: {
                    currentValue: true
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["10.15.0"]
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.ExcelSheet = ExcelSheet;
    /**
     * In version 11.7.0: removed experimental
     * In version 10.16.0: introduced
     */
    class ExcelSheetMappingSourceReference extends mappings_1.mappings.MappingSourceReference {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__excelSheet = new internal.ByNameReferenceProperty(ExcelSheetMappingSourceReference, this, "excelSheet", null, "ExcelDataImporter$ExcelSheet");
            if (arguments.length < 4) {
                throw new Error("new ExcelSheetMappingSourceReference() cannot be invoked directly, please use 'model.exceldataimporter.createExcelSheetMappingSourceReference()'");
            }
        }
        get containerAsMappingDocument() {
            return super.getContainerAs(mappings_1.mappings.MappingDocument);
        }
        get excelSheet() {
            return this.__excelSheet.get();
        }
        set excelSheet(newValue) {
            this.__excelSheet.set(newValue);
        }
        get excelSheetQualifiedName() {
            return this.__excelSheet.qualifiedName();
        }
        /**
         * Creates and returns a new ExcelSheetMappingSourceReference instance in the SDK and on the server.
         * The new ExcelSheetMappingSourceReference will be automatically stored in the 'mappingSourceReference' property
         * of the parent mappings.MappingDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.16.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ExcelSheetMappingSourceReference.structureTypeName, { start: "10.16.0" });
            return internal.instancehelpers.createElement(container, ExcelSheetMappingSourceReference, "mappingSourceReference", false);
        }
        /**
         * Creates and returns a new ExcelSheetMappingSourceReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExcelSheetMappingSourceReference);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExcelSheetMappingSourceReference.structureTypeName = "ExcelDataImporter$ExcelSheetMappingSourceReference";
    ExcelSheetMappingSourceReference.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.16.0",
        properties: {
            excelSheet: {
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
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.ExcelSheetMappingSourceReference = ExcelSheetMappingSourceReference;
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    class ExcelTemplateContents extends TemplateContents {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__sheets = new internal.PartListProperty(ExcelTemplateContents, this, "sheets", []);
            if (arguments.length < 4) {
                throw new Error("new ExcelTemplateContents() cannot be invoked directly, please use 'model.exceldataimporter.createExcelTemplateContents()'");
            }
        }
        get containerAsTemplate() {
            return super.getContainerAs(Template);
        }
        /**
         * In version 10.15.0: added public
         */
        get sheets() {
            return this.__sheets.get();
        }
        /**
         * Creates and returns a new ExcelTemplateContents instance in the SDK and on the server.
         * The new ExcelTemplateContents will be automatically stored in the 'contents' property
         * of the parent Template element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ExcelTemplateContents.structureTypeName, { start: "10.6.0" });
            return internal.instancehelpers.createElement(container, ExcelTemplateContents, "contents", false);
        }
        /**
         * Creates and returns a new ExcelTemplateContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ExcelTemplateContents);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ExcelTemplateContents.structureTypeName = "ExcelDataImporter$ExcelTemplateContents";
    ExcelTemplateContents.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.6.0",
        properties: {
            sheets: {
                public: {
                    currentValue: true,
                    changedIn: ["10.15.0"]
                }
            }
        },
        public: {
            currentValue: true,
            changedIn: ["10.15.0"]
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.ExcelTemplateContents = ExcelTemplateContents;
    /**
     * In version 11.7.0: removed experimental
     * In version 10.0.0: introduced
     */
    class ImportExcelDataAction extends microflows_1.microflows.MicroflowAction {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__template = new internal.ByNameReferenceProperty(ImportExcelDataAction, this, "template", null, "ExcelDataImporter$Template");
            /** @internal */
            this.__fileVariableName = new internal.PrimitiveProperty(ImportExcelDataAction, this, "fileVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__outputVariableName = new internal.PrimitiveProperty(ImportExcelDataAction, this, "outputVariableName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__inputFileVariableName = new internal.PrimitiveProperty(ImportExcelDataAction, this, "inputFileVariableName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new ImportExcelDataAction() cannot be invoked directly, please use 'model.exceldataimporter.createImportExcelDataAction()'");
            }
        }
        get containerAsActionActivity() {
            return super.getContainerAs(microflows_1.microflows.ActionActivity);
        }
        /**
         * In version 10.1.0: added optional
         */
        get template() {
            return this.__template.get();
        }
        set template(newValue) {
            this.__template.set(newValue);
        }
        get templateQualifiedName() {
            return this.__template.qualifiedName();
        }
        /**
         * In version 11.2.0: deleted
         */
        get fileVariableName() {
            return this.__fileVariableName.get();
        }
        set fileVariableName(newValue) {
            this.__fileVariableName.set(newValue);
        }
        get outputVariableName() {
            return this.__outputVariableName.get();
        }
        set outputVariableName(newValue) {
            this.__outputVariableName.set(newValue);
        }
        /**
         * In version 11.2.0: introduced
         */
        get inputFileVariableName() {
            return this.__inputFileVariableName.get();
        }
        set inputFileVariableName(newValue) {
            this.__inputFileVariableName.set(newValue);
        }
        /**
         * Creates and returns a new ImportExcelDataAction instance in the SDK and on the server.
         * The new ImportExcelDataAction will be automatically stored in the 'action' property
         * of the parent microflows.ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ImportExcelDataAction.structureTypeName, { start: "10.0.0" });
            return internal.instancehelpers.createElement(container, ImportExcelDataAction, "action", false);
        }
        /**
         * Creates and returns a new ImportExcelDataAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ImportExcelDataAction);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ImportExcelDataAction.structureTypeName = "ExcelDataImporter$ImportExcelDataAction";
    ImportExcelDataAction.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.0.0",
        properties: {
            template: {
                required: {
                    currentValue: false,
                    changedIn: ["10.1.0"]
                }
            },
            fileVariableName: {
                deleted: "11.2.0",
                deletionMessage: "Moved to ImportExcelDataAction.inputFileVariableName"
            },
            inputFileVariableName: {
                introduced: "11.2.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.ImportExcelDataAction = ImportExcelDataAction;
    /**
     * In version 11.7.0: removed experimental
     * In version 9.24.0: introduced
     */
    class Reference extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            if (arguments.length < 4) {
                throw new Error("new Reference() cannot be invoked directly, please use 'model.exceldataimporter.createReference()'");
            }
        }
        get containerAsColumnAttributeMapping() {
            return super.getContainerAs(ColumnAttributeMapping);
        }
        get containerAsExcelSheet() {
            return super.getContainerAs(ExcelSheet);
        }
        get containerAsSheet() {
            return super.getContainerAs(Sheet);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Reference.structureTypeName = "ExcelDataImporter$Reference";
    Reference.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.Reference = Reference;
    /**
     * In version 11.7.0: removed experimental
     * In version 9.24.0: introduced
     */
    class IndexReference extends Reference {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__referencedIndex = new internal.PrimitiveProperty(IndexReference, this, "referencedIndex", 1, internal.PrimitiveTypeEnum.Integer);
            if (arguments.length < 4) {
                throw new Error("new IndexReference() cannot be invoked directly, please use 'model.exceldataimporter.createIndexReference()'");
            }
        }
        get containerAsColumnAttributeMapping() {
            return super.getContainerAs(ColumnAttributeMapping);
        }
        get containerAsExcelSheet() {
            return super.getContainerAs(ExcelSheet);
        }
        get containerAsSheet() {
            return super.getContainerAs(Sheet);
        }
        get referencedIndex() {
            return this.__referencedIndex.get();
        }
        set referencedIndex(newValue) {
            this.__referencedIndex.set(newValue);
        }
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * The new IndexReference will be automatically stored in the 'reference' property
         * of the parent ColumnAttributeMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createInColumnAttributeMappingUnderReference(container) {
            internal.createInVersionCheck(container.model, IndexReference.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, IndexReference, "reference", false);
        }
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * The new IndexReference will be automatically stored in the 'reference' property
         * of the parent ExcelSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInExcelSheetUnderReference(container) {
            internal.createInVersionCheck(container.model, IndexReference.structureTypeName, { start: "10.6.0" });
            return internal.instancehelpers.createElement(container, IndexReference, "reference", false);
        }
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * The new IndexReference will be automatically stored in the 'reference' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createInSheetUnderReference(container) {
            internal.createInVersionCheck(container.model, IndexReference.structureTypeName, { start: "9.24.0", end: "10.5.0" });
            return internal.instancehelpers.createElement(container, IndexReference, "reference", false);
        }
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, IndexReference);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.referencedIndex = 1;
        }
    }
    IndexReference.structureTypeName = "ExcelDataImporter$IndexReference";
    IndexReference.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.IndexReference = IndexReference;
    /**
     * In version 11.7.0: removed experimental
     * In version 9.24.0: introduced
     */
    class NameReference extends Reference {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__referencedName = new internal.PrimitiveProperty(NameReference, this, "referencedName", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new NameReference() cannot be invoked directly, please use 'model.exceldataimporter.createNameReference()'");
            }
        }
        get containerAsColumnAttributeMapping() {
            return super.getContainerAs(ColumnAttributeMapping);
        }
        get containerAsExcelSheet() {
            return super.getContainerAs(ExcelSheet);
        }
        get containerAsSheet() {
            return super.getContainerAs(Sheet);
        }
        get referencedName() {
            return this.__referencedName.get();
        }
        set referencedName(newValue) {
            this.__referencedName.set(newValue);
        }
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * The new NameReference will be automatically stored in the 'reference' property
         * of the parent ColumnAttributeMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createInColumnAttributeMappingUnderReference(container) {
            internal.createInVersionCheck(container.model, NameReference.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, NameReference, "reference", false);
        }
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * The new NameReference will be automatically stored in the 'reference' property
         * of the parent ExcelSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInExcelSheetUnderReference(container) {
            internal.createInVersionCheck(container.model, NameReference.structureTypeName, { start: "10.6.0" });
            return internal.instancehelpers.createElement(container, NameReference, "reference", false);
        }
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * The new NameReference will be automatically stored in the 'reference' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createInSheetUnderReference(container) {
            internal.createInVersionCheck(container.model, NameReference.structureTypeName, { start: "9.24.0", end: "10.5.0" });
            return internal.instancehelpers.createElement(container, NameReference, "reference", false);
        }
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, NameReference);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    NameReference.structureTypeName = "ExcelDataImporter$NameReference";
    NameReference.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.Element);
    exceldataimporter.NameReference = NameReference;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.6.0: deleted
     * In version 9.24.0: introduced
     */
    class Sheet extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__reference = new internal.PartProperty(Sheet, this, "reference", null, true);
            /** @internal */
            this.__headerRowStartsAt = new internal.PrimitiveProperty(Sheet, this, "headerRowStartsAt", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__dataRowStartsAt = new internal.PrimitiveProperty(Sheet, this, "dataRowStartsAt", 1, internal.PrimitiveTypeEnum.Integer);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(Sheet, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__columnAttributeMappings = new internal.PartListProperty(Sheet, this, "columnAttributeMappings", []);
            if (arguments.length < 4) {
                throw new Error("new Sheet() cannot be invoked directly, please use 'model.exceldataimporter.createSheet()'");
            }
        }
        get containerAsTemplate() {
            return super.getContainerAs(Template);
        }
        get reference() {
            return this.__reference.get();
        }
        set reference(newValue) {
            this.__reference.set(newValue);
        }
        get headerRowStartsAt() {
            return this.__headerRowStartsAt.get();
        }
        set headerRowStartsAt(newValue) {
            this.__headerRowStartsAt.set(newValue);
        }
        get dataRowStartsAt() {
            return this.__dataRowStartsAt.get();
        }
        set dataRowStartsAt(newValue) {
            this.__dataRowStartsAt.set(newValue);
        }
        /**
         * In version 10.2.0: introduced
         */
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        get columnAttributeMappings() {
            return this.__columnAttributeMappings.get();
        }
        /**
         * Creates and returns a new Sheet instance in the SDK and on the server.
         * The new Sheet will be automatically stored in the 'sheets' property
         * of the parent Template element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, Sheet.structureTypeName, { start: "9.24.0", end: "10.5.0" });
            return internal.instancehelpers.createElement(container, Sheet, "sheets", true);
        }
        /**
         * Creates and returns a new Sheet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Sheet);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.dataRowStartsAt = 1;
            this.headerRowStartsAt = 1;
            this.reference = IndexReference.create(this.model);
        }
    }
    Sheet.structureTypeName = "ExcelDataImporter$Sheet";
    Sheet.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        deleted: "10.6.0",
        deletionMessage: "Renamed to ExcelSheet",
        properties: {
            reference: {
                required: {
                    currentValue: true
                }
            },
            entity: {
                introduced: "10.2.0",
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    exceldataimporter.Sheet = Sheet;
    /**
     * In version 11.7.0: removed experimental
     * In version 9.24.0: introduced
     */
    class Template extends mappings_1.mappings.MappingSourceDocument {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__templateName = new internal.PrimitiveProperty(Template, this, "templateName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__sheets = new internal.PartListProperty(Template, this, "sheets", []);
            /** @internal */
            this.__contents = new internal.PartProperty(Template, this, "contents", null, false);
            /** @internal */
            this.__fileName = new internal.PrimitiveProperty(Template, this, "fileName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__useAsMappingSource = new internal.PrimitiveProperty(Template, this, "useAsMappingSource", false, internal.PrimitiveTypeEnum.Boolean);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get templateName() {
            return this.__templateName.get();
        }
        set templateName(newValue) {
            this.__templateName.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.6.0: deleted
         */
        get sheets() {
            return this.__sheets.get();
        }
        /**
         * In version 10.15.0: added public
         * In version 10.6.0: introduced
         */
        get contents() {
            return this.__contents.get();
        }
        set contents(newValue) {
            this.__contents.set(newValue);
        }
        get fileName() {
            return this.__fileName.get();
        }
        set fileName(newValue) {
            this.__fileName.set(newValue);
        }
        /**
         * In version 10.15.0: introduced
         */
        get useAsMappingSource() {
            return this.__useAsMappingSource.get();
        }
        set useAsMappingSource(newValue) {
            this.__useAsMappingSource.set(newValue);
        }
        /**
         * Creates a new Template unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, Template);
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
    Template.structureTypeName = "ExcelDataImporter$Template";
    Template.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        properties: {
            sheets: {
                deleted: "10.6.0",
                deletionMessage: "Moved to ExcelTemplateContents.sheets"
            },
            contents: {
                introduced: "10.6.0",
                public: {
                    currentValue: true,
                    changedIn: ["10.15.0"]
                }
            },
            useAsMappingSource: {
                introduced: "10.15.0"
            }
        },
        experimental: {
            currentValue: false,
            changedIn: ["11.7.0"]
        }
    }, internal.StructureType.ModelUnit);
    exceldataimporter.Template = Template;
})(exceldataimporter = exports.exceldataimporter || (exports.exceldataimporter = {}));
const jsonstructures_1 = require("./jsonstructures");
const projects_1 = require("./projects");
//# sourceMappingURL=exceldataimporter.js.map