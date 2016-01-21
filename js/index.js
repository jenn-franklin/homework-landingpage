$(document).ready();
$('.expand_content').hide();
$('.read_more_link').click(showContent);


function showContent() {
	window.alert();
	$('.expand_content', this).toggle();
}

	