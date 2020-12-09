(function() {var implementors = {};
implementors["ahash"] = [{"text":"impl&lt;T, S, '_, '_&gt; Sub&lt;&amp;'_ AHashSet&lt;T, S&gt;&gt; for &amp;'_ AHashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["async_speed_limit"] = [{"text":"impl Sub&lt;Nanoseconds&gt; for Nanoseconds","synthetic":false,"types":[]}];
implementors["cdc"] = [{"text":"impl Sub&lt;FeatureGate&gt; for FeatureGate","synthetic":false,"types":[]}];
implementors["chrono"] = [{"text":"impl Sub&lt;FixedOffset&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;FixedOffset&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;FixedOffset&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl Sub&lt;NaiveDate&gt; for NaiveDate","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;NaiveTime&gt; for NaiveTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;NaiveDateTime&gt; for NaiveDateTime","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;Duration&gt; for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;Date&lt;Tz&gt;&gt; for Date&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;Duration&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Tz:&nbsp;TimeZone&gt; Sub&lt;DateTime&lt;Tz&gt;&gt; for DateTime&lt;Tz&gt;","synthetic":false,"types":[]}];
implementors["dashmap"] = [{"text":"impl&lt;'a, K:&nbsp;'a + Eq + Hash, V:&nbsp;'a, S:&nbsp;BuildHasher + Clone, Q:&nbsp;?Sized, '_&gt; Sub&lt;&amp;'_ Q&gt; for &amp;'a DashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Borrow&lt;Q&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Q: Hash + Eq,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;'a, 'b, T, S1, S2&gt; Sub&lt;&amp;'b IndexSet&lt;T, S2&gt;&gt; for &amp;'a IndexSet&lt;T, S1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S1: BuildHasher + Default,<br>&nbsp;&nbsp;&nbsp;&nbsp;S2: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["linked_hash_set"] = [{"text":"impl&lt;'a, 'b, T, S&gt; Sub&lt;&amp;'b LinkedHashSet&lt;T, S&gt;&gt; for &amp;'a LinkedHashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Sub&lt;PollOpt&gt; for PollOpt","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Into&lt;Ready&gt;&gt; Sub&lt;T&gt; for Ready","synthetic":false,"types":[]},{"text":"impl Sub&lt;UnixReady&gt; for UnixReady","synthetic":false,"types":[]}];
implementors["nix"] = [{"text":"impl Sub&lt;AtFlags&gt; for AtFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;OFlag&gt; for OFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;SealFlag&gt; for SealFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;SpliceFFlags&gt; for SpliceFFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;FallocateFlags&gt; for FallocateFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;ModuleInitFlags&gt; for ModuleInitFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;DeleteModuleFlags&gt; for DeleteModuleFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MntFlags&gt; for MntFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MQ_OFlag&gt; for MQ_OFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;FdFlag&gt; for FdFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;InterfaceFlags&gt; for InterfaceFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;PollFlags&gt; for PollFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;CloneFlags&gt; for CloneFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;EpollFlags&gt; for EpollFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;EpollCreateFlags&gt; for EpollCreateFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;EfdFlags&gt; for EfdFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MemFdCreateFlag&gt; for MemFdCreateFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;ProtFlags&gt; for ProtFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MapFlags&gt; for MapFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MsFlags&gt; for MsFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;MlockAllFlags&gt; for MlockAllFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;Options&gt; for Options","synthetic":false,"types":[]},{"text":"impl Sub&lt;QuotaValidFlags&gt; for QuotaValidFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;SaFlags&gt; for SaFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;SfdFlags&gt; for SfdFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;SockFlag&gt; for SockFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;MsgFlags&gt; for MsgFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;SFlag&gt; for SFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;Mode&gt; for Mode","synthetic":false,"types":[]},{"text":"impl Sub&lt;FsFlags&gt; for FsFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;InputFlags&gt; for InputFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;OutputFlags&gt; for OutputFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;ControlFlags&gt; for ControlFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;LocalFlags&gt; for LocalFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;TimeSpec&gt; for TimeSpec","synthetic":false,"types":[]},{"text":"impl Sub&lt;TimeVal&gt; for TimeVal","synthetic":false,"types":[]},{"text":"impl Sub&lt;WaitPidFlag&gt; for WaitPidFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;AddWatchFlags&gt; for AddWatchFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;InitFlags&gt; for InitFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;TimerFlags&gt; for TimerFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;TimerSetTimeFlags&gt; for TimerSetTimeFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;AccessFlags&gt; for AccessFlags","synthetic":false,"types":[]}];
implementors["num_complex"] = [{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Num&gt; Sub&lt;&amp;'b Complex&lt;T&gt;&gt; for &amp;'a Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Sub&lt;Complex&lt;T&gt;&gt; for &amp;'a Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Sub&lt;&amp;'a Complex&lt;T&gt;&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Num&gt; Sub&lt;Complex&lt;T&gt;&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Num&gt; Sub&lt;T&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Sub&lt;&amp;'a T&gt; for Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;Clone + Num&gt; Sub&lt;T&gt; for &amp;'a Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Num&gt; Sub&lt;&amp;'a T&gt; for &amp;'b Complex&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;usize&gt;&gt; for usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;usize&gt;&gt; for &amp;'a usize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;usize&gt;&gt; for &amp;'b usize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;u8&gt;&gt; for u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;u8&gt;&gt; for &amp;'a u8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;u8&gt;&gt; for &amp;'b u8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;u16&gt;&gt; for u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;u16&gt;&gt; for &amp;'a u16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;u16&gt;&gt; for &amp;'b u16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;u32&gt;&gt; for u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;u32&gt;&gt; for &amp;'a u32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;u32&gt;&gt; for &amp;'b u32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;u64&gt;&gt; for u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;u64&gt;&gt; for &amp;'a u64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;u64&gt;&gt; for &amp;'b u64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;u128&gt;&gt; for u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;u128&gt;&gt; for &amp;'a u128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;u128&gt;&gt; for &amp;'b u128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;isize&gt;&gt; for isize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;isize&gt;&gt; for &amp;'a isize","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;isize&gt;&gt; for &amp;'b isize","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;i8&gt;&gt; for i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;i8&gt;&gt; for &amp;'a i8","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;i8&gt;&gt; for &amp;'b i8","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;i16&gt;&gt; for i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;i16&gt;&gt; for &amp;'a i16","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;i16&gt;&gt; for &amp;'b i16","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;i32&gt;&gt; for i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;i32&gt;&gt; for &amp;'a i32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;i32&gt;&gt; for &amp;'b i32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;i64&gt;&gt; for i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;i64&gt;&gt; for &amp;'a i64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;i64&gt;&gt; for &amp;'b i64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;i128&gt;&gt; for i128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;i128&gt;&gt; for &amp;'a i128","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;i128&gt;&gt; for &amp;'b i128","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;f32&gt;&gt; for f32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;f32&gt;&gt; for &amp;'a f32","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;f32&gt;&gt; for &amp;'b f32","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;&amp;'a Complex&lt;f64&gt;&gt; for f64","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Sub&lt;Complex&lt;f64&gt;&gt; for &amp;'a f64","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Complex&lt;f64&gt;&gt; for &amp;'b f64","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;usize&gt;&gt; for usize","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;u8&gt;&gt; for u8","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;u16&gt;&gt; for u16","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;u32&gt;&gt; for u32","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;u64&gt;&gt; for u64","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;u128&gt;&gt; for u128","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;isize&gt;&gt; for isize","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;i8&gt;&gt; for i8","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;i16&gt;&gt; for i16","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;i32&gt;&gt; for i32","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;i64&gt;&gt; for i64","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;i128&gt;&gt; for i128","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;f32&gt;&gt; for f32","synthetic":false,"types":[]},{"text":"impl Sub&lt;Complex&lt;f64&gt;&gt; for f64","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Integer&gt; Sub&lt;&amp;'b Ratio&lt;T&gt;&gt; for &amp;'a Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, T:&nbsp;Clone + Integer&gt; Sub&lt;&amp;'b T&gt; for &amp;'a Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;Ratio&lt;T&gt;&gt; for &amp;'a Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;T&gt; for &amp;'a Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;&amp;'a Ratio&lt;T&gt;&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Sub&lt;&amp;'a T&gt; for Ratio&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Clone + Integer,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Integer&gt; Sub&lt;Ratio&lt;T&gt;&gt; for Ratio&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone + Integer&gt; Sub&lt;T&gt; for Ratio&lt;T&gt;","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b BigNumRef&gt; for &amp;'a BigNumRef","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b BigNum&gt; for &amp;'a BigNumRef","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b BigNumRef&gt; for &amp;'a BigNum","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'b BigNum&gt; for &amp;'a BigNum","synthetic":false,"types":[]},{"text":"impl Sub&lt;CMSOptions&gt; for CMSOptions","synthetic":false,"types":[]},{"text":"impl Sub&lt;OcspFlag&gt; for OcspFlag","synthetic":false,"types":[]},{"text":"impl Sub&lt;Pkcs7Flags&gt; for Pkcs7Flags","synthetic":false,"types":[]},{"text":"impl Sub&lt;SslOptions&gt; for SslOptions","synthetic":false,"types":[]},{"text":"impl Sub&lt;SslMode&gt; for SslMode","synthetic":false,"types":[]},{"text":"impl Sub&lt;SslVerifyMode&gt; for SslVerifyMode","synthetic":false,"types":[]},{"text":"impl Sub&lt;SslSessionCacheMode&gt; for SslSessionCacheMode","synthetic":false,"types":[]},{"text":"impl Sub&lt;ExtensionContext&gt; for ExtensionContext","synthetic":false,"types":[]},{"text":"impl Sub&lt;ShutdownState&gt; for ShutdownState","synthetic":false,"types":[]},{"text":"impl Sub&lt;X509CheckFlags&gt; for X509CheckFlags","synthetic":false,"types":[]}];
implementors["ordered_float"] = [{"text":"impl&lt;T:&nbsp;Float&gt; Sub&lt;OrderedFloat&lt;T&gt;&gt; for OrderedFloat&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Float&gt; Sub&lt;NotNan&lt;T&gt;&gt; for NotNan&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Float&gt; Sub&lt;T&gt; for NotNan&lt;T&gt;","synthetic":false,"types":[]}];
implementors["procfs"] = [{"text":"impl Sub&lt;NFSServerCaps&gt; for NFSServerCaps","synthetic":false,"types":[]},{"text":"impl Sub&lt;StatFlags&gt; for StatFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;CoredumpFlags&gt; for CoredumpFlags","synthetic":false,"types":[]},{"text":"impl Sub&lt;FDPermissions&gt; for FDPermissions","synthetic":false,"types":[]}];
implementors["raftstore"] = [{"text":"impl Sub&lt;PeerTicks&gt; for PeerTicks","synthetic":false,"types":[]},{"text":"impl Sub&lt;ProposalContext&gt; for ProposalContext","synthetic":false,"types":[]}];
implementors["rgb"] = [{"text":"impl&lt;T:&nbsp;Sub&gt; Sub&lt;RGB&lt;T&gt;&gt; for RGB&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Sub&lt;T&gt; for RGB&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub&lt;Output = T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Sub, A:&nbsp;Sub&gt; Sub&lt;RGBA&lt;T, A&gt;&gt; for RGBA&lt;T, A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Sub&lt;T&gt; for RGBA&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Copy + Sub,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["tidb_query_datatype"] = [{"text":"impl Sub&lt;FieldTypeFlag&gt; for FieldTypeFlag","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; Sub&lt;&amp;'a Decimal&gt; for &amp;'b Decimal","synthetic":false,"types":[]},{"text":"impl Sub&lt;WeekMode&gt; for WeekMode","synthetic":false,"types":[]},{"text":"impl Sub&lt;Flags&gt; for Flags","synthetic":false,"types":[]},{"text":"impl Sub&lt;SqlMode&gt; for SqlMode","synthetic":false,"types":[]},{"text":"impl Sub&lt;Flag&gt; for Flag","synthetic":false,"types":[]}];
implementors["tikv"] = [{"text":"impl Sub&lt;PerfStatisticsFields&gt; for PerfStatisticsFields","synthetic":false,"types":[]},{"text":"impl Sub&lt;PerfStatisticsDelta&gt; for PerfStatisticsDelta","synthetic":false,"types":[]}];
implementors["tikv_util"] = [{"text":"impl Sub&lt;LiunxStyleCpuTime&gt; for LiunxStyleCpuTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Instant","synthetic":false,"types":[]},{"text":"impl Sub&lt;Instant&gt; for Instant","synthetic":false,"types":[]}];
implementors["time"] = [{"text":"impl Sub&lt;Duration&gt; for Date","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Date","synthetic":false,"types":[]},{"text":"impl Sub&lt;Date&gt; for Date","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Duration","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Duration","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for StdDuration","synthetic":false,"types":[]},{"text":"impl Sub&lt;Instant&gt; for Instant","synthetic":false,"types":[]},{"text":"impl Sub&lt;Instant&gt; for Instant","synthetic":false,"types":[]},{"text":"impl Sub&lt;Instant&gt; for StdInstant","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Instant","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for StdInstant","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Instant","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for OffsetDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for OffsetDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;OffsetDateTime&gt; for OffsetDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for SystemTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;SystemTime&gt; for OffsetDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;OffsetDateTime&gt; for SystemTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for PrimitiveDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for PrimitiveDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;PrimitiveDateTime&gt; for PrimitiveDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;SystemTime&gt; for PrimitiveDateTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;PrimitiveDateTime&gt; for SystemTime","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Time","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Time","synthetic":false,"types":[]},{"text":"impl Sub&lt;Time&gt; for Time","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl Sub&lt;Instant&gt; for Instant","synthetic":false,"types":[]},{"text":"impl Sub&lt;Duration&gt; for Instant","synthetic":false,"types":[]}];
implementors["typenum"] = [{"text":"impl Sub&lt;Z0&gt; for Z0","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Sub&lt;PInt&lt;U&gt;&gt; for Z0","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Sub&lt;NInt&lt;U&gt;&gt; for Z0","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Sub&lt;Z0&gt; for PInt&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned + NonZero&gt; Sub&lt;Z0&gt; for NInt&lt;U&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Sub&lt;NInt&lt;Ur&gt;&gt; for PInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as Add&lt;Ur&gt;&gt;::Output: Unsigned + NonZero,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Sub&lt;PInt&lt;Ur&gt;&gt; for NInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Add&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Ul as Add&lt;Ur&gt;&gt;::Output: Unsigned + NonZero,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Sub&lt;PInt&lt;Ur&gt;&gt; for PInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: Cmp&lt;Ur&gt; + PrivateIntegerAdd&lt;&lt;Ul as Cmp&lt;Ur&gt;&gt;::Output, Ur&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned + NonZero, Ur:&nbsp;Unsigned + NonZero&gt; Sub&lt;NInt&lt;Ur&gt;&gt; for NInt&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ur: Cmp&lt;Ul&gt; + PrivateIntegerAdd&lt;&lt;Ur as Cmp&lt;Ul&gt;&gt;::Output, Ul&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Sub&lt;B0&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit&gt; Sub&lt;B0&gt; for UInt&lt;U, B&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned, B:&nbsp;Bit&gt; Sub&lt;B1&gt; for UInt&lt;UInt&lt;U, B&gt;, B1&gt;","synthetic":false,"types":[]},{"text":"impl Sub&lt;B1&gt; for UInt&lt;UTerm, B1&gt;","synthetic":false,"types":[]},{"text":"impl&lt;U:&nbsp;Unsigned&gt; Sub&lt;B1&gt; for UInt&lt;U, B0&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Sub&lt;B1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Sub1&lt;U&gt;: Unsigned,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Sub&lt;UTerm&gt; for UTerm","synthetic":false,"types":[]},{"text":"impl&lt;Ul:&nbsp;Unsigned, Bl:&nbsp;Bit, Ur:&nbsp;Unsigned&gt; Sub&lt;Ur&gt; for UInt&lt;Ul, Bl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;UInt&lt;Ul, Bl&gt;: PrivateSub&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;PrivateSubOut&lt;UInt&lt;Ul, Bl&gt;, Ur&gt;: Trim,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Sub&lt;ATerm&gt; for ATerm","synthetic":false,"types":[]},{"text":"impl&lt;Vl, Al, Vr, Ar&gt; Sub&lt;TArr&lt;Vr, Ar&gt;&gt; for TArr&lt;Vl, Al&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Vl: Sub&lt;Vr&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Al: Sub&lt;Ar&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()