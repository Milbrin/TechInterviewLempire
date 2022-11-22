import { Template } from 'meteor/templating';
import './error.html';

// ERROR
Template.error.events({
  'click .relaunch-button' () {
    // Retry upload
    Meteor.call('exports.loading', this._id)
  }
})
