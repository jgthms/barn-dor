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
    script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3&appId=470761896424893';
    document.body.appendChild(script);
    script = document.createElement('script');
    script.async = true;
    script.id = 'twitter-wjs';
    script.src = 'https://platform.twitter.com/widgets.js';
    document.body.appendChild(script);
    var callback;
    callback = function() {
      return $('#share').fadeTo(1000, 1);
    };
    return setTimeout(callback, 1000);
  };

  $(window).load(function() {
    var callback;
    callback = function() {
      return loadSocialScripts();
    };
    return setTimeout(callback, 2000);
  });

});
