

// pre-submit callback 
function showRequest(formData, jqForm, options) { 
    // formData is an array; here we use $.param to convert it to a string to display it 
    // but the form plugin does this for you automatically when it submits the data 
    var queryString = $.param(formData); 
 
    // jqForm is a jQuery object encapsulating the form element.  To access the 
    // DOM element for the form do this: 
    var formElement = jqForm[0]; 
    
    //wave.getState().submitDelta(formData);
      
     $("#title").html("woo changed!"); 
      
	// submit a key-vlaue pair of <"testkey", time>
	//var delta:Object = {};
	
	//wave.submitDelta(delta);
    var commentText = $('#comment').fieldValue()[0]; 
      
    //var commentText = $('textarea').fieldValue()[0]; 
	// var commentText2 = $('#myForm textarea').fieldValue()[0];

     $("#title").html(commentText + '2'); 

	//delta.comment = commentText;
	//wave.getState().submitDelta(delta);
	
	//var delta2:Object = {};
	//delta2.comment2 = "woo";
	
	//wave.getState().submitDelta(delta2);

    //wave.getState().submitDelta({comment: commentText]});
    //wave.getState().submitDelta({comment2: commentText2]});

     //wave.getState().submitDelta({sendemail: "yes"});
     
     alert('About to submit v6: \n\n' + queryString); 
 
    // here we could return false to prevent the form from being submitted; 
    // returning anything other than false will allow the form submit to continue 
    return false; 
} 
 
// post-submit callback 
function showResponse(responseText, statusText, xhr, $form)  { 
    // for normal html responses, the first argument to the success callback 
    // is the XMLHttpRequest object's responseText property 
 
    // if the ajaxForm method was passed an Options Object with the dataType 
    // property set to 'xml' then the first argument to the success callback 
    // is the XMLHttpRequest object's responseXML property 
 
    // if the ajaxForm method was passed an Options Object with the dataType 
    // property set to 'json' then the first argument to the success callback 
    // is the json data object returned by the server 
 
    alert('status: ' + statusText + '\n\nresponseText: \n' + responseText + 
        '\n\nThe output div should have already been updated with the responseText.'); 
} 
