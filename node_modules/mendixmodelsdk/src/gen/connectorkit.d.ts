import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
import { microflows } from "./microflows";
/**
 * @ignore
 */
export declare namespace connectorkit {
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `ConnectorKit`.
     */
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    interface IConnector extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): Connector;
        load(callback: (element: Connector) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Connector>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class Connector extends projects.Document implements IConnector {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get connector(): IConnectorType | null;
        set connector(newValue: IConnectorType | null);
        get connectorQualifiedName(): string | null;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get propertyMapping(): internal.IList<ConnectorPropertyMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Connector unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Connector;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    interface IConnectorAction extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsConnectorType: IConnectorType;
        readonly name: string;
        asLoaded(): ConnectorAction;
        load(callback: (element: ConnectorAction) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConnectorAction>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorAction extends internal.Element<IModel> implements IConnectorAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConnectorType(): ConnectorType;
        get name(): string;
        set name(newValue: string);
        get caption(): string;
        set caption(newValue: string);
        get documentation(): string;
        set documentation(newValue: string);
        get icon(): string;
        set icon(newValue: string);
        get iconDark(): string;
        set iconDark(newValue: string);
        get javaAction(): javaactions.IJavaAction | null;
        set javaAction(newValue: javaactions.IJavaAction | null);
        get javaActionQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectorAction instance in the SDK and on the server.
         * The new ConnectorAction will be automatically stored in the 'connectorActions' property
         * of the parent ConnectorType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container: ConnectorType): ConnectorAction;
        /**
         * Creates and returns a new ConnectorAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectorAction;
        get qualifiedName(): string | null;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorActionCallAction extends microflows.MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): microflows.ActionActivity;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get connectorAction(): IConnectorAction | null;
        set connectorAction(newValue: IConnectorAction | null);
        get connectorActionQualifiedName(): string | null;
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get parameterMappings(): internal.IList<ConnectorActionParameterMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectorActionCallAction instance in the SDK and on the server.
         * The new ConnectorActionCallAction will be automatically stored in the 'action' property
         * of the parent microflows.ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container: microflows.ActionActivity): ConnectorActionCallAction;
        /**
         * Creates and returns a new ConnectorActionCallAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectorActionCallAction;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorActionParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConnectorActionCallAction(): ConnectorActionCallAction;
        get javaActionParameter(): javaactions.IJavaActionParameter;
        set javaActionParameter(newValue: javaactions.IJavaActionParameter);
        get javaActionParameterQualifiedName(): string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get parameterValueExpression(): string;
        set parameterValueExpression(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectorActionParameterMapping instance in the SDK and on the server.
         * The new ConnectorActionParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent ConnectorActionCallAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container: ConnectorActionCallAction): ConnectorActionParameterMapping;
        /**
         * Creates and returns a new ConnectorActionParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectorActionParameterMapping;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    interface IConnectorProperty extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsConnectorType: IConnectorType;
        readonly name: string;
        asLoaded(): ConnectorProperty;
        load(callback: (element: ConnectorProperty) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConnectorProperty>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorProperty extends internal.Element<IModel> implements IConnectorProperty {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConnectorType(): ConnectorType;
        get name(): string;
        set name(newValue: string);
        get propertyType(): datatypes.DataType;
        set propertyType(newValue: datatypes.DataType);
        get isOptional(): boolean;
        set isOptional(newValue: boolean);
        get description(): string;
        set description(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectorProperty instance in the SDK and on the server.
         * The new ConnectorProperty will be automatically stored in the 'connectorProperties' property
         * of the parent ConnectorType element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container: ConnectorType): ConnectorProperty;
        /**
         * Creates and returns a new ConnectorProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectorProperty;
        get qualifiedName(): string | null;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorPropertyMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsConnector(): Connector;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get connectorProperty(): IConnectorProperty;
        set connectorProperty(newValue: IConnectorProperty);
        get connectorPropertyQualifiedName(): string;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get propertyValueExpression(): string;
        set propertyValueExpression(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectorPropertyMapping instance in the SDK and on the server.
         * The new ConnectorPropertyMapping will be automatically stored in the 'propertyMapping' property
         * of the parent Connector element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createIn(container: Connector): ConnectorPropertyMapping;
        /**
         * Creates and returns a new ConnectorPropertyMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectorPropertyMapping;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    interface IConnectorType extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly connectorActions: internal.IList<IConnectorAction>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        readonly connectorProperties: internal.IList<IConnectorProperty>;
        asLoaded(): ConnectorType;
        load(callback: (element: ConnectorType) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<ConnectorType>;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.0.0: introduced
     */
    class ConnectorType extends projects.Document implements IConnectorType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get connectorName(): string;
        set connectorName(newValue: string);
        get description(): string;
        set description(newValue: string);
        get icon(): string;
        set icon(newValue: string);
        get iconDark(): string;
        set iconDark(newValue: string);
        get version(): string;
        set version(newValue: string);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get connectorActions(): internal.IList<ConnectorAction>;
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         */
        get connectorProperties(): internal.IList<ConnectorProperty>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new ConnectorType unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): ConnectorType;
    }
}
import { datatypes } from "./datatypes";
import { javaactions } from "./javaactions";
import { IModel } from "./base-model";
