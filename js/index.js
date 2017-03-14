function posTop () {
  return typeof window.pageYOffset !== 'undefined' ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0
}

var base = 0, // 图片初始位置
  speed = 0.025, // 速度
  isFF = navigator.userAgent.indexOf('Firefox') != -1,
  head = posTop(),
  container = document.body

var img = new Image()
img.src = '//littlelyon.com/img/stars.jpg'

var scrollFunc = function () {
  container.style['background-position'] = '0 ' + (head * speed - 260) + 'px'

  head = posTop()
}

var loaded = function () {
  container.style['background-image'] = 'url(//littlelyon.com/img/stars.jpg)'
  container.style['background-position'] = '0 ' + (head * speed - 260) + 'px'
}

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) window.onscroll = scrollFunc

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    loaded()
  }
}
