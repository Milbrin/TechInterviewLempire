import { Template } from 'meteor/templating';
import './ready.html';

// READY
Template.ready.onCreated(
  function() {
    const instance = this;
    Meteor.call('exports.loading', instance.data._id);
    }
)