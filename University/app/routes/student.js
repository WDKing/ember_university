/* route: student*/
import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        let student = [
            {
                student_name: "William King",
            },
            {
                student_name: "Student 2",
            }
        ];
        return student;
    }
});
