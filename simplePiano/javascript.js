$(document).ready(function(){
    
    var ws = new WebSocket('ws://achex.ca:4010');
	 ws.onmessage = function(evt){
		var datos = evt.data;
		var obj = jQuery.parseJSON(datos);
         if(obj.clase!=null){
             $("#"+obj.clase+obj.tecla).trigger('play');
             Colorverdadero=$("."+obj.clase+obj.tecla).css("background-color");
             $("."+obj.clase+obj.tecla).animate({borderRadius: "10px"},10,null,function(){
             $("."+obj.clase+obj.tecla).css("background-color","#FF0000");
              });
             $("."+obj.clase+obj.tecla).animate({borderRadius: "10px"},100,null,function(){
             $("."+obj.clase+obj.tecla).css("background-color",Colorverdadero);
             });
         }
	   };
     ws.onopen= function(evt){ ws.send('{"setID":"minipiano","passwd":"123"}');};
  	 function send(TECLA,clase){         
        ws.send('{"to":"minipiano","tecla":"'+TECLA+'","clase":"'+clase+'"}');
    }
     $(".white_btn").click(function(){
         send($(this).val(),'audios');
        $("#audios"+$(this).val()).trigger('play');
    });
    

/* .....................this is for black buttons........................*/

    $(".black_btn_first").click(function(){
        send($(this).val(),'audiosb');
        $("#audiosb"+$(this).val()).trigger('play');

    });
    
    $(".black_btn_second").click(function(){
         send($(this).val(),'audiosb');
         $("#audiosb"+$(this).val()).trigger('play');

    });
    
});