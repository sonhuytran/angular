import { Provider, NgZone, APP_INITIALIZER } from 'angular2/core';
import { PlatformLocation } from 'angular2/src/router/location/platform_location';
import { WebWorkerPlatformLocation } from './platform_location';
import { ROUTER_PROVIDERS_COMMON } from 'angular2/src/router/router_providers_common';
export var WORKER_APP_ROUTER = [
    ROUTER_PROVIDERS_COMMON,
    new Provider(PlatformLocation, { useClass: WebWorkerPlatformLocation }),
    new Provider(APP_INITIALIZER, {
        useFactory: (platformLocation, zone) => () => initRouter(platformLocation, zone),
        multi: true,
        deps: [PlatformLocation, NgZone]
    })
];
function initRouter(platformLocation, zone) {
    return zone.run(() => { return platformLocation.init(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtNUowbmZpc2cudG1wL2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy93b3JrZXIvcm91dGVyX3Byb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFpQixRQUFRLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBQyxNQUFNLGVBQWU7T0FDeEUsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdEQUFnRDtPQUN4RSxFQUFDLHlCQUF5QixFQUFDLE1BQU0scUJBQXFCO09BQ3RELEVBQUMsdUJBQXVCLEVBQUMsTUFBTSw2Q0FBNkM7QUFFbkYsT0FBTyxJQUFJLGlCQUFpQixHQUFHO0lBQzdCLHVCQUF1QjtJQUN2QixJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSx5QkFBeUIsRUFBQyxDQUFDO0lBQ3JFLElBQUksUUFBUSxDQUFDLGVBQWUsRUFDZjtRQUNFLFVBQVUsRUFBRSxDQUFDLGdCQUEyQyxFQUFFLElBQVksS0FBSyxNQUMzRCxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDO1FBQ2xELEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDO0tBQ2pDLENBQUM7Q0FDaEIsQ0FBQztBQUVGLG9CQUFvQixnQkFBMkMsRUFBRSxJQUFZO0lBQzNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwbGljYXRpb25SZWYsIFByb3ZpZGVyLCBOZ1pvbmUsIEFQUF9JTklUSUFMSVpFUn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1BsYXRmb3JtTG9jYXRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvbG9jYXRpb24vcGxhdGZvcm1fbG9jYXRpb24nO1xuaW1wb3J0IHtXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICcuL3BsYXRmb3JtX2xvY2F0aW9uJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU19DT01NT059IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyX3Byb3ZpZGVyc19jb21tb24nO1xuXG5leHBvcnQgdmFyIFdPUktFUl9BUFBfUk9VVEVSID0gW1xuICBST1VURVJfUFJPVklERVJTX0NPTU1PTixcbiAgbmV3IFByb3ZpZGVyKFBsYXRmb3JtTG9jYXRpb24sIHt1c2VDbGFzczogV2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbn0pLFxuICBuZXcgUHJvdmlkZXIoQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiAocGxhdGZvcm1Mb2NhdGlvbjogV2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbiwgem9uZTogTmdab25lKSA9PiAoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFJvdXRlcihwbGF0Zm9ybUxvY2F0aW9uLCB6b25lKSxcbiAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgICAgICAgIGRlcHM6IFtQbGF0Zm9ybUxvY2F0aW9uLCBOZ1pvbmVdXG4gICAgICAgICAgICAgICB9KVxuXTtcblxuZnVuY3Rpb24gaW5pdFJvdXRlcihwbGF0Zm9ybUxvY2F0aW9uOiBXZWJXb3JrZXJQbGF0Zm9ybUxvY2F0aW9uLCB6b25lOiBOZ1pvbmUpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgcmV0dXJuIHpvbmUucnVuKCgpID0+IHsgcmV0dXJuIHBsYXRmb3JtTG9jYXRpb24uaW5pdCgpOyB9KTtcbn1cbiJdfQ==