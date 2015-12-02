var billAmt = 0;
var tipRate = 0;
var tipButton = $('input[type=button]');
var total = $('input[placeholder=Total]');


var calcTip = function() {
	billAmt = parseInt($('input[placeholder="enter bill"]').val());
	tipRate = parseInt($('input[placeholder="enter tip rate"]').val());
	tipPercent = tipRate / 100;
	
	return billAmt * tipPercent;
};

var addTotal = function() {
	tip = calcTip();
	
	return tip + billAmt;
};

var displayTotal = function() {
	$(tipButton).click(function() {
		totalBill = addTotal();
		if(isNaN(totalBill)) {
			alert("please enter numbers");
		}
		else {
			$(total).val(totalBill);
		}
	});
};

displayTotal();
