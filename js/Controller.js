import {Model} from './Model.js';

export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.renderSpinner();

        // 1. send the request - the jqXHR object is returned,
        // that will hold the response on success (available within the done() callback)
        let response = this.model.getData('/news');
        let about = this.model.getData('/about');

        let undergraduate = this.model.getData('/degrees/undergraduate');

        let graduate = this.model.getData('/degrees/graduate');

        let coop = this.model.getData('/employment/coopTable/');

        let employment = this.model.getData('/employment/employmentTable');

        let faculty = this.model.getData('/people/faculty');




        // 2. specify what will be executed when the request is successful (done() callback)

        // undergraduate
        undergraduate.done((data) => {
            this.view.renderUndergraduateSection(data);
        });

        // graduate
        graduate.done((data) => {
            this.view.renderGraduateSection(data);
        });


        // about
        about.done((data) => {
            this.view.renderAboutSection(data);
        });


        // coop
        coop.done((data) => {
            this.view.renderCoOpSection(data);
        });


        // faculty
        faculty.done((data) => {
            this.view.renderFacultySection(data);
        });

           // faculty
           employment.done((data) => {
            this.view.renderEmploymentSection(data);
        });



        // news not req
        response.done((data) => {
            this.view.renderNewsSection(data);
        });


    }
}
