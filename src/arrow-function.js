$('#btn').click(function() {
  let $that = $(this);
  $(this).text('로딩중');

  setTimeout(function() {
    $that.text('로딩완료');
  }, 1000);
});
