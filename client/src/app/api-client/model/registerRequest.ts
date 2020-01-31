/**
 * AI3 Open API Specification
 * AI3 Open API Specification
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ai3@tdm.estgv.ipv.pt
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface RegisterRequest { 
    /**
     * The user's email.
     */
    email: string;
    /**
     * The user's desired password.
     */
    password: string;
    /**
     * The user's username. Only valid if the connection requires a username.
     */
    username?: string;
    /**
     * The user's given name(s).
     */
    givenName?: string;
    /**
     * The user's family name(s).
     */
    familyName?: string;
    /**
     * The user's full name.
     */
    name?: string;
    /**
     * The user's nickname.
     */
    nickname?: string;
    /**
     * A URI pointing to the user's picture.
     */
    picture?: string;
} 