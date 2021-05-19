(function () {
  var defaultSettings = {
    locale: 'es',
    autoOpenLauncher: false,
    participants: [],
    messages: []
  }
  var settings = Object.assign(defaultSettings, window['wa-widget-settings'] || {})



  // Create the basic web component for the widget
  var widget = document.createElement('wa-widget')
  widget.setAttribute('token', 'NVSOw3V9HgwZr5LFmRbPWI2YhYB53rBR')
  // Chat window settings
  widget['participants'] = settings.participants
  widget['messages'] = settings.messages
  // Language
  widget.setAttribute('locale', settings.locale)

  // Launcher settings
  widget.setAttribute('hide-on-mobile', false)
  widget.setAttribute('hide-on-desktop', false)
  widget.setAttribute('auto-open-launcher', settings.autoOpenLauncher)
  widget.setAttribute('just-button', true)
  widget.setAttribute('button-number', '522228173180')
  widget.setAttribute('button-message', 'Nececito...')
  widget.setAttribute('id', 'wha')

  // Tooltip Settings
  widget.setAttribute('tooltip-enabled', 'true')

  document.body.appendChild(widget);

  // Append the JS for the web component
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = '/js/sirena.js'
  document.body.appendChild(script)

  // Append the CSS for the web component
  var link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://widget.sirena.app/css/app.css'
  document.head.appendChild(link)

  
})();