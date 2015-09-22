angular.module('ticketCtrl', ['ticketService'])


	.controller('TicketController', function(Ticket, socketio) {


		var vm = this;

		Ticket.all()
			.success(function(data) {
				vm.tickets = data;
			});


		vm.createTicket = function() {

			vm.processing = true;

   
			vm.message = '';
			Ticket.create(vm.ticketData)
				.success(function(data) {
					console.log('Data -- > '+data);

					vm.processing = false;
					//clear up the form
					vm.ticketData = {};

					vm.message = data.message;
					
				});

		};

		socketio.on('ticket', function(data) {
			vm.tickets.push(data);
		})

})

.controller('AllTicketsController', function(tickets, socketio) {

	var vm = this;

	vm.tickets = tickets.data;

	socketio.on('ticket', function(data) {
			vm.tickets.push(data);
	});



});