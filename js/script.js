

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


Generator.prototype.makeRapNames = function(input) {
  var rap_names = [];

  var rap_fn1 = input + " " + _.sample(this.last_names);
  var rap_fn2 = input.charAt(0) + " " + _.sample(this.last_names);
  var rap_fn3 = input.acronym() + " " + _.sample(this.last_names)
  var rap_ln1 = _.sample(this.first_names) + " " + input;
  var rap_ln2 = _.sample(this.first_names) + " " + input.charAt(0);
  var rap_ln3 = _.sample(this.first_names) + " " + input.acronym();

  rap_names.push(rap_fn1,rap_fn2,rap_fn3,rap_ln1,rap_ln2,rap_ln3)

  return rap_names; 
}

// console.log(engine.makeRapNames("hello"))

$(document).ready(function() {

  var engine = new Generator;

  $("#enter").on("click", function() {

    var user_first_name = $("#user-input").val().trim().capitalizeFirstLetter();

    // console.log(_.sample(engine2.makeRapNames(user_first_name)));

    if (!user_first_name.length){
      $('.response').hide();
      $('.error').show();
    } else {
      $('.error').hide();
      $('.response').text(_.sample(engine.makeRapNames(user_first_name)))
      $('.response').show();
    }
  });
});
