// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};

const changeWebsiteColorBlue = () => {

  $('.nameCard-container').css('background', '#2823D3')

  $('.aboutME-top-container').css('border-bottom','5px solid #2823D3')

  $('.PB-container').children().css('color','#2823D3')


  $('#contactH1').css('color','#2823D3')
  $('.contact-right').css('background','#2823D3')
  $('#submitBtn').css('background','#2823D3')
  $('.carousel-images').css('background','#2823D3')
  $('.carousel-button').css('color','#2823D3')




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






  $('#btn2').css('border', '2px solid white')

  $('#btn1').css('border', 'none')

  $('#btn3').css('border', 'none')
}


$(() => {
    $('#btn1').on('click', changeWebsiteColorRed)

    $('#btn2').on('click', changeWebsiteColorGreen)

    $('#btn3').on('click', changeWebsiteColorBlue)









    /////////////////////carousel below//////////








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
















})
