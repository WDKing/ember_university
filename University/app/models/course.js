import Model from 'ember-data/model';

export default DS.Model.extend({
  course_name: DS.attr('string'),
  sections: DS.hasMany('section')
});
