import { Template } from 'meteor/templating';

import './exportItem.html';

// EXPORT
Template.exportItem.onCreated(
  function() {
    const instance = this;
    if(instance.data.status === 'loading') {
      // If export is already loading at creation,
      // an error occured (refresh browser ?), so update status
      Meteor.call('exports.error', instance.data._id);
    }
  }
)

Template.exportItem.helpers({
  getExportTemplate()  {
    const instance = this;
    if(instance.status) {
      const status = instance.status;
      console.log(status);
    return status;
  }
  return 'error';
  }
}) 


