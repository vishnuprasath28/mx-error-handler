import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { mappings } from "./mappings";
import { microflows } from "./microflows";
export declare namespace exceldataimporter {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ExcelDataImporter`.
     */
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    interface ICSVSheet extends mappings.IMappingSource {
        readonly model: IModel;
        readonly containerAsCSVTemplateContents: ICSVTemplateContents;
        asLoaded(): CSVSheet;
        load(callback: (element: CSVSheet) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CSVSheet>;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    class CSVSheet extends mappings.MappingSource implements ICSVSheet {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCSVTemplateContents(): CSVTemplateContents;
        get delimiter(): string;
        set delimiter(newValue: string);
        get quoteChar(): string;
        set quoteChar(newValue: string);
        get escapeChar(): string;
        set escapeChar(newValue: string);
        get headerIncluded(): boolean;
        set headerIncluded(newValue: boolean);
        /**
         * In version 10.16.0: added optional
         */
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        get columnAttributeMappings(): internal.IList<ColumnAttributeMapping>;
        /**
         * In version 10.15.0: introduced
         */
        get csvRootElement(): DataImporterElement;
        set csvRootElement(newValue: DataImporterElement);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CSVSheet instance in the SDK and on the server.
         * The new CSVSheet will be automatically stored in the 'sheet' property
         * of the parent CSVTemplateContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container: CSVTemplateContents): CSVSheet;
        /**
         * Creates and returns a new CSVSheet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CSVSheet;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    interface ITemplateContents extends internal.IElement {
        readonly model: IModel;
        readonly containerAsTemplate: ITemplate;
        asLoaded(): TemplateContents;
        load(callback: (element: TemplateContents) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<TemplateContents>;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    abstract class TemplateContents extends internal.Element<IModel> implements ITemplateContents {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTemplate(): Template;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    interface ICSVTemplateContents extends ITemplateContents {
        readonly model: IModel;
        readonly containerAsTemplate: ITemplate;
        /**
         * This property is required and cannot be set to null.
         *
         * In version 10.15.0: added public
         */
        readonly sheet: ICSVSheet;
        asLoaded(): CSVTemplateContents;
        load(callback: (element: CSVTemplateContents) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CSVTemplateContents>;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    class CSVTemplateContents extends TemplateContents implements ICSVTemplateContents {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTemplate(): Template;
        /**
         * In version 10.15.0: added public
         */
        get sheet(): CSVSheet;
        set sheet(newValue: CSVSheet);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CSVTemplateContents instance in the SDK and on the server.
         * The new CSVTemplateContents will be automatically stored in the 'contents' property
         * of the parent Template element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container: Template): CSVTemplateContents;
        /**
         * Creates and returns a new CSVTemplateContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CSVTemplateContents;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 9.24.0: introduced
     */
    class ColumnAttributeMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCSVSheet(): CSVSheet;
        get containerAsExcelSheet(): ExcelSheet;
        get containerAsSheet(): Sheet;
        get reference(): Reference;
        set reference(newValue: Reference);
        get attribute(): domainmodels.IAttribute;
        set attribute(newValue: domainmodels.IAttribute);
        get attributeQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createIn(container: Sheet): ColumnAttributeMapping;
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent CSVSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInCSVSheetUnderColumnAttributeMappings(container: CSVSheet): ColumnAttributeMapping;
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent ExcelSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInExcelSheetUnderColumnAttributeMappings(container: ExcelSheet): ColumnAttributeMapping;
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * The new ColumnAttributeMapping will be automatically stored in the 'columnAttributeMappings' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createInSheetUnderColumnAttributeMappings(container: Sheet): ColumnAttributeMapping;
        /**
         * Creates and returns a new ColumnAttributeMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ColumnAttributeMapping;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.16.0: introduced
     */
    interface ICsvSheetMappingSourceReference extends mappings.IMappingSourceReference {
        readonly model: IModel;
        readonly containerAsMappingDocument: mappings.IMappingDocument;
        asLoaded(): CsvSheetMappingSourceReference;
        load(callback: (element: CsvSheetMappingSourceReference) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<CsvSheetMappingSourceReference>;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.16.0: introduced
     */
    class CsvSheetMappingSourceReference extends mappings.MappingSourceReference implements ICsvSheetMappingSourceReference {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMappingDocument(): mappings.MappingDocument;
        get csvSheet(): ICSVSheet;
        set csvSheet(newValue: ICSVSheet);
        get csvSheetQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CsvSheetMappingSourceReference instance in the SDK and on the server.
         * The new CsvSheetMappingSourceReference will be automatically stored in the 'mappingSourceReference' property
         * of the parent mappings.MappingDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.16.0 and higher
         */
        static createIn(container: mappings.MappingDocument): CsvSheetMappingSourceReference;
        /**
         * Creates and returns a new CsvSheetMappingSourceReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CsvSheetMappingSourceReference;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: introduced
     */
    class DataImporterElement extends mappings.Element {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsCSVSheet(): CSVSheet;
        get containerAsExcelSheet(): ExcelSheet;
        get containerAsJsonStructure(): jsonstructures.JsonStructure;
        get containerAsElement(): mappings.Element;
        get originalValues(): internal.IList<string>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DataImporterElement instance in the SDK and on the server.
         * The new DataImporterElement will be automatically stored in the 'csvRootElement' property
         * of the parent CSVSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.15.0 and higher
         */
        static createInCSVSheetUnderCsvRootElement(container: CSVSheet): DataImporterElement;
        /**
         * Creates and returns a new DataImporterElement instance in the SDK and on the server.
         * The new DataImporterElement will be automatically stored in the 'excelRootElement' property
         * of the parent ExcelSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.15.0 and higher
         */
        static createInExcelSheetUnderExcelRootElement(container: ExcelSheet): DataImporterElement;
        /**
         * Creates and returns a new DataImporterElement instance in the SDK and on the server.
         * The new DataImporterElement will be automatically stored in the 'elements' property
         * of the parent jsonstructures.JsonStructure element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.15.0 and higher
         */
        static createInJsonStructureUnderElements(container: jsonstructures.JsonStructure): DataImporterElement;
        /**
         * Creates and returns a new DataImporterElement instance in the SDK and on the server.
         * The new DataImporterElement will be automatically stored in the 'children' property
         * of the parent mappings.Element element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.15.0 and higher
         */
        static createInElementUnderChildren(container: mappings.Element): DataImporterElement;
        /**
         * Creates and returns a new DataImporterElement instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DataImporterElement;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    interface IExcelSheet extends mappings.IMappingSource {
        readonly model: IModel;
        readonly containerAsExcelTemplateContents: IExcelTemplateContents;
        asLoaded(): ExcelSheet;
        load(callback: (element: ExcelSheet) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ExcelSheet>;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    class ExcelSheet extends mappings.MappingSource implements IExcelSheet {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExcelTemplateContents(): ExcelTemplateContents;
        get reference(): Reference;
        set reference(newValue: Reference);
        get headerRowStartsAt(): number;
        set headerRowStartsAt(newValue: number);
        get dataRowStartsAt(): number;
        set dataRowStartsAt(newValue: number);
        /**
         * In version 10.16.0: added optional
         */
        get entity(): domainmodels.IEntity | null;
        set entity(newValue: domainmodels.IEntity | null);
        get entityQualifiedName(): string | null;
        get columnAttributeMappings(): internal.IList<ColumnAttributeMapping>;
        /**
         * In version 10.15.0: introduced
         */
        get excelRootElement(): DataImporterElement;
        set excelRootElement(newValue: DataImporterElement);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExcelSheet instance in the SDK and on the server.
         * The new ExcelSheet will be automatically stored in the 'sheets' property
         * of the parent ExcelTemplateContents element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container: ExcelTemplateContents): ExcelSheet;
        /**
         * Creates and returns a new ExcelSheet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExcelSheet;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.16.0: introduced
     */
    interface IExcelSheetMappingSourceReference extends mappings.IMappingSourceReference {
        readonly model: IModel;
        readonly containerAsMappingDocument: mappings.IMappingDocument;
        asLoaded(): ExcelSheetMappingSourceReference;
        load(callback: (element: ExcelSheetMappingSourceReference) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ExcelSheetMappingSourceReference>;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.16.0: introduced
     */
    class ExcelSheetMappingSourceReference extends mappings.MappingSourceReference implements IExcelSheetMappingSourceReference {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMappingDocument(): mappings.MappingDocument;
        get excelSheet(): IExcelSheet;
        set excelSheet(newValue: IExcelSheet);
        get excelSheetQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExcelSheetMappingSourceReference instance in the SDK and on the server.
         * The new ExcelSheetMappingSourceReference will be automatically stored in the 'mappingSourceReference' property
         * of the parent mappings.MappingDocument element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.16.0 and higher
         */
        static createIn(container: mappings.MappingDocument): ExcelSheetMappingSourceReference;
        /**
         * Creates and returns a new ExcelSheetMappingSourceReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExcelSheetMappingSourceReference;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    interface IExcelTemplateContents extends ITemplateContents {
        readonly model: IModel;
        readonly containerAsTemplate: ITemplate;
        /**
         * In version 10.15.0: added public
         */
        readonly sheets: internal.IList<IExcelSheet>;
        asLoaded(): ExcelTemplateContents;
        load(callback: (element: ExcelTemplateContents) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ExcelTemplateContents>;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.15.0: added public
     * In version 10.6.0: introduced
     */
    class ExcelTemplateContents extends TemplateContents implements IExcelTemplateContents {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTemplate(): Template;
        /**
         * In version 10.15.0: added public
         */
        get sheets(): internal.IList<ExcelSheet>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExcelTemplateContents instance in the SDK and on the server.
         * The new ExcelTemplateContents will be automatically stored in the 'contents' property
         * of the parent Template element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createIn(container: Template): ExcelTemplateContents;
        /**
         * Creates and returns a new ExcelTemplateContents instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExcelTemplateContents;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 10.0.0: introduced
     */
    class ImportExcelDataAction extends microflows.MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): microflows.ActionActivity;
        /**
         * In version 10.1.0: added optional
         */
        get template(): ITemplate | null;
        set template(newValue: ITemplate | null);
        get templateQualifiedName(): string | null;
        /**
         * In version 11.2.0: deleted
         */
        get fileVariableName(): string;
        set fileVariableName(newValue: string);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        /**
         * In version 11.2.0: introduced
         */
        get inputFileVariableName(): string;
        set inputFileVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImportExcelDataAction instance in the SDK and on the server.
         * The new ImportExcelDataAction will be automatically stored in the 'action' property
         * of the parent microflows.ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: microflows.ActionActivity): ImportExcelDataAction;
        /**
         * Creates and returns a new ImportExcelDataAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImportExcelDataAction;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 9.24.0: introduced
     */
    abstract class Reference extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnAttributeMapping(): ColumnAttributeMapping;
        get containerAsExcelSheet(): ExcelSheet;
        get containerAsSheet(): Sheet;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 9.24.0: introduced
     */
    class IndexReference extends Reference {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnAttributeMapping(): ColumnAttributeMapping;
        get containerAsExcelSheet(): ExcelSheet;
        get containerAsSheet(): Sheet;
        get referencedIndex(): number;
        set referencedIndex(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * The new IndexReference will be automatically stored in the 'reference' property
         * of the parent ColumnAttributeMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createInColumnAttributeMappingUnderReference(container: ColumnAttributeMapping): IndexReference;
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * The new IndexReference will be automatically stored in the 'reference' property
         * of the parent ExcelSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInExcelSheetUnderReference(container: ExcelSheet): IndexReference;
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * The new IndexReference will be automatically stored in the 'reference' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createInSheetUnderReference(container: Sheet): IndexReference;
        /**
         * Creates and returns a new IndexReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): IndexReference;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 9.24.0: introduced
     */
    class NameReference extends Reference {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnAttributeMapping(): ColumnAttributeMapping;
        get containerAsExcelSheet(): ExcelSheet;
        get containerAsSheet(): Sheet;
        get referencedName(): string;
        set referencedName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * The new NameReference will be automatically stored in the 'reference' property
         * of the parent ColumnAttributeMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createInColumnAttributeMappingUnderReference(container: ColumnAttributeMapping): NameReference;
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * The new NameReference will be automatically stored in the 'reference' property
         * of the parent ExcelSheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.6.0 and higher
         */
        static createInExcelSheetUnderReference(container: ExcelSheet): NameReference;
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * The new NameReference will be automatically stored in the 'reference' property
         * of the parent Sheet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createInSheetUnderReference(container: Sheet): NameReference;
        /**
         * Creates and returns a new NameReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NameReference;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.6.0: deleted
     * In version 9.24.0: introduced
     */
    class Sheet extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTemplate(): Template;
        get reference(): Reference;
        set reference(newValue: Reference);
        get headerRowStartsAt(): number;
        set headerRowStartsAt(newValue: number);
        get dataRowStartsAt(): number;
        set dataRowStartsAt(newValue: number);
        /**
         * In version 10.2.0: introduced
         */
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        get columnAttributeMappings(): internal.IList<ColumnAttributeMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Sheet instance in the SDK and on the server.
         * The new Sheet will be automatically stored in the 'sheets' property
         * of the parent Template element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 to 10.5.0
         */
        static createIn(container: Template): Sheet;
        /**
         * Creates and returns a new Sheet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Sheet;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 9.24.0: introduced
     */
    interface ITemplate extends mappings.IMappingSourceDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 10.15.0: added public
         * In version 10.6.0: introduced
         */
        readonly contents: ITemplateContents | null;
        asLoaded(): Template;
        load(callback: (element: Template) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Template>;
    }
    /**
     * In version 11.7.0: removed experimental
     * In version 9.24.0: introduced
     */
    class Template extends mappings.MappingSourceDocument implements ITemplate {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get templateName(): string;
        set templateName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.6.0: deleted
         */
        get sheets(): internal.IList<Sheet>;
        /**
         * In version 10.15.0: added public
         * In version 10.6.0: introduced
         */
        get contents(): TemplateContents | null;
        set contents(newValue: TemplateContents | null);
        get fileName(): string;
        set fileName(newValue: string);
        /**
         * In version 10.15.0: introduced
         */
        get useAsMappingSource(): boolean;
        set useAsMappingSource(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Template unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Template;
    }
}
import { domainmodels } from "./domainmodels";
import { jsonstructures } from "./jsonstructures";
import { projects } from "./projects";
import { IModel } from "./base-model";
