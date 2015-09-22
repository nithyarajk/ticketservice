var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Schema = mongoose.Schema;


var TicketSchema = new Schema({

	ticketId: { type: Schema.Types.Number},
	creator: { type: Schema.Types.ObjectId, ref: 'User' },
	content: String,
	priority: String,
	comments: String

});

TicketSchema.plugin(autoIncrement.plugin, {
    model: 'Ticket',
    field: 'ticketId',
    startAt: 100000,
    incrementBy: 1
});

module.exports = mongoose.model('Ticket', TicketSchema);