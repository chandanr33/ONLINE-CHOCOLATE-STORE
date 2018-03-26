/*  We load the global array proj4_data once, then use it as needed
    to retrieve product information.
    
    The Milk Chocolate handler is done the old-fashion way, with an 
    'onclick' call in the xhtml code.  The rest of the buttons have 
    handlers assigned the correct way.
    
     RAJU, CHANDAN
     JADRAN 048
     PROJECT 4
     FALL 2017
*/    

var proj4_data;
$(document).ready(function() {
    proj4_data = new Array();

    $.get('/perl/jadrn048/proj4/get_products.cgi', storeData);


    $('#milk').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 

                tmpString += "<p><b>"+proj4_data[i][2]+"</b></p> <span class='price'><b>$"+proj4_data[i][6]+
                    "</b></span><br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4]+
                    "<br><label>Quantity: </label><input class='quantity'"+" id='"+proj4_data[i][0]+"' type='text' value='1' min='1'>"+
                    "<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' class='addtocart'>Add to Cart</button>";
                tmpString += "<hr/>";           
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
    
    $('#dark').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 

                tmpString += "<p><b>"+proj4_data[i][2]+"</b></p> <span class='price'><b>$"+proj4_data[i][6]+
                    "</b></span><br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4]+
                    "<br><label>Quantity: </label><input class='quantity'"+" id='"+proj4_data[i][0]+"' type='text' value='1' min='1'>"+
                    "<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' class='addtocart'>Add to Cart</button>";
                tmpString += "<hr/>";  
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        
    $('#nuts').on('click', function() {   
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 

                tmpString += "<p><b>"+proj4_data[i][2]+"</b></p> <span class='price'><b>$"+proj4_data[i][6]+
                    "</b></span><br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4]+
                    "<br><label>Quantity: </label><input class='quantity'"+" id='"+proj4_data[i][0]+"' type='text' value='1' min='1'>"+
                    "<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' class='addtocart'>Add to Cart</button>";
                tmpString += "<hr/>";         
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
    $('#brittle').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 

                tmpString += "<p><b>"+proj4_data[i][2]+"</b></p> <span class='price'><b>$"+proj4_data[i][6]+
                    "</b></span><br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4]+
                    "<br><label>Quantity: </label><input class='quantity'"+" id='"+proj4_data[i][0]+"' type='text' value='1' min='1'>"+
                    "<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' class='addtocart'>Add to Cart</button>";
                tmpString += "<hr/>";         
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });


    $('#truffles').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 

                tmpString += "<p><b>"+proj4_data[i][2]+"</b></p> <span class='price'><b>$"+proj4_data[i][6]+
                    "</b></span><br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4]+
                    "<br><label>Quantity: </label><input class='quantity'"+" id='"+proj4_data[i][0]+"' type='text' value='1' min='1'>"+
                    "<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' class='addtocart'>Add to Cart</button>";
                tmpString += "<hr/>";         
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

$('#gifts').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 

                tmpString += "<p><b>"+proj4_data[i][2]+"</b></p> <span class='price'><b>$"+proj4_data[i][6]+
                    "</b></span><br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4]+
                    "<br><label>Quantity: </label><input class='quantity'"+" id='"+proj4_data[i][0]+"' type='text' value='1' min='1'>"+
                    "<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' class='addtocart'>Add to Cart</button>";
                tmpString += "<hr/>";         
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

$('#holiday').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />"; 

                tmpString += "<p><b>"+proj4_data[i][2]+"</b></p> <span class='price'><b>$"+proj4_data[i][6]+
                    "</b></span><br/>"+proj4_data[i][3]+"<br/>"+proj4_data[i][4]+
                    "<br><label>Quantity: </label><input class='quantity'"+" id='"+proj4_data[i][0]+"' type='text' value='1' min='1'>"+
                    "<button onclick='cartadd(\""+proj4_data[i][0]+"\")' id="+proj4_data[i][0]+" type='button' name='" + proj4_data[i][0]+','+proj4_data[i][6]+"' class='addtocart'>Add to Cart</button>";
                tmpString += "<hr/>";           
              
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });

        $('#cart').on('click',"[name='delete_button']",function(){
        var idd=$(this).attr("id");
        cart.delete(idd);
        updateDisplay();
    }); 
    
     $('#car').on('click',function(){
        window.location.href = "http://jadran.sdsu.edu/~jadrn048/proj4/order.html";       
    });

      $('#category').change(function() {
        var getValue=$(this).val();
        get_products(getValue);
    });

$('#content').on('click',$('input[type="button"]'), function(e) {
    if($(e.target).val() != 'Add to Cart') return;
    alert("The SKU is " + $(e.target).attr("name"));
    });
        
    $(document).on('click', ".buy", function() {  
        var sku = this.id;
        cart.add(sku,1);
        $(this).next().fadeIn(50).fadeOut(2000);
        });                   
     });   

     $(document).on('click',".addtocart", function(e) {
    
    var cart = new shopping_cart("jadrn048");
    var product = $(e.target).attr("name");
    var prod = product.split(",");
    var quantity = $('#'+prod[0]).val(); 
    cart.add(prod[0],prod[1],quantity);
    cart = new shopping_cart("jadrn048");
        $('#count').text(cart.size()); 
}); 



// function isEmpty(fieldValue) {
//         return $.trim(fieldValue).length == 0;    
//         }




function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
    }
    
// function display_milk_chocolate() {
//     tmpString = "";
//     for(var i=0; i < proj4_data.length; i++) {
//         if(proj4_data[i][1] == "Milk chocolate") {
//             tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
//                 proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
//                 " width=\"200px\"  /><br />";
//             for(var j=0; j < proj4_data[i].length; j++)
//                 tmpString += proj4_data[i][j] + "<br />";
//         tmpString += "<br /><br />";                       
//             }
//         }
//     var handle = document.getElementById('content');
//     handle.innerHTML = tmpString;
//     }        
    
    
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
}     