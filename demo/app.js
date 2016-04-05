angular.module('app', ['jtt_leetspeak']);

angular.module('app')
    .controller('appController', function ($scope) {
        $scope.moduleName = "angular-leetspeak";
        $scope.author = "JohnnyTheTank";
    });