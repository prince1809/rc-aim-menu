var ReactDOM = require("react-dom");

var MOUSE_LOCS_TRACKED = 3;


function offset(el) {
  if (!el) {
    return {
      left: 0,
      top: 0
    };
  }

  var rect = el.getBoundingClientRect();
  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
}

function getActivateDelay(config) {
  config = config || {};
  var menu = ReactDOM.findDOMNode(this);

  if (!menu || !menu.querySelector) {
    return 0;
  }
  menu = config.menuSelector ? menu.querySelector(config.menuSelector) : menu;
  var menuOffset = offset(menu);
}

function activate(rowIdentifier, handler) {
  handler.call(this, rowIdentifier);
}

function possiblyActivate(rowIdentifier, handler, config) {
  var delay = getActivateDelay.call(this, config);

  if (delay) {

  } else {
    activate.call(this, rowIdentifier, handler);
  }
}

/**
 * @export
 */
module.exports = expors = {
  initMenuAim: function (options) {
    this.__reactMenuAimConfig = options;
  },

  handleMouseEnterRow: function (rowIdentifier, handler) {
    if (this.__reactMenuAimTimer) {
      clearTimeout(this.__reactMenuAimTimer);
    }

    possiblyActivate.call(this, rowIdentifier, handler, this.__reactMenuAimConfig);
  }
};