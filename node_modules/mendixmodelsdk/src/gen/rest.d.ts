import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { domainmodels } from "./domainmodels";
import { projects } from "./projects";
import { enumerations } from "./enumerations";
import { webservices } from "./webservices";
export declare namespace rest {
    class AssociationNavigability extends internal.AbstractEnum {
        static BothDirections: AssociationNavigability;
        static ParentToChild: AssociationNavigability;
        static ChildToParent: AssociationNavigability;
        protected qualifiedTsTypeName: string;
    }
    class ODataVersion extends internal.AbstractEnum {
        static OData2: ODataVersion;
        static OData3: ODataVersion;
        static OData4: ODataVersion;
        protected qualifiedTsTypeName: string;
    }
    class PublishedODataVersion extends internal.AbstractEnum {
        static OData4: PublishedODataVersion;
        static OData3: PublishedODataVersion;
        protected qualifiedTsTypeName: string;
    }
    class RestAuthenticationType extends internal.AbstractEnum {
        static Basic: RestAuthenticationType;
        static None: RestAuthenticationType;
        static Session: RestAuthenticationType;
        static Microflow: RestAuthenticationType;
        static Guest: RestAuthenticationType;
        protected qualifiedTsTypeName: string;
    }
    class RestOperationParameterType extends internal.AbstractEnum {
        static Path: RestOperationParameterType;
        static Query: RestOperationParameterType;
        static Body: RestOperationParameterType;
        static Header: RestOperationParameterType;
        static Form: RestOperationParameterType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Rest`.
     */
    /**
     * In version 10.7.0: removed experimental
     * In version 10.2.0: introduced
     */
    abstract class AuthenticationScheme extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedRestService(): ConsumedRestService;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.2.0: introduced
     */
    class BasicAuthenticationScheme extends AuthenticationScheme {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedRestService(): ConsumedRestService;
        get username(): Value;
        set username(newValue: Value);
        get password(): Value;
        set password(newValue: Value);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicAuthenticationScheme instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicAuthenticationScheme;
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    abstract class Body extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperationMethodWithBody(): RestOperationMethodWithBody;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.11.0: introduced
     */
    abstract class ChangeMode extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.11.0: introduced
     */
    class CallMicroflowToChange extends ChangeMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        get microflow(): microflows.IMicroflow;
        set microflow(newValue: microflows.IMicroflow);
        get microflowQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'deleteMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderDeleteMode(container: PublishedRestResource): CallMicroflowToChange;
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'insertMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderInsertMode(container: PublishedRestResource): CallMicroflowToChange;
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * The new CallMicroflowToChange will be automatically stored in the 'updateMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderUpdateMode(container: PublishedRestResource): CallMicroflowToChange;
        /**
         * Creates and returns a new CallMicroflowToChange instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CallMicroflowToChange;
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.14.0: introduced
     */
    abstract class ReadMode extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.14.0: introduced
     */
    class CallMicroflowToRead extends ReadMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        /**
         * In version 9.19.0: added optional
         */
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CallMicroflowToRead instance in the SDK and on the server.
         * The new CallMicroflowToRead will be automatically stored in the 'readMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 to 10.3.0
         */
        static createIn(container: PublishedRestResource): CallMicroflowToRead;
        /**
         * Creates and returns a new CallMicroflowToRead instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CallMicroflowToRead;
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.11.0: introduced
     */
    class ChangeNotSupported extends ChangeMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'deleteMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderDeleteMode(container: PublishedRestResource): ChangeNotSupported;
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'insertMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderInsertMode(container: PublishedRestResource): ChangeNotSupported;
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * The new ChangeNotSupported will be automatically stored in the 'updateMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderUpdateMode(container: PublishedRestResource): ChangeNotSupported;
        /**
         * Creates and returns a new ChangeNotSupported instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeNotSupported;
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.11.0: introduced
     */
    class ChangeSource extends ChangeMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'deleteMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderDeleteMode(container: PublishedRestResource): ChangeSource;
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'insertMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderInsertMode(container: PublishedRestResource): ChangeSource;
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * The new ChangeSource will be automatically stored in the 'updateMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 10.3.0
         */
        static createInPublishedRestResourceUnderUpdateMode(container: PublishedRestResource): ChangeSource;
        /**
         * Creates and returns a new ChangeSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ChangeSource;
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    abstract class Value extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicAuthenticationScheme(): BasicAuthenticationScheme;
        get containerAsImplicitMappingBody(): ImplicitMappingBody;
        get containerAsOperationParameter(): OperationParameter;
        get containerAsRestParameter(): RestParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.2.0: introduced
     */
    class ConstantValue extends Value {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicAuthenticationScheme(): BasicAuthenticationScheme;
        get containerAsImplicitMappingBody(): ImplicitMappingBody;
        get containerAsOperationParameter(): OperationParameter;
        get containerAsRestParameter(): RestParameter;
        /**
         * In version 10.20.0: added optional
         */
        get value(): constants.IConstant | null;
        set value(newValue: constants.IConstant | null);
        get valueQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'password' property
         * of the parent BasicAuthenticationScheme element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createInBasicAuthenticationSchemeUnderPassword(container: BasicAuthenticationScheme): ConstantValue;
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'username' property
         * of the parent BasicAuthenticationScheme element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createInBasicAuthenticationSchemeUnderUsername(container: BasicAuthenticationScheme): ConstantValue;
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'testValue' property
         * of the parent ImplicitMappingBody element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInImplicitMappingBodyUnderTestValue(container: ImplicitMappingBody): ConstantValue;
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'testValue' property
         * of the parent OperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createInOperationParameterUnderTestValue(container: OperationParameter): ConstantValue;
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * The new ConstantValue will be automatically stored in the 'testValue' property
         * of the parent RestParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.17.0 and higher
         */
        static createInRestParameterUnderTestValue(container: RestParameter): ConstantValue;
        /**
         * Creates and returns a new ConstantValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConstantValue;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-odata-service-properties relevant section in reference guide}
     *
     * In version 10.0.0: removed experimental
     * In version 7.18.0: introduced
     */
    interface IConsumedODataService extends domainmodels.IRemoteEntitySourceDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * In version 8.14.0: introduced
         */
        readonly lastUpdated: string;
        asLoaded(): ConsumedODataService;
        load(callback: (element: ConsumedODataService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedODataService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-odata-service-properties relevant section in reference guide}
     *
     * In version 10.0.0: removed experimental
     * In version 7.18.0: introduced
     */
    class ConsumedODataService extends domainmodels.RemoteEntitySourceDocument implements IConsumedODataService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 8.6.0: introduced
         */
        get metadataReferences(): internal.IList<MetadataReference>;
        get proxyType(): microflows.RequestProxyType;
        set proxyType(newValue: microflows.RequestProxyType);
        get proxyHost(): constants.IConstant | null;
        set proxyHost(newValue: constants.IConstant | null);
        get proxyHostQualifiedName(): string | null;
        get proxyPort(): constants.IConstant | null;
        set proxyPort(newValue: constants.IConstant | null);
        get proxyPortQualifiedName(): string | null;
        get proxyUsername(): constants.IConstant | null;
        set proxyUsername(newValue: constants.IConstant | null);
        get proxyUsernameQualifiedName(): string | null;
        get proxyPassword(): constants.IConstant | null;
        set proxyPassword(newValue: constants.IConstant | null);
        get proxyPasswordQualifiedName(): string | null;
        /**
         * In version 8.0.0: introduced
         */
        get httpConfiguration(): microflows.HttpConfiguration;
        set httpConfiguration(newValue: microflows.HttpConfiguration);
        /**
         * In version 10.12.0: deleted
         * In version 8.4.0: introduced
         */
        get headersMicroflow(): microflows.IMicroflow | null;
        set headersMicroflow(newValue: microflows.IMicroflow | null);
        get headersMicroflowQualifiedName(): string | null;
        /**
         * In version 10.12.0: introduced
         */
        get configurationMicroflow(): microflows.IMicroflow | null;
        set configurationMicroflow(newValue: microflows.IMicroflow | null);
        get configurationMicroflowQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 9.8.0: deleted
         * In version 8.5.0: introduced
         */
        get timeoutModel(): expressions.Expression;
        set timeoutModel(newValue: expressions.Expression);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 8.5.0: introduced
         */
        get timeoutExpression(): string;
        set timeoutExpression(newValue: string);
        /**
         * In version 8.6.0: introduced
         */
        get oDataVersion(): ODataVersion;
        set oDataVersion(newValue: ODataVersion);
        /**
         * In version 8.14.0: deleted
         * In version 8.13.0: introduced
         */
        get versionApiMockResults(): string;
        set versionApiMockResults(newValue: string);
        /**
         * In version 8.14.0: deleted
         * In version 8.0.0: introduced
         */
        get serviceId(): string;
        set serviceId(newValue: string);
        /**
         * In version 8.14.0: introduced
         */
        get lastUpdated(): string;
        set lastUpdated(newValue: string);
        /**
         * In version 9.6.0: introduced
         */
        get useQuerySegment(): boolean;
        set useQuerySegment(newValue: boolean);
        /**
         * In version 9.6.0: introduced
         */
        get errorHandlingMicroflow(): microflows.IMicroflow | null;
        set errorHandlingMicroflow(newValue: microflows.IMicroflow | null);
        get errorHandlingMicroflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedODataService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedODataService;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service relevant section in reference guide}
     *
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    interface IConsumedRestService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly operations: internal.IList<IRestOperation>;
        /**
         * In version 10.17.0: introduced
         */
        readonly baseUrlParameter: IRestParameter | null;
        asLoaded(): ConsumedRestService;
        load(callback: (element: ConsumedRestService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedRestService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service relevant section in reference guide}
     *
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class ConsumedRestService extends projects.Document implements IConsumedRestService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 10.21.0: introduced
         */
        get openApiFile(): OpenApiFile | null;
        set openApiFile(newValue: OpenApiFile | null);
        get baseUrl(): ValueTemplate;
        set baseUrl(newValue: ValueTemplate);
        /**
         * In version 10.2.0: introduced
         */
        get authenticationScheme(): AuthenticationScheme | null;
        set authenticationScheme(newValue: AuthenticationScheme | null);
        get operations(): internal.IList<RestOperation>;
        /**
         * In version 10.17.0: introduced
         */
        get baseUrlParameter(): RestParameter | null;
        set baseUrlParameter(newValue: RestParameter | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedRestService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedRestService;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/cors-settings relevant section in reference guide}
     *
     * In version 7.18.0: introduced
     */
    class CorsConfiguration extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestService(): PublishedRestService;
        get allowedOrigins(): constants.IConstant | null;
        set allowedOrigins(newValue: constants.IConstant | null);
        get allowedOriginsQualifiedName(): string | null;
        get allowAuthentication(): boolean;
        set allowAuthentication(newValue: boolean);
        get maxAge(): constants.IConstant | null;
        set maxAge(newValue: constants.IConstant | null);
        get maxAgeQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new CorsConfiguration instance in the SDK and on the server.
         * The new CorsConfiguration will be automatically stored in the 'corsConfiguration' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.18.0 and higher
         */
        static createIn(container: PublishedRestService): CorsConfiguration;
        /**
         * Creates and returns a new CorsConfiguration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): CorsConfiguration;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service/#add-headers relevant section in reference guide}
     *
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    interface IHeaderWithValueTemplate extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsRestOperation: IRestOperation;
        readonly name: string;
        asLoaded(): HeaderWithValueTemplate;
        load(callback: (element: HeaderWithValueTemplate) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<HeaderWithValueTemplate>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service/#add-headers relevant section in reference guide}
     *
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class HeaderWithValueTemplate extends internal.Element<IModel> implements IHeaderWithValueTemplate {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperation(): RestOperation;
        get name(): string;
        set name(newValue: string);
        get value(): ValueTemplate;
        set value(newValue: ValueTemplate);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new HeaderWithValueTemplate instance in the SDK and on the server.
         * The new HeaderWithValueTemplate will be automatically stored in the 'headers' property
         * of the parent RestOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createIn(container: RestOperation): HeaderWithValueTemplate;
        /**
         * Creates and returns a new HeaderWithValueTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): HeaderWithValueTemplate;
        get qualifiedName(): string | null;
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    class ImplicitMappingBody extends Body {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperationMethodWithBody(): RestOperationMethodWithBody;
        get rootMappingElement(): exportmappings.ExportObjectMappingElement;
        set rootMappingElement(newValue: exportmappings.ExportObjectMappingElement);
        get testValue(): Value;
        set testValue(newValue: Value);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImplicitMappingBody instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImplicitMappingBody;
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.3.0: introduced
     */
    abstract class RestOperationResponseHandling extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperation(): RestOperation;
        get statusCode(): number;
        set statusCode(newValue: number);
        get contentType(): string;
        set contentType(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.3.0: introduced
     */
    class ImplicitMappingResponseHandling extends RestOperationResponseHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperation(): RestOperation;
        get rootMappingElement(): importmappings.ImportObjectMappingElement;
        set rootMappingElement(newValue: importmappings.ImportObjectMappingElement);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ImplicitMappingResponseHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ImplicitMappingResponseHandling;
    }
    /**
     * In version 11.0.0: introduced
     */
    class JsonBody extends Body {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperationMethodWithBody(): RestOperationMethodWithBody;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new JsonBody instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): JsonBody;
    }
    /**
     * In version 8.6.0: introduced
     */
    class MetadataReference extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedKafkaService(): kafka.ConsumedKafkaService;
        get containerAsConsumedODataService(): ConsumedODataService;
        get containerAsMetadataReference(): MetadataReference;
        get uri(): string;
        set uri(newValue: string);
        get metadata(): string;
        set metadata(newValue: string);
        /**
         * In version 8.8.0: introduced
         */
        get metadataReferences(): internal.IList<MetadataReference>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 to 8.7.0
         */
        static createIn(container: ConsumedODataService): MetadataReference;
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent kafka.ConsumedKafkaService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 to 10.1.0
         */
        static createInConsumedKafkaServiceUnderMetadataReferences(container: kafka.ConsumedKafkaService): MetadataReference;
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent ConsumedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.6.0 and higher
         */
        static createInConsumedODataServiceUnderMetadataReferences(container: ConsumedODataService): MetadataReference;
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * The new MetadataReference will be automatically stored in the 'metadataReferences' property
         * of the parent MetadataReference element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.8.0 and higher
         */
        static createInMetadataReferenceUnderMetadataReferences(container: MetadataReference): MetadataReference;
        /**
         * Creates and returns a new MetadataReference instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MetadataReference;
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.3.0: introduced
     */
    class NoResponseHandling extends RestOperationResponseHandling {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperation(): RestOperation;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new NoResponseHandling instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): NoResponseHandling;
    }
    /**
     * In version 10.8.0: introduced
     */
    interface IODataEntityTypeSource extends domainmodels.IRemoteEntitySource {
        readonly model: IModel;
        readonly containerAsEntity: domainmodels.IEntity;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly key: IODataKey | null;
        asLoaded(): ODataEntityTypeSource;
        load(callback: (element: ODataEntityTypeSource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataEntityTypeSource>;
    }
    /**
     * In version 10.8.0: introduced
     */
    class ODataEntityTypeSource extends domainmodels.RemoteEntitySource implements IODataEntityTypeSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): domainmodels.Entity;
        get sourceDocument(): IConsumedODataService | null;
        set sourceDocument(newValue: IConsumedODataService | null);
        get sourceDocumentQualifiedName(): string | null;
        get entityTypeName(): string;
        set entityTypeName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get key(): ODataKey | null;
        set key(newValue: ODataKey | null);
        /**
         * In version 11.5.0: introduced
         */
        get isOpen(): boolean;
        set isOpen(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataEntityTypeSource instance in the SDK and on the server.
         * The new ODataEntityTypeSource will be automatically stored in the 'source' property
         * of the parent domainmodels.Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.8.0 and higher
         */
        static createIn(container: domainmodels.Entity): ODataEntityTypeSource;
        /**
         * Creates and returns a new ODataEntityTypeSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataEntityTypeSource;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.9.0: introduced
     */
    interface IODataKey extends internal.IElement {
        readonly model: IModel;
        readonly containerAsODataEntityTypeSource: IODataEntityTypeSource;
        readonly containerAsODataRemoteEntitySource: IODataRemoteEntitySource;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly parts: internal.IList<IODataKeyPart>;
        asLoaded(): ODataKey;
        load(callback: (element: ODataKey) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataKey>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.9.0: introduced
     */
    class ODataKey extends internal.Element<IModel> implements IODataKey {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsODataEntityTypeSource(): ODataEntityTypeSource;
        get containerAsODataRemoteEntitySource(): ODataRemoteEntitySource;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get parts(): internal.IList<ODataKeyPart>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * The new ODataKey will be automatically stored in the 'key' property
         * of the parent ODataRemoteEntitySource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 to 10.7.0
         */
        static createIn(container: ODataRemoteEntitySource): ODataKey;
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * The new ODataKey will be automatically stored in the 'key' property
         * of the parent ODataEntityTypeSource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.8.0 and higher
         */
        static createInODataEntityTypeSourceUnderKey(container: ODataEntityTypeSource): ODataKey;
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * The new ODataKey will be automatically stored in the 'key' property
         * of the parent ODataRemoteEntitySource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.11.0 and higher
         */
        static createInODataRemoteEntitySourceUnderKey(container: ODataRemoteEntitySource): ODataKey;
        /**
         * Creates and returns a new ODataKey instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataKey;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.9.0: introduced
     */
    interface IODataKeyPart extends internal.IElement {
        readonly model: IModel;
        readonly containerAsODataKey: IODataKey;
        /**
         * This property is required and cannot be set to null.
         */
        readonly type: domainmodels.IAttributeType;
        asLoaded(): ODataKeyPart;
        load(callback: (element: ODataKeyPart) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataKeyPart>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 8.9.0: introduced
     */
    class ODataKeyPart extends internal.Element<IModel> implements IODataKeyPart {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsODataKey(): ODataKey;
        get name(): string;
        set name(newValue: string);
        get entityKeyPartName(): string;
        set entityKeyPartName(newValue: string);
        get type(): domainmodels.AttributeType;
        set type(newValue: domainmodels.AttributeType);
        /**
         * In version 9.9.0: introduced
         */
        get remoteType(): string;
        set remoteType(newValue: string);
        /**
         * In version 9.16.0: introduced
         */
        get filterable(): boolean;
        set filterable(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataKeyPart instance in the SDK and on the server.
         * The new ODataKeyPart will be automatically stored in the 'parts' property
         * of the parent ODataKey element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.9.0 and higher
         */
        static createIn(container: ODataKey): ODataKeyPart;
        /**
         * Creates and returns a new ODataKeyPart instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataKeyPart;
    }
    /**
     * In version 11.6.0: introduced
     */
    interface IODataMappedPrimitiveCollectionValue extends domainmodels.IMappedValue {
        readonly model: IModel;
        readonly containerAsAttribute: domainmodels.IAttribute;
        asLoaded(): ODataMappedPrimitiveCollectionValue;
        load(callback: (element: ODataMappedPrimitiveCollectionValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataMappedPrimitiveCollectionValue>;
    }
    /**
     * In version 11.6.0: introduced
     */
    class ODataMappedPrimitiveCollectionValue extends domainmodels.MappedValue implements IODataMappedPrimitiveCollectionValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): domainmodels.Attribute;
        get remoteName(): string;
        set remoteName(newValue: string);
        get remoteType(): string;
        set remoteType(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataMappedPrimitiveCollectionValue instance in the SDK and on the server.
         * The new ODataMappedPrimitiveCollectionValue will be automatically stored in the 'value' property
         * of the parent domainmodels.Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.6.0 and higher
         */
        static createIn(container: domainmodels.Attribute): ODataMappedPrimitiveCollectionValue;
        /**
         * Creates and returns a new ODataMappedPrimitiveCollectionValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataMappedPrimitiveCollectionValue;
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IODataMappedValue extends domainmodels.IMappedValue {
        readonly model: IModel;
        readonly containerAsAttribute: domainmodels.IAttribute;
        /**
         * In version 8.16.0: introduced
         */
        readonly filterable: boolean;
        /**
         * In version 8.16.0: introduced
         */
        readonly sortable: boolean;
        /**
         * In version 9.11.0: introduced
         */
        readonly representsStream: boolean;
        asLoaded(): ODataMappedValue;
        load(callback: (element: ODataMappedValue) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataMappedValue>;
    }
    /**
     * In version 8.10.0: introduced
     */
    class ODataMappedValue extends domainmodels.MappedValue implements IODataMappedValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttribute(): domainmodels.Attribute;
        get remoteName(): string;
        set remoteName(newValue: string);
        /**
         * In version 8.15.0: introduced
         */
        get remoteType(): string;
        set remoteType(newValue: string);
        /**
         * In version 8.16.0: introduced
         */
        get filterable(): boolean;
        set filterable(newValue: boolean);
        /**
         * In version 8.16.0: introduced
         */
        get sortable(): boolean;
        set sortable(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get representsStream(): boolean;
        set representsStream(newValue: boolean);
        /**
         * In version 9.6.0: introduced
         */
        get updatable(): boolean;
        set updatable(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get creatable(): boolean;
        set creatable(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataMappedValue instance in the SDK and on the server.
         * The new ODataMappedValue will be automatically stored in the 'value' property
         * of the parent domainmodels.Attribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container: domainmodels.Attribute): ODataMappedValue;
        /**
         * Creates and returns a new ODataMappedValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataMappedValue;
    }
    /**
     * In version 11.6.0: introduced
     */
    interface IODataPrimitiveCollectionAssociationSource extends domainmodels.IRemoteAssociationSource {
        readonly model: IModel;
        readonly containerAsAssociationBase: domainmodels.IAssociationBase;
        asLoaded(): ODataPrimitiveCollectionAssociationSource;
        load(callback: (element: ODataPrimitiveCollectionAssociationSource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataPrimitiveCollectionAssociationSource>;
    }
    /**
     * In version 11.6.0: introduced
     */
    class ODataPrimitiveCollectionAssociationSource extends domainmodels.RemoteAssociationSource implements IODataPrimitiveCollectionAssociationSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAssociationBase(): domainmodels.AssociationBase;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataPrimitiveCollectionAssociationSource instance in the SDK and on the server.
         * The new ODataPrimitiveCollectionAssociationSource will be automatically stored in the 'source' property
         * of the parent domainmodels.AssociationBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.6.0 and higher
         */
        static createIn(container: domainmodels.AssociationBase): ODataPrimitiveCollectionAssociationSource;
        /**
         * Creates and returns a new ODataPrimitiveCollectionAssociationSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataPrimitiveCollectionAssociationSource;
    }
    /**
     * In version 11.6.0: introduced
     */
    interface IODataPrimitiveCollectionEntitySource extends domainmodels.IRemoteEntitySource {
        readonly model: IModel;
        readonly containerAsEntity: domainmodels.IEntity;
        asLoaded(): ODataPrimitiveCollectionEntitySource;
        load(callback: (element: ODataPrimitiveCollectionEntitySource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataPrimitiveCollectionEntitySource>;
    }
    /**
     * In version 11.6.0: introduced
     */
    class ODataPrimitiveCollectionEntitySource extends domainmodels.RemoteEntitySource implements IODataPrimitiveCollectionEntitySource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): domainmodels.Entity;
        get sourceDocument(): IConsumedODataService | null;
        set sourceDocument(newValue: IConsumedODataService | null);
        get sourceDocumentQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataPrimitiveCollectionEntitySource instance in the SDK and on the server.
         * The new ODataPrimitiveCollectionEntitySource will be automatically stored in the 'source' property
         * of the parent domainmodels.Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.6.0 and higher
         */
        static createIn(container: domainmodels.Entity): ODataPrimitiveCollectionEntitySource;
        /**
         * Creates and returns a new ODataPrimitiveCollectionEntitySource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataPrimitiveCollectionEntitySource;
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IODataRemoteAssociationSource extends domainmodels.IRemoteAssociationSource {
        readonly model: IModel;
        readonly containerAsAssociationBase: domainmodels.IAssociationBase;
        asLoaded(): ODataRemoteAssociationSource;
        load(callback: (element: ODataRemoteAssociationSource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataRemoteAssociationSource>;
    }
    /**
     * In version 8.10.0: introduced
     */
    class ODataRemoteAssociationSource extends domainmodels.RemoteAssociationSource implements IODataRemoteAssociationSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAssociationBase(): domainmodels.AssociationBase;
        get remoteParentNavigationProperty(): string;
        set remoteParentNavigationProperty(newValue: string);
        get remoteChildNavigationProperty(): string;
        set remoteChildNavigationProperty(newValue: string);
        /**
         * In version 9.14.0: deleted
         * In version 8.16.0: introduced
         */
        get navigability(): AssociationNavigability;
        set navigability(newValue: AssociationNavigability);
        /**
         * In version 9.14.0: introduced
         */
        get navigability2(): domainmodels.Navigability;
        set navigability2(newValue: domainmodels.Navigability);
        /**
         * In version 9.6.0: introduced
         */
        get updatableFromChild(): boolean;
        set updatableFromChild(newValue: boolean);
        /**
         * In version 9.6.0: introduced
         */
        get updatableFromParent(): boolean;
        set updatableFromParent(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get creatableFromChild(): boolean;
        set creatableFromChild(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get creatableFromParent(): boolean;
        set creatableFromParent(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataRemoteAssociationSource instance in the SDK and on the server.
         * The new ODataRemoteAssociationSource will be automatically stored in the 'source' property
         * of the parent domainmodels.AssociationBase element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container: domainmodels.AssociationBase): ODataRemoteAssociationSource;
        /**
         * Creates and returns a new ODataRemoteAssociationSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataRemoteAssociationSource;
    }
    /**
     * In version 8.10.0: introduced
     */
    interface IODataRemoteEntitySource extends domainmodels.IQueryBasedRemoteEntitySource {
        readonly model: IModel;
        readonly containerAsEntity: domainmodels.IEntity;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.11.0: introduced
         */
        readonly key: IODataKey | null;
        /**
         * In version 8.16.0: introduced
         */
        readonly countable: boolean;
        asLoaded(): ODataRemoteEntitySource;
        load(callback: (element: ODataRemoteEntitySource) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ODataRemoteEntitySource>;
    }
    /**
     * In version 8.10.0: introduced
     */
    class ODataRemoteEntitySource extends domainmodels.QueryBasedRemoteEntitySource implements IODataRemoteEntitySource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEntity(): domainmodels.Entity;
        get sourceDocument(): IConsumedODataService | null;
        set sourceDocument(newValue: IConsumedODataService | null);
        get sourceDocumentQualifiedName(): string | null;
        /**
         * In version 9.5.0: deleted
         */
        get remoteName(): string;
        set remoteName(newValue: string);
        /**
         * In version 9.5.0: introduced
         */
        get entityTypeName(): string;
        set entityTypeName(newValue: string);
        /**
         * In version 9.5.0: deleted
         * In version 8.11.0: introduced
         */
        get entitySet(): string;
        set entitySet(newValue: string);
        /**
         * In version 9.5.0: introduced
         */
        get entitySetName(): string;
        set entitySetName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 8.11.0: introduced
         */
        get key(): ODataKey | null;
        set key(newValue: ODataKey | null);
        /**
         * In version 8.16.0: introduced
         */
        get countable(): boolean;
        set countable(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get creatable(): boolean;
        set creatable(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get deletable(): boolean;
        set deletable(newValue: boolean);
        /**
         * In version 9.21.0: introduced
         */
        get topSupported(): boolean;
        set topSupported(newValue: boolean);
        /**
         * In version 9.21.0: introduced
         */
        get skipSupported(): boolean;
        set skipSupported(newValue: boolean);
        /**
         * In version 10.4.0: introduced
         */
        get createChangeLocally(): boolean;
        set createChangeLocally(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataRemoteEntitySource instance in the SDK and on the server.
         * The new ODataRemoteEntitySource will be automatically stored in the 'source' property
         * of the parent domainmodels.Entity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  8.10.0 and higher
         */
        static createIn(container: domainmodels.Entity): ODataRemoteEntitySource;
        /**
         * Creates and returns a new ODataRemoteEntitySource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataRemoteEntitySource;
    }
    /**
     * In version 10.2.0: introduced
     */
    class ODataRemoteEnumerationSource extends enumerations.RemoteEnumerationSource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEnumeration(): enumerations.Enumeration;
        get consumedODataService(): IConsumedODataService | null;
        set consumedODataService(newValue: IConsumedODataService | null);
        get consumedODataServiceQualifiedName(): string | null;
        get remoteName(): string;
        set remoteName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataRemoteEnumerationSource instance in the SDK and on the server.
         * The new ODataRemoteEnumerationSource will be automatically stored in the 'remoteSource' property
         * of the parent enumerations.Enumeration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createIn(container: enumerations.Enumeration): ODataRemoteEnumerationSource;
        /**
         * Creates and returns a new ODataRemoteEnumerationSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataRemoteEnumerationSource;
    }
    /**
     * In version 10.12.0: introduced
     */
    class ODataRemoteEnumerationValue extends enumerations.RemoteEnumerationValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsEnumerationValue(): enumerations.EnumerationValue;
        get remoteName(): string;
        set remoteName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ODataRemoteEnumerationValue instance in the SDK and on the server.
         * The new ODataRemoteEnumerationValue will be automatically stored in the 'remoteValue' property
         * of the parent enumerations.EnumerationValue element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createIn(container: enumerations.EnumerationValue): ODataRemoteEnumerationValue;
        /**
         * Creates and returns a new ODataRemoteEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ODataRemoteEnumerationValue;
    }
    /**
     * In version 10.21.0: introduced
     */
    class OpenApiFile extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedRestService(): ConsumedRestService;
        get content(): string;
        set content(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OpenApiFile instance in the SDK and on the server.
         * The new OpenApiFile will be automatically stored in the 'openApiFile' property
         * of the parent ConsumedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.21.0 and higher
         */
        static createIn(container: ConsumedRestService): OpenApiFile;
        /**
         * Creates and returns a new OpenApiFile instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OpenApiFile;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service/#add-parameters relevant section in reference guide}
     *
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    interface IOperationParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsRestOperation: IRestOperation;
        readonly name: string;
        asLoaded(): OperationParameter;
        load(callback: (element: OperationParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<OperationParameter>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/consumed-rest-service/#add-parameters relevant section in reference guide}
     *
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class OperationParameter extends internal.Element<IModel> implements IOperationParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperation(): RestOperation;
        get name(): string;
        set name(newValue: string);
        get dataType(): datatypes.DataType;
        set dataType(newValue: datatypes.DataType);
        get testValue(): Value;
        set testValue(newValue: Value);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OperationParameter instance in the SDK and on the server.
         * The new OperationParameter will be automatically stored in the 'parameters' property
         * of the parent RestOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createIn(container: RestOperation): OperationParameter;
        /**
         * Creates and returns a new OperationParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OperationParameter;
        get qualifiedName(): string | null;
    }
    /**
     * In version 11.0.0: introduced
     */
    abstract class QueryParameterUsage extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsQueryParameter(): QueryParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 11.0.0: introduced
     */
    class OptionalQueryParameterUsage extends QueryParameterUsage {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsQueryParameter(): QueryParameter;
        get included(): boolean;
        set included(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OptionalQueryParameterUsage instance in the SDK and on the server.
         * The new OptionalQueryParameterUsage will be automatically stored in the 'parameterUsage' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container: QueryParameter): OptionalQueryParameterUsage;
        /**
         * Creates and returns a new OptionalQueryParameterUsage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OptionalQueryParameterUsage;
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.14.0: introduced
     */
    class PublishedODataContract extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get serviceFeed(): ServiceFeed;
        set serviceFeed(newValue: ServiceFeed);
        get metadata(): string;
        set metadata(newValue: string);
        /**
         * In version 9.17.0: introduced
         */
        get openApi(): string;
        set openApi(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedODataContract instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedODataContract;
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.21.0: introduced
     */
    class PublishedODataEnumeration extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataService(): PublishedODataService;
        get exposedName(): string;
        set exposedName(newValue: string);
        get enumeration(): enumerations.IEnumeration;
        set enumeration(newValue: enumerations.IEnumeration);
        get enumerationQualifiedName(): string;
        get values(): internal.IList<PublishedODataEnumerationValue>;
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedODataEnumeration instance in the SDK and on the server.
         * The new PublishedODataEnumeration will be automatically stored in the 'enumerations' property
         * of the parent PublishedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.21.0 to 10.3.0
         */
        static createIn(container: PublishedODataService): PublishedODataEnumeration;
        /**
         * Creates and returns a new PublishedODataEnumeration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedODataEnumeration;
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.21.0: introduced
     */
    class PublishedODataEnumerationValue extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataEnumeration(): PublishedODataEnumeration;
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
         * Creates and returns a new PublishedODataEnumerationValue instance in the SDK and on the server.
         * The new PublishedODataEnumerationValue will be automatically stored in the 'values' property
         * of the parent PublishedODataEnumeration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.21.0 to 10.3.0
         */
        static createIn(container: PublishedODataEnumeration): PublishedODataEnumerationValue;
        /**
         * Creates and returns a new PublishedODataEnumerationValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedODataEnumerationValue;
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.19.0: introduced
     */
    class PublishedODataMicroflow extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataService(): PublishedODataService;
        get exposedName(): string;
        set exposedName(newValue: string);
        get microflow(): microflows.IMicroflow;
        set microflow(newValue: microflows.IMicroflow);
        get microflowQualifiedName(): string;
        /**
         * In version 10.0.0: introduced
         */
        get parameters(): internal.IList<PublishedODataMicroflowParameter>;
        /**
         * In version 10.2.0: introduced
         */
        get returnType(): datatypes.DataType;
        set returnType(newValue: datatypes.DataType);
        get summary(): string;
        set summary(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedODataMicroflow instance in the SDK and on the server.
         * The new PublishedODataMicroflow will be automatically stored in the 'microflows' property
         * of the parent PublishedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.19.0 to 10.3.0
         */
        static createIn(container: PublishedODataService): PublishedODataMicroflow;
        /**
         * Creates and returns a new PublishedODataMicroflow instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedODataMicroflow;
    }
    /**
     * In version 10.4.0: deleted
     * In version 10.0.0: introduced
     */
    class PublishedODataMicroflowParameter extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataMicroflow(): PublishedODataMicroflow;
        get exposedName(): string;
        set exposedName(newValue: string);
        get microflowParameter(): microflows.IMicroflowParameter;
        set microflowParameter(newValue: microflows.IMicroflowParameter);
        get microflowParameterQualifiedName(): string;
        /**
         * In version 10.2.0: deleted
         */
        get type(): datatypes.DataType;
        set type(newValue: datatypes.DataType);
        /**
         * In version 10.2.0: introduced
         */
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
         * Creates and returns a new PublishedODataMicroflowParameter instance in the SDK and on the server.
         * The new PublishedODataMicroflowParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedODataMicroflow element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 to 10.3.0
         */
        static createIn(container: PublishedODataMicroflow): PublishedODataMicroflowParameter;
        /**
         * Creates and returns a new PublishedODataMicroflowParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedODataMicroflowParameter;
    }
    /**
     * In version 10.4.0: deleted
     */
    interface IPublishedODataService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedODataService;
        load(callback: (element: PublishedODataService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedODataService>;
    }
    /**
     * In version 10.4.0: deleted
     */
    class PublishedODataService extends projects.Document implements IPublishedODataService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get namespace(): string;
        set namespace(newValue: string);
        get path(): string;
        set path(newValue: string);
        get allowedModuleRoles(): internal.IList<security.IModuleRole>;
        get allowedModuleRolesQualifiedNames(): string[];
        /**
         * In version 8.0.0: introduced
         */
        get serviceName(): string;
        set serviceName(newValue: string);
        get resources(): internal.IList<PublishedRestResource>;
        /**
         * In version 9.19.0: introduced
         */
        get microflows(): internal.IList<PublishedODataMicroflow>;
        /**
         * In version 9.21.0: introduced
         */
        get enumerations(): internal.IList<PublishedODataEnumeration>;
        /**
         * In version 7.19.0: introduced
         */
        get publishAssociations(): boolean;
        set publishAssociations(newValue: boolean);
        /**
         * In version 8.0.0: introduced
         */
        get version(): string;
        set version(newValue: string);
        /**
         * In version 8.0.0: introduced
         */
        get authenticationMicroflow(): microflows.IMicroflow | null;
        set authenticationMicroflow(newValue: microflows.IMicroflow | null);
        get authenticationMicroflowQualifiedName(): string | null;
        /**
         * In version 8.0.0: introduced
         */
        get authenticationTypes(): internal.IList<RestAuthenticationType>;
        /**
         * In version 8.4.0: introduced
         */
        get summary(): string;
        set summary(newValue: string);
        /**
         * In version 8.4.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        /**
         * In version 8.12.0: introduced
         */
        get replaceIllegalChars(): boolean;
        set replaceIllegalChars(newValue: boolean);
        /**
         * In version 8.18.0: introduced
         */
        get useGeneralization(): boolean;
        set useGeneralization(newValue: boolean);
        /**
         * In version 9.1.0: introduced
         */
        get oDataVersion(): PublishedODataVersion;
        set oDataVersion(newValue: PublishedODataVersion);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedODataService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedODataService;
    }
    /**
     * In version 10.4.0: deleted
     */
    class PublishedRestResource extends webservices.PublishedResource {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataService(): PublishedODataService;
        get path(): string;
        set path(newValue: string);
        /**
         * In version 7.19.0: introduced
         */
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * In version 8.0.0: introduced
         */
        get summary(): string;
        set summary(newValue: string);
        /**
         * In version 8.0.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        get usePaging(): boolean;
        set usePaging(newValue: boolean);
        get pageSize(): number;
        set pageSize(newValue: number);
        /**
         * In version 9.11.0: deleted
         * In version 9.4.0: introduced
         */
        get updatable(): boolean;
        set updatable(newValue: boolean);
        /**
         * In version 9.11.0: deleted
         * In version 9.9.0: introduced
         */
        get updateMicroflow(): microflows.IMicroflow | null;
        set updateMicroflow(newValue: microflows.IMicroflow | null);
        get updateMicroflowQualifiedName(): string | null;
        /**
         * In version 9.11.0: deleted
         * In version 9.10.0: introduced
         */
        get insertable(): boolean;
        set insertable(newValue: boolean);
        /**
         * In version 9.11.0: deleted
         * In version 9.10.0: introduced
         */
        get deletable(): boolean;
        set deletable(newValue: boolean);
        /**
         * In version 9.11.0: introduced
         */
        get updateMode(): ChangeMode;
        set updateMode(newValue: ChangeMode);
        /**
         * In version 9.11.0: introduced
         */
        get insertMode(): ChangeMode;
        set insertMode(newValue: ChangeMode);
        /**
         * In version 9.11.0: introduced
         */
        get deleteMode(): ChangeMode;
        set deleteMode(newValue: ChangeMode);
        /**
         * In version 9.14.0: introduced
         */
        get readMode(): ReadMode;
        set readMode(newValue: ReadMode);
        /**
         * In version 9.17.0: introduced
         */
        get queryOptions(): QueryOptions;
        set queryOptions(newValue: QueryOptions);
        /**
         * In version 9.14.0: deleted
         * In version 9.9.0: introduced
         */
        get queryMicroflow(): microflows.IMicroflow | null;
        set queryMicroflow(newValue: microflows.IMicroflow | null);
        get queryMicroflowQualifiedName(): string | null;
        /**
         * In version 9.14.0: deleted
         * In version 9.9.0: introduced
         */
        get countMicroflow(): microflows.IMicroflow | null;
        set countMicroflow(newValue: microflows.IMicroflow | null);
        get countMicroflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedRestResource instance in the SDK and on the server.
         * The new PublishedRestResource will be automatically stored in the 'resources' property
         * of the parent PublishedODataService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  6.0.0 to 10.3.0
         */
        static createIn(container: PublishedODataService): PublishedRestResource;
        /**
         * Creates and returns a new PublishedRestResource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedRestResource;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-services relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.6.0: introduced
     */
    interface IPublishedRestService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedRestService;
        load(callback: (element: PublishedRestService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedRestService>;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-services relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.6.0: introduced
     */
    class PublishedRestService extends projects.Document implements IPublishedRestService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get path(): string;
        set path(newValue: string);
        /**
         * In version 7.12.0: introduced
         */
        get serviceName(): string;
        set serviceName(newValue: string);
        /**
         * In version 7.12.0: introduced
         */
        get version(): string;
        set version(newValue: string);
        /**
         * In version 7.13.0: deleted
         * In version 7.11.0: introduced
         */
        get authenticationType(): RestAuthenticationType;
        set authenticationType(newValue: RestAuthenticationType);
        /**
         * In version 7.13.0: introduced
         */
        get authenticationTypes(): internal.IList<RestAuthenticationType>;
        /**
         * In version 7.17.0: introduced
         */
        get authenticationMicroflow(): microflows.IMicroflow | null;
        set authenticationMicroflow(newValue: microflows.IMicroflow | null);
        get authenticationMicroflowQualifiedName(): string | null;
        /**
         * In version 7.18.0: introduced
         */
        get corsConfiguration(): CorsConfiguration | null;
        set corsConfiguration(newValue: CorsConfiguration | null);
        get allowedRoles(): internal.IList<security.IModuleRole>;
        get allowedRolesQualifiedNames(): string[];
        /**
         * In version 7.7.0: introduced
         */
        get resources(): internal.IList<PublishedRestServiceResource>;
        /**
         * In version 7.17.0: introduced
         */
        get parameters(): internal.IList<RestOperationParameter>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedRestService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedRestService;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-operation relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.7.0: introduced
     */
    class PublishedRestServiceOperation extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestServiceResource(): PublishedRestServiceResource;
        get summary(): string;
        set summary(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        get path(): string;
        set path(newValue: string);
        /**
         * In version 7.15.0: introduced
         */
        get deprecated(): boolean;
        set deprecated(newValue: boolean);
        /**
         * In version 7.17.0: introduced
         */
        get parameters(): internal.IList<RestOperationParameter>;
        get httpMethod(): services.HttpMethod;
        set httpMethod(newValue: services.HttpMethod);
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        /**
         * In version 7.14.0: introduced
         */
        get exportMapping(): exportmappings.IExportMapping | null;
        set exportMapping(newValue: exportmappings.IExportMapping | null);
        get exportMappingQualifiedName(): string | null;
        /**
         * In version 7.14.0: introduced
         */
        get importMapping(): importmappings.IImportMapping | null;
        set importMapping(newValue: importmappings.IImportMapping | null);
        get importMappingQualifiedName(): string | null;
        /**
         * In version 7.17.0: introduced
         */
        get objectHandlingBackup(): mappings.ObjectHandlingBackupEnum;
        set objectHandlingBackup(newValue: mappings.ObjectHandlingBackupEnum);
        /**
         * In version 7.14.0: introduced
         */
        get commit(): microflows.CommitEnum;
        set commit(newValue: microflows.CommitEnum);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedRestServiceOperation instance in the SDK and on the server.
         * The new PublishedRestServiceOperation will be automatically stored in the 'operations' property
         * of the parent PublishedRestServiceResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 and higher
         */
        static createIn(container: PublishedRestServiceResource): PublishedRestServiceOperation;
        /**
         * Creates and returns a new PublishedRestServiceOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedRestServiceOperation;
    }
    /**
     * See: {@link https://docs.mendix.com/refguide/published-rest-resource relevant section in reference guide}
     *
     * In version 7.11.0: removed experimental
     * In version 7.7.0: introduced
     */
    class PublishedRestServiceResource extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestService(): PublishedRestService;
        get name(): string;
        set name(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        get operations(): internal.IList<PublishedRestServiceOperation>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedRestServiceResource instance in the SDK and on the server.
         * The new PublishedRestServiceResource will be automatically stored in the 'resources' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.7.0 and higher
         */
        static createIn(container: PublishedRestService): PublishedRestServiceResource;
        /**
         * Creates and returns a new PublishedRestServiceResource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedRestServiceResource;
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.17.0: introduced
     */
    class QueryOptions extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        get countable(): boolean;
        set countable(newValue: boolean);
        /**
         * In version 9.19.0: introduced
         */
        get topSupported(): boolean;
        set topSupported(newValue: boolean);
        /**
         * In version 9.19.0: introduced
         */
        get skipSupported(): boolean;
        set skipSupported(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new QueryOptions instance in the SDK and on the server.
         * The new QueryOptions will be automatically stored in the 'queryOptions' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.17.0 to 10.3.0
         */
        static createIn(container: PublishedRestResource): QueryOptions;
        /**
         * Creates and returns a new QueryOptions instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): QueryOptions;
    }
    /**
     * In version 11.0.0: introduced
     */
    interface IQueryParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsRestOperation: IRestOperation;
        readonly name: string;
        asLoaded(): QueryParameter;
        load(callback: (element: QueryParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<QueryParameter>;
    }
    /**
     * In version 11.0.0: introduced
     */
    class QueryParameter extends internal.Element<IModel> implements IQueryParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperation(): RestOperation;
        get name(): string;
        set name(newValue: string);
        get testValue(): string;
        set testValue(newValue: string);
        get parameterUsage(): QueryParameterUsage;
        set parameterUsage(newValue: QueryParameterUsage);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new QueryParameter instance in the SDK and on the server.
         * The new QueryParameter will be automatically stored in the 'queryParameters' property
         * of the parent RestOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container: RestOperation): QueryParameter;
        /**
         * Creates and returns a new QueryParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): QueryParameter;
        get qualifiedName(): string | null;
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.14.0: introduced
     */
    class ReadSource extends ReadMode {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestResource(): PublishedRestResource;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ReadSource instance in the SDK and on the server.
         * The new ReadSource will be automatically stored in the 'readMode' property
         * of the parent PublishedRestResource element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.14.0 to 10.3.0
         */
        static createIn(container: PublishedRestResource): ReadSource;
        /**
         * Creates and returns a new ReadSource instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ReadSource;
    }
    /**
     * In version 11.0.0: introduced
     */
    class RequiredQueryParameterUsage extends QueryParameterUsage {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsQueryParameter(): QueryParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RequiredQueryParameterUsage instance in the SDK and on the server.
         * The new RequiredQueryParameterUsage will be automatically stored in the 'parameterUsage' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container: QueryParameter): RequiredQueryParameterUsage;
        /**
         * Creates and returns a new RequiredQueryParameterUsage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RequiredQueryParameterUsage;
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    interface IRestOperation extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsConsumedRestService: IConsumedRestService;
        readonly name: string;
        readonly headers: internal.IList<IHeaderWithValueTemplate>;
        readonly parameters: internal.IList<IOperationParameter>;
        /**
         * In version 11.0.0: introduced
         */
        readonly queryParameters: internal.IList<IQueryParameter>;
        asLoaded(): RestOperation;
        load(callback: (element: RestOperation) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<RestOperation>;
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class RestOperation extends internal.Element<IModel> implements IRestOperation {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedRestService(): ConsumedRestService;
        get name(): string;
        set name(newValue: string);
        get path(): ValueTemplate;
        set path(newValue: ValueTemplate);
        /**
         * In version 10.4.0: introduced
         */
        get method(): RestOperationMethod;
        set method(newValue: RestOperationMethod);
        get timeout(): number;
        set timeout(newValue: number);
        get headers(): internal.IList<HeaderWithValueTemplate>;
        get parameters(): internal.IList<OperationParameter>;
        /**
         * In version 11.0.0: introduced
         */
        get queryParameters(): internal.IList<QueryParameter>;
        /**
         * In version 10.3.0: introduced
         */
        get responseHandling(): RestOperationResponseHandling;
        set responseHandling(newValue: RestOperationResponseHandling);
        /**
         * In version 10.21.0: introduced
         */
        get tags(): internal.IList<string>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RestOperation instance in the SDK and on the server.
         * The new RestOperation will be automatically stored in the 'operations' property
         * of the parent ConsumedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createIn(container: ConsumedRestService): RestOperation;
        /**
         * Creates and returns a new RestOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RestOperation;
        get qualifiedName(): string | null;
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    abstract class RestOperationMethod extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperation(): RestOperation;
        get httpMethod(): services.HttpMethod;
        set httpMethod(newValue: services.HttpMethod);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    class RestOperationMethodWithBody extends RestOperationMethod {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperation(): RestOperation;
        get body(): Body;
        set body(newValue: Body);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RestOperationMethodWithBody instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RestOperationMethodWithBody;
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    class RestOperationMethodWithoutBody extends RestOperationMethod {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperation(): RestOperation;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RestOperationMethodWithoutBody instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RestOperationMethodWithoutBody;
    }
    /**
     * In version 7.11.0: removed experimental
     * In version 7.8.0: introduced
     */
    class RestOperationParameter extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedRestService(): PublishedRestService;
        get containerAsPublishedRestServiceOperation(): PublishedRestServiceOperation;
        get name(): string;
        set name(newValue: string);
        /**
         * In version 7.17.0: introduced
         */
        get microflowParameter(): microflows.IMicroflowParameter | null;
        set microflowParameter(newValue: microflows.IMicroflowParameter | null);
        get microflowParameterQualifiedName(): string | null;
        /**
         * In version 7.17.0: introduced
         */
        get type(): datatypes.DataType;
        set type(newValue: datatypes.DataType);
        get parameterType(): RestOperationParameterType;
        set parameterType(newValue: RestOperationParameterType);
        /**
         * In version 8.3.0: introduced
         */
        get description(): string;
        set description(newValue: string);
        /**
         * The value of this property is conceptually of type dataTypes.LegacyDataType.
         *
         * In version 7.9.0: deleted
         */
        get dataType(): string;
        set dataType(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * The new RestOperationParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInPublishedRestServiceUnderParameters(container: PublishedRestService): RestOperationParameter;
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * The new RestOperationParameter will be automatically stored in the 'parameters' property
         * of the parent PublishedRestServiceOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  7.17.0 and higher
         */
        static createInPublishedRestServiceOperationUnderParameters(container: PublishedRestServiceOperation): RestOperationParameter;
        /**
         * Creates and returns a new RestOperationParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RestOperationParameter;
    }
    /**
     * In version 10.17.0: introduced
     */
    interface IRestParameter extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsConsumedRestService: IConsumedRestService;
        readonly name: string;
        asLoaded(): RestParameter;
        load(callback: (element: RestParameter) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<RestParameter>;
    }
    /**
     * In version 10.17.0: introduced
     */
    class RestParameter extends internal.Element<IModel> implements IRestParameter {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedRestService(): ConsumedRestService;
        get name(): string;
        set name(newValue: string);
        get dataType(): datatypes.DataType;
        set dataType(newValue: datatypes.DataType);
        get testValue(): Value;
        set testValue(newValue: Value);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new RestParameter instance in the SDK and on the server.
         * The new RestParameter will be automatically stored in the 'baseUrlParameter' property
         * of the parent ConsumedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.17.0 and higher
         */
        static createIn(container: ConsumedRestService): RestParameter;
        /**
         * Creates and returns a new RestParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): RestParameter;
        get qualifiedName(): string | null;
    }
    /**
     * In version 10.4.0: deleted
     * In version 9.14.0: introduced
     */
    class ServiceFeed extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedODataContract(): PublishedODataContract;
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
    /**
     * In version 10.7.0: removed experimental
     * In version 10.4.0: introduced
     */
    class StringBody extends Body {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsRestOperationMethodWithBody(): RestOperationMethodWithBody;
        /**
         * In version 10.11.0: deleted
         */
        get value(): string;
        set value(newValue: string);
        /**
         * In version 10.11.0: introduced
         */
        get valueTemplate(): ValueTemplate;
        set valueTemplate(newValue: ValueTemplate);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringBody instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringBody;
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class StringValue extends Value {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBasicAuthenticationScheme(): BasicAuthenticationScheme;
        get containerAsImplicitMappingBody(): ImplicitMappingBody;
        get containerAsOperationParameter(): OperationParameter;
        get containerAsRestParameter(): RestParameter;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'testValue' property
         * of the parent OperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 to 10.1.0
         */
        static createIn(container: OperationParameter): StringValue;
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'password' property
         * of the parent BasicAuthenticationScheme element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createInBasicAuthenticationSchemeUnderPassword(container: BasicAuthenticationScheme): StringValue;
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'username' property
         * of the parent BasicAuthenticationScheme element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.2.0 and higher
         */
        static createInBasicAuthenticationSchemeUnderUsername(container: BasicAuthenticationScheme): StringValue;
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'testValue' property
         * of the parent ImplicitMappingBody element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.4.0 and higher
         */
        static createInImplicitMappingBodyUnderTestValue(container: ImplicitMappingBody): StringValue;
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'testValue' property
         * of the parent OperationParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createInOperationParameterUnderTestValue(container: OperationParameter): StringValue;
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * The new StringValue will be automatically stored in the 'testValue' property
         * of the parent RestParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.17.0 and higher
         */
        static createInRestParameterUnderTestValue(container: RestParameter): StringValue;
        /**
         * Creates and returns a new StringValue instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): StringValue;
    }
    /**
     * In version 10.7.0: removed experimental
     * In version 10.1.0: introduced
     */
    class ValueTemplate extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedRestService(): ConsumedRestService;
        get containerAsHeaderWithValueTemplate(): HeaderWithValueTemplate;
        get containerAsRestOperation(): RestOperation;
        get containerAsStringBody(): StringBody;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ValueTemplate instance in the SDK and on the server.
         * The new ValueTemplate will be automatically stored in the 'baseUrl' property
         * of the parent ConsumedRestService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createInConsumedRestServiceUnderBaseUrl(container: ConsumedRestService): ValueTemplate;
        /**
         * Creates and returns a new ValueTemplate instance in the SDK and on the server.
         * The new ValueTemplate will be automatically stored in the 'value' property
         * of the parent HeaderWithValueTemplate element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createInHeaderWithValueTemplateUnderValue(container: HeaderWithValueTemplate): ValueTemplate;
        /**
         * Creates and returns a new ValueTemplate instance in the SDK and on the server.
         * The new ValueTemplate will be automatically stored in the 'path' property
         * of the parent RestOperation element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.1.0 and higher
         */
        static createInRestOperationUnderPath(container: RestOperation): ValueTemplate;
        /**
         * Creates and returns a new ValueTemplate instance in the SDK and on the server.
         * The new ValueTemplate will be automatically stored in the 'valueTemplate' property
         * of the parent StringBody element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.11.0 and higher
         */
        static createInStringBodyUnderValueTemplate(container: StringBody): ValueTemplate;
        /**
         * Creates and returns a new ValueTemplate instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ValueTemplate;
    }
}
import { constants } from "./constants";
import { datatypes } from "./datatypes";
import { exportmappings } from "./exportmappings";
import { expressions } from "./expressions";
import { importmappings } from "./importmappings";
import { kafka } from "./kafka";
import { mappings } from "./mappings";
import { microflows } from "./microflows";
import { security } from "./security";
import { services } from "./services";
import { IModel } from "./base-model";
