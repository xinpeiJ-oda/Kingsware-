require(['gitbook', 'jQuery'], function (gitbook, $) {
  var url = ''
  var style = ''
  var insertLogo = function (url, style) {
    

    let s = '/Doc/'
    let href = location.href
    if(href.indexOf(s) !== -1){
        url = href.substring(0,href.indexOf(s) + s.length + 32) + '/logo.png'
    }

    $('.book-summary').children().eq(0).before('<div style="height:120px;" class="book-logo"><img  src="' + url + '" style="' + style + '"></div>')
  }
  gitbook.events.bind('start', function (e, config) {
    url = config['insert-logo']['url']
    style = config['insert-logo']['style']
  })

  gitbook.events.bind("page.change", function() {
    insertLogo(url, style)
  })
})
