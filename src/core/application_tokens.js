'use strict';"use strict";
var di_1 = require('angular2/src/core/di');
var lang_1 = require('angular2/src/facade/lang');
/**
 *  @internal
 */
exports.APP_COMPONENT_REF_PROMISE = lang_1.CONST_EXPR(new di_1.OpaqueToken('Promise<ComponentRef>'));
/**
 * An {@link OpaqueToken-class.html} representing the application root type in the {@link
 * Injector}.
 *
 * ```
 * @Component(...)
 * class MyApp {
 *   ...
 * }
 *
 * bootstrap(MyApp).then((appRef:ApplicationRef) {
 *   expect(appRef.injector.get(appComponentTypeToken)).toEqual(MyApp);
 * });
 *
 * ```
 */
exports.APP_COMPONENT = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppComponent'));
/**
 * A DI Token representing a unique string id assigned to the application by Angular and used
 * primarily for prefixing application attributes and CSS styles when
 * {@link ViewEncapsulation#Emulated} is being used.
 *
 * If you need to avoid randomly generated value to be used as an application id, you can provide
 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {@link Injector}
 * using this token.
 */
exports.APP_ID = lang_1.CONST_EXPR(new di_1.OpaqueToken('AppId'));
function _appIdRandomProviderFactory() {
    return "" + _randomChar() + _randomChar() + _randomChar();
}
/**
 * Providers that will generate a random APP_ID_TOKEN.
 */
exports.APP_ID_RANDOM_PROVIDER = lang_1.CONST_EXPR(new di_1.Provider(exports.APP_ID, { useFactory: _appIdRandomProviderFactory, deps: [] }));
function _randomChar() {
    return lang_1.StringWrapper.fromCharCode(97 + lang_1.Math.floor(lang_1.Math.random() * 25));
}
/**
 * A function that will be executed when a platform is initialized.
 */
exports.PLATFORM_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Platform Initializer"));
/**
 * A function that will be executed when an application is initialized.
 */
exports.APP_INITIALIZER = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Initializer"));
/**
 * A token which indicates the root directory of the application
 */
exports.PACKAGE_ROOT_URL = lang_1.CONST_EXPR(new di_1.OpaqueToken("Application Packages Root URL"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fdG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlmZmluZ19wbHVnaW5fd3JhcHBlci1vdXRwdXRfcGF0aC1KRXl3RUhMRy50bXAvYW5ndWxhcjIvc3JjL2NvcmUvYXBwbGljYXRpb25fdG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQkFBb0Msc0JBQXNCLENBQUMsQ0FBQTtBQUMzRCxxQkFBOEMsMEJBQTBCLENBQUMsQ0FBQTtBQUV6RTs7R0FFRztBQUNVLGlDQUF5QixHQUFHLGlCQUFVLENBQUMsSUFBSSxnQkFBVyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztBQUU5Rjs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDVSxxQkFBYSxHQUFnQixpQkFBVSxDQUFDLElBQUksZ0JBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBRXRGOzs7Ozs7OztHQVFHO0FBQ1UsY0FBTSxHQUFnQixpQkFBVSxDQUFDLElBQUksZ0JBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRXhFO0lBQ0UsTUFBTSxDQUFDLEtBQUcsV0FBVyxFQUFFLEdBQUcsV0FBVyxFQUFFLEdBQUcsV0FBVyxFQUFJLENBQUM7QUFDNUQsQ0FBQztBQUVEOztHQUVHO0FBQ1UsOEJBQXNCLEdBQy9CLGlCQUFVLENBQUMsSUFBSSxhQUFRLENBQUMsY0FBTSxFQUFFLEVBQUMsVUFBVSxFQUFFLDJCQUEyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFFMUY7SUFDRSxNQUFNLENBQUMsb0JBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLFdBQUksQ0FBQyxLQUFLLENBQUMsV0FBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDekUsQ0FBQztBQUVEOztHQUVHO0FBQ1UsNEJBQW9CLEdBQzdCLGlCQUFVLENBQUMsSUFBSSxnQkFBVyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztBQUV4RDs7R0FFRztBQUNVLHVCQUFlLEdBQWdCLGlCQUFVLENBQUMsSUFBSSxnQkFBVyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztBQUVuRzs7R0FFRztBQUNVLHdCQUFnQixHQUN6QixpQkFBVSxDQUFDLElBQUksZ0JBQVcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wYXF1ZVRva2VuLCBQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuaW1wb3J0IHtDT05TVF9FWFBSLCBNYXRoLCBTdHJpbmdXcmFwcGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG4vKipcbiAqICBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IEFQUF9DT01QT05FTlRfUkVGX1BST01JU0UgPSBDT05TVF9FWFBSKG5ldyBPcGFxdWVUb2tlbignUHJvbWlzZTxDb21wb25lbnRSZWY+JykpO1xuXG4vKipcbiAqIEFuIHtAbGluayBPcGFxdWVUb2tlbi1jbGFzcy5odG1sfSByZXByZXNlbnRpbmcgdGhlIGFwcGxpY2F0aW9uIHJvb3QgdHlwZSBpbiB0aGUge0BsaW5rXG4gKiBJbmplY3Rvcn0uXG4gKlxuICogYGBgXG4gKiBAQ29tcG9uZW50KC4uLilcbiAqIGNsYXNzIE15QXBwIHtcbiAqICAgLi4uXG4gKiB9XG4gKlxuICogYm9vdHN0cmFwKE15QXBwKS50aGVuKChhcHBSZWY6QXBwbGljYXRpb25SZWYpIHtcbiAqICAgZXhwZWN0KGFwcFJlZi5pbmplY3Rvci5nZXQoYXBwQ29tcG9uZW50VHlwZVRva2VuKSkudG9FcXVhbChNeUFwcCk7XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IEFQUF9DT01QT05FTlQ6IE9wYXF1ZVRva2VuID0gQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oJ0FwcENvbXBvbmVudCcpKTtcblxuLyoqXG4gKiBBIERJIFRva2VuIHJlcHJlc2VudGluZyBhIHVuaXF1ZSBzdHJpbmcgaWQgYXNzaWduZWQgdG8gdGhlIGFwcGxpY2F0aW9uIGJ5IEFuZ3VsYXIgYW5kIHVzZWRcbiAqIHByaW1hcmlseSBmb3IgcHJlZml4aW5nIGFwcGxpY2F0aW9uIGF0dHJpYnV0ZXMgYW5kIENTUyBzdHlsZXMgd2hlblxuICoge0BsaW5rIFZpZXdFbmNhcHN1bGF0aW9uI0VtdWxhdGVkfSBpcyBiZWluZyB1c2VkLlxuICpcbiAqIElmIHlvdSBuZWVkIHRvIGF2b2lkIHJhbmRvbWx5IGdlbmVyYXRlZCB2YWx1ZSB0byBiZSB1c2VkIGFzIGFuIGFwcGxpY2F0aW9uIGlkLCB5b3UgY2FuIHByb3ZpZGVcbiAqIGEgY3VzdG9tIHZhbHVlIHZpYSBhIERJIHByb3ZpZGVyIDwhLS0gVE9ETzogcHJvdmlkZXIgLS0+IGNvbmZpZ3VyaW5nIHRoZSByb290IHtAbGluayBJbmplY3Rvcn1cbiAqIHVzaW5nIHRoaXMgdG9rZW4uXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfSUQ6IE9wYXF1ZVRva2VuID0gQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oJ0FwcElkJykpO1xuXG5mdW5jdGlvbiBfYXBwSWRSYW5kb21Qcm92aWRlckZhY3RvcnkoKSB7XG4gIHJldHVybiBgJHtfcmFuZG9tQ2hhcigpfSR7X3JhbmRvbUNoYXIoKX0ke19yYW5kb21DaGFyKCl9YDtcbn1cblxuLyoqXG4gKiBQcm92aWRlcnMgdGhhdCB3aWxsIGdlbmVyYXRlIGEgcmFuZG9tIEFQUF9JRF9UT0tFTi5cbiAqL1xuZXhwb3J0IGNvbnN0IEFQUF9JRF9SQU5ET01fUFJPVklERVI6IFByb3ZpZGVyID1cbiAgICBDT05TVF9FWFBSKG5ldyBQcm92aWRlcihBUFBfSUQsIHt1c2VGYWN0b3J5OiBfYXBwSWRSYW5kb21Qcm92aWRlckZhY3RvcnksIGRlcHM6IFtdfSkpO1xuXG5mdW5jdGlvbiBfcmFuZG9tQ2hhcigpOiBzdHJpbmcge1xuICByZXR1cm4gU3RyaW5nV3JhcHBlci5mcm9tQ2hhckNvZGUoOTcgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSkpO1xufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYSBwbGF0Zm9ybSBpcyBpbml0aWFsaXplZC5cbiAqL1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0lOSVRJQUxJWkVSOiBPcGFxdWVUb2tlbiA9XG4gICAgQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oXCJQbGF0Zm9ybSBJbml0aWFsaXplclwiKSk7XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiBhbiBhcHBsaWNhdGlvbiBpcyBpbml0aWFsaXplZC5cbiAqL1xuZXhwb3J0IGNvbnN0IEFQUF9JTklUSUFMSVpFUjogT3BhcXVlVG9rZW4gPSBDT05TVF9FWFBSKG5ldyBPcGFxdWVUb2tlbihcIkFwcGxpY2F0aW9uIEluaXRpYWxpemVyXCIpKTtcblxuLyoqXG4gKiBBIHRva2VuIHdoaWNoIGluZGljYXRlcyB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIGFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBQQUNLQUdFX1JPT1RfVVJMOiBPcGFxdWVUb2tlbiA9XG4gICAgQ09OU1RfRVhQUihuZXcgT3BhcXVlVG9rZW4oXCJBcHBsaWNhdGlvbiBQYWNrYWdlcyBSb290IFVSTFwiKSk7XG4iXX0=