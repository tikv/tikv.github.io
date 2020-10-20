(function() {var implementors = {};
implementors["engine_panic"] = [{"text":"impl Peekable for PanicEngine","synthetic":false,"types":[]},{"text":"impl Peekable for PanicSnapshot","synthetic":false,"types":[]}];
implementors["engine_rocks"] = [{"text":"impl Peekable for RocksEngine","synthetic":false,"types":[]},{"text":"impl Peekable for RocksSnapshot","synthetic":false,"types":[]}];
implementors["raftstore"] = [{"text":"impl&lt;S&gt; Peekable for RegionSnapshot&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Snapshot,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()