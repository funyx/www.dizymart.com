angular.module( 'sailng.home', [])
.config(['$stateProvider',function($stateProvider){
	$stateProvider.state( 'home', {
		url: '/home',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
}])

.controller('HomeCtrl',['$scope', 'titleService', function($scope, titleService) {
	titleService.setTitle('Home');
}]);
