import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('student');
  this.route('professor');
  this.route('course');
  this.route('section');
});

export default Router;
