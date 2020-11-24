(function() {var implementors = {};
implementors["ahash"] = [{"text":"impl&lt;K, V, S&gt; FromIterator&lt;(K, V)&gt; for AHashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; FromIterator&lt;T&gt; for AHashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["arrayvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; FromIterator&lt;&lt;A as Array&gt;::Item&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["bstr"] = [{"text":"impl FromIterator&lt;char&gt; for BString","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;u8&gt; for BString","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromIterator&lt;&amp;'a str&gt; for BString","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromIterator&lt;&amp;'a [u8]&gt; for BString","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromIterator&lt;&amp;'a BStr&gt; for BString","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;BString&gt; for BString","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl FromIterator&lt;u8&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; FromIterator&lt;&amp;'a u8&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;u8&gt; for Bytes","synthetic":false,"types":[]}];
implementors["cdc"] = [{"text":"impl FromIterator&lt;FeatureGate&gt; for FeatureGate","synthetic":false,"types":[]}];
implementors["crossbeam_deque"] = [{"text":"impl&lt;T&gt; FromIterator&lt;Steal&lt;T&gt;&gt; for Steal&lt;T&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_skiplist"] = [{"text":"impl&lt;K, V&gt; FromIterator&lt;(K, V)&gt; for SkipMap&lt;K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Ord,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; FromIterator&lt;T&gt; for SkipSet&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["dashmap"] = [{"text":"impl&lt;K:&nbsp;Eq + Hash&gt; FromIterator&lt;K&gt; for DashSet&lt;K, RandomState&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K:&nbsp;Eq + Hash, V&gt; FromIterator&lt;(K, V)&gt; for DashMap&lt;K, V, RandomState&gt;","synthetic":false,"types":[]}];
implementors["futures"] = [{"text":"impl&lt;F:&nbsp;Future&gt; FromIterator&lt;F&gt; for FuturesUnordered&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;Future&gt; FromIterator&lt;F&gt; for FuturesOrdered&lt;F&gt;","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;F:&nbsp;Future&gt; FromIterator&lt;F&gt; for JoinAll&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Fut:&nbsp;Future + Unpin&gt; FromIterator&lt;Fut&gt; for SelectAll&lt;Fut&gt;","synthetic":false,"types":[]},{"text":"impl&lt;F:&nbsp;TryFuture&gt; FromIterator&lt;F&gt; for TryJoinAll&lt;F&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Fut:&nbsp;TryFuture + Unpin&gt; FromIterator&lt;Fut&gt; for SelectOk&lt;Fut&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Fut:&nbsp;Future&gt; FromIterator&lt;Fut&gt; for FuturesOrdered&lt;Fut&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Fut&gt; FromIterator&lt;Fut&gt; for FuturesUnordered&lt;Fut&gt;","synthetic":false,"types":[]},{"text":"impl&lt;St:&nbsp;Stream + Unpin&gt; FromIterator&lt;St&gt; for SelectAll&lt;St&gt;","synthetic":false,"types":[]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; FromIterator&lt;T&gt; for GenericArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl&lt;T&gt; FromIterator&lt;(HeaderName, T)&gt; for HeaderMap&lt;T&gt;","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;T, S&gt; FromIterator&lt;T&gt; for IndexSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;K, V, S&gt; FromIterator&lt;(K, V)&gt; for IndexMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["linked_hash_map"] = [{"text":"impl&lt;K:&nbsp;Hash + Eq, V, S:&nbsp;BuildHasher + Default&gt; FromIterator&lt;(K, V)&gt; for LinkedHashMap&lt;K, V, S&gt;","synthetic":false,"types":[]}];
implementors["linked_hash_set"] = [{"text":"impl&lt;T, S&gt; FromIterator&lt;T&gt; for LinkedHashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["nix"] = [{"text":"impl FromIterator&lt;AtFlags&gt; for AtFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;OFlag&gt; for OFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SealFlag&gt; for SealFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SpliceFFlags&gt; for SpliceFFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;FallocateFlags&gt; for FallocateFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;ModuleInitFlags&gt; for ModuleInitFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;DeleteModuleFlags&gt; for DeleteModuleFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MntFlags&gt; for MntFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MQ_OFlag&gt; for MQ_OFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;InterfaceFlags&gt; for InterfaceFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;PollFlags&gt; for PollFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;CloneFlags&gt; for CloneFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;EpollFlags&gt; for EpollFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;EpollCreateFlags&gt; for EpollCreateFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;EfdFlags&gt; for EfdFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MemFdCreateFlag&gt; for MemFdCreateFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;ProtFlags&gt; for ProtFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MapFlags&gt; for MapFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MlockAllFlags&gt; for MlockAllFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;Options&gt; for Options","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;QuotaValidFlags&gt; for QuotaValidFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SaFlags&gt; for SaFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SfdFlags&gt; for SfdFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SockFlag&gt; for SockFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MsgFlags&gt; for MsgFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SFlag&gt; for SFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;Mode&gt; for Mode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;FsFlags&gt; for FsFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;InputFlags&gt; for InputFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;OutputFlags&gt; for OutputFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;ControlFlags&gt; for ControlFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;LocalFlags&gt; for LocalFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;WaitPidFlag&gt; for WaitPidFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;AddWatchFlags&gt; for AddWatchFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;InitFlags&gt; for InitFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;AccessFlags&gt; for AccessFlags","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl FromIterator&lt;CMSOptions&gt; for CMSOptions","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;OcspFlag&gt; for OcspFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;Pkcs7Flags&gt; for Pkcs7Flags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SslOptions&gt; for SslOptions","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SslMode&gt; for SslMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SslVerifyMode&gt; for SslVerifyMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SslSessionCacheMode&gt; for SslSessionCacheMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;ExtensionContext&gt; for ExtensionContext","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;ShutdownState&gt; for ShutdownState","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;X509CheckFlags&gt; for X509CheckFlags","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl FromIterator&lt;TokenTree&gt; for TokenStream","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;TokenStream&gt; for TokenStream","synthetic":false,"types":[]}];
implementors["procfs"] = [{"text":"impl FromIterator&lt;NFSServerCaps&gt; for NFSServerCaps","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;StatFlags&gt; for StatFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;CoredumpFlags&gt; for CoredumpFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;FDPermissions&gt; for FDPermissions","synthetic":false,"types":[]}];
implementors["protobuf"] = [{"text":"impl&lt;T&gt; FromIterator&lt;T&gt; for RepeatedField&lt;T&gt;","synthetic":false,"types":[]}];
implementors["raftstore"] = [{"text":"impl FromIterator&lt;PeerTicks&gt; for PeerTicks","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;ProposalContext&gt; for ProposalContext","synthetic":false,"types":[]}];
implementors["rgb"] = [{"text":"impl&lt;T&gt; FromIterator&lt;T&gt; for RGB&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; FromIterator&lt;T&gt; for RGBA&lt;T&gt;","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl FromIterator&lt;(String, Value)&gt; for Map&lt;String, Value&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Into&lt;Value&gt;&gt; FromIterator&lt;T&gt; for Value","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; FromIterator&lt;&lt;A as Array&gt;::Item&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["str_stack"] = [{"text":"impl&lt;S&gt; FromIterator&lt;S&gt; for StrStack <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl&lt;T, P&gt; FromIterator&lt;T&gt; for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, P&gt; FromIterator&lt;Pair&lt;T, P&gt;&gt; for Punctuated&lt;T, P&gt;","synthetic":false,"types":[]}];
implementors["tidb_query_datatype"] = [{"text":"impl FromIterator&lt;FieldTypeFlag&gt; for FieldTypeFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;WeekMode&gt; for WeekMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;Flags&gt; for Flags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SqlMode&gt; for SqlMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;Flag&gt; for Flag","synthetic":false,"types":[]}];
implementors["toml"] = [{"text":"impl FromIterator&lt;(String, Value)&gt; for Map&lt;String, Value&gt;","synthetic":false,"types":[]}];
implementors["vec_map"] = [{"text":"impl&lt;V&gt; FromIterator&lt;(usize, V)&gt; for VecMap&lt;V&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()