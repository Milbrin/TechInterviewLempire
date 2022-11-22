import { Template } from 'meteor/templating';
import { Exports } from '../../../api/exports';
import './exportList.html';

// EXPORTLIST
Template.exportList.helpers({
  exports() {
    return Exports.find({}, { sort: { status: 1 }});
  },
});
