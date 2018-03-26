$(document).ready( function() {
    proj4_data = new Array();
    var cart = new shopping_cart("jadrn048");
    var cartArray = cart.getCartArray();
    updateDisplay();
    
       $('#cart').on('click',"[name='delbutton']",function(){
        var idd=$(this).attr("id");
        cart.delete(idd);
        updateDisplay();
    });

    $('#addtocart').on('click', function() {
        $('#errormessage').text("");
        $('#orderform').hide();
        var sku;

        var title= $.trim($('#products').val());
        title=title.split("-");
        title=title[0];

        for(var i=0; i < proj4_data.length; i++) {

            if(proj4_data[i][2] == title ) {
                sku= proj4_data[i][0];
                prc=proj4_data[i][6];
                ptitle=proj4_data[i][2];
                break;
            }
        }
        if(sku != undefined){
            cart.add(sku,quant,prc,ptitle);
            updateDisplay();
        }     
    });

    function updateDisplay() {
    var cartArray = cart.getCartArray();
    var toWrite="";
    var TotalPrice = 0;
    var TaxPrice = 0;
    var ShippingPrice = 0;
    var productQty = 0;
    var productPrice = 0;
    var productTitle;
    if(cart.size()==0){
    $('#message').html("<h4 >Your cart is empty!</h4>");
    $('#cart').html("");

        return;
    }
    if(cart.size() > 0) {
        var toWrite = "<table class='displaycart' id ='cart_table'><tr><th>Product</th><th class='qty'>Quantity</th><th class = 'price'>Price</th></tr>";
         
        for(i=0; i < cartArray.length; i++) {
            
            productQty += parseInt(cartArray[i][2]);
            itemPrice = parseFloat(cartArray[i][1]);
            itemPrice = Math.round(itemPrice * 100)/100; 
            productPrice += parseFloat(cartArray[i][1]);
            productPrice = Math.round(productPrice * 100)/100;
            productTitle= $.trim(cartArray[i][3]);
            
            toWrite += "<tr><td class='1r'><img id='product_img' src=\"/~jadrn000/PROJ4_IMAGES/"+
                             cartArray[i][0]+".jpg\" alt=\""+cartArray[i][2]+"\""+" /></td>";
            // toWrite += "<td class='frow'>"+cartArray[i][3]+"</td>";
            toWrite += "<td class='val'>"+cartArray[i][2]+"</td>"; 
            toWrite += "<td class='p_row'>$ "+Math.round(cartArray[i][1] * 100)/100+"</td>"; 
            toWrite += "<td colspan='2'><input type='button' id="+cartArray[i][0]+" value='Remove' name='delbutton' class='deletebutton'/></td></tr>";
            
        }
        ShippingPrice = parseInt(productQty * 2);
        TaxPrice = parseFloat(productPrice * 0.08);
        TaxPrice = Math.round(TaxPrice * 100)/100;
        TotalPrice = parseFloat(productPrice)+  parseFloat(TaxPrice) + parseFloat(ShippingPrice);
        TotalPrice = Math.round(TotalPrice * 100)/100;
        toWrite +="<tr ><th id='line' colspan='5'><span class ='\ship'\>Shipping Charge: $ "+ShippingPrice+"&nbsp;&nbsp;|&nbsp;Tax: $ "+TaxPrice+"&nbsp;&nbsp;|&nbsp;Total: $ "+TotalPrice+"</span></th></tr>";
        toWrite += "<tr><td id='cbut' colspan='5'>&nbsp;&nbsp;&nbsp;&nbsp;<button type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Checkout</button></td></tr></table>";
    }
    $('#cart').html(toWrite); 
    $('#count').text(cart.size()); 
    } 
});
