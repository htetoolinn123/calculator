$(document).ready(function(){
	var displayValue = '0';   
    $('#result').text(displayValue);

    $('.key').each(function(index,key){
    	$(this).click(function(){
    		if(displayValue=='0') displayValue = '';
    		if($(this).text()== 'C'){
    			displayValue ='0';
    			$('#result').text(displayValue);
    		}
    		else if($(this).text() == '=')
                    {
                        try
                        {
                            displayValue = eval(displayValue);
                            $('#result').text(displayValue);
                            displayValue = '0';
                        }
                        catch 
                        {
                            displayValue = '0';
                            $('#result').text('ERROR');
                        }               
                    }
                    else
                    {
                        displayValue += $(this).text();
                        $('#result').text(displayValue);
                    }
                    preventDefault()
    	})
    })
})
