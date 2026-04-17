import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
import { microflows } from "./microflows";
export declare namespace databaseconnector {
    class QueryParameterMode extends internal.AbstractEnum {
        static Unknown: QueryParameterMode;
        static In: QueryParameterMode;
        static Out: QueryParameterMode;
        static InOut: QueryParameterMode;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `DatabaseConnector`.
     */
    /**
     * In version 10.12.0: introduced
     */
    class AdditionalProperty extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseConnection(): DatabaseConnection;
        get key(): string;
        set key(newValue: string);
        get value(): AdditionalPropertyValue | null;
        set value(newValue: AdditionalPropertyValue | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new AdditionalProperty instance in the SDK and on the server.
         * The new AdditionalProperty will be automatically stored in the 'additionalProperties' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createIn(container: DatabaseConnection): AdditionalProperty;
        /**
         * Creates and returns a new AdditionalProperty instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): AdditionalProperty;
    }
    /**
     * In version 10.12.0: introduced
     */
    abstract class AdditionalPropertyValue extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAdditionalProperty(): AdditionalProperty;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class ColumnMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsTableMapping(): TableMapping;
        get columnName(): string;
        set columnName(newValue: string);
        get sqlDataType(): SqlDataType | null;
        set sqlDataType(newValue: SqlDataType | null);
        get attribute(): domainmodels.IAttribute;
        set attribute(newValue: domainmodels.IAttribute);
        get attributeQualifiedName(): string;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ColumnMapping instance in the SDK and on the server.
         * The new ColumnMapping will be automatically stored in the 'columns' property
         * of the parent TableMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createIn(container: TableMapping): ColumnMapping;
        /**
         * Creates and returns a new ColumnMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ColumnMapping;
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 10.0.0: deleted
     * In version 9.22.0: introduced
     */
    class ConnectionDetails extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseConnection(): DatabaseConnection;
        get host(): string;
        set host(newValue: string);
        get port(): number;
        set port(newValue: number);
        get databaseName(): string;
        set databaseName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectionDetails instance in the SDK and on the server.
         * The new ConnectionDetails will be automatically stored in the 'connectionDetails' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 9.24.0
         */
        static createIn(container: DatabaseConnection): ConnectionDetails;
        /**
         * Creates and returns a new ConnectionDetails instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectionDetails;
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 10.0.0: introduced
     */
    abstract class ConnectionInput extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseConnection(): DatabaseConnection;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 11.1.0: introduced
     */
    class ConnectionParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExecuteDatabaseQueryAction(): ExecuteDatabaseQueryAction;
        get parameterName(): string;
        set parameterName(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectionParameterMapping instance in the SDK and on the server.
         * The new ConnectionParameterMapping will be automatically stored in the 'connectionParameterMappings' property
         * of the parent ExecuteDatabaseQueryAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.1.0 and higher
         */
        static createIn(container: ExecuteDatabaseQueryAction): ConnectionParameterMapping;
        /**
         * Creates and returns a new ConnectionParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectionParameterMapping;
    }
    /**
     * In version 10.0.0: introduced
     */
    class ConnectionParts extends ConnectionInput {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseConnection(): DatabaseConnection;
        get host(): string;
        set host(newValue: string);
        get port(): number;
        set port(newValue: number);
        get databaseName(): string;
        set databaseName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectionParts instance in the SDK and on the server.
         * The new ConnectionParts will be automatically stored in the 'connectionInput' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: DatabaseConnection): ConnectionParts;
        /**
         * Creates and returns a new ConnectionParts instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectionParts;
    }
    /**
     * In version 10.0.0: introduced
     */
    class ConnectionString extends ConnectionInput {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseConnection(): DatabaseConnection;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ConnectionString instance in the SDK and on the server.
         * The new ConnectionString will be automatically stored in the 'connectionInput' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.0.0 and higher
         */
        static createIn(container: DatabaseConnection): ConnectionString;
        /**
         * Creates and returns a new ConnectionString instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ConnectionString;
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    interface IDatabaseConnection extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        readonly queries: internal.IList<IDatabaseQuery>;
        asLoaded(): DatabaseConnection;
        load(callback: (element: DatabaseConnection) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DatabaseConnection>;
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class DatabaseConnection extends projects.Document implements IDatabaseConnection {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get databaseType(): string;
        set databaseType(newValue: string);
        /**
         * In version 10.0.0: introduced
         */
        get connectionInput(): ConnectionInput | null;
        set connectionInput(newValue: ConnectionInput | null);
        /**
         * NOTE: This property is experimental and is subject to change in newer Model SDK versions.
         *
         * @ignore
         *
         * In version 10.0.0: deleted
         */
        get connectionDetails(): ConnectionDetails | null;
        set connectionDetails(newValue: ConnectionDetails | null);
        get connectionString(): constants.IConstant | null;
        set connectionString(newValue: constants.IConstant | null);
        get connectionStringQualifiedName(): string | null;
        get userName(): constants.IConstant | null;
        set userName(newValue: constants.IConstant | null);
        get userNameQualifiedName(): string | null;
        get password(): constants.IConstant | null;
        set password(newValue: constants.IConstant | null);
        get passwordQualifiedName(): string | null;
        /**
         * In version 10.0.0: introduced
         */
        get lastSelectedQuery(): IDatabaseQuery | null;
        set lastSelectedQuery(newValue: IDatabaseQuery | null);
        get lastSelectedQueryQualifiedName(): string | null;
        get queries(): internal.IList<DatabaseQuery>;
        /**
         * In version 10.12.0: introduced
         */
        get additionalProperties(): internal.IList<AdditionalProperty>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new DatabaseConnection unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): DatabaseConnection;
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    interface IDatabaseQuery extends internal.IElement, internal.IByNameReferrable {
        readonly model: IModel;
        readonly containerAsDatabaseConnection: IDatabaseConnection;
        readonly name: string;
        asLoaded(): DatabaseQuery;
        load(callback: (element: DatabaseQuery) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<DatabaseQuery>;
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class DatabaseQuery extends internal.Element<IModel> implements IDatabaseQuery {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseConnection(): DatabaseConnection;
        get name(): string;
        set name(newValue: string);
        get query(): string;
        set query(newValue: string);
        /**
         * In version 10.12.0: deleted
         * In version 10.6.0: added optional
         */
        get tableMapping(): TableMapping | null;
        set tableMapping(newValue: TableMapping | null);
        /**
         * In version 10.12.0: introduced
         */
        get tableMappings(): internal.IList<TableMapping> | null;
        get parameters(): internal.IList<QueryParameter>;
        /**
         * In version 10.12.0: introduced
         */
        get queryType(): number;
        set queryType(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new DatabaseQuery instance in the SDK and on the server.
         * The new DatabaseQuery will be automatically stored in the 'queries' property
         * of the parent DatabaseConnection element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createIn(container: DatabaseConnection): DatabaseQuery;
        /**
         * Creates and returns a new DatabaseQuery instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): DatabaseQuery;
        get qualifiedName(): string | null;
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.24.0: introduced
     */
    class ExecuteDatabaseQueryAction extends microflows.MicroflowAction {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsActionActivity(): microflows.ActionActivity;
        /**
         * In version 10.0.0: added optional
         */
        get query(): IDatabaseQuery | null;
        set query(newValue: IDatabaseQuery | null);
        get queryQualifiedName(): string | null;
        /**
         * In version 11.1.0: introduced
         */
        get connectionParameterMappings(): internal.IList<ConnectionParameterMapping>;
        get parameterMappings(): internal.IList<QueryParameterMapping>;
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         *
         * In version 11.3.0: introduced
         */
        get dynamicQuery(): string;
        set dynamicQuery(newValue: string);
        get outputVariableName(): string;
        set outputVariableName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ExecuteDatabaseQueryAction instance in the SDK and on the server.
         * The new ExecuteDatabaseQueryAction will be automatically stored in the 'action' property
         * of the parent microflows.ActionActivity element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container: microflows.ActionActivity): ExecuteDatabaseQueryAction;
        /**
         * Creates and returns a new ExecuteDatabaseQueryAction instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ExecuteDatabaseQueryAction;
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    abstract class SqlDataType extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnMapping(): ColumnMapping;
        get containerAsQueryParameter(): QueryParameter;
        get dataTypeName(): string;
        set dataTypeName(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class LimitedLengthSqlDataType extends SqlDataType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnMapping(): ColumnMapping;
        get containerAsQueryParameter(): QueryParameter;
        get length(): number;
        set length(newValue: number);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new LimitedLengthSqlDataType instance in the SDK and on the server.
         * The new LimitedLengthSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent ColumnMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInColumnMappingUnderSqlDataType(container: ColumnMapping): LimitedLengthSqlDataType;
        /**
         * Creates and returns a new LimitedLengthSqlDataType instance in the SDK and on the server.
         * The new LimitedLengthSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInQueryParameterUnderSqlDataType(container: QueryParameter): LimitedLengthSqlDataType;
        /**
         * Creates and returns a new LimitedLengthSqlDataType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): LimitedLengthSqlDataType;
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class QueryParameter extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseQuery(): DatabaseQuery;
        get parameterName(): string;
        set parameterName(newValue: string);
        get sqlDataType(): SqlDataType | null;
        set sqlDataType(newValue: SqlDataType | null);
        /**
         * In version 10.1.0: removed optional
         */
        get dataType(): datatypes.DataType | null;
        set dataType(newValue: datatypes.DataType | null);
        get defaultValue(): string;
        set defaultValue(newValue: string);
        /**
         * In version 10.10.0: introduced
         */
        get mode(): QueryParameterMode;
        set mode(newValue: QueryParameterMode);
        /**
         * In version 10.12.0: introduced
         */
        get databaseParameterName(): string;
        set databaseParameterName(newValue: string);
        /**
         * In version 10.12.0: introduced
         */
        get emptyValueBecomesNull(): boolean;
        set emptyValueBecomesNull(newValue: boolean);
        /**
         * In version 11.0.0: introduced
         */
        get tableMapping(): TableMapping | null;
        set tableMapping(newValue: TableMapping | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new QueryParameter instance in the SDK and on the server.
         * The new QueryParameter will be automatically stored in the 'parameters' property
         * of the parent DatabaseQuery element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createIn(container: DatabaseQuery): QueryParameter;
        /**
         * Creates and returns a new QueryParameter instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): QueryParameter;
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.24.0: introduced
     */
    class QueryParameterMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsExecuteDatabaseQueryAction(): ExecuteDatabaseQueryAction;
        get parameterName(): string;
        set parameterName(newValue: string);
        /**
         * The value of this property is conceptually of type microflowExpressions.MicroflowExpression.
         */
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new QueryParameterMapping instance in the SDK and on the server.
         * The new QueryParameterMapping will be automatically stored in the 'parameterMappings' property
         * of the parent ExecuteDatabaseQueryAction element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.24.0 and higher
         */
        static createIn(container: ExecuteDatabaseQueryAction): QueryParameterMapping;
        /**
         * Creates and returns a new QueryParameterMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): QueryParameterMapping;
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class SimpleSqlDataType extends SqlDataType {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsColumnMapping(): ColumnMapping;
        get containerAsQueryParameter(): QueryParameter;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new SimpleSqlDataType instance in the SDK and on the server.
         * The new SimpleSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent ColumnMapping element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInColumnMappingUnderSqlDataType(container: ColumnMapping): SimpleSqlDataType;
        /**
         * Creates and returns a new SimpleSqlDataType instance in the SDK and on the server.
         * The new SimpleSqlDataType will be automatically stored in the 'sqlDataType' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 and higher
         */
        static createInQueryParameterUnderSqlDataType(container: QueryParameter): SimpleSqlDataType;
        /**
         * Creates and returns a new SimpleSqlDataType instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): SimpleSqlDataType;
    }
    /**
     * In version 10.10.0: removed experimental
     * In version 9.22.0: introduced
     */
    class TableMapping extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsDatabaseQuery(): DatabaseQuery;
        get containerAsQueryParameter(): QueryParameter;
        get tableName(): string;
        set tableName(newValue: string);
        get entity(): domainmodels.IEntity;
        set entity(newValue: domainmodels.IEntity);
        get entityQualifiedName(): string;
        get columns(): internal.IList<ColumnMapping>;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new TableMapping instance in the SDK and on the server.
         * The new TableMapping will be automatically stored in the 'tableMapping' property
         * of the parent DatabaseQuery element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  9.22.0 to 10.11.0
         */
        static createInDatabaseQueryUnderTableMapping(container: DatabaseQuery): TableMapping;
        /**
         * Creates and returns a new TableMapping instance in the SDK and on the server.
         * The new TableMapping will be automatically stored in the 'tableMappings' property
         * of the parent DatabaseQuery element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createInDatabaseQueryUnderTableMappings(container: DatabaseQuery): TableMapping;
        /**
         * Creates and returns a new TableMapping instance in the SDK and on the server.
         * The new TableMapping will be automatically stored in the 'tableMapping' property
         * of the parent QueryParameter element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.0.0 and higher
         */
        static createInQueryParameterUnderTableMapping(container: QueryParameter): TableMapping;
        /**
         * Creates and returns a new TableMapping instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): TableMapping;
    }
    /**
     * In version 10.12.0: introduced
     */
    class ValueAsConstant extends AdditionalPropertyValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAdditionalProperty(): AdditionalProperty;
        get value(): constants.IConstant | null;
        set value(newValue: constants.IConstant | null);
        get valueQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ValueAsConstant instance in the SDK and on the server.
         * The new ValueAsConstant will be automatically stored in the 'value' property
         * of the parent AdditionalProperty element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createIn(container: AdditionalProperty): ValueAsConstant;
        /**
         * Creates and returns a new ValueAsConstant instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ValueAsConstant;
    }
    /**
     * In version 10.12.0: introduced
     */
    class ValueAsString extends AdditionalPropertyValue {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAdditionalProperty(): AdditionalProperty;
        get value(): string;
        set value(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new ValueAsString instance in the SDK and on the server.
         * The new ValueAsString will be automatically stored in the 'value' property
         * of the parent AdditionalProperty element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  10.12.0 and higher
         */
        static createIn(container: AdditionalProperty): ValueAsString;
        /**
         * Creates and returns a new ValueAsString instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): ValueAsString;
    }
}
import { constants } from "./constants";
import { datatypes } from "./datatypes";
import { domainmodels } from "./domainmodels";
import { IModel } from "./base-model";
