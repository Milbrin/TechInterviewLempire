import { Meteor } from 'meteor/meteor';

import { Mongo } from 'meteor/mongo';

import { check } from 'meteor/check';

import { getRandomUrl } from '../../utils/url';

export const Exports = new Mongo.Collection('exports');

Meteor.methods({

  'exports.insert'() {
    Exports.insert({
      status: 'ready',
      url: null,
      createdAt: new Date(),
    });
  },
  'exports.complete'(id) {
    check(id, String);
    Exports.update(id, { $set: 
      { 
        status: 'complete',
        url: getRandomUrl(),
        completedAt: new Date()
      } 
    });
  },
  'exports.loading'(id) {
    check(id, String);
    Exports.update(id, { $set: 
      { 
        status: 'loading',
      } 
    });
  },
  'exports.error'(id) {
    check(id, String);
    Exports.update(id, { $set: 
      { 
        status: 'error',
      } 
    });
  },
  
});