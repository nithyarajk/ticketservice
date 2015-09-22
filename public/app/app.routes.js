angular.module('appRoutes', ['ngRoute'])


.config(function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'app/views/pages/home.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/login', {
			templateUrl: 'app/views/pages/login.html'
		})
		.when('/signup', {
			templateUrl: 'app/views/pages/signup.html'
		})
		.when('/ticket', {
			templateUrl: 'app/views/pages/ticket.html'
		})


		.when('/allStories', {
			templateUrl: 'app/views/pages/allStories.html',
			controller: 'AllStoriesController',
			controllerAs: 'story',
			resolve: {
				stories: function(Story) {
					return Story.allStories();
				}
			}

		})

		.when('/allTickets', {
			templateUrl: 'app/views/pages/allTickets.html',
			controller: 'AllTicketsController',
			controllerAs: 'ticket',
			resolve: {
				tickets: function(Ticket) {
					return Ticket.allTickets();
				}
			}

		})


	$locationProvider.html5Mode(true);

})