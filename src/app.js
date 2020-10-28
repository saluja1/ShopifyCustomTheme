import vue from "vue";

var vm = new vue({
	el : "#section-cta"
})

// A $( document ).ready() block.
$( document ).ready(function() {
	$('.carousel').carousel();
});