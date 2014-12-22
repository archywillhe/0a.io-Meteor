//ↂωↂ is an incident, meow meow meow~
var ↂωↂ = disqusComment;
ↂωↂ.addCBforDefault(function() {
    if (typeof(window.DISQUS) !== "undefined") {
        $(".archycommentsection").css("display", "block");
        window.DISQUS.reset({
            reload: true,
            config: function() {
                this.page.url = document.URL;
            }
        });
    } else {
        $(".archycommentsection").css("display", "block");
        var disqus_shortname = '0ar-ch'; // replace this with your own shortname
        (function() {
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    }
});