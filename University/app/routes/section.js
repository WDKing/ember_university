/* route: section */
import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        let section = [
            {
            	section_number: "001",
                student_name: "William King",
                professor_name: "Steven Beaty",
                course_name: "Intro to Web Architecture",
            },
            {
                section_number: "002",
                student_name: "Student 2",
                professor_name: "Ivo Georgiev",
                course_name: "Operating Systems",
            }
        ];
        return section;
    }
});
