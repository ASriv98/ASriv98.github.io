$(function() {
  $(".typed").typed({
    strings: [
      "man ASriv98<br/>" + 
      "><span class='caret'>$</span> skills: C++, Python, C, R, VHDL, Java, Assembly (MIPS)<br/> ^100" +
      "><span class='caret'>$</span> job: Associate Software Engineer at <a href='http://www.scitec.com/'>Scitec Inc.</a><br/> ^100" +
      "><span class='caret'>$</span> education: B.S and M.S Computer Engineering at <a href='https://soe.rutgers.edu'>Rutgers University</a><br/> ^100" +
      "><span class='caret'>$</span> hobbies: fitness, travel, motorcycling, sports, investing, enjoying life and philosophizing ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});