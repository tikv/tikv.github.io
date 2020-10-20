(function() {var implementors = {};
implementors["hyper"] = [];
implementors["hyper_openssl"] = [{"text":"impl&lt;T&gt; Connection for MaybeHttpsStream&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Connection,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["hyper_tls"] = [{"text":"impl&lt;T:&nbsp;AsyncRead + AsyncWrite + Connection + Unpin&gt; Connection for MaybeHttpsStream&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()