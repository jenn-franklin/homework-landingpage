/*
	Hi Jenn!  I will be including feedback on your code in JS comments like this one.
*/

$(document).ready(function() {

	$('.hidden_content').hide();
	$('.hidden_about_copy').hide();

	// Great click events!
	$('.read_more_link').click(showContent);
	$('.read_less_link').click(hideContent);
	$('.learn_more_link').click(showAbout);


	/*
		The functions here are great!  They definitely work as specified in the assignment requirements.

		You asked about "this" in your comments when submitting this assignment.  We have not
		gone over "this" too deeply in class (yet) and it was not a requirement for this assignment,
		but great question!

		"this" is a variable that you can use as a selector (i.e. instead of '.read_more_link', for example)
		that refers to the element that the event was taken on.  In the case of the click events, "this"
		would refer to the element that the user clicked on.

		So, for example, if the user clicks on the element with the class '.read_more_link', "this" would refer
		to '.read_more_link'.  Therefore, instead of hiding the link with the following line:

			$('.read_more_link').hide();

		You could instead say:

			$(this).hide();

		Both lines would do the same thing here.
	*/

	function showContent() {
		$('.hidden_content').slideDown();
		/*$('.hidden_content' , this).slideDown();*/
		$('.read_more_link').hide();
		/*$('.read_more_link' , this).hide();*/
	}

	function hideContent() {
		$('.hidden_content').slideUp();
		/*$('.hidden_content' , this).slideUp();*/
		$('.read_more_link').show();
		/*$('.read_more_link' , this).show();*/
	}

	function showAbout() {
		$('.hidden_about_copy').slideDown();
		$('.learn_more_link').hide();
	}

});