               
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
          <script src="Scripts/jquer_latest_2.11_.min.js" type="text/javascript"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" integrity="sha512-BNaRQnYJYiPSqHHDb58B0yaPfCu+Wgds8Gp/gU33kqBtgNS4tSPHuGibyoeqMV/TJlSKda6FXzoEyYGjTe+vXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

           <!--- HTML CONTENT
             <div class="rounded" id="first-page" style="margin-left:5%;width:370px !important;height:250px !important;background-image:url(https://uye.gsyiad.org/documents/gsyiad/cardbg.jpg);background-repeat: no-repeat;background-size: 100% 100%;">
                    //Your Content
             </div>
            ---> 
               
               
               
               <div class="container col-12 text-center">
                      <button class="btn btn-info col-12" id="btn_convert"> İndir</button> 
                </div>
                 <script>
                    $("#btn_convert").on('click', function () {
                        var name = $(".namee").html();
                        var name =name.replaceAll('<br>', '').replaceAll(' ','');
                      html2canvas(document.getElementById("first-page"),		{
                          allowTaint: true,
                          useCORS: true
                      }).then(function (canvas) {
                          var anchorTag = document.createElement("a");
                          document.body.appendChild(anchorTag);
                          anchorTag.download = name;
                          anchorTag.href = canvas.toDataURL();
                          anchorTag.target = '_blank';
                          anchorTag.click();
                      });
                    });
                  </script>
