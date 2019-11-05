
  $(document).ready(function(){
    // $( window ).on( "load", function() {
  // var div = $('<style>div#check-img {padding: 0px;}div#check-link {padding: 0px;} .check{ z-index: 99999; position: fixed;top: 0px;background-color: #fffd;border: solid 3px;height: 100px;display: flex;justify-content: center;align-items: center;} .card-check{border: solid 1px #000;height: 90px;} .card-check h2 { color: #000 !important; padding: 5px; margin: 0px;}</style><div  id="check " class="grid check"><div id="check-h2" class="col-1 card-check"><h2>H2</h2></div><div id="check-list" class="col-1 card-check"><h2>:</h2></div><div id="check-img" class="col-3 "><div class="grid"><div id="check-img-src" class="col-4 card-check"><h2>Img SRC</h2></div><div id="check-img-alt" class="col-4 card-check"><h2>Img Alt</h2></div><div id="check-img-title" class="col-4 card-check"><h2>Img Title</h2></div></div></div><div id="check-link" class="col-3"><div class="grid"><div id="check-link-href" class="col-5 card-check"><h2>Link href</h2></div><div id="check-link-title" class="col-5 card-check"><h2>Link Title</h2></div></div></div><div class="col-2 "><div class="grid"><div class="col-5 card-check" id="h2Vazio"><h2>H2 vazio</h2></div><div class="col-5 card-check" id="pVazio"><h2>P vazio</h2></div></div></div><div id="fechar">  <img src="http://192.170.0.49/pontes/imagens/fechar.png" alt="fechar" title="fechar"></div><div class="claer"></div></div>');
  var div = $('<style>.espaco{width:10px;}.check img{ margin-top:20px; } .check{ z-index: 99999; position: fixed;top: 0px;background-color: #fffd;border: solid 3px;height: 80px;display: flex;justify-content: center;align-items: center;} .card-check { border: solid 1px #000; height: 70px; width: 70px; margin: 1px;} .card-check h2 { color: #000 !important; padding: 5px; margin: 0px;}</style><div  id="check " class=" check text-center"><div id="check-h2" class=" card-check"><h2>H2</h2></div><div id="check-list" class=" card-check"><h2>:</h2></div><div class="espaco"></div><div id="check-img-src" class=" card-check"><h2>Img SRC</h2></div><div id="check-img-alt" class=" card-check"><h2>Img Alt</h2></div><div id="check-img-title" class=" card-check"><h2>Img Title</h2></div><div class="espaco"></div><div id="check-link-href" class=" card-check"><h2>Link href</h2></div><div id="check-link-title" class=" card-check"><h2>Link Title</h2></div><div class="espaco"></div><div class=" card-check" id="h2Vazio"><h2>H2 vazio</h2></div><div class=" card-check" id="pVazio"><h2>P vazio</h2></div><div class=" card-check" id="checkdesc"><h2>desc</h2></div><div id="fechar" class=" card-check">  <img src="http://192.170.0.102/pontes/imagens/fechar.png" alt="fechar"title="fechar"></div></div>');
 setTimeout(function(){ validaimg() }, 1000);
    $("body").append(div);
    function checkTitle () {
        var erro = 0;
        var aux = 0;
        $('h2').each(function(){
          if($(this).text().toLowerCase().includes($("h1").text().toLowerCase())){
            // console.log($(this).text());
             $(this).css('background-color','#ffb02a');
             // console.log('h2 -'+ aux);
            aux = aux + 1;
            if (aux == 1){
             erro = 1;
           }else if (aux >= 1){
             erro = 2;
           }
          }
        }); 
      if(erro >=2){
        $('#check-h2').css('background-color','#55cd6c');
        // alert(sate);
      }else if(erro == 1){ 
        $('#check-h2').css('background-color','#ffff2a');
        // console.log('nenhuma h2 contem h1');s
        // alert(sate);
      }else{
        $('#check-h2').css('background-color','#ff2a2a');
        // console.log('nenhuma h2 contem h1');s
        // alert(sate);
      }
    }

    
    function checkList () {
        var erro2 = false;
        
        $(' h2').each(function(){
          if($(this).text().includes(':')){ 
              $(this).css('background-color','#ffff2a');
              erro2 = true;
          }
        }); 
        $(' p').each(function(){
          if($(this).text().includes(':')){
             erro2 = true;
             $(this).css('background-color','#ffff2a');
          }
        }); 

        if(erro2){
          $('#check-list').css('background-color','#ffff2a');
          console.log('texto conten :');
      }else{
        $('#check-list').css('background-color','#55cd6c');
      }
    }

    function checkImagetitle (){
    
    $('#check-img-title').css('background-color','#55cd6c');
      $(' img').each(function(){
        if($(this).attr('title') != undefined){
          if($(this).attr('title').length==0){
           console.log('imagem com title vazio ' + $(this).attr('src')); 
           $(this).css('border','solid 3px #ff2a2a '); 
           $('#check-img-title').css('background-color','#ff2a2a');
           $(this).css('border-color','#ff2a2a ');
          }
        }else{
        console.log('imagem sem o item  title ' + $(this).attr('src'));  
           $('#check-img-title').css('background-color','#ff2a2a');
           $(this).css('border','solid 3px #ff2a2a ');
           $(this).css('border-color','#ff2a2a ');
      }
      });
    }
    function checkImagealt (){
      $('#check-img-alt').css('background-color','#55cd6c');
    $(' img').each(function(){
      if($(this).attr('alt').length== 0){
       console.log('imagem sem alt ' + $(this).attr('src'));  
       $('#check-img-alt').css('background-color','#ff2a2a');
       $(this).css('border-color','#ff2a2a ');
       $(this).css('background','#ff2a2a ');
      }
    });
    }
    function checklinkTitle (){
      $('#check-link-title').css('background-color','#55cd6c');
      $('a').each(function(){
      
        if($(this).attr('title') != undefined){

          if($(this).attr('title').length == 0){
            $(this).append("#vazio");
           console.log('link  title  vazio ' + $(this).html());  
           $('#check-link-title').css('background-color','#ff2a2a');
           $(this).css('border-color','#ff2a2a!important');
           $(this).css('background','#ff2a2a!important');
           $(this).css('color','#ff2a2a!important');
          }
        }else {

          if($(this).attr('class')!= undefined){ 
            if(!$(this).attr('class').includes('fancybox')){
              if(!$(this).attr('class').includes('slicknav')){
                if(!$(this).attr('class').includes('fa')){
                  $(this).append("#vazio");
                  console.log('link sem title  ' + $(this).attr('href'));  
                  $('#check-link-title').css('background-color','#ff2a2a');
                  $(this).css('border-color','#ff2a2a!important');
                  $(this).css('background','#ff2a2a!important');
                  $(this).css('color','#ff2a2a!important');
                }
              }
            }
          }else{
            $(this).append("#vazio");
                  console.log('link sem title  ' + $(this).attr('href'));  
                  $('#check-link-title').css('background-color','#ff2a2a');
                  $(this).css('border-color','#ff2a2a!important');
                  $(this).css('background','#ff2a2a!important');
                  $(this).css('color','#ff2a2a!important');
          }
        }
      });
    }
    function checklinkhref (){

      $('#check-link-href').css('background-color','#55cd6c');
      $('a:not(.slicknav_item):not(.slicknav_menutxt)').each(function(){
      
        if($(this).attr('href') != undefined){

          if($(this).attr('href').length == 0){
            $(this).append("#vazio");
           console.log('link  href  vazio ' + $(this).html());  
           $('#check-link-href').css('background-color','#ff2a2a');
           $(this).css('border-color','#ff2a2a!important');
           $(this).css('background','#ff2a2a!important');
           $(this).css('color','#ff2a2a!important');
          }
        }else {
          if($(this).attr('class') != undefined){ 
                if(!$(this).attr('class').includes('fancybox')){
            $(this).append("#vazio");
                console.log('link sem href ' + $(this).html());  
                $('#check-link-href').css('background-color','#ff2a2a');
                $(this).css('border-color','#ff2a2a!important');
                $(this).css('background','#ff2a2a!important');
                $(this).css('color','#ff2a2a!important');
            }
          }else{
            $(this).append("#vazio");
                console.log('link sem href ' + $(this).html());  
                $('#check-link-href').css('background-color','#ff2a2a');
                $(this).css('border-color','#ff2a2a!important');
                $(this).css('background','#ff2a2a!important');
                $(this).css('color','#ff2a2a!important');
          }
        }
      });
    }

    $( "#fechar" ).click(function() {
      $('.check').css('display','none');
    });

    // document.addEventListener('keydown', pegaTecla);
    // function pegaTecla(){
    //  var tecla = event.keyCode;
    //  if(tecla == 76){
    //  var texto = window.location.pathname;
    //     var $temp = $("<input>");
    //     $("body").append($temp);
    //     $temp.val(texto).select();
    //     document.execCommand("copy");
    //     $temp.remove();
    //     }
    //  // v
    // }


    function h2Vazia (){
          $('#h2Vazio').css('background-color','#55cd6c');
      var textoH2 =" ";
      $('h2').each(function(){
        textoH2 = $(this).text().trim().length;

        if (textoH2 <= 0 ){
          $('#h2Vazio').css('background-color','#ff2a2a');
          $(this).append("#vazio");
          $(this).css('background-color','#ffd6d2');
        }
      });
    }    
    function checDescription (){
        $('#checkdesc').css('background-color','#55cd6c');
          var description = $('meta[name="description"]').attr('content').trim().length;
          
        if (description <= 139  ){
          $('#checkdesc').css('background-color','#ff2a2a');
        }else if ( description.length >= 160 ){
          $('#checkdesc').css('background-color','#ff2a2a');
        }

    }
    function pVazio (){
      var textoH2 ="";
      $('#pVazio').css('background-color','#55cd6c');
      $('p').each(function(){
        if ($(this) !=  undefined){
        textop = $(this).text().trim().length;
          if (textop <=1 ){
            $(this).append("#vazio");
            $('#pVazio').css('background-color','#ff2a2a');
         
            $(this).css('background-color','#ffd6d2');
          }
        }else{
          $('#pVazio').css('background-color','#ffff2a');
        }
      });
    }
   function checkImage (){
      $('#check-img-src').css('background-color','#55cd6c');
      var srcImg = "";
      $('img').each(function(){
        $(this).on("error", function () {
          console.log('imagem nao carrgada ' + $(this).html());
          
          $(this).css('border-color','#ff2a2a ');
          $(this).css('background-color','#ff2a2a22');
          $('#check-img-src').css('background-color','#ff2a2a');
        });
        if($(this).attr('src') == undefined){
          console.log('imagem nao possui src ' + $(this).html());
          
          $(this).css('border-color','#ff2a2a ');
          $(this).css('background-color','#ff2a2a22');
          $('#check-img-src').css('background-color','#ff2a2a');
        }
          srcImg = $(this).attr('src').trim().length;
          // console.log(srcImg);
          if(srcImg <=1 ){
          console.log('imagem nao possui link no src :' + $(this).html());
          
          $(this).css('border-color','#ff2a2a ');
          $(this).css('background-color','#ff2a2a22');
          $('#check-img-src').css('background-color','#ff2a2a');
        }
      });
    }
 function validaimg(){
  checkImagealt ();
  checkImagetitle ();
  checkImage ();  
 }
  // checkImage ();
  checDescription();
  h2Vazia();
  pVazio();
  checklinkTitle ();
  checklinkhref ();
  checkTitle ();
  checkList ();
  // checkImagealt ();
  // checkImagetitle ();
   

  var div = $('<style>.atalhos{background-color: #ffffff;  height: 40px; width: 40px;  position: fixed; top: 0; right: 0; z-index: 999999; border: solid 2px #02ff1d; }</style> <div id="atalhos" class="atalhos"> <img id="pontinha" src="http://192.170.0.102/pontes/imagens/logo-ico.png" alt="pontes" title="pontes" /> </div>');

    $("body").append(div);

  

 document.addEventListener('keydown', pegaTecla);

    $( "img#pontinha" ).click(function() {
     ajax();

     $( "img#pontinha" ).parent().css('border-color','#000');
     setTimeout(function(){  $( "img#pontinha" ).parent().css('border-color','#02ff1d'); }, 500);
     // alert('123');
    });

    function pegaTecla(){
     var tecla = event.keyCode;
     if(tecla == 76){
        var texto = window.location.pathname;
      var res = texto.split("/");
      texto = res[res.length - 1];
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(texto).select();
        document.execCommand("copy");
        $temp.remove();
        }
        if(tecla == 79){
          ajax();
        }
           if(tecla == 87){
         window.close();
        }

    }
function ajax(){
            
  $.ajax({
          method:'POST',
          url:'open-file.php',
          data:{ link: window.location.href },
          success: function(response){
            console.log(response);
          }
         });

}
});

