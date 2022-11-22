import { Template } from 'meteor/templating';
import './loading.html';

// LOADING
Template.loading.helpers({
  // Return actual progress score to display
  progress() {
    const instance = Template.instance();
    return instance.progress.get();
  }
})

Template.loading.onCreated(
  function() {
    const instance = this;

    instance.progress = new ReactiveVar(0);

    // Each second, increment progress if < 100
    instance.runEverySecond = setInterval(() => {
      if(instance.progress.get() < 100) {
        instance.progress.set(instance.progress.get() + 5);
      }
      // else clear interval when no more needed
      else(clearInterval(instance.runEverySecond));
      // When export completed, transform export unto completed status
      if(instance.progress.get() >= 100 && instance.data.status === 'loading') {
        Meteor.call('exports.complete', instance.data._id);
      }
    }, (1000));
  }
)

Template.loading.onDestroyed(
  function() {
    const instance = this;
    // Clean interval if template unmounted
    clearInterval(instance.runEverySecond);
  }
)


