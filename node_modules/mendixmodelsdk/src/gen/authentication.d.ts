import * as internal from "../sdk/internal";
export import StructureVersionInfo = internal.StructureVersionInfo;
import { projects } from "./projects";
export declare namespace authentication {
    class AuthenticationMethod extends internal.AbstractEnum {
        static Unknown: AuthenticationMethod;
        static Basic: AuthenticationMethod;
        static OAuth20: AuthenticationMethod;
        protected qualifiedTsTypeName: string;
    }
    class GrantType extends internal.AbstractEnum {
        static Unknown: GrantType;
        static AuthorizationCode: GrantType;
        static ClientCredentials: GrantType;
        protected qualifiedTsTypeName: string;
    }
    /**
     * Interfaces and instance classes for types from the Mendix sub meta model `Authentication`.
     */
    /**
     * In version 11.3.0: introduced
     */
    interface IAuthentication extends projects.IDocument {
        readonly model: IModel;
        readonly containerAsFolderBase: projects.IFolderBase;
        asLoaded(): Authentication;
        load(callback: (element: Authentication) => void, forceRefresh?: boolean): void;
        load(forceRefresh?: boolean): Promise<Authentication>;
    }
    /**
     * In version 11.3.0: introduced
     */
    class Authentication extends projects.Document implements IAuthentication {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsFolderBase(): projects.FolderBase;
        get authenticationDetails(): AuthenticationDetails | null;
        set authenticationDetails(newValue: AuthenticationDetails | null);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, container: projects.IFolderBase);
        /**
         * Creates a new Authentication unit in the SDK and on the server.
         * Expects one argument, the projects.IFolderBase in which this unit is contained.
         */
        static createIn(container: projects.IFolderBase): Authentication;
    }
    /**
     * In version 11.3.0: introduced
     */
    abstract class AuthenticationDetails extends internal.Element<IModel> {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAuthentication(): Authentication;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * In version 11.3.0: introduced
     */
    class BasicAuthenticationDetails extends AuthenticationDetails {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAuthentication(): Authentication;
        get username(): constants.IConstant | null;
        set username(newValue: constants.IConstant | null);
        get usernameQualifiedName(): string | null;
        get password(): constants.IConstant | null;
        set password(newValue: constants.IConstant | null);
        get passwordQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new BasicAuthenticationDetails instance in the SDK and on the server.
         * The new BasicAuthenticationDetails will be automatically stored in the 'authenticationDetails' property
         * of the parent Authentication element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.3.0 and higher
         */
        static createIn(container: Authentication): BasicAuthenticationDetails;
        /**
         * Creates and returns a new BasicAuthenticationDetails instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): BasicAuthenticationDetails;
    }
    /**
     * In version 11.3.0: introduced
     */
    abstract class OAuth20AuthenticationDetails extends AuthenticationDetails {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAuthentication(): Authentication;
        get providerName(): string;
        set providerName(newValue: string);
        get wellKnownEndPoint(): string;
        set wellKnownEndPoint(newValue: string);
        get tenantId(): constants.IConstant | null;
        set tenantId(newValue: constants.IConstant | null);
        get tenantIdQualifiedName(): string | null;
        /**
         * In version 11.5.0: added optional
         */
        get clientId(): constants.IConstant | null;
        set clientId(newValue: constants.IConstant | null);
        get clientIdQualifiedName(): string | null;
        /**
         * In version 11.5.0: added optional
         */
        get clientSecret(): constants.IConstant | null;
        set clientSecret(newValue: constants.IConstant | null);
        get clientSecretQualifiedName(): string | null;
        /**
         * In version 11.5.0: added optional
         */
        get tokenEndPoint(): constants.IConstant | null;
        set tokenEndPoint(newValue: constants.IConstant | null);
        get tokenEndPointQualifiedName(): string | null;
        get scopes(): internal.IList<string>;
        get grantType(): GrantType;
        set grantType(newValue: GrantType);
        /**
         * In version 11.5.0: introduced
         */
        get audience(): string;
        set audience(newValue: string);
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
    }
    /**
     * NOTE: This class is experimental and is subject to change in newer Model SDK versions.
     *
     * @ignore
     *
     * In version 11.3.0: introduced
     */
    class OAuth20AuthCodeDetails extends OAuth20AuthenticationDetails {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAuthentication(): Authentication;
        get responseType(): string;
        set responseType(newValue: string);
        get responseMode(): string;
        set responseMode(newValue: string);
        /**
         * In version 11.5.0: added optional
         */
        get authorizationEndpoint(): constants.IConstant | null;
        set authorizationEndpoint(newValue: constants.IConstant | null);
        get authorizationEndpointQualifiedName(): string | null;
        /**
         * In version 11.5.0: added optional
         */
        get callbackUrl(): constants.IConstant | null;
        set callbackUrl(newValue: constants.IConstant | null);
        get callbackUrlQualifiedName(): string | null;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OAuth20AuthCodeDetails instance in the SDK and on the server.
         * The new OAuth20AuthCodeDetails will be automatically stored in the 'authenticationDetails' property
         * of the parent Authentication element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.3.0 and higher
         */
        static createIn(container: Authentication): OAuth20AuthCodeDetails;
        /**
         * Creates and returns a new OAuth20AuthCodeDetails instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OAuth20AuthCodeDetails;
    }
    /**
     * In version 11.3.0: introduced
     */
    class OAuth20ClientCredentialsDetails extends OAuth20AuthenticationDetails {
        static structureTypeName: string;
        static versionInfo: StructureVersionInfo;
        get containerAsAuthentication(): Authentication;
        constructor(model: internal.AbstractModel, structureTypeName: string, id: string, isPartial: boolean, unit: internal.ModelUnit, container: internal.AbstractElement);
        /**
         * Creates and returns a new OAuth20ClientCredentialsDetails instance in the SDK and on the server.
         * The new OAuth20ClientCredentialsDetails will be automatically stored in the 'authenticationDetails' property
         * of the parent Authentication element passed as argument.
         *
         * Warning! Can only be used on models with the following Mendix meta model versions:
         *  11.3.0 and higher
         */
        static createIn(container: Authentication): OAuth20ClientCredentialsDetails;
        /**
         * Creates and returns a new OAuth20ClientCredentialsDetails instance in the SDK and on the server.
         * Expects one argument: the IModel object the instance will "live on".
         * After creation, assign or add this instance to a property that accepts this kind of objects.
         */
        static create(model: IModel): OAuth20ClientCredentialsDetails;
    }
}
import { constants } from "./constants";
import { IModel } from "./base-model";
