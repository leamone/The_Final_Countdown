
$('.container-sm').on('click', '#chat-submit', function (event) {
  event.preventDefault();
  const usernameChat = $('#chat-username-input').val();
  const date = getDate();
  const message = $('#message-text').val();

  $('#newEntry').append(
    `<div class="col-12 my-1" id="chat-color">
        <div class="row">
          <div class="col">
            <div style="border-bottom: 1px solid ivory; width: max-content">
              <span >${usernameChat}</span>
              <span style="border-bottom: ivory;" class="px-2 text-muted">${date}</span>
            </div>
            <div><small>${message}</small></div>
          </div>
        </div>
        </div>
        `);
  $('#message-text').val('');

  let realHeight = $("#newEntry")[0].scrollHeight;
  $("#chat-messages").scrollTop(realHeight);
});
  
function getDate() {
    let currentdate = new Date();
    let minutes = '';
    if (currentdate.getMinutes() < 10) {
      minutes = '0' + currentdate.getMinutes()
    } else {
      minutes = currentdate.getMinutes()
    };
  
    let datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth() + 1) + "/"
      + currentdate.getFullYear() + "  "
      + currentdate.getHours() + ":"
      + minutes;
    return datetime;
  };
  $("button").click(function () {
    $("div").scrollTop($("div").children().height());
  });