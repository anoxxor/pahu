function debug()
{
  let mode = 'border'; // border | outline

  $('html').prepend('<style>body.debug--border * { border:1px solid red; }body.debug--border div { border:1px solid green; }body.debug--border a { border:1px solid #6A5ACD; }body.debug--border img,body.debug--border svg { border:1px solid #FF0; }body.debug--outline * { outline:1px solid red; }body.debug--outline div { outline:1px solid green; }body.debug--outline a { outline:1px solid #6A5ACD; }body.debug--outline img,body.debug--outline svg { outline:1px solid #FF0; }#debug-button.active { background-color:#2ECC71; }#debug-button { position:fixed; top:0; left:0; z-index:99999; opacity:0.5; outline:none; border:none; }#debug-mode-button { position:fixed; top:20; left:0; z-index:99999; opacity:0.5; outline:none; border:none; }</sytle>');

  let debugButton$ = $('<button id="debug-button">debug</button>');
  $('body').append(debugButton$);

  let switchModeButton$ = $(`<button id="debug-mode-button">${mode}</button>`);
  $('body').append(switchModeButton$);

  debugButton$.click(function() {
    console.log('emit')
    let this$ = $(this);
    this$.toggleClass('active')
    $('body').toggleClass('debug--' + mode);
  });

  switchModeButton$.click(function() {
    $('body').removeClass('debug--' + mode);
    mode === 'border' ? mode = 'outline' : mode = 'border';
    $('body').addClass('debug--' + mode);
    $(this).text(mode);
    debugButton$.addClass('active');
  })
}


