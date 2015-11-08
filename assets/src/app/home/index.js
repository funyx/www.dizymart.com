angular.module( 'sailng.home', [])
.config(function config( $stateProvider ) {
	'use strict';
	$stateProvider.state( 'home', {
		url: '/home',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, titleService ) {
	'use strict';
	titleService.setTitle('Home');
});
