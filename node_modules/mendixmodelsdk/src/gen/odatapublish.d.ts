import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace odatapublish {
    class PublishedODataVersion extends internal.AbstractEnum {
        static OData4: PublishedODataVersion;
        static OData3: PublishedODataVersion;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ODataPublish`.
     */
    /**
     * In version 10.4.0: introduced
     */
    abstract class ChangeMode extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntitySet(): EntitySet;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.4.0: introduced
     */
    class CallMicroflowToChange extends ChangeMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntitySet(): EntitySet;
        /**
         * In version 11.1.0: added optional
         */
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'deleteMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderDeleteMode(container: EntitySet): CallMicroflowToChange;
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'insertMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderInsertMode(container: EntitySet): CallMicroflowToChange;
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'updateMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderUpdateMode(container: EntitySet): CallMicroflowToChange;
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CallMicroflowToChange;
    }
    /**
     * In version 10.4.0: introduced
     */
    abstract class ReadMode extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntitySet(): EntitySet;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.4.0: introduced
     */
    class CallMicroflowToRead extends ReadMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntitySet(): EntitySet;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CallMicroflowToRead instance in the SDK and on the server.
         * The new CallMicroflowToRead will be automatically stored in the 'readMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: EntitySet): CallMicroflowToRead;
        /**
         * Creates and returns a new CallMicroflowToRead instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CallMicroflowToRead;
    }
    /**
     * In version 10.4.0: introduced
     */
    class ChangeNotSupported extends ChangeMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntitySet(): EntitySet;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'deleteMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderDeleteMode(container: EntitySet): ChangeNotSupported;
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'insertMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderInsertMode(container: EntitySet): ChangeNotSupported;
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'updateMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderUpdateMode(container: EntitySet): ChangeNotSupported;
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeNotSupported;
    }
    /**
     * In version 10.4.0: introduced
     */
    class ChangeSource extends ChangeMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntitySet(): EntitySet;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'deleteMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderDeleteMode(container: EntitySet): ChangeSource;
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'insertMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderInsertMode(container: EntitySet): ChangeSource;
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'updateMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInEntitySetUnderUpdateMode(container: EntitySet): ChangeSource;
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeSource;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-entity relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class EntitySet extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataService2(): PublishedODataService2;
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * In version 10.13.0: introduced
         */
        get alternativeExposedName(): string;
        set alternativeExposedName(newValue: string);
        get entityType(): EntityType;
        set entityType(newValue: EntityType);
        get usePaging(): boolean;
        set usePaging(newValue: boolean);
        get pageSize(): number;
        set pageSize(newValue: number);
        get updateMode(): ChangeMode;
        set updateMode(newValue: ChangeMode);
        get insertMode(): ChangeMode;
        set insertMode(newValue: ChangeMode);
        get deleteMode(): ChangeMode;
        set deleteMode(newValue: ChangeMode);
        get readMode(): ReadMode;
        set readMode(newValue: ReadMode);
        get queryOptions(): QueryOptions;
        set queryOptions(newValue: QueryOptions);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntitySet instance in the SDK and on the server.
         * The new EntitySet will be automatically stored in the 'entitySets' property
         * of the parent PublishedODataService2 element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: PublishedODataService2): EntitySet;
        /**
         * Creates and returns a new EntitySet instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntitySet;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-entity relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class EntityType extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataService2(): PublishedODataService2;
        get exposedName(): string;
        set exposedName(newValue: string);
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        get childMembers(): internal.IList<PublishedMember>;
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new EntityType instance in the SDK and on the server.
         * The new EntityType will be automatically stored in the 'entityTypes' property
         * of the parent PublishedODataService2 element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: PublishedODataService2): EntityType;
        /**
         * Creates and returns a new EntityType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): EntityType;
    }
    /**
     * In version 10.4.0: introduced
     */
    abstract class PublishedMember extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntityType(): EntityType;
        get exposedName(): string;
        set exposedName(newValue: string);
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.4.0: introduced
     */
    class PublishedAssociationEnd extends PublishedMember {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntityType(): EntityType;
        get association(): domainmodels.IAssociationBase | null;
        set association(newValue: domainmodels.IAssociationBase | null);
        get associationQualifiedName(): string | null;
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        get canBeEmpty(): boolean;
        set canBeEmpty(newValue: boolean);
        get exposedAssociationName(): string;
        set exposedAssociationName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedAssociationEnd instance in the SDK and on the server.
         * The new PublishedAssociationEnd will be automatically stored in the 'childMembers' property
         * of the parent EntityType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: EntityType): PublishedAssociationEnd;
        /**
         * Creates and returns a new PublishedAssociationEnd instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedAssociationEnd;
    }
    /**
     * In version 10.4.0: introduced
     */
    class PublishedAttribute extends PublishedMember {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntityType(): EntityType;
        get attribute(): domainmodels.IAttribute | null;
        set attribute(newValue: domainmodels.IAttribute | null);
        get attributeQualifiedName(): string | null;
        get canBeEmpty(): boolean;
        set canBeEmpty(newValue: boolean);
        get isPartOfKey(): boolean;
        set isPartOfKey(newValue: boolean);
        get filterable(): boolean;
        set filterable(newValue: boolean);
        get sortable(): boolean;
        set sortable(newValue: boolean);
        get enumerationAsString(): boolean;
        set enumerationAsString(newValue: boolean);
        /**
         * In version 10.12.0: introduced
         */
        get stringAsGuid(): boolean;
        set stringAsGuid(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedAttribute instance in the SDK and on the server.
         * The new PublishedAttribute will be automatically stored in the 'childMembers' property
         * of the parent EntityType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: EntityType): PublishedAttribute;
        /**
         * Creates and returns a new PublishedAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedAttribute;
    }
    /**
     * In version 10.4.0: introduced
     */
    class PublishedContract extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get serviceFeed(): ServiceFeed;
        set serviceFeed(newValue: ServiceFeed);
        get metadata(): string;
        set metadata(newValue: string);
        get openApi(): string;
        set openApi(newValue: string);
        /**
         * In version 10.13.0: introduced
         */
        get graphQL(): string;
        set graphQL(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedContract instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedContract;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-services/#enumerations relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class PublishedEnumeration extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataService2(): PublishedODataService2;
        get exposedName(): string;
        set exposedName(newValue: string);
        get enumeration(): enumerations.IEnumeration;
        set enumeration(newValue: enumerations.IEnumeration);
        get enumerationQualifiedName(): string;
        get values(): internal.IList<PublishedEnumerationValue>;
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedEnumeration instance in the SDK and on the server.
         * The new PublishedEnumeration will be automatically stored in the 'enumerations' property
         * of the parent PublishedODataService2 element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: PublishedODataService2): PublishedEnumeration;
        /**
         * Creates and returns a new PublishedEnumeration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedEnumeration;
    }
    /**
     * In version 10.4.0: introduced
     */
    class PublishedEnumerationValue extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedEnumeration(): PublishedEnumeration;
        get exposedName(): string;
        set exposedName(newValue: string);
        get enumerationValue(): enumerations.IEnumerationValue;
        set enumerationValue(newValue: enumerations.IEnumerationValue);
        get enumerationValueQualifiedName(): string;
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedEnumerationValue instance in the SDK and on the server.
         * The new PublishedEnumerationValue will be automatically stored in the 'values' property
         * of the parent PublishedEnumeration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: PublishedEnumeration): PublishedEnumerationValue;
        /**
         * Creates and returns a new PublishedEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedEnumerationValue;
    }
    /**
     * In version 10.4.0: introduced
     */
    class PublishedId extends PublishedMember {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntityType(): EntityType;
        get isPartOfKey(): boolean;
        set isPartOfKey(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedId instance in the SDK and on the server.
         * The new PublishedId will be automatically stored in the 'childMembers' property
         * of the parent EntityType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: EntityType): PublishedId;
        /**
         * Creates and returns a new PublishedId instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedId;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-microflow relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class PublishedMicroflow extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataService2(): PublishedODataService2;
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * In version 10.13.0: introduced
         */
        get alternativeExposedName(): string;
        set alternativeExposedName(newValue: string);
        get microflow(): microflows.IMicroflow;
        set microflow(newValue: microflows.IMicroflow);
        get microflowQualifiedName(): string;
        get parameters(): internal.IList<PublishedMicroflowParameter>;
        get returnType(): datatypes.DataType;
        set returnType(newValue: datatypes.DataType);
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedMicroflow instance in the SDK and on the server.
         * The new PublishedMicroflow will be automatically stored in the 'microflows' property
         * of the parent PublishedODataService2 element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: PublishedODataService2): PublishedMicroflow;
        /**
         * Creates and returns a new PublishedMicroflow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedMicroflow;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-microflow-parameter relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class PublishedMicroflowParameter extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMicroflow(): PublishedMicroflow;
        get exposedName(): string;
        set exposedName(newValue: string);
        get microflowParameter(): microflows.IMicroflowParameter;
        set microflowParameter(newValue: microflows.IMicroflowParameter);
        get microflowParameterQualifiedName(): string;
        get dataType(): datatypes.DataType;
        set dataType(newValue: datatypes.DataType);
        get canBeEmpty(): boolean;
        set canBeEmpty(newValue: boolean);
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedMicroflowParameter instance in the SDK and on the server.
         * The new PublishedMicroflowParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedMicroflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: PublishedMicroflow): PublishedMicroflowParameter;
        /**
         * Creates and returns a new PublishedMicroflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedMicroflowParameter;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-services relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    interface IPublishedODataService2 extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedODataService2;
        load(callback: (element: PublishedODataService2) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedODataService2>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-odata-services relevant section in reference guide}
     *
     * In version 10.4.0: introduced
     */
    class PublishedODataService2 extends projects.Document implements IPublishedODataService2 {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get namespace(): string;
        set namespace(newValue: string);
        get path(): string;
        set path(newValue: string);
        get allowedModuleRoles(): internal.IList<security.IModuleRole>;
        get allowedModuleRolesQualifiedNames(): string[];
        get serviceName(): string;
        set serviceName(newValue: string);
        get entityTypes(): internal.IList<EntityType>;
        get entitySets(): internal.IList<EntitySet>;
        get microflows(): internal.IList<PublishedMicroflow>;
        get enumerations(): internal.IList<PublishedEnumeration>;
        get publishAssociations(): boolean;
        set publishAssociations(newValue: boolean);
        get version(): string;
        set version(newValue: string);
        get authenticationMicroflow(): microflows.IMicroflow | null;
        set authenticationMicroflow(newValue: microflows.IMicroflow | null);
        get authenticationMicroflowQualifiedName(): string | null;
        get authenticationTypes(): internal.IList<rest.RestAuthenticationType>;
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        get replaceIllegalChars(): boolean;
        set replaceIllegalChars(newValue: boolean);
        get useGeneralization(): boolean;
        set useGeneralization(newValue: boolean);
        get oDataVersion(): PublishedODataVersion;
        set oDataVersion(newValue: PublishedODataVersion);
        /**
         * In version 10.8.0: introduced
         */
        get includeMetadataByDefault(): boolean;
        set includeMetadataByDefault(newValue: boolean);
        /**
         * In version 10.12.0: introduced
         */
        get supportsGraphQL(): boolean;
        set supportsGraphQL(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedODataService2 unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedODataService2;
    }
    /**
     * In version 10.4.0: introduced
     */
    class QueryOptions extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntitySet(): EntitySet;
        get countable(): boolean;
        set countable(newValue: boolean);
        get topSupported(): boolean;
        set topSupported(newValue: boolean);
        get skipSupported(): boolean;
        set skipSupported(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new QueryOptions instance in the SDK and on the server.
         * The new QueryOptions will be automatically stored in the 'queryOptions' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: EntitySet): QueryOptions;
        /**
         * Creates and returns a new QueryOptions instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): QueryOptions;
    }
    /**
     * In version 10.4.0: introduced
     */
    class ReadSource extends ReadMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntitySet(): EntitySet;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReadSource instance in the SDK and on the server.
         * The new ReadSource will be automatically stored in the 'readMode' property
         * of the parent EntitySet element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createIn(container: EntitySet): ReadSource;
        /**
         * Creates and returns a new ReadSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReadSource;
    }
    /**
     * In version 10.4.0: introduced
     */
    class ServiceFeed extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedContract(): PublishedContract;
        get xml(): string;
        set xml(newValue: string);
        get json(): string;
        set json(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ServiceFeed instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ServiceFeed;
    }
}
import { datatypes } from "./datatypes";
import { domainmodels } from "./domainmodels";
import { enumerations } from "./enumerations";
import { microflows } from "./microflows";
import { rest } from "./rest";
import { security } from "./security";
import { IModel } from "./base-model";
