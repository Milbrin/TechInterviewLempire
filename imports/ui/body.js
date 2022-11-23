

import { Template } from 'meteor/templating';

// CCOMPONENTS IMPORT
import { exportList } from './components/exportList/exportList';
import { exportItem } from './components/exportItem/exportItem';
import { ready } from './components/ready/ready';
import { loading } from './components/loading/loading';
import { error } from './components/error/error';
import { complete } from './components/complete/complete';

import './body.html';


// GLOBAL HELPERS
Template.registerHelper('equals',
    function(v1, v2) {
        return (v1 === v2);
    }
);

Template.registerHelper('formatId', function(id) {
  return (id && id._str) || id;
});


// BODY EVENTS
Template.body.events({
  async 'click #export-button' () {
    // Insert a export into the collection
    await Meteor.callAsync('exports.insert');
  },
});




