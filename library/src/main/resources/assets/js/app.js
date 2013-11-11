// Lab 4, Step 10 : Update to report lost and disable the button
function sendLost(id) {   
	var isbn = id;
    $.ajax({
        url: '/library/v1/books/' + isbn + '/?status=lost',
        dataType: "json",
        type: 'PUT',
        success: function(data) {
        			alert('Book corresponding to ISBN: ' + isbn + ' has been reported as LOST '); 
        			window.location.reload(); 
                },
        error: function(xhr, status) {
                        alert("Error occured, Kindly retry");
                }
        });
    document.getElementById(isbn).disabled = true;
};        


$(document).ready(function() {
	var table = document.getElementById("books_table");
	for (var counter = 0, rowpointer; rowpointer = table.rows[counter]; counter++) {
			var newStatus=table.rows[counter].cells[4].innerHTML;
			if (newStatus=="lost")
				{
				var newIsbn=table.rows[counter].cells[0].innerHTML;
				document.getElementById(newIsbn).disabled = true;
				}
		}
}); 





