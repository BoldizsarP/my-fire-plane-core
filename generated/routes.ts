/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UsersController } from './../src/users/usersController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { LinkedUsersController } from './../src/users/linkedUsers/linkedUserController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AirplanesMain } from './../src/airplanes/airplaneController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AccountStub } from './../src/airplanes/airplaneController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AirplanesController } from './../src/airplanes/airplaneController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "User": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "email": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "status": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Happy"]},{"dataType":"enum","enums":["Sad"]}]},
            "phoneNumbers": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_User.email-or-name-or-phoneNumbers_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"email":{"dataType":"string","required":true},"name":{"dataType":"string","required":true},"phoneNumbers":{"dataType":"array","array":{"dataType":"string"},"required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserCreationParams": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_User.email-or-name-or-phoneNumbers_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserRoles": {
        "dataType": "refEnum",
        "enums": ["ADMIN","PILOT","MX","OBS"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AdditionalUserFormat": {
        "dataType": "refObject",
        "properties": {
            "userName": {"dataType":"string","required":true},
            "actualName": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "permissionsData": {"ref":"UserRoles","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AdditionalUsersReturn": {
        "dataType": "refObject",
        "properties": {
            "additionalUsers": {"dataType":"array","array":{"dataType":"refObject","ref":"AdditionalUserFormat"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GenericResponse_AdditionalUsersReturn_": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"AdditionalUsersReturn"},{"dataType":"nestedObjectLiteral","nestedProperties":{"noErrors":{"dataType":"boolean","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GenericResponse____": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{}},{"dataType":"nestedObjectLiteral","nestedProperties":{"noErrors":{"dataType":"boolean","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_AdditionalUserFormat.userName_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"userName":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Partial_Omit_AdditionalUserFormat.userName__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"email":{"dataType":"string"},"actualName":{"dataType":"string"},"permissionsData":{"ref":"UserRoles"}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Subscriptions": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "accountId": {"dataType":"double","required":true},
            "subscriptionType": {"dataType":"string","required":true},
            "beginDateTime": {"dataType":"datetime","required":true},
            "endDateTime": {"dataType":"datetime","required":true},
            "airplaneSerialNumber": {"dataType":"string","required":true},
            "airplaneRegistrationNumber": {"dataType":"string","required":true},
            "airplaneUniqueId": {"dataType":"string","required":true},
            "uniqueId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Airplane": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "registrationNumber": {"dataType":"string","required":true},
            "serialNumber": {"dataType":"string","required":true},
            "aircraftType": {"dataType":"string","required":true},
            "engineType": {"dataType":"string","required":true},
            "airplaneUniqueId": {"dataType":"string","required":true},
            "linkedAccount": {"dataType":"double","required":true},
            "isUserDeleted": {"dataType":"double","required":true},
            "liquidUnits": {"dataType":"string","required":true},
            "displayColor": {"dataType":"string","required":true},
            "airplaneName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AirplaneRegistration": {
        "dataType": "refObject",
        "properties": {
            "errors": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "subscriptions": {"dataType":"array","array":{"dataType":"refObject","ref":"Subscriptions"},"required":true},
            "newAirplaneData": {"ref":"Airplane","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GenericResponse_AirplaneRegistration_": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"AirplaneRegistration"},{"dataType":"nestedObjectLiteral","nestedProperties":{"noErrors":{"dataType":"boolean","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AirplaneCreate": {
        "dataType": "refObject",
        "properties": {
            "accountNumber": {"dataType":"double","required":true},
            "registrationNumber": {"dataType":"string","required":true},
            "serialNumber": {"dataType":"string","required":true},
            "aircraftType": {"dataType":"string","required":true},
            "engineType": {"dataType":"string","required":true},
            "liquidUnits": {"dataType":"string","required":true},
            "airplaneName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GenericResponse__allAirplanes-Airplane--errors-string-Array__": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{"errors":{"dataType":"array","array":{"dataType":"string"},"required":true},"allAirplanes":{"ref":"Airplane","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"noErrors":{"dataType":"boolean","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RecordType": {
        "dataType": "refEnum",
        "enums": ["START","LANDING","ENGINEHOURS","ERROR"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ActionType": {
        "dataType": "refEnum",
        "enums": ["ADD","SUBTRACT","ADJUST","ERROR"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AgAirplaneCounters": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "airplaneUniqueId": {"dataType":"string","required":true},
            "recordType": {"ref":"RecordType","required":true},
            "actionType": {"ref":"ActionType","required":true},
            "actionValue": {"dataType":"double","required":true},
            "recordDateTime": {"dataType":"datetime","required":true},
            "isMobileEntry": {"dataType":"boolean"},
            "mobileEntryDateTime": {"dataType":"datetime"},
            "entryUser": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GetAllCountersForAirplaneResuls": {
        "dataType": "refObject",
        "properties": {
            "countersStarts": {"dataType":"array","array":{"dataType":"refObject","ref":"AgAirplaneCounters"},"required":true},
            "countersLandings": {"dataType":"array","array":{"dataType":"refObject","ref":"AgAirplaneCounters"},"required":true},
            "countersEngineHours": {"dataType":"array","array":{"dataType":"refObject","ref":"AgAirplaneCounters"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "EngineRuns": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "AirplaneUniqueId": {"dataType":"string","required":true},
            "altitude": {"dataType":"double","required":true},
            "temperature": {"dataType":"double","required":true},
            "targetTorque": {"dataType":"double","required":true},
            "ngRef": {"dataType":"double","required":true},
            "ittRef": {"dataType":"double","required":true},
            "wfRef": {"dataType":"double","required":true},
            "ng": {"dataType":"double","required":true},
            "itt": {"dataType":"double","required":true},
            "wf": {"dataType":"double","required":true},
            "recordDateTime": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LatestCyclesRecord": {
        "dataType": "refObject",
        "properties": {
            "jsonData": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GetAirplaneReport": {
        "dataType": "refObject",
        "properties": {
            "noErrors": {"dataType":"boolean","required":true},
            "invalidAirplane": {"dataType":"boolean","required":true},
            "ReportGeneratedDate": {"dataType":"datetime","required":true},
            "CurrentTotals": {"ref":"GetAllCountersForAirplaneResuls","required":true},
            "AirplaneCounters": {"ref":"GetAllCountersForAirplaneResuls","required":true},
            "last7Days_Starts": {"dataType":"double","required":true},
            "last7Days_Landings": {"dataType":"double","required":true},
            "last7Days_Hours": {"dataType":"double","required":true},
            "last30Days_Starts": {"dataType":"double","required":true},
            "last30Days_Landings": {"dataType":"double","required":true},
            "last30Days_Hours": {"dataType":"double","required":true},
            "ytd_Starts": {"dataType":"double","required":true},
            "ytd_Landings": {"dataType":"double","required":true},
            "ytd_Hours": {"dataType":"double","required":true},
            "engineRuns": {"ref":"EngineRuns","required":true},
            "cycles": {"ref":"LatestCyclesRecord","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GenericResponse_GetAirplaneReport_": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"ref":"GetAirplaneReport"},{"dataType":"nestedObjectLiteral","nestedProperties":{"noErrors":{"dataType":"boolean","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Pick_Airplane.displayColor-or-liquidUnits-or-registrationNumber-or-airplaneName_": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{"displayColor":{"dataType":"string","required":true},"liquidUnits":{"dataType":"string","required":true},"registrationNumber":{"dataType":"string","required":true},"airplaneName":{"dataType":"string","required":true}},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AirplanePatch": {
        "dataType": "refAlias",
        "type": {"ref":"Pick_Airplane.displayColor-or-liquidUnits-or-registrationNumber-or-airplaneName_","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GenericResponse_AirplanePatch-and-_changedUniqueId-string--authorizedToChange-boolean--changedRegistrationNumber-boolean__": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"dataType":"intersection","subSchemas":[{"ref":"AirplanePatch"},{"dataType":"nestedObjectLiteral","nestedProperties":{"changedRegistrationNumber":{"dataType":"boolean","required":true},"authorizedToChange":{"dataType":"boolean","required":true},"changedUniqueId":{"dataType":"string","required":true}}}]},{"dataType":"nestedObjectLiteral","nestedProperties":{"noErrors":{"dataType":"boolean","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "GenericResponse__jsonData-string__": {
        "dataType": "refAlias",
        "type": {"dataType":"intersection","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{"jsonData":{"dataType":"string","required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"noErrors":{"dataType":"boolean","required":true}}}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsUsersController_getUser: Record<string, TsoaRoute.ParameterSchema> = {
                userId: {"in":"path","name":"userId","required":true,"dataType":"double"},
                name: {"in":"query","name":"name","dataType":"string"},
        };
        app.get('/users/:userId',
            ...(fetchMiddlewares<RequestHandler>(UsersController)),
            ...(fetchMiddlewares<RequestHandler>(UsersController.prototype.getUser)),

            async function UsersController_getUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUsersController_getUser, request, response });

                const controller = new UsersController();

              await templateService.apiHandler({
                methodName: 'getUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUsersController_createUser: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UserCreationParams"},
        };
        app.post('/users',
            ...(fetchMiddlewares<RequestHandler>(UsersController)),
            ...(fetchMiddlewares<RequestHandler>(UsersController.prototype.createUser)),

            async function UsersController_createUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUsersController_createUser, request, response });

                const controller = new UsersController();

              await templateService.apiHandler({
                methodName: 'createUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLinkedUsersController_getLinkedUser: Record<string, TsoaRoute.ParameterSchema> = {
                linkedAccount: {"in":"path","name":"linkedAccount","required":true,"dataType":"double"},
        };
        app.get('/users/linked/:linkedAccount',
            ...(fetchMiddlewares<RequestHandler>(LinkedUsersController)),
            ...(fetchMiddlewares<RequestHandler>(LinkedUsersController.prototype.getLinkedUser)),

            async function LinkedUsersController_getLinkedUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLinkedUsersController_getLinkedUser, request, response });

                const controller = new LinkedUsersController();

              await templateService.apiHandler({
                methodName: 'getLinkedUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLinkedUsersController_addLinkedUser: Record<string, TsoaRoute.ParameterSchema> = {
                linkedAccount: {"in":"path","name":"linkedAccount","required":true,"dataType":"double"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"AdditionalUserFormat"},
        };
        app.post('/users/linked/:linkedAccount',
            ...(fetchMiddlewares<RequestHandler>(LinkedUsersController)),
            ...(fetchMiddlewares<RequestHandler>(LinkedUsersController.prototype.addLinkedUser)),

            async function LinkedUsersController_addLinkedUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLinkedUsersController_addLinkedUser, request, response });

                const controller = new LinkedUsersController();

              await templateService.apiHandler({
                methodName: 'addLinkedUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLinkedUsersController_deleteLinkedUser: Record<string, TsoaRoute.ParameterSchema> = {
                linkedAccount: {"in":"path","name":"linkedAccount","required":true,"dataType":"double"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"Pick_AdditionalUserFormat.userName_"},
        };
        app.delete('/users/linked/:linkedAccount',
            ...(fetchMiddlewares<RequestHandler>(LinkedUsersController)),
            ...(fetchMiddlewares<RequestHandler>(LinkedUsersController.prototype.deleteLinkedUser)),

            async function LinkedUsersController_deleteLinkedUser(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLinkedUsersController_deleteLinkedUser, request, response });

                const controller = new LinkedUsersController();

              await templateService.apiHandler({
                methodName: 'deleteLinkedUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLinkedUsersController_updateLinkedUserPassword: Record<string, TsoaRoute.ParameterSchema> = {
                linkedAccount: {"in":"path","name":"linkedAccount","required":true,"dataType":"double"},
                requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"intersection","subSchemas":[{"ref":"Partial_Omit_AdditionalUserFormat.userName__"},{"dataType":"nestedObjectLiteral","nestedProperties":{"userName":{"dataType":"string","required":true}}}]},
        };
        app.patch('/users/linked/:linkedAccount',
            ...(fetchMiddlewares<RequestHandler>(LinkedUsersController)),
            ...(fetchMiddlewares<RequestHandler>(LinkedUsersController.prototype.updateLinkedUserPassword)),

            async function LinkedUsersController_updateLinkedUserPassword(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLinkedUsersController_updateLinkedUserPassword, request, response });

                const controller = new LinkedUsersController();

              await templateService.apiHandler({
                methodName: 'updateLinkedUserPassword',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAirplanesMain_createAirplane: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"AirplaneCreate"},
        };
        app.post('/airplanes',
            ...(fetchMiddlewares<RequestHandler>(AirplanesMain)),
            ...(fetchMiddlewares<RequestHandler>(AirplanesMain.prototype.createAirplane)),

            async function AirplanesMain_createAirplane(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAirplanesMain_createAirplane, request, response });

                const controller = new AirplanesMain();

              await templateService.apiHandler({
                methodName: 'createAirplane',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAccountStub_getAccountAirplanes: Record<string, TsoaRoute.ParameterSchema> = {
                accountId: {"in":"path","name":"accountId","required":true,"dataType":"double"},
        };
        app.get('/accounts/:accountId/airplanes',
            ...(fetchMiddlewares<RequestHandler>(AccountStub)),
            ...(fetchMiddlewares<RequestHandler>(AccountStub.prototype.getAccountAirplanes)),

            async function AccountStub_getAccountAirplanes(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAccountStub_getAccountAirplanes, request, response });

                const controller = new AccountStub();

              await templateService.apiHandler({
                methodName: 'getAccountAirplanes',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAirplanesController_getAirplaneReport: Record<string, TsoaRoute.ParameterSchema> = {
                airplaneId: {"in":"path","name":"airplaneId","required":true,"dataType":"string"},
        };
        app.get('/airplanes/:airplaneId/report',
            ...(fetchMiddlewares<RequestHandler>(AirplanesController)),
            ...(fetchMiddlewares<RequestHandler>(AirplanesController.prototype.getAirplaneReport)),

            async function AirplanesController_getAirplaneReport(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAirplanesController_getAirplaneReport, request, response });

                const controller = new AirplanesController();

              await templateService.apiHandler({
                methodName: 'getAirplaneReport',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAirplanesController_updateAirplane: Record<string, TsoaRoute.ParameterSchema> = {
                airplaneId: {"in":"path","name":"airplaneId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"intersection","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{"linkedAccount":{"dataType":"double","required":true}}},{"ref":"AirplanePatch"}]},
        };
        app.patch('/airplanes/:airplaneId',
            ...(fetchMiddlewares<RequestHandler>(AirplanesController)),
            ...(fetchMiddlewares<RequestHandler>(AirplanesController.prototype.updateAirplane)),

            async function AirplanesController_updateAirplane(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAirplanesController_updateAirplane, request, response });

                const controller = new AirplanesController();

              await templateService.apiHandler({
                methodName: 'updateAirplane',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAirplanesController_updateAirplaneInterface: Record<string, TsoaRoute.ParameterSchema> = {
                airplaneId: {"in":"path","name":"airplaneId","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"jsonData":{"dataType":"string","required":true}}},
        };
        app.put('/airplanes/:airplaneId/interface',
            ...(fetchMiddlewares<RequestHandler>(AirplanesController)),
            ...(fetchMiddlewares<RequestHandler>(AirplanesController.prototype.updateAirplaneInterface)),

            async function AirplanesController_updateAirplaneInterface(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAirplanesController_updateAirplaneInterface, request, response });

                const controller = new AirplanesController();

              await templateService.apiHandler({
                methodName: 'updateAirplaneInterface',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAirplanesController_getAirplaneInterface: Record<string, TsoaRoute.ParameterSchema> = {
                airplaneId: {"in":"path","name":"airplaneId","required":true,"dataType":"string"},
        };
        app.get('/airplanes/:airplaneId/interface',
            ...(fetchMiddlewares<RequestHandler>(AirplanesController)),
            ...(fetchMiddlewares<RequestHandler>(AirplanesController.prototype.getAirplaneInterface)),

            async function AirplanesController_getAirplaneInterface(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAirplanesController_getAirplaneInterface, request, response });

                const controller = new AirplanesController();

              await templateService.apiHandler({
                methodName: 'getAirplaneInterface',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
