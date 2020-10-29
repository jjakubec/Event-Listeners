$('.first').on('mousedown', () => {
  document.write("Yeah, you clicked me")
  });
  $('.second').on('mousedown', () => {
    $('.first').html("Button New Text");
    });
    $('.third').on('mousedown', () => {
        $('button').css("background-color", "red");
    });
