(function () {
    'use strict';

    angular
        .module('app')
        .controller('StatusController', StatusController);

    StatusController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function StatusController($location, AuthenticationService, FlashService) {
        var vm = this;

        vm.status = status;

        /*(function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
         })();*/

        /*function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };*/
    }

})();
