import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace datatransformers {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DataTransformers`.
     */
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IStructureValueType extends internal.IElement {
        readonly model: IModel;
        readonly containerAsStructureValue: IStructureValue;
        asLoaded(): StructureValueType;
        load(callback: (element: StructureValueType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StructureValueType>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    abstract class StructureValueType extends internal.Element<IModel> implements IStructureValueType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsStructureValue(): StructureValue;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IBooleanValueType extends IStructureValueType {
        readonly model: IModel;
        readonly containerAsStructureValue: IStructureValue;
        asLoaded(): BooleanValueType;
        load(callback: (element: BooleanValueType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BooleanValueType>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class BooleanValueType extends StructureValueType implements IBooleanValueType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsStructureValue(): StructureValue;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BooleanValueType instance in the SDK and on the server.
         * The new BooleanValueType will be automatically stored in the 'type' property
         * of the parent StructureValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container: StructureValue): BooleanValueType;
        /**
         * Creates and returns a new BooleanValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BooleanValueType;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IDataTransformer extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly elements: internal.IList<IStructureElement>;
        readonly rootElement: IStructureElement | null;
        readonly steps: internal.IList<IStep>;
        readonly source: ISource | null;
        asLoaded(): DataTransformer;
        load(callback: (element: DataTransformer) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DataTransformer>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class DataTransformer extends projects.Document implements IDataTransformer {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get elements(): internal.IList<StructureElement>;
        get rootElement(): StructureElement | null;
        set rootElement(newValue: StructureElement | null);
        get steps(): internal.IList<Step>;
        get source(): Source | null;
        set source(newValue: Source | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new DataTransformer unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): DataTransformer;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IDateTimeValueType extends IStructureValueType {
        readonly model: IModel;
        readonly containerAsStructureValue: IStructureValue;
        asLoaded(): DateTimeValueType;
        load(callback: (element: DateTimeValueType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DateTimeValueType>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class DateTimeValueType extends StructureValueType implements IDateTimeValueType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsStructureValue(): StructureValue;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DateTimeValueType instance in the SDK and on the server.
         * The new DateTimeValueType will be automatically stored in the 'type' property
         * of the parent StructureValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container: StructureValue): DateTimeValueType;
        /**
         * Creates and returns a new DateTimeValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DateTimeValueType;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IDecimalValueType extends IStructureValueType {
        readonly model: IModel;
        readonly containerAsStructureValue: IStructureValue;
        asLoaded(): DecimalValueType;
        load(callback: (element: DecimalValueType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DecimalValueType>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class DecimalValueType extends StructureValueType implements IDecimalValueType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsStructureValue(): StructureValue;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DecimalValueType instance in the SDK and on the server.
         * The new DecimalValueType will be automatically stored in the 'type' property
         * of the parent StructureValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container: StructureValue): DecimalValueType;
        /**
         * Creates and returns a new DecimalValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DecimalValueType;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface ITransformerAction extends internal.IElement {
        readonly model: IModel;
        readonly containerAsStep: IStep;
        asLoaded(): TransformerAction;
        load(callback: (element: TransformerAction) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<TransformerAction>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    abstract class TransformerAction extends internal.Element<IModel> implements ITransformerAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsStep(): Step;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IJsltAction extends ITransformerAction {
        readonly model: IModel;
        readonly containerAsStep: IStep;
        readonly jslt: string;
        asLoaded(): JsltAction;
        load(callback: (element: JsltAction) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<JsltAction>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class JsltAction extends TransformerAction implements IJsltAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsStep(): Step;
        get jslt(): string;
        set jslt(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JsltAction instance in the SDK and on the server.
         * The new JsltAction will be automatically stored in the 'action' property
         * of the parent Step element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container: Step): JsltAction;
        /**
         * Creates and returns a new JsltAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JsltAction;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface ISource extends internal.IElement {
        readonly model: IModel;
        readonly containerAsDataTransformer: IDataTransformer;
        asLoaded(): Source;
        load(callback: (element: Source) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Source>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    abstract class Source extends internal.Element<IModel> implements ISource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataTransformer(): DataTransformer;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IJsonSource extends ISource {
        readonly model: IModel;
        readonly containerAsDataTransformer: IDataTransformer;
        readonly content: string;
        asLoaded(): JsonSource;
        load(callback: (element: JsonSource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<JsonSource>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class JsonSource extends Source implements IJsonSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataTransformer(): DataTransformer;
        get content(): string;
        set content(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JsonSource instance in the SDK and on the server.
         * The new JsonSource will be automatically stored in the 'source' property
         * of the parent DataTransformer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container: DataTransformer): JsonSource;
        /**
         * Creates and returns a new JsonSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JsonSource;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface ILongValueType extends IStructureValueType {
        readonly model: IModel;
        readonly containerAsStructureValue: IStructureValue;
        asLoaded(): LongValueType;
        load(callback: (element: LongValueType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<LongValueType>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class LongValueType extends StructureValueType implements ILongValueType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsStructureValue(): StructureValue;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LongValueType instance in the SDK and on the server.
         * The new LongValueType will be automatically stored in the 'type' property
         * of the parent StructureValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container: StructureValue): LongValueType;
        /**
         * Creates and returns a new LongValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LongValueType;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IStep extends internal.IElement {
        readonly model: IModel;
        readonly containerAsDataTransformer: IDataTransformer;
        /**
         * This property is required and cannot be set to null.
         */
        readonly action: ITransformerAction;
        /**
         * This property is required and cannot be set to null.
         */
        readonly inputElement: IStructureElement;
        /**
         * This property is required and cannot be set to null.
         */
        readonly outputElement: IStructureElement;
        asLoaded(): Step;
        load(callback: (element: Step) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Step>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class Step extends internal.Element<IModel> implements IStep {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataTransformer(): DataTransformer;
        get action(): TransformerAction;
        set action(newValue: TransformerAction);
        get inputElement(): StructureElement;
        set inputElement(newValue: StructureElement);
        get outputElement(): StructureElement;
        set outputElement(newValue: StructureElement);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Step instance in the SDK and on the server.
         * The new Step will be automatically stored in the 'steps' property
         * of the parent DataTransformer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container: DataTransformer): Step;
        /**
         * Creates and returns a new Step instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Step;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IStringValueType extends IStructureValueType {
        readonly model: IModel;
        readonly containerAsStructureValue: IStructureValue;
        asLoaded(): StringValueType;
        load(callback: (element: StringValueType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StringValueType>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class StringValueType extends StructureValueType implements IStringValueType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsStructureValue(): StructureValue;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringValueType instance in the SDK and on the server.
         * The new StringValueType will be automatically stored in the 'type' property
         * of the parent StructureValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container: StructureValue): StringValueType;
        /**
         * Creates and returns a new StringValueType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringValueType;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IStructureElement extends internal.IElement {
        readonly model: IModel;
        readonly containerAsDataTransformer: IDataTransformer;
        readonly containerAsStructureObject: IStructureObject;
        asLoaded(): StructureElement;
        load(callback: (element: StructureElement) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StructureElement>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    abstract class StructureElement extends internal.Element<IModel> implements IStructureElement {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataTransformer(): DataTransformer;
        get containerAsStructureObject(): StructureObject;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IStructureAttribute extends IStructureElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsDataTransformer: IDataTransformer;
        readonly containerAsStructureObject: IStructureObject;
        readonly name: string;
        /**
         * This property is required and cannot be set to null.
         */
        readonly value: IStructureElement;
        asLoaded(): StructureAttribute;
        load(callback: (element: StructureAttribute) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StructureAttribute>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class StructureAttribute extends StructureElement implements IStructureAttribute {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataTransformer(): DataTransformer;
        get containerAsStructureObject(): StructureObject;
        get name(): string;
        set name(newValue: string);
        get value(): StructureElement;
        set value(newValue: StructureElement);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StructureAttribute instance in the SDK and on the server.
         * The new StructureAttribute will be automatically stored in the 'elements' property
         * of the parent DataTransformer element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createInDataTransformerUnderElements(container: DataTransformer): StructureAttribute;
        /**
         * Creates and returns a new StructureAttribute instance in the SDK and on the server.
         * The new StructureAttribute will be automatically stored in the 'attributes' property
         * of the parent StructureObject element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createInStructureObjectUnderAttributes(container: StructureObject): StructureAttribute;
        /**
         * Creates and returns a new StructureAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StructureAttribute;
        get qualifiedName(): string | null;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IStructureObject extends IStructureElement {
        readonly model: IModel;
        readonly containerAsDataTransformer: IDataTransformer;
        readonly attributes: internal.IList<IStructureAttribute>;
        asLoaded(): StructureObject;
        load(callback: (element: StructureObject) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StructureObject>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class StructureObject extends StructureElement implements IStructureObject {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataTransformer(): DataTransformer;
        get attributes(): internal.IList<StructureAttribute>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StructureObject instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StructureObject;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    interface IStructureValue extends IStructureElement {
        readonly model: IModel;
        readonly containerAsDataTransformer: IDataTransformer;
        /**
         * This property is required and cannot be set to null.
         */
        readonly type: IStructureValueType;
        asLoaded(): StructureValue;
        load(callback: (element: StructureValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<StructureValue>;
    }
    /**
     * In version 11.8.0: removed experimental
     * In version 11.1.0: introduced
     */
    class StructureValue extends StructureElement implements IStructureValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDataTransformer(): DataTransformer;
        get type(): StructureValueType;
        set type(newValue: StructureValueType);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StructureValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StructureValue;
    }
}
import { IModel } from "./base-model";
