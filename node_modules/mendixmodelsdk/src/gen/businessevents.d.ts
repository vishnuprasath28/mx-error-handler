import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace businessevents {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `BusinessEvents`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    class AttributeEnumeration extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMessageAttribute(): MessageAttribute;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get items(): internal.IList<AttributeEnumerationItem>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AttributeEnumeration instance in the SDK and on the server.
         * The new AttributeEnumeration will be automatically stored in the 'enumerationDefinition' property
         * of the parent MessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: MessageAttribute): AttributeEnumeration;
        /**
         * Creates and returns a new AttributeEnumeration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AttributeEnumeration;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    class AttributeEnumerationItem extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAttributeEnumeration(): AttributeEnumeration;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AttributeEnumerationItem instance in the SDK and on the server.
         * The new AttributeEnumerationItem will be automatically stored in the 'items' property
         * of the parent AttributeEnumeration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: AttributeEnumeration): AttributeEnumerationItem;
        /**
         * Creates and returns a new AttributeEnumerationItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AttributeEnumerationItem;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class BusinessEventDefinition extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBusinessEventService(): BusinessEventService;
        get serviceName(): string;
        set serviceName(newValue: string);
        get eventNamePrefix(): string;
        set eventNamePrefix(newValue: string);
        get description(): string;
        set description(newValue: string);
        get summary(): string;
        set summary(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get channels(): internal.IList<Channel>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BusinessEventDefinition instance in the SDK and on the server.
         * The new BusinessEventDefinition will be automatically stored in the 'definition' property
         * of the parent BusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container: BusinessEventService): BusinessEventDefinition;
        /**
         * Creates and returns a new BusinessEventDefinition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BusinessEventDefinition;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    interface IBusinessEventService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): BusinessEventService;
        load(callback: (element: BusinessEventService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<BusinessEventService>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class BusinessEventService extends projects.Document implements IBusinessEventService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get definition(): BusinessEventDefinition | null;
        set definition(newValue: BusinessEventDefinition | null);
        get document(): string;
        set document(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get operationImplementations(): internal.IList<ServiceOperation>;
        /**
         * In version 10.21.0: introduced
         */
        get sourceApi(): integrationoverview.SourceApi | null;
        set sourceApi(newValue: integrationoverview.SourceApi | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new BusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): BusinessEventService;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class Channel extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBusinessEventDefinition(): BusinessEventDefinition;
        get channelName(): string;
        set channelName(newValue: string);
        get description(): string;
        set description(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get messages(): internal.IList<Message>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Channel instance in the SDK and on the server.
         * The new Channel will be automatically stored in the 'channels' property
         * of the parent BusinessEventDefinition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container: BusinessEventDefinition): Channel;
        /**
         * Creates and returns a new Channel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Channel;
    }
    /**
     * In version 9.24.0: deleted
     * In version 9.11.0: introduced
     */
    class ConsumedBusinessEvent extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConsumedBusinessEventService(): ConsumedBusinessEventService;
        get eventName(): string;
        set eventName(newValue: string);
        /**
         * In version 9.13.0: introduced
         */
        get channelId(): string;
        set channelId(newValue: string);
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        get microflow(): microflows.IMicroflow;
        set microflow(newValue: microflows.IMicroflow);
        get microflowQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConsumedBusinessEvent instance in the SDK and on the server.
         * The new ConsumedBusinessEvent will be automatically stored in the 'businessEvents' property
         * of the parent ConsumedBusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 9.23.0
         */
        static createIn(container: ConsumedBusinessEventService): ConsumedBusinessEvent;
        /**
         * Creates and returns a new ConsumedBusinessEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConsumedBusinessEvent;
    }
    /**
     * In version 9.24.0: deleted
     * In version 9.8.0: introduced
     */
    interface IConsumedBusinessEventService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): ConsumedBusinessEventService;
        load(callback: (element: ConsumedBusinessEventService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConsumedBusinessEventService>;
    }
    /**
     * In version 9.24.0: deleted
     * In version 9.8.0: introduced
     */
    class ConsumedBusinessEventService extends projects.Document implements IConsumedBusinessEventService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * In version 9.11.0: introduced
         */
        get version(): string;
        set version(newValue: string);
        /**
         * In version 9.11.0: introduced
         */
        get contract(): string;
        set contract(newValue: string);
        /**
         * In version 9.11.0: introduced
         */
        get businessEvents(): internal.IList<ConsumedBusinessEvent>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConsumedBusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConsumedBusinessEventService;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class Message extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsChannel(): Channel;
        get messageName(): string;
        set messageName(newValue: string);
        get description(): string;
        set description(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get attributes(): internal.IList<MessageAttribute>;
        get canPublish(): boolean;
        set canPublish(newValue: boolean);
        get canSubscribe(): boolean;
        set canSubscribe(newValue: boolean);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new Message instance in the SDK and on the server.
         * The new Message will be automatically stored in the 'messages' property
         * of the parent Channel element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container: Channel): Message;
        /**
         * Creates and returns a new Message instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): Message;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class MessageAttribute extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsMessage(): Message;
        get attributeType(): domainmodels.AttributeType;
        set attributeType(newValue: domainmodels.AttributeType);
        get attributeName(): string;
        set attributeName(newValue: string);
        get description(): string;
        set description(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.0.0: introduced
         */
        get enumerationDefinition(): AttributeEnumeration | null;
        set enumerationDefinition(newValue: AttributeEnumeration | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new MessageAttribute instance in the SDK and on the server.
         * The new MessageAttribute will be automatically stored in the 'attributes' property
         * of the parent Message element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container: Message): MessageAttribute;
        /**
         * Creates and returns a new MessageAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): MessageAttribute;
    }
    /**
     * In version 9.24.0: deleted
     * In version 9.11.0: introduced
     */
    interface IPublishedBusinessEventService extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): PublishedBusinessEventService;
        load(callback: (element: PublishedBusinessEventService) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<PublishedBusinessEventService>;
    }
    /**
     * In version 9.24.0: deleted
     * In version 9.11.0: introduced
     */
    class PublishedBusinessEventService extends projects.Document implements IPublishedBusinessEventService {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get serviceName(): string;
        set serviceName(newValue: string);
        /**
         * In version 9.13.0: introduced
         */
        get eventNamePrefix(): string;
        set eventNamePrefix(newValue: string);
        get version(): string;
        set version(newValue: string);
        get description(): string;
        set description(newValue: string);
        get summary(): string;
        set summary(newValue: string);
        get channels(): internal.IList<PublishedChannel>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new PublishedBusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): PublishedBusinessEventService;
    }
    /**
     * In version 9.24.0: deleted
     * In version 9.11.0: introduced
     */
    class PublishedChannel extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedBusinessEventService(): PublishedBusinessEventService;
        get channelId(): string;
        set channelId(newValue: string);
        get channelName(): string;
        set channelName(newValue: string);
        get description(): string;
        set description(newValue: string);
        get messages(): internal.IList<PublishedMessage>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedChannel instance in the SDK and on the server.
         * The new PublishedChannel will be automatically stored in the 'channels' property
         * of the parent PublishedBusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 9.23.0
         */
        static createIn(container: PublishedBusinessEventService): PublishedChannel;
        /**
         * Creates and returns a new PublishedChannel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedChannel;
    }
    /**
     * In version 9.24.0: deleted
     * In version 9.11.0: introduced
     */
    class PublishedMessage extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedChannel(): PublishedChannel;
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        /**
         * In version 9.12.0: deleted
         */
        get exposedName(): string;
        set exposedName(newValue: string);
        /**
         * In version 9.12.0: introduced
         */
        get eventName(): string;
        set eventName(newValue: string);
        get description(): string;
        set description(newValue: string);
        get summary(): string;
        set summary(newValue: string);
        get attributes(): internal.IList<PublishedMessageAttribute>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedMessage instance in the SDK and on the server.
         * The new PublishedMessage will be automatically stored in the 'messages' property
         * of the parent PublishedChannel element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 9.23.0
         */
        static createIn(container: PublishedChannel): PublishedMessage;
        /**
         * Creates and returns a new PublishedMessage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedMessage;
    }
    /**
     * In version 9.24.0: deleted
     * In version 9.11.0: introduced
     */
    class PublishedMessageAttribute extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsPublishedMessage(): PublishedMessage;
        get attribute(): domainmodels.IAttribute;
        set attribute(newValue: domainmodels.IAttribute);
        get attributeQualifiedName(): string;
        /**
         * In version 9.14.0: introduced
         */
        get attributeType(): domainmodels.AttributeType;
        set attributeType(newValue: domainmodels.AttributeType);
        get exposedName(): string;
        set exposedName(newValue: string);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new PublishedMessageAttribute instance in the SDK and on the server.
         * The new PublishedMessageAttribute will be automatically stored in the 'attributes' property
         * of the parent PublishedMessage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 9.23.0
         */
        static createIn(container: PublishedMessage): PublishedMessageAttribute;
        /**
         * Creates and returns a new PublishedMessageAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): PublishedMessageAttribute;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class ServiceOperation extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsBusinessEventService(): BusinessEventService;
        get messageName(): string;
        set messageName(newValue: string);
        get operation(): string;
        set operation(newValue: string);
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        get microflow(): microflows.IMicroflow | null;
        set microflow(newValue: microflows.IMicroflow | null);
        get microflowQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ServiceOperation instance in the SDK and on the server.
         * The new ServiceOperation will be automatically stored in the 'operationImplementations' property
         * of the parent BusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container: BusinessEventService): ServiceOperation;
        /**
         * Creates and returns a new ServiceOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ServiceOperation;
    }
}
import { domainmodels } from "./domainmodels";
import { integrationoverview } from "./integrationoverview";
import { microflows } from "./microflows";
import { IModel } from "./base-model";
