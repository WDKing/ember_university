/* route: course */
import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        let course = [
            {
            	course_name: "Operating Systems",
            },
            {
                course_name: "Intro to Web App Arch",
            }
        ];
        return course;
    }
});