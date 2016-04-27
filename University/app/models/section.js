import Model from 'ember-data/model';

export default DS.Model.extend({
  section_number: DS.attr('string'),
  student: hasOne('student'),
  professor: hasOne('professor'),
  course: hasOne('course')
});
