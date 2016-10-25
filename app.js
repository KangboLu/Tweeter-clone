$(document).ready(function() {
  $('#tweet-button').click(function() {
    var tweetText = $('#tweet-text-box').val();
    var tweetListEl = $('#tweet-list-container');

    tweetListEl.append('<li>' + tweetText + '</li>');
  });
});