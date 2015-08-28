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

});
