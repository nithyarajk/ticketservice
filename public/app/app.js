angular.module('MyApp', ['appRoutes', 'mainCtrl', 'authService', 'userCtrl', 'userService', 'storyService', 'storyCtrl', 'reverseDirective','ticketCtrl','ticketService'])

.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');


})