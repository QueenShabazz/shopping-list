//jQuery intro syntax
$(function shoppingList() {
//set the state of the items in the list 

//SUBMIT 
$('#js-shopping-list-form').submit(function(event){
		var listItem = $('#shopping-list-entry').val();
		event.preventDefault();
		
		if (listItem !== "") {
		$('.shopping-list').append(`<li>
			<span class='shopping-item'>` + listItem + ` </span>
			<div class='shopping-item-controls'>
			<button class='shopping-item-toggle'> <span class='button-label'>check</span></button>
        	<button class='shopping-item-delete'><span class='button-label'>delete</span>
          	</button> </div> </li>`)};
          $('.js-shopping-list-entry').val("");
        })
});


//TOP OF THE LIST
$('.shopping-list').on('click', '.shopping-item-toggle', function (event){
	$(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass
	('shopping-item__checked');
	});


//DELETE

$('.shopping-list').on('click', '.shopping-item-delete',
	function(event){
	$(this).closest('li').remove();
	
	$(shoppingList());

});





//event listeners section


//TRIGGERED ON ENTER
/*
$(document).on("keydown", function(e){
	if(e.keyCode === 13) {
		getInput();
	}

//CHECK//UNCHECK
$(".shopping-item").click (function () {
	$(this).toggleClass(".shopping-item__checked");
});

//run

})*/

