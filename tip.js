var billAmt = 0;
var tipRate = 0;
var calcButton = $('#calculate');
var billTotal = $('#total');

var calcRate = function() {
	billAmt = parseInt($('#bill').val());
	tipRate = parseInt($('#tip option:selected').text());
	
	return billAmt * (tipRate / 100);
};

var addBill = function() {
	tipPercent = calcRate();
	return billAmt + tipPercent;
};

var displayTotal = function() {
	$(calcButton).on("click", function() {
		total = addBill();
		if(!isNaN(total)) {
			$(billTotal).val(total);
		} 
		else {
			$(billTotal).val("Please enter valid whole numbers");
		}
	});
};

displayTotal();