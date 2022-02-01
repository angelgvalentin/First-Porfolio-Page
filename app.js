// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};



////////scarlett solution for changing hover color
///$link.css(`color`, `${scheme.color4}`)
    // $icon.css(`color`, `${scheme.color4}`)
    // $(`.link`).hover(function(){
    //   $(this).css(`color`, `${scheme.color5}`);
    // }, function(){
    //   $(this).css(`color`, `${scheme.color4}`);
    // });
    // $(`.icon`).hover(function(){
    //   $(this).css(`color`, `${scheme.color5}`);
    // }, function(){
    //   $(this).css(`color`, `${scheme.color4}`);
    // });
    //
    //



const changeWebsiteColorBlue = () => {

  $('.nameCard-container').css('background', '#6666FF')

  $('.aboutME-top-container').css('border-bottom','5px solid #6666FF')

  $('.PB-container').children().css('color','#6666FF')


  $('#contactH1').css('color','#6666FF')
  $('.contact-right').css('background','#6666FF')
  $('#submitBtn').css('background','#6666FF')
  $('.carousel-images').css('background','#6666FF')
  $('.carousel-button').css('color','#6666FF')

  $('.readmore-btn').css('background','#6666FF')

  $('.modal-buttons').css('background','#6666FF')

  $('#back2topBtn').css('background','#6666FF')


  $('h4').css('color','#6666FF')
    /////////////////////Change Color Button border accoring to active color//////////
  $('#btn3').css('border', '2px solid white')

  $('#btn1').css('border', 'none')
  $('#btn2').css('border', 'none')
}



const changeWebsiteColorRed = () => {

  $('.nameCard-container').css('background', '#FB4646')

  $('.aboutME-top-container').css('border-bottom','5px solid #FB4646')

  $('.PB-container').children().css('color','#FB4646')

  $('#contactH1').css('color','#FB4646')
  $('.contact-right').css('background','#FB4646')
  $('#submitBtn').css('background','#FB4646')
  $('.carousel-images').css('background','#FB4646')
  $('.carousel-button').css('color','#FB4646')

  $('.readmore-btn').css('background','#FB4646')

  $('.modal-buttons').css('background','#FB4646')

$('#back2topBtn').css('background','#FB4646')


    $('h4').css('color','#FB4646')

    /////////////////////Change Color Button border accoring to active color//////////
  $('#btn1').css('border', '2px solid white')

  $('#btn2').css('border', 'none')
  $('#btn3').css('border', 'none')

}





const changeWebsiteColorGreen = () => {

  $('.nameCard-container').css('background', '#28D323')

  $('.aboutME-top-container').css('border-bottom','5px solid #28D323')

  $('.PB-container').children().css('color','#28D323')


  $('#contactH1').css('color','#28D323')
  $('.contact-right').css('background','#28D323')
  $('#submitBtn').css('background','#28D323')
  $('.carousel-images').css('background','#28D323')
  $('.carousel-button').css('color','#28D323')

  $('.readmore-btn').css('background','#28D323')

  $('h4').css('color','#28D323')

  $('.modal-buttons').css('background','#28D323')

    $('#back2topBtn').css('background','#28D323')


    /////////////////////Change Color Button border accoring to active color//////////
  $('#btn2').css('border', '2px solid white')

  $('#btn1').css('border', 'none')

  $('#btn3').css('border', 'none')
}


$(() => {
    $('#btn1').on('click', changeWebsiteColorRed)

    $('#btn2').on('click', changeWebsiteColorGreen)

    $('#btn3').on('click', changeWebsiteColorBlue)









    ///////////////////// PROJECTS carousel below//////////



    currentImgIndex = 0
      numOfImages = $('.carousel-images').children().length - 1
      $('.next').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        if (currentImgIndex < numOfImages) {
          currentImgIndex++
        } else {
          currentImgIndex = 0
        }
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')

      })

      $('.previous').on('click', () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        if (currentImgIndex > 0) {
          currentImgIndex--
        } else {
          currentImgIndex = numOfImages
        }
            $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')

      })





          /////////////////////Read More/Less Button//////////

      $(".readmore-btn").on('click', function(){
          $(this).parent().toggleClass("showContent");


          if ($(".readmore-btn").parent().hasClass("showContent")) {
            $(this).text("Read Less");

          } else {
            $(".readmore-btn").text("Read More")
          }


      });







        /////////////////////modal for message sent///////////////
      $(() => {
    const $openBtn = $('#submitBtn')
    const $modal = $('#modal')
    const $closeBtn = $('#close')

    const openModal = () => {
        // $modal.css('display', 'block')
        $modal.slideDown(500)
    }

    const closeModal  = () => {
        // $modal.css('display','none')
        $modal.slideUp(500)
    }

    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)

    // setTimeout(openModal, 2000)
})



})
