var chatReply = [];

var scrollChatbox = function() {
  $("html, body").animate({ scrollTop: $(document).height() }, 1000);
};

var userQuestionBuilder = function(time) {
  $(".chat").append(
    "<li class='self'><div class='avatar'>" +
      "<img src='./assets/images/user.png' draggable='false' />" +
      "</div><div class='msg'><p>" +
      $("#chat-question").val() +
      "</p><time>" +
      time +
      "</time></div></li>"
  );
  $("#chat-question").val("");
  scrollChatbox();
};

var replyProvider = function(chatReply) {
  var today = new Date(),
    time = today.getHours() + ":" + today.getMinutes(),
    reply =
      chatReply[0] != undefined
        ? chatReply[0].doc.body
        : "Sorry I don't get that ?!";
  userQuestionBuilder(time);
  $(".chat").append(
    "<li class='other'><div class='avatar'>" +
      "<img src='./assets/images/bot.png' draggable='false' />" +
      "</div><div class='msg'><p>" +
      reply +
      "</p><time>" +
      time +
      "</time></div></li>"
  );
};

var initResponse = function() {
  chatReply = index.search($("#chat-question").val(), {
    fields: {
      title: { boost: 2, bool: "AND" },
      body: { boost: 1 }
    },
    boolean: "OR",
    expand: true
  });
  replyProvider(chatReply);
};

$(document).ready(function() {
  $("#ask-question").click(function() {
    initResponse();
  });
  $("#chat-question").keypress(function() {
    if (event.which == 13) {
      event.preventDefault();
      initResponse();
    }
  });
});
