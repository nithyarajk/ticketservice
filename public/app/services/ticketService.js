angular.module('ticketService', [])


.factory('Ticket', function($http) {


	var ticketFactory = {};

	ticketFactory.allTickets = function() {
		return $http.get('/api/all_tickets');
	}

	ticketFactory.all = function() {
		return $http.get('/api/');
	}

	ticketFactory.create = function(ticketData) {
		return $http.post('/api/', ticketData);
	}


	

	return ticketFactory;


})

.factory('socketio', function($rootScope) {

	var socket = io.connect();
	return {

		on: function(eventName, callback) {
			socket.on(eventName, function() {
				var args = arguments;
				$rootScope.$apply(function() {
					callback.apply(socket, args);
				});
			});
		},

		emit: function(eventName, data, callback) {
			socket.emit(eventName, data, function() {
				var args = arguments;
				$rootScope.apply(function() {
					if(callback) {
						callback.apply(socket, args);
					}
				});
			});
		}

	};

});