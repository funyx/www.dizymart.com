angular.module( 'sailng.about', [])
.config(['$stateProvider', function($stateProvider){
	$stateProvider.state( 'about', {
		url: '/about',
		views: {
			"main": {
				controller: 'AboutCtrl',
				templateUrl: 'about/index.tpl.html'
			}
		}
	});
}])

.controller('AboutCtrl',['$scope', 'titleService', function($scope, titleService) {
	titleService.setTitle('About');
}]);
