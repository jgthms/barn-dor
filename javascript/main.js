jQuery(document).ready(function ($) {

  // Images

  $('.item img').lazy();

  // Social

  var loadSocialScripts;

  loadSocialScripts = function() {
    var script;
    script = document.createElement('script');
    script.async = true;
    script.id = 'facebook-jssdk';
    script.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=833082990133303';
    document.body.appendChild(script);
    script = document.createElement('script');
    script.async = true;
    script.id = 'twitter-wjs';
    script.src = '//platform.twitter.com/widgets.js';
    document.body.appendChild(script);
    var callback;
    callback = function() {
      return $('#share').fadeTo(500, 1);
    };
    return setTimeout(callback, 500);
  };

  $(window).load(function() {
    var callback;
    callback = function() {
      return loadSocialScripts();
    };
    return setTimeout(callback, 2000);
  });

  // Interaction

  var $items = $('#list > .item');
  var $buttons = $items.find('.watch');
  var $modal = $('#modal');
  var $media = $('#media');
  var $list = $('#list');
  var $info = $('#info');
  var $previous = $('#previous');
  var $close = $('#close');
  var $next = $('#next');
  var current = -1;
  var total = $items.length;

  console.log(total);

  function openModal() {
    $('html').addClass('modal-open');
  }

  function closeModal() {
    $('html').removeClass('modal-open');
    $media.html('');
    $info.html('');
  }

  function loadVideo(provider, url, type) {
    var htmlVideo = '';
    if (provider == 'gfycat') {
      htmlVideo = '<video class="media-item" autoplay="" loop="" muted="muted"><source src="http://zippy.gfycat.com/' + url + '.webm" type="video/webm"><source src="http://fat.gfycat.com/' + url + '.webm" type="video/webm"><source src="http://giant.gfycat.com/' + url + '.mp4" type="video/mp4"></video>';
    } else if (provider == 'streamable') {
      htmlVideo = '<video class="media-item" autoplay="" loop="" muted="muted"><source src="http://cdn2.streamable.com/video/' + url + '.' + type +'" type="video/' + type +'"></video>';
    } else if (provider == 'youtube') {
      htmlVideo = '<iframe class="media-item" width="640" height="480" src="https://www.youtube.com/embed/' + url + '" frameborder="0" allowfullscreen></iframe>';
    } else {
      htmlVideo = 'Not supported';
    }
    $media.html(htmlVideo);
  }

  function loadInfo(number, name) {
    $info.html(number + '. ' + name);
  }

  function loadItem() {
    console.log(current);
    var $this = $items.eq(current);
    var index = $this.find('.index').text();
    var name = $this.find('.name').text();
    var $button = $this.find('.watch');
    var provider = $button.data('provider');
    var url = $button.data('url');
    var type = $button.data('type');
    loadInfo(index, name);
    loadVideo(provider, url, type);
    openModal();
  }

  $buttons.click(function(e) {
    e.preventDefault();
    current = $(this).parent().index();
    loadItem();
  });

  $close.click(function(e) {
    closeModal();
  });

  $previous.click(function(e) {
    current == 0 ? 0 : current--;
    loadItem();
  });

  $next.click(function(e) {
    current == (total - 1) ? (total - 1) : current++;
    loadItem();
  });

  $modal.click(function(e) {
    closeModal();
    e.stopPropagation();
  }).children().click(function(e) {
    return false;
  });

});
