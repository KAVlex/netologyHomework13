'use strict';

angular
    .module('myApp')
    .controller('MyAccountCtrl', function(MyAccountStore) {

        var vm = this;
        vm.account = MyAccountStore.getAccount();
        vm.isSaved = Object.keys(vm.account).length != 0;
        vm.saveAccount = function(account) {
            console.log(account);
            vm.isSaved = MyAccountStore.saveAccount(account);
        };
        vm.reset = function () {
            if (MyAccountStore.removeAccount()){
                vm.isSaved = false;
                vm.account = {};       
            }
        }
    });