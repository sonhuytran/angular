'use strict';"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var worker_render_common_1 = require('angular2/src/platform/worker_render_common');
exports.WORKER_SCRIPT = worker_render_common_1.WORKER_SCRIPT;
exports.WORKER_RENDER_PLATFORM = worker_render_common_1.WORKER_RENDER_PLATFORM;
exports.initializeGenericWorkerRenderer = worker_render_common_1.initializeGenericWorkerRenderer;
exports.WORKER_RENDER_APPLICATION_COMMON = worker_render_common_1.WORKER_RENDER_APPLICATION_COMMON;
var worker_render_1 = require('angular2/src/platform/worker_render');
exports.WORKER_RENDER_APPLICATION = worker_render_1.WORKER_RENDER_APPLICATION;
exports.WebWorkerInstance = worker_render_1.WebWorkerInstance;
var client_message_broker_1 = require('../src/web_workers/shared/client_message_broker');
exports.ClientMessageBroker = client_message_broker_1.ClientMessageBroker;
exports.ClientMessageBrokerFactory = client_message_broker_1.ClientMessageBrokerFactory;
exports.FnArg = client_message_broker_1.FnArg;
exports.UiArguments = client_message_broker_1.UiArguments;
var service_message_broker_1 = require('../src/web_workers/shared/service_message_broker');
exports.ReceivedMessage = service_message_broker_1.ReceivedMessage;
exports.ServiceMessageBroker = service_message_broker_1.ServiceMessageBroker;
exports.ServiceMessageBrokerFactory = service_message_broker_1.ServiceMessageBrokerFactory;
var serializer_1 = require('../src/web_workers/shared/serializer');
exports.PRIMITIVE = serializer_1.PRIMITIVE;
__export(require('../src/web_workers/shared/message_bus'));
var worker_render_2 = require('angular2/src/platform/worker_render');
/**
 * @deprecated Use WORKER_RENDER_APPLICATION
 */
exports.WORKER_RENDER_APP = worker_render_2.WORKER_RENDER_APPLICATION;
var router_providers_1 = require('angular2/src/web_workers/ui/router_providers');
exports.WORKER_RENDER_ROUTER = router_providers_1.WORKER_RENDER_ROUTER;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX3JlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtSkV5d0VITEcudG1wL2FuZ3VsYXIyL3BsYXRmb3JtL3dvcmtlcl9yZW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFDQUtPLDRDQUE0QyxDQUFDO0FBSmxELDZEQUFhO0FBQ2IsK0VBQXNCO0FBQ3RCLGlHQUErQjtBQUMvQixtR0FDa0Q7QUFDcEQsOEJBQTJELHFDQUFxQyxDQUFDO0FBQXpGLDhFQUF5QjtBQUFFLDhEQUE4RDtBQUNqRyxzQ0FLTyxpREFBaUQsQ0FBQztBQUp2RCwwRUFBbUI7QUFDbkIsd0ZBQTBCO0FBQzFCLDhDQUFLO0FBQ0wsMERBQ3VEO0FBQ3pELHVDQUlPLGtEQUFrRCxDQUFDO0FBSHhELG1FQUFlO0FBQ2YsNkVBQW9CO0FBQ3BCLDJGQUN3RDtBQUMxRCwyQkFBd0Isc0NBQXNDLENBQUM7QUFBdkQsMkNBQXVEO0FBQy9ELGlCQUFjLHVDQUF1QyxDQUFDLEVBQUE7QUFDdEQsOEJBQXdDLHFDQUFxQyxDQUFDLENBQUE7QUFFOUU7O0dBRUc7QUFDVSx5QkFBaUIsR0FBRyx5Q0FBeUIsQ0FBQztBQUMzRCxpQ0FBbUMsOENBQThDLENBQUM7QUFBMUUsdUVBQTBFIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtcbiAgV09SS0VSX1NDUklQVCxcbiAgV09SS0VSX1JFTkRFUl9QTEFURk9STSxcbiAgaW5pdGlhbGl6ZUdlbmVyaWNXb3JrZXJSZW5kZXJlcixcbiAgV09SS0VSX1JFTkRFUl9BUFBMSUNBVElPTl9DT01NT05cbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL3dvcmtlcl9yZW5kZXJfY29tbW9uJztcbmV4cG9ydCB7V09SS0VSX1JFTkRFUl9BUFBMSUNBVElPTiwgV2ViV29ya2VySW5zdGFuY2V9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS93b3JrZXJfcmVuZGVyJztcbmV4cG9ydCB7XG4gIENsaWVudE1lc3NhZ2VCcm9rZXIsXG4gIENsaWVudE1lc3NhZ2VCcm9rZXJGYWN0b3J5LFxuICBGbkFyZyxcbiAgVWlBcmd1bWVudHNcbn0gZnJvbSAnLi4vc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9jbGllbnRfbWVzc2FnZV9icm9rZXInO1xuZXhwb3J0IHtcbiAgUmVjZWl2ZWRNZXNzYWdlLFxuICBTZXJ2aWNlTWVzc2FnZUJyb2tlcixcbiAgU2VydmljZU1lc3NhZ2VCcm9rZXJGYWN0b3J5XG59IGZyb20gJy4uL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VydmljZV9tZXNzYWdlX2Jyb2tlcic7XG5leHBvcnQge1BSSU1JVElWRX0gZnJvbSAnLi4vc3JjL3dlYl93b3JrZXJzL3NoYXJlZC9zZXJpYWxpemVyJztcbmV4cG9ydCAqIGZyb20gJy4uL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvbWVzc2FnZV9idXMnO1xuaW1wb3J0IHtXT1JLRVJfUkVOREVSX0FQUExJQ0FUSU9OfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX3JlbmRlcic7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIFdPUktFUl9SRU5ERVJfQVBQTElDQVRJT05cbiAqL1xuZXhwb3J0IGNvbnN0IFdPUktFUl9SRU5ERVJfQVBQID0gV09SS0VSX1JFTkRFUl9BUFBMSUNBVElPTjtcbmV4cG9ydCB7V09SS0VSX1JFTkRFUl9ST1VURVJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy91aS9yb3V0ZXJfcHJvdmlkZXJzJztcbiJdfQ==