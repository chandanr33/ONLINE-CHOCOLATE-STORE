function isValidState(state) {                                
    var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
    "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
    "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
    "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
    "UT","VA","VT","WA","WI","WV","WY");
    for(var i=0; i < stateList.length; i++) 
        if(stateList[i] == $.trim(state))
            return true;
    return false;
}  

$(document).ready(function () {
    var errorStatusHandle = $('#errormessage');

    var element = new Array();
    element[0] = $('[name="fname"]');
    element[1] = $('[name="lname"]');
    element[2] = $('[name="address1"]');
    element[3] = $('[name="city"]');
    element[4] = $('[name="state"]');
    element[5] = $('[name="zip"]');
    element[6] = $('[name="area_phone"]');
    element[7] = $('[name="prefix_phone"]');
    element[8] = $('[name="phone"]');
    element[9] = $('[name="address11"]');
    element[10] = $('[name="city1"]');
    element[11] = $('[name="state1"]');
    element[12] = $('[name="zip1"]');
    element[13] = $('[name="cardname"]');
    element[14] = $('[name="cardno"]');
    element[15] = $('[name="cvv"]');
    element[16] = $('[name="fname1"]');
    element[17] = $('[name="lname1"]');
    element[18] = $('[name="area_phone1"]');
    element[19] = $('[name="prefix_phone1"]');
    element[20] = $('[name="phone1"]');

    $('[name="sameaddress"]').click(function () {
        if ($('[name="sameaddress"]').is(":checked")) {
            var value = element[2].val();
            element[9].val(value);
            value = element[3].val();
            element[10].val(value);
            value = element[4].val();
            element[11].val(value);
            value = element[5].val();
            element[12].val(value);
            value = element[0].val();
            element[16].val(value);
            value = element[1].val();
            element[17].val(value);
            value = element[6].val();
            element[18].val(value);
            value = element[7].val();
            element[19].val(value);
            value = element[8].val();
            element[20].val(value);
        }
        else {
            element[9].val("");
            element[10].val("");
            element[11].val("");
            element[12].val("");
            element[16].val("");
            element[17].val("");
            element[18].val("");
            element[19].val("");
            element[20].val("");
        }
    });

    $(':reset').on('click', function () {
        errorStatusHandle.text("", false);
        $('*').removeClass("error");
    });

    element[4].on('keyup', function() {
        element[4].val(element[4].val().toUpperCase());
    });
        
    element[11].on('keyup', function() {
        element[11].val(element[11].val().toUpperCase());
    });
    
        $('#submit').on('click', function(e) {
            if(!validate_Data()) {
                e.preventDefault();
                return;
            }
            else {
                $('#form').submit();
            }
         });
    
    function validate_Data() {

        if (isEmpty(element[0].val())) {
            element[0].addClass("error");
            errorStatusHandle.text("Please enter your first name!");
            element[0].focus();
            return false;
        }

        if (isEmpty(element[1].val())) {
            element[1].addClass("error");
            errorStatusHandle.text("Please enter your last name!");
            element[1].focus();
            return false;
        }

        if (isEmpty(element[2].val())) {
            element[2].addClass("error");
            errorStatusHandle.text("Please enter your address!");
            element[2].focus();
            return false;
        }

        if (isEmpty(element[3].val())) {
            element[3].addClass("error");
            errorStatusHandle.text("Please enter your city!");
            element[3].focus();
            return false;
        }


        if (isEmpty(element[4].val())) {
            element[4].addClass("error");
            errorStatusHandle.text("Please enter your state!");
            element[4].focus();
            return false;
        }

        if (!isValidState(element[4].val())) {
            element[4].addClass("error");
            errorStatusHandle.text("Please enter a valid 2 letter state abbreviation!");
            element[4].focus();
            return false;
        }

        if (isEmpty(element[5].val())) {
            element[5].addClass("error");
            errorStatusHandle.text("Please enter your zip code!");
            element[5].focus();
            return false;
        }

        if (!$.isNumeric(element[5].val())) {
            element[5].addClass("error");
            errorStatusHandle.text("Please enter a valid 5 digit zip code!");
            element[5].focus();
            return false;
        }
             if(element[5].val().length < 5) {
            element[5].addClass("error");
            errorStatusHandle.text("Enter a valid zip code!");
            element[5].focus();            
            return false;
        }

         if (isEmpty(element[6].val())) {
            element[6].addClass("error");
            errorStatusHandle.text("Please enter the area code!");
            element[6].focus();
            return false;
        }
        if (!$.isNumeric(element[6].val())) {
            element[6].addClass("error");
            errorStatusHandle.text("Enter a valid 3 digit area code!");
            element[6].focus();
            return false;
        }
            if(element[6].val().length < 3) {
            element[6].addClass("error");
            errorStatusHandle.text("Enter a valid 3 digit area code!");
            element[6].focus();            
            return false;
        }
        if (isEmpty(element[7].val())) {
            element[7].addClass("error");
            errorStatusHandle.text("Please enter the prefix phone!");
            element[7].focus();
            return false;
        }
             if(element[7].val().length < 3) {
            element[7].addClass("error");
            errorStatusHandle.text("Enter a valid 3 digit prefix phone!");
            element[7].focus();            
            return false;
        }
        if (!$.isNumeric(element[7].val())) {
            element[7].addClass("error");
            errorStatusHandle.text("Enter a valid 3 digit prefix phone!");
            element[7].focus();
            return false;
        }
         if (isEmpty(element[8].val())) {
            element[8].addClass("error");
            errorStatusHandle.text("Please enter the phone number!");
            element[8].focus();
            return false;
        }
              if(element[8].val().length < 4) {
            element[8].addClass("error");
            errorStatusHandle.text("Enter a valid 4 digit phone number!");
            element[8].focus();            
            return false;
        }
        if (!$.isNumeric(element[8].val())) {
            element[8].addClass("error");
            errorStatusHandle.text("Enter a valid 4 digit phone number!");
            element[8].focus();
            return false;
        }
        if (isEmpty(element[13].val())) {
            element[13].addClass("error");
            errorStatusHandle.text("Please enter the name on card!");
            element[13].focus();
            return false;
        }

        if (isEmpty(element[14].val())) {
            element[14].addClass("error");
            errorStatusHandle.text("Please enter the card number!");
            element[14].focus();
            return false;
        }
        if (!$.isNumeric(element[14].val())) {
            element[14].addClass("error");
            errorStatusHandle.text("Numbers only!");
            element[14].focus();
            return false;
        }

        if (isEmpty(element[15].val())) {
            element[15].addClass("error");
            errorStatusHandle.text("Please enter the security code!");
            element[15].focus();
            return false;
        }

        if (!$.isNumeric(element[15].val())) {
            element[15].addClass("error");
            errorStatusHandle.text("Enter a valid 3 digit CVV!");
            element[15].focus();
            return false;
        }
        if(element[15].val().length < 3) {
            element[15].addClass("error");
            errorStatusHandle.text("Enter a valid 3 digit CVV!");
            element[15].focus();            
            return false;
        }   
        if (isEmpty(element[9].val())) {
            element[9].addClass("error");
            errorStatusHandle.text("Please enter the billing address!");
            element[9].focus();
            return false;
        }

        if (isEmpty(element[10].val())) {
            element[10].addClass("error");
            errorStatusHandle.text("Please enter the city of billing address!");
            element[10].focus();
            return false;
        }


        if (isEmpty(element[11].val())) {
            element[11].addClass("error");
            errorStatusHandle.text("Please enter the state of billing address!");
            element[11].focus();
            return false;
        }

        if (!isValidState(element[11].val())) {
            element[11].addClass("error");
            errorStatusHandle.text("Please enter a valid 2 letter state abbreviation!");
            element[11].focus();
            return false;
        }

        if (isEmpty(element[12].val())) {
            element[12].addClass("error");
            errorStatusHandle.text("Please enter zip code of billing address!");
            element[12].focus();
            return false;
        }
           if(element[12].val().length < 5) {
            element[12].addClass("error");
            errorStatusHandle.text("Enter a valid zip code!");
            element[12].focus();            
            return false;
        }  
        if (!$.isNumeric(element[12].val())) {
            element[12].addClass("error");
            errorStatusHandle.text("Please enter a valid zip code in billing address!");
            element[12].focus();
            return false;
        }
        if (isEmpty(element[18].val())) {
            element[18].addClass("error");
            errorStatusHandle.text("Please enter the area code!");
            element[18].focus();
            return false;
        }
        if (!$.isNumeric(element[6].val())) {
            element[18].addClass("error");
            errorStatusHandle.text("Enter a valid 3 digit area code!");
            element[18].focus();
            return false;
        }
            if(element[18].val().length < 3) {
            element[18].addClass("error");
            errorStatusHandle.text("Enter a valid 3 digit area code!");
            element[18].focus();            
            return false;
        }
        if (isEmpty(element[19].val())) {
            element[19].addClass("error");
            errorStatusHandle.text("Please enter the prefix phone!");
            element[19].focus();
            return false;
        }
             if(element[19].val().length < 3) {
            element[19].addClass("error");
            errorStatusHandle.text("Enter a valid 3 digit prefix phone!");
            element[19].focus();            
            return false;
        }
        if (!$.isNumeric(element[19].val())) {
            element[19].addClass("error");
            errorStatusHandle.text("Enter a valid 3 digit prefix phone!");
            element[19].focus();
            return false;
        }
         if (isEmpty(element[20].val())) {
            element[20].addClass("error");
            errorStatusHandle.text("Please enter the phone number!");
            element[20].focus();
            return false;
        }
              if(element[20].val().length < 4) {
            element[20].addClass("error");
            errorStatusHandle.text("Enter a valid 4 digit phone number!");
            element[20].focus();            
            return false;
        }
        if (!$.isNumeric(element[20].val())) {
            element[20].addClass("error");
            errorStatusHandle.text("Enter a valid 4 digit phone number!");
            element[20].focus();
            return false;
        }
        return true;
    }
});

function isEmpty(fieldValue) {
    if ($.trim(fieldValue).length == 0)
        return true;
    return false;
}



