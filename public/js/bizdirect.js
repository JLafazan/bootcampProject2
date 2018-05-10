$(document).ready(function() {

// live search for abc order

$('.biz-link').on('click', function(e) {
	// stops page from refreshing
	e.preventDefault();
	// toggle class active
	$(this).toggleClass('active');
	// filter organizations by beginning letter
});

// live search for categories
$('.cat-link').on('click', function(e) {
	// stops page from refreshing
	e.preventDefault();
	// toggle class active
	$(this).toggleClass('active');
	// filter organizations by category
});

// on hover have info appear

var orgInfo = [
	{
		business: "Test0",
		categories: "A, B, C",
		desc: "This is a test"
	},
	{
		business: "Test1",
		categories: "A, B, C",
		desc: "This is a test"
	},
	{
		business: "Test2",
		categories: "A, B, C",
		desc: "This is a test"
	},
	{
		business: "Test3",
		categories: "A, B, C",
		desc: "This is a test"
	},
];

// var x = orgInfo[0].business;
// console.log(x);

// $( ".org1" ).hover(
//   function() {
//     $( this ).html( $( "<div>" + x + "</div>" ) );
//   }, function() {
//     $( this ).html( "" );
//   }
// );

});