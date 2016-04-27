import Model from 'ember-data/model';

export default DS.Model.extend({
  student_name: DS.attr('string'),
  sections: DS.hasMany('section')
});
