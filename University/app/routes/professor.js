/* professor route */
import Ember from 'ember';

export default Ember.Route.extend({
	model() {
        let professor = [
            {
            	professor_name: "Steven Beaty",
            },
            {
                professor_name: "Ivo Georgiev",
            }
        ];
        return professor;
    }
});
