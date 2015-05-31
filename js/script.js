

/** 
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {

    /* Name Arrays: Customize names to change possible output */
    this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist',];
    this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];

}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.acronym = function() {
    return this.toUpperCase().split('').join('.') +'.';
}

//Add your codez here

$(document).ready(function() {

  var engine = new Generator;
  //Add your codez here

  $("#enter").on("click", function() {

    var user_first_name = $("#user-input").val().trim().capitalizeFirstLetter();

    var rap_names = []

    var rap_fn1 = user_first_name + " " + _.sample(engine.last_names);
    var rap_fn2 = user_first_name.charAt(0) + " " + _.sample(engine.last_names);
    var rap_fn3 = user_first_name.acronym() + " " + _.sample(engine.last_names)
    var rap_ln1 = _.sample(engine.first_names) + " " + user_first_name;
    var rap_ln2 = _.sample(engine.first_names) + " " + user_first_name.charAt(0);
    var rap_ln3 = _.sample(engine.first_names) + " " + user_first_name.acronym();

    rap_names.push(rap_fn1,rap_fn2,rap_fn3,rap_ln1,rap_ln2,rap_ln3)

    // console.log(_.sample(rap_names));
    if (!user_first_name.length){
      $('.response').hide();
      $('.error').show();
    } else {
      $('.error').hide();
      $('.response').text(_.sample(rap_names))
      $('.response').show();
    }


  });

});
