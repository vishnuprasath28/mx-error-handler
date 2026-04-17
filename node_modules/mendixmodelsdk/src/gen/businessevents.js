"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessevents = exports.StructureVersionInfo = void 0;
const internal = require("../sdk/internal");
exports.StructureVersionInfo = internal.StructureVersionInfo;
const projects_1 = require("./projects");
var businessevents;
(function (businessevents) {
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
    class AttributeEnumeration extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__items = new internal.PartListProperty(AttributeEnumeration, this, "items", []);
            if (arguments.length < 4) {
                throw new Error("new AttributeEnumeration() cannot be invoked directly, please use 'model.businessevents.createAttributeEnumeration()'");
            }
        }
        get containerAsMessageAttribute() {
            return super.getContainerAs(MessageAttribute);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get items() {
            return this.__items.get();
        }
        /**
         * Creates and returns a new AttributeEnumeration instance in the SDK and on the server.
         * The new AttributeEnumeration will be automatically stored in the 'enumerationDefinition' property
         * of the parent MessageAttribute element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AttributeEnumeration.structureTypeName, { start: "10.0.0" });
            return internal.instancehelpers.createElement(container, AttributeEnumeration, "enumerationDefinition", false);
        }
        /**
         * Creates and returns a new AttributeEnumeration instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AttributeEnumeration);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AttributeEnumeration.structureTypeName = "BusinessEvents$AttributeEnumeration";
    AttributeEnumeration.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.0.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    businessevents.AttributeEnumeration = AttributeEnumeration;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: introduced
     */
    class AttributeEnumerationItem extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__value = new internal.PrimitiveProperty(AttributeEnumerationItem, this, "value", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new AttributeEnumerationItem() cannot be invoked directly, please use 'model.businessevents.createAttributeEnumerationItem()'");
            }
        }
        get containerAsAttributeEnumeration() {
            return super.getContainerAs(AttributeEnumeration);
        }
        get value() {
            return this.__value.get();
        }
        set value(newValue) {
            this.__value.set(newValue);
        }
        /**
         * Creates and returns a new AttributeEnumerationItem instance in the SDK and on the server.
         * The new AttributeEnumerationItem will be automatically stored in the 'items' property
         * of the parent AttributeEnumeration element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, AttributeEnumerationItem.structureTypeName, { start: "10.0.0" });
            return internal.instancehelpers.createElement(container, AttributeEnumerationItem, "items", true);
        }
        /**
         * Creates and returns a new AttributeEnumerationItem instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, AttributeEnumerationItem);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    AttributeEnumerationItem.structureTypeName = "BusinessEvents$AttributeEnumerationItem";
    AttributeEnumerationItem.versionInfo = new exports.StructureVersionInfo({
        introduced: "10.0.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    businessevents.AttributeEnumerationItem = AttributeEnumerationItem;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class BusinessEventDefinition extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(BusinessEventDefinition, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__eventNamePrefix = new internal.PrimitiveProperty(BusinessEventDefinition, this, "eventNamePrefix", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(BusinessEventDefinition, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(BusinessEventDefinition, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__channels = new internal.PartListProperty(BusinessEventDefinition, this, "channels", []);
            if (arguments.length < 4) {
                throw new Error("new BusinessEventDefinition() cannot be invoked directly, please use 'model.businessevents.createBusinessEventDefinition()'");
            }
        }
        get containerAsBusinessEventService() {
            return super.getContainerAs(BusinessEventService);
        }
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        get eventNamePrefix() {
            return this.__eventNamePrefix.get();
        }
        set eventNamePrefix(newValue) {
            this.__eventNamePrefix.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get channels() {
            return this.__channels.get();
        }
        /**
         * Creates and returns a new BusinessEventDefinition instance in the SDK and on the server.
         * The new BusinessEventDefinition will be automatically stored in the 'definition' property
         * of the parent BusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, BusinessEventDefinition.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, BusinessEventDefinition, "definition", false);
        }
        /**
         * Creates and returns a new BusinessEventDefinition instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, BusinessEventDefinition);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BusinessEventDefinition.structureTypeName = "BusinessEvents$BusinessEventDefinition";
    BusinessEventDefinition.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    businessevents.BusinessEventDefinition = BusinessEventDefinition;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class BusinessEventService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__definition = new internal.PartProperty(BusinessEventService, this, "definition", null, false);
            /** @internal */
            this.__document = new internal.PrimitiveProperty(BusinessEventService, this, "document", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__operationImplementations = new internal.PartListProperty(BusinessEventService, this, "operationImplementations", []);
            /** @internal */
            this.__sourceApi = new internal.PartProperty(BusinessEventService, this, "sourceApi", null, false);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get definition() {
            return this.__definition.get();
        }
        set definition(newValue) {
            this.__definition.set(newValue);
        }
        get document() {
            return this.__document.get();
        }
        set document(newValue) {
            this.__document.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get operationImplementations() {
            return this.__operationImplementations.get();
        }
        /**
         * In version 10.21.0: introduced
         */
        get sourceApi() {
            return this.__sourceApi.get();
        }
        set sourceApi(newValue) {
            this.__sourceApi.set(newValue);
        }
        /**
         * Creates a new BusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, BusinessEventService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    BusinessEventService.structureTypeName = "BusinessEvents$BusinessEventService";
    BusinessEventService.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        properties: {
            sourceApi: {
                introduced: "10.21.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.ModelUnit);
    businessevents.BusinessEventService = BusinessEventService;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class Channel extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__channelName = new internal.PrimitiveProperty(Channel, this, "channelName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(Channel, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__messages = new internal.PartListProperty(Channel, this, "messages", []);
            if (arguments.length < 4) {
                throw new Error("new Channel() cannot be invoked directly, please use 'model.businessevents.createChannel()'");
            }
        }
        get containerAsBusinessEventDefinition() {
            return super.getContainerAs(BusinessEventDefinition);
        }
        get channelName() {
            return this.__channelName.get();
        }
        set channelName(newValue) {
            this.__channelName.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get messages() {
            return this.__messages.get();
        }
        /**
         * Creates and returns a new Channel instance in the SDK and on the server.
         * The new Channel will be automatically stored in the 'channels' property
         * of the parent BusinessEventDefinition element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, Channel.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, Channel, "channels", true);
        }
        /**
         * Creates and returns a new Channel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Channel);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Channel.structureTypeName = "BusinessEvents$Channel";
    Channel.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    businessevents.Channel = Channel;
    /**
     * In version 9.24.0: deleted
     * In version 9.11.0: introduced
     */
    class ConsumedBusinessEvent extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__eventName = new internal.PrimitiveProperty(ConsumedBusinessEvent, this, "eventName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__channelId = new internal.PrimitiveProperty(ConsumedBusinessEvent, this, "channelId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(ConsumedBusinessEvent, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(ConsumedBusinessEvent, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new ConsumedBusinessEvent() cannot be invoked directly, please use 'model.businessevents.createConsumedBusinessEvent()'");
            }
        }
        get containerAsConsumedBusinessEventService() {
            return super.getContainerAs(ConsumedBusinessEventService);
        }
        get eventName() {
            return this.__eventName.get();
        }
        set eventName(newValue) {
            this.__eventName.set(newValue);
        }
        /**
         * In version 9.13.0: introduced
         */
        get channelId() {
            return this.__channelId.get();
        }
        set channelId(newValue) {
            this.__channelId.set(newValue);
        }
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        get microflow() {
            return this.__microflow.get();
        }
        set microflow(newValue) {
            this.__microflow.set(newValue);
        }
        get microflowQualifiedName() {
            return this.__microflow.qualifiedName();
        }
        /**
         * Creates and returns a new ConsumedBusinessEvent instance in the SDK and on the server.
         * The new ConsumedBusinessEvent will be automatically stored in the 'businessEvents' property
         * of the parent ConsumedBusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 9.23.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ConsumedBusinessEvent.structureTypeName, { start: "9.11.0", end: "9.23.0" });
            return internal.instancehelpers.createElement(container, ConsumedBusinessEvent, "businessEvents", true);
        }
        /**
         * Creates and returns a new ConsumedBusinessEvent instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ConsumedBusinessEvent);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConsumedBusinessEvent.structureTypeName = "BusinessEvents$ConsumedBusinessEvent";
    ConsumedBusinessEvent.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        deleted: "9.24.0",
        deletionMessage: null,
        properties: {
            channelId: {
                introduced: "9.13.0"
            },
            entity: {
                required: {
                    currentValue: true
                }
            },
            microflow: {
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    businessevents.ConsumedBusinessEvent = ConsumedBusinessEvent;
    /**
     * In version 9.24.0: deleted
     * In version 9.8.0: introduced
     */
    class ConsumedBusinessEventService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(ConsumedBusinessEventService, this, "version", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__contract = new internal.PrimitiveProperty(ConsumedBusinessEventService, this, "contract", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__businessEvents = new internal.PartListProperty(ConsumedBusinessEventService, this, "businessEvents", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        /**
         * In version 9.11.0: introduced
         */
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get contract() {
            return this.__contract.get();
        }
        set contract(newValue) {
            this.__contract.set(newValue);
        }
        /**
         * In version 9.11.0: introduced
         */
        get businessEvents() {
            return this.__businessEvents.get();
        }
        /**
         * Creates a new ConsumedBusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, ConsumedBusinessEventService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ConsumedBusinessEventService.structureTypeName = "BusinessEvents$ConsumedBusinessEventService";
    ConsumedBusinessEventService.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.8.0",
        deleted: "9.24.0",
        deletionMessage: null,
        properties: {
            version: {
                introduced: "9.11.0"
            },
            contract: {
                introduced: "9.11.0"
            },
            businessEvents: {
                introduced: "9.11.0"
            }
        }
    }, internal.StructureType.ModelUnit);
    businessevents.ConsumedBusinessEventService = ConsumedBusinessEventService;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class Message extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__messageName = new internal.PrimitiveProperty(Message, this, "messageName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(Message, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributes = new internal.PartListProperty(Message, this, "attributes", []);
            /** @internal */
            this.__canPublish = new internal.PrimitiveProperty(Message, this, "canPublish", false, internal.PrimitiveTypeEnum.Boolean);
            /** @internal */
            this.__canSubscribe = new internal.PrimitiveProperty(Message, this, "canSubscribe", false, internal.PrimitiveTypeEnum.Boolean);
            if (arguments.length < 4) {
                throw new Error("new Message() cannot be invoked directly, please use 'model.businessevents.createMessage()'");
            }
        }
        get containerAsChannel() {
            return super.getContainerAs(Channel);
        }
        get messageName() {
            return this.__messageName.get();
        }
        set messageName(newValue) {
            this.__messageName.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get attributes() {
            return this.__attributes.get();
        }
        get canPublish() {
            return this.__canPublish.get();
        }
        set canPublish(newValue) {
            this.__canPublish.set(newValue);
        }
        get canSubscribe() {
            return this.__canSubscribe.get();
        }
        set canSubscribe(newValue) {
            this.__canSubscribe.set(newValue);
        }
        /**
         * Creates and returns a new Message instance in the SDK and on the server.
         * The new Message will be automatically stored in the 'messages' property
         * of the parent Channel element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, Message.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, Message, "messages", true);
        }
        /**
         * Creates and returns a new Message instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, Message);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    Message.structureTypeName = "BusinessEvents$Message";
    Message.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    businessevents.Message = Message;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class MessageAttribute extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attributeType = new internal.PartProperty(MessageAttribute, this, "attributeType", null, true);
            /** @internal */
            this.__attributeName = new internal.PrimitiveProperty(MessageAttribute, this, "attributeName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(MessageAttribute, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__enumerationDefinition = new internal.PartProperty(MessageAttribute, this, "enumerationDefinition", null, false);
            if (arguments.length < 4) {
                throw new Error("new MessageAttribute() cannot be invoked directly, please use 'model.businessevents.createMessageAttribute()'");
            }
        }
        get containerAsMessage() {
            return super.getContainerAs(Message);
        }
        get attributeType() {
            return this.__attributeType.get();
        }
        set attributeType(newValue) {
            this.__attributeType.set(newValue);
        }
        get attributeName() {
            return this.__attributeName.get();
        }
        set attributeName(newValue) {
            this.__attributeName.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.0.0: introduced
         */
        get enumerationDefinition() {
            return this.__enumerationDefinition.get();
        }
        set enumerationDefinition(newValue) {
            this.__enumerationDefinition.set(newValue);
        }
        /**
         * Creates and returns a new MessageAttribute instance in the SDK and on the server.
         * The new MessageAttribute will be automatically stored in the 'attributes' property
         * of the parent Message element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, MessageAttribute.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, MessageAttribute, "attributes", true);
        }
        /**
         * Creates and returns a new MessageAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, MessageAttribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            this.attributeType = domainmodels_1.domainmodels.StringAttributeType.create(this.model);
        }
    }
    MessageAttribute.structureTypeName = "BusinessEvents$MessageAttribute";
    MessageAttribute.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        properties: {
            attributeType: {
                required: {
                    currentValue: true
                }
            },
            enumerationDefinition: {
                introduced: "10.0.0"
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    businessevents.MessageAttribute = MessageAttribute;
    /**
     * In version 9.24.0: deleted
     * In version 9.11.0: introduced
     */
    class PublishedBusinessEventService extends projects_1.projects.Document {
        constructor(model, structureTypeName, id, isPartial, container) {
            super(model, structureTypeName, id, isPartial, container);
            /** @internal */
            this.__serviceName = new internal.PrimitiveProperty(PublishedBusinessEventService, this, "serviceName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__eventNamePrefix = new internal.PrimitiveProperty(PublishedBusinessEventService, this, "eventNamePrefix", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__version = new internal.PrimitiveProperty(PublishedBusinessEventService, this, "version", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedBusinessEventService, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedBusinessEventService, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__channels = new internal.PartListProperty(PublishedBusinessEventService, this, "channels", []);
            this._containmentName = "documents";
        }
        get containerAsFolderBase() {
            return super.getContainerAs(projects_1.projects.FolderBase);
        }
        get serviceName() {
            return this.__serviceName.get();
        }
        set serviceName(newValue) {
            this.__serviceName.set(newValue);
        }
        /**
         * In version 9.13.0: introduced
         */
        get eventNamePrefix() {
            return this.__eventNamePrefix.get();
        }
        set eventNamePrefix(newValue) {
            this.__eventNamePrefix.set(newValue);
        }
        get version() {
            return this.__version.get();
        }
        set version(newValue) {
            this.__version.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get channels() {
            return this.__channels.get();
        }
        /**
         * Creates a new PublishedBusinessEventService unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container) {
            return internal.instancehelpers.createUnit(container, PublishedBusinessEventService);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedBusinessEventService.structureTypeName = "BusinessEvents$PublishedBusinessEventService";
    PublishedBusinessEventService.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        deleted: "9.24.0",
        deletionMessage: null,
        properties: {
            eventNamePrefix: {
                introduced: "9.13.0"
            }
        }
    }, internal.StructureType.ModelUnit);
    businessevents.PublishedBusinessEventService = PublishedBusinessEventService;
    /**
     * In version 9.24.0: deleted
     * In version 9.11.0: introduced
     */
    class PublishedChannel extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__channelId = new internal.PrimitiveProperty(PublishedChannel, this, "channelId", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__channelName = new internal.PrimitiveProperty(PublishedChannel, this, "channelName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedChannel, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__messages = new internal.PartListProperty(PublishedChannel, this, "messages", []);
            if (arguments.length < 4) {
                throw new Error("new PublishedChannel() cannot be invoked directly, please use 'model.businessevents.createPublishedChannel()'");
            }
        }
        get containerAsPublishedBusinessEventService() {
            return super.getContainerAs(PublishedBusinessEventService);
        }
        get channelId() {
            return this.__channelId.get();
        }
        set channelId(newValue) {
            this.__channelId.set(newValue);
        }
        get channelName() {
            return this.__channelName.get();
        }
        set channelName(newValue) {
            this.__channelName.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get messages() {
            return this.__messages.get();
        }
        /**
         * Creates and returns a new PublishedChannel instance in the SDK and on the server.
         * The new PublishedChannel will be automatically stored in the 'channels' property
         * of the parent PublishedBusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 9.23.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedChannel.structureTypeName, { start: "9.11.0", end: "9.23.0" });
            return internal.instancehelpers.createElement(container, PublishedChannel, "channels", true);
        }
        /**
         * Creates and returns a new PublishedChannel instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedChannel);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedChannel.structureTypeName = "BusinessEvents$PublishedChannel";
    PublishedChannel.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        deleted: "9.24.0",
        deletionMessage: null
    }, internal.StructureType.Element);
    businessevents.PublishedChannel = PublishedChannel;
    /**
     * In version 9.24.0: deleted
     * In version 9.11.0: introduced
     */
    class PublishedMessage extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(PublishedMessage, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedMessage, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__eventName = new internal.PrimitiveProperty(PublishedMessage, this, "eventName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedMessage, this, "description", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__summary = new internal.PrimitiveProperty(PublishedMessage, this, "summary", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__attributes = new internal.PartListProperty(PublishedMessage, this, "attributes", []);
            if (arguments.length < 4) {
                throw new Error("new PublishedMessage() cannot be invoked directly, please use 'model.businessevents.createPublishedMessage()'");
            }
        }
        get containerAsPublishedChannel() {
            return super.getContainerAs(PublishedChannel);
        }
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        /**
         * In version 9.12.0: deleted
         */
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        /**
         * In version 9.12.0: introduced
         */
        get eventName() {
            return this.__eventName.get();
        }
        set eventName(newValue) {
            this.__eventName.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        get summary() {
            return this.__summary.get();
        }
        set summary(newValue) {
            this.__summary.set(newValue);
        }
        get attributes() {
            return this.__attributes.get();
        }
        /**
         * Creates and returns a new PublishedMessage instance in the SDK and on the server.
         * The new PublishedMessage will be automatically stored in the 'messages' property
         * of the parent PublishedChannel element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 9.23.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedMessage.structureTypeName, { start: "9.11.0", end: "9.23.0" });
            return internal.instancehelpers.createElement(container, PublishedMessage, "messages", true);
        }
        /**
         * Creates and returns a new PublishedMessage instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedMessage);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    PublishedMessage.structureTypeName = "BusinessEvents$PublishedMessage";
    PublishedMessage.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        deleted: "9.24.0",
        deletionMessage: null,
        properties: {
            entity: {
                required: {
                    currentValue: true
                }
            },
            exposedName: {
                deleted: "9.12.0",
                deletionMessage: null
            },
            eventName: {
                introduced: "9.12.0"
            }
        }
    }, internal.StructureType.Element);
    businessevents.PublishedMessage = PublishedMessage;
    /**
     * In version 9.24.0: deleted
     * In version 9.11.0: introduced
     */
    class PublishedMessageAttribute extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__attribute = new internal.ByNameReferenceProperty(PublishedMessageAttribute, this, "attribute", null, "DomainModels$Attribute");
            /** @internal */
            this.__attributeType = new internal.PartProperty(PublishedMessageAttribute, this, "attributeType", null, true);
            /** @internal */
            this.__exposedName = new internal.PrimitiveProperty(PublishedMessageAttribute, this, "exposedName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__description = new internal.PrimitiveProperty(PublishedMessageAttribute, this, "description", "", internal.PrimitiveTypeEnum.String);
            if (arguments.length < 4) {
                throw new Error("new PublishedMessageAttribute() cannot be invoked directly, please use 'model.businessevents.createPublishedMessageAttribute()'");
            }
        }
        get containerAsPublishedMessage() {
            return super.getContainerAs(PublishedMessage);
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
         * In version 9.14.0: introduced
         */
        get attributeType() {
            return this.__attributeType.get();
        }
        set attributeType(newValue) {
            this.__attributeType.set(newValue);
        }
        get exposedName() {
            return this.__exposedName.get();
        }
        set exposedName(newValue) {
            this.__exposedName.set(newValue);
        }
        get description() {
            return this.__description.get();
        }
        set description(newValue) {
            this.__description.set(newValue);
        }
        /**
         * Creates and returns a new PublishedMessageAttribute instance in the SDK and on the server.
         * The new PublishedMessageAttribute will be automatically stored in the 'attributes' property
         * of the parent PublishedMessage element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.11.0 to 9.23.0
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, PublishedMessageAttribute.structureTypeName, { start: "9.11.0", end: "9.23.0" });
            return internal.instancehelpers.createElement(container, PublishedMessageAttribute, "attributes", true);
        }
        /**
         * Creates and returns a new PublishedMessageAttribute instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, PublishedMessageAttribute);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
            if (this.__attributeType.isAvailable) {
                this.attributeType = domainmodels_1.domainmodels.StringAttributeType.create(this.model);
            }
        }
    }
    PublishedMessageAttribute.structureTypeName = "BusinessEvents$PublishedMessageAttribute";
    PublishedMessageAttribute.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.11.0",
        deleted: "9.24.0",
        deletionMessage: null,
        properties: {
            attribute: {
                required: {
                    currentValue: true
                }
            },
            attributeType: {
                introduced: "9.14.0",
                required: {
                    currentValue: true
                }
            }
        }
    }, internal.StructureType.Element);
    businessevents.PublishedMessageAttribute = PublishedMessageAttribute;
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 9.24.0: introduced
     */
    class ServiceOperation extends internal.Element {
        constructor(model, structureTypeName, id, isPartial, unit, container) {
            super(model, structureTypeName, id, isPartial, unit, container);
            /** @internal */
            this.__messageName = new internal.PrimitiveProperty(ServiceOperation, this, "messageName", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__operation = new internal.PrimitiveProperty(ServiceOperation, this, "operation", "", internal.PrimitiveTypeEnum.String);
            /** @internal */
            this.__entity = new internal.ByNameReferenceProperty(ServiceOperation, this, "entity", null, "DomainModels$Entity");
            /** @internal */
            this.__microflow = new internal.ByNameReferenceProperty(ServiceOperation, this, "microflow", null, "Microflows$Microflow");
            if (arguments.length < 4) {
                throw new Error("new ServiceOperation() cannot be invoked directly, please use 'model.businessevents.createServiceOperation()'");
            }
        }
        get containerAsBusinessEventService() {
            return super.getContainerAs(BusinessEventService);
        }
        get messageName() {
            return this.__messageName.get();
        }
        set messageName(newValue) {
            this.__messageName.set(newValue);
        }
        get operation() {
            return this.__operation.get();
        }
        set operation(newValue) {
            this.__operation.set(newValue);
        }
        get entity() {
            return this.__entity.get();
        }
        set entity(newValue) {
            this.__entity.set(newValue);
        }
        get entityQualifiedName() {
            return this.__entity.qualifiedName();
        }
        get microflow() {
            return this.__microflow.get();
        }
        set microflow(newValue) {
            this.__microflow.set(newValue);
        }
        get microflowQualifiedName() {
            return this.__microflow.qualifiedName();
        }
        /**
         * Creates and returns a new ServiceOperation instance in the SDK and on the server.
         * The new ServiceOperation will be automatically stored in the 'operationImplementations' property
         * of the parent BusinessEventService element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container) {
            internal.createInVersionCheck(container.model, ServiceOperation.structureTypeName, { start: "9.24.0" });
            return internal.instancehelpers.createElement(container, ServiceOperation, "operationImplementations", true);
        }
        /**
         * Creates and returns a new ServiceOperation instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model) {
            return internal.instancehelpers.createElement(model, ServiceOperation);
        }
        /** @internal */
        _initializeDefaultProperties() {
            super._initializeDefaultProperties();
        }
    }
    ServiceOperation.structureTypeName = "BusinessEvents$ServiceOperation";
    ServiceOperation.versionInfo = new exports.StructureVersionInfo({
        introduced: "9.24.0",
        properties: {
            entity: {
                required: {
                    currentValue: true
                }
            }
        },
        experimental: {
            currentValue: true
        }
    }, internal.StructureType.Element);
    businessevents.ServiceOperation = ServiceOperation;
})(businessevents = exports.businessevents || (exports.businessevents = {}));
const domainmodels_1 = require("./domainmodels");
//# sourceMappingURL=businessevents.js.map