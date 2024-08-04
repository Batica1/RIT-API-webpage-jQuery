export class View {

    renderSpinner() {
        $('#section-news').html('<img src="media/gears.gif" id="spinner"/>');
        // select all sections which id starts with 'section-'
        // $('[id^=section-]').html('<img src="media/gears.gif" id="spinner"/>');
    }



    // section about
    renderAboutSection(data) {
        $('#section-about').html(''); // removes any previous content (like spinner)
        $('#section-about').append(`<h2> <b> ${data.title} </b> </h2>`);
        $('#section-about').append(`<p>${data.description}</p>`);
        $('#section-about').append(`<p class="mt-5">  <i> ${data.quote}  </i> </p>`);
        $('#section-about').append(`<h6 class="is-pulled-right "> <b> ${data.quoteAuthor} </b></h6>`);
    }



    
    // undergraduate
    renderUndergraduateSection(data){
       
        $('#section-undergraduate').html('');
       
        $('#section-undergraduate').append('<div class="columns is-4" id="undergraduate"></div>');
        

        $.each(data.undergraduate, (index, item) => {
            let $undergraduate = $(`  
                                <div class="column m-6 p-6 has-text-centered has-text-white" >
                                    <h4 class="title is-3 yellow ">${item.title}</h4>
                                        <p>${item.description}</p>
                                         <button class="button mt-5 btn-main"> ${ item.degreeName } </button>
                                </div>`);//end of append


            $('#undergraduate').append($undergraduate);


            $undergraduate.on('click', function(){
                $('#section-undergraduate').append(`<div class= "has-text-centered " id="dialogUndergraduate">
                                                        <h1 class="title is-4 rit">${item.title}</h1>
                                                        <p class="pb-6"> <i> Concentrations </i></p>
                                                        <ul id="concentrations">
                                                        </ul>
                                                    </div>`);


                $.each(item.concentrations, (index) => {

                    $('#concentrations').append(`<li> ${item.concentrations[index]} </li>`);
                });

                $('#dialogUndergraduate').dialog({
                    width: 800
                });

            }); //end of method          

        }//end of first for each
        );
        
    }//end of moethod

    

    // graduate
    renderGraduateSection(data){

        $('#section-graduate').html('');
        // removes any previous content (like spinner)

        $('#section-graduate').append('<div class="columns" id="graduates"></div><div id="cert"></div>');


        $.each(data.graduate, (index, item) => {
                if (index === 3) {
                    $('#cert').append(`<div class="column pb-5 has-text-centered ">
                   
                        <h2 class="title is-2 blue"> ${ item.degreeName } </h2>
                   
                    <div id='certificates'></div> 
                    </div>  
                    `);
                    $.each(item.availableCertificates, (index) => {
                        $('#certificates').append(`<p> <b> ${item.availableCertificates[index]} </b> </p>`)
                    });
                   
                } else {
                    let $graduateCard = $(`
                    <div class="column mb-6 pt-6 has-text-centered ">
                            <h4 class="title is-3 red">${item.title}</h4> 
                                 <p> ${item.description} </p> 
                                    <button class="button "> <a> ${ item.degreeName } </a>    </button>  
                    </div>  
               `    );

                    $('#graduates').append($graduateCard);

                    $graduateCard.on('click', () => {
                        $('#section-graduate').append(`<div class="has-text-centered" id="dialogGraduate">
                                                        <h1 class="title is-4 rit">${item.title}</h1>
                                                        <p class="pb-6"> <i> Concentrations </i></p>
                                                        <ul id="graduate-dialog-concentrations">
                                                        </ul>
                                                    </div>`);
                                $.each(item.concentrations, (index) => {
                                      
                                    $('#graduate-dialog-concentrations').append(`<li>${item.concentrations[index]}</li>`);
                                
                                        });

                        $('#dialogGraduate').dialog({
                             width: 800
                        });
                    }); //end of for each

                   

                   
                }//end of else
                
           
        });
        
    }//end of method
    
    //section coop
    renderCoOpSection(data) {
        $('#section-coop').html('');
        // removes any previous content (like spinner)

        $('#section-coop').append( `
        <div class = "has-text-black " id="coop"> 
            <h1>${data.coopTable.title}</h1>
            <table id='someTable'>
                <thead class = "has-text-white">
                    <tr class = "has-text-white">
                        <th>Employer</th>
                        <th>Degree</th>
                        <th>City</th>
                        <th>Term</th>
                    </tr>
                </thead>
                <tbody id='bodyTable'>

                </tbody>
            </table>
        </div>
        ` );

        $.each(data.coopTable.coopInformation, (index, item) => {
            $('#bodyTable').append(` 
            <tr class="has-text-black">
                <td>${item.employer}</td>
                <td>${item.degree}</td>
                <td>${item.city}</td>
                <td>${item.term}</td>
            </tr>
            
                `);

        });

        $('#someTable').DataTable();

        $( function() {
            $( "#coop" ).accordion({
              collapsible: true
            });
          } );
        

    }//end of method */


    

    // section employment table
    renderEmploymentSection(data) {
        $('#section-employmentTable').html('');
        // removes any previous content (like spinner)

        $('#section-employmentTable').append( `
        <div class = "has-text-black " id="employment"> 
            <h1>${data.employmentTable.title}</h1>
            <table id='nekitable1'>
                <thead class = "has-text-white">
                    <tr class = "has-text-white">
                        <th>Employer</th>
                        <th>Degree</th>
                        <th>City</th>
                        <th>Title</th>
                        <th>Start Date</th>
                    </tr>
                </thead>
                <tbody id='nekibody1'>

                </tbody>
            </table>
        </div>
        ` );

        $.each(data.employmentTable.professionalEmploymentInformation, (index, item) => {
            $('#nekibody1').append(` 
            <tr class="has-text-black">
                <td>${item.employer}</td>
                <td>${item.degree}</td>
                <td>${item.city}</td>
                <td>${item.title}</td>
                <td>${item.startDate}</td>
            </tr>
            
                `);

        });

        $('#nekitable1').DataTable();

        $( function() {
            $( "#employment" ).accordion({
              collapsible: true
            });
          } );
        

    }//end of method */

    




    // people faculty
    renderFacultySection(data) {
        $('#section-faculty').html(''); // removes any previous content (like spinner)
        $('#section-faculty').append('<div class="columns is-multiline is-centered " id="faculty"></div>');
        $.each(data.faculty, (index, item) => {

            if (item.website === "") {
              //  console.log("Does not have a site");

                $('#faculty').append(`

                <div style="width: 18rem;" class="column is-one-third is-narrow card m-4 ">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img src="${item.imagePath}" alt="Placeholder image">
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class=" has-text-black title is-4">${item.name}</p>
                        <p class="subtitle is-6"> ${item.email} </br> + ${item.phone} </p>
                
                      </div>
                    </div>
                
                    <div class="content">
                     Twitter: <a>${item.twitter}</a>, Facebook: <a>${item.facebook}</a>|
                      <a >#${item.interestArea}</a> 
                      <br>
                      <p> ${item.title}, Office: ${item.office} </p>
                      
                   
                      
                      
                    </div>
                  </div>
                </div>  
                
                        `); //end of append
                
            } else {
              //  console.log("Have website");

                $('#faculty').append(`

                <div style="width: 18rem;" class="column is-one-third is-narrow card m-4 ">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img src="${item.imagePath}" alt="Placeholder image">
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class=" has-text-black title is-4">${item.name}</p>
                        <p class="subtitle is-6"> ${item.email} </br> + ${item.phone} </p>
                
                      </div>
                    </div>
                
                    <div class="content">
                     Twitter: <a>${item.twitter}</a>, Facebook: <a>${item.facebook}</a>|
                      <a >#${item.interestArea}</a> 
                      <br>
                      <p> ${item.title}, Office: ${item.office} </p>
                      
                    
                      <a class="ui-button ui-widget ui-corner-all" href="${item.website}"> Website</a>
                      
                      
                      
                    </div>
                  </div>
                </div>  
                
                        `); //end of append
               
            }

       
        }); //end of for each
     
        $( function() {
            $( ".button" ).button();
           
          } );


    }//end of funcion





    


}//end of class
