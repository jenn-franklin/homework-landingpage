
$(document).ready(function() {

	$('.hidden_content').hide();
	$('.hidden_about_copy').hide();
	$('.read_more_link').click(showContent);
	$('.read_less_link').click(hideContent);
	$('.learn_more_link').click(showAbout);

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