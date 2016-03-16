'use strict';

function state(player, values, callback) {
  var state = player.getState();
  callback.invokeIntended = true;
  
  callback({
    "response_type": "in_channel",
    "text": "You preformed the _state_ action.",
    "attachments": [ 
      { 
        "author_name": state.currentTrack.artist,
        "title": state.currentTrack.title,
        "text": state.currentTrack.album,
        "color": "#36a64f"
      }
    ]
  });
}

module.exports = function (api) {
  api.registerAction('state', state);
}
