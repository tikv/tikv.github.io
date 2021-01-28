(function() {var implementors = {};
implementors["anyhow"] = [{"text":"impl Drop for Error","synthetic":false,"types":[]}];
implementors["arc_swap"] = [{"text":"impl&lt;'a, T:&nbsp;RefCnt&gt; Drop for Guard&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;RefCnt, S:&nbsp;LockStorage&gt; Drop for ArcSwapAny&lt;T, S&gt;","synthetic":false,"types":[]}];
implementors["arrayvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Drop for ArrayVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Drop for IntoIter&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, A:&nbsp;Array&gt; Drop for Drain&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: 'a,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["backtrace"] = [{"text":"impl Drop for BacktraceFrameFmt&lt;'_, '_, '_&gt;","synthetic":false,"types":[]}];
implementors["base64"] = [{"text":"impl&lt;'a, W:&nbsp;Write&gt; Drop for EncoderWriter&lt;'a, W&gt;","synthetic":false,"types":[]}];
implementors["batch_system"] = [{"text":"impl&lt;N&gt; Drop for FsmState&lt;N&gt;","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl Drop for BytesMut","synthetic":false,"types":[]},{"text":"impl Drop for Bytes","synthetic":false,"types":[]}];
implementors["cdc"] = [{"text":"impl Drop for Pending","synthetic":false,"types":[]}];
implementors["concurrency_manager"] = [{"text":"impl Drop for KeyHandle","synthetic":false,"types":[]},{"text":"impl Drop for KeyHandleGuard","synthetic":false,"types":[]}];
implementors["crossbeam_channel"] = [{"text":"impl&lt;T&gt; Drop for Sender&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Receiver&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Drop for SelectedOperation&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_deque"] = [{"text":"impl&lt;T&gt; Drop for Injector&lt;T&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T&gt; Drop for Owned&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Drop for LocalHandle","synthetic":false,"types":[]},{"text":"impl Drop for Guard","synthetic":false,"types":[]}];
implementors["crossbeam_queue"] = [{"text":"impl&lt;T&gt; Drop for ArrayQueue&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for SegQueue&lt;T&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_skiplist"] = [{"text":"impl&lt;K, V&gt; Drop for SkipList&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; Drop for IntoIter&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, K, V&gt; Drop for Entry&lt;'a, K, V&gt;","synthetic":false,"types":[]}];
implementors["crossbeam_utils"] = [{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Drop for ShardedLockWriteGuard&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl Drop for WaitGroup","synthetic":false,"types":[]}];
implementors["dashmap"] = [{"text":"impl&lt;'rwlock, T:&nbsp;?Sized&gt; Drop for RwLockReadGuard&lt;'rwlock, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'rwlock, T:&nbsp;?Sized&gt; Drop for RwLockUpgradeableGuard&lt;'rwlock, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'rwlock, T:&nbsp;?Sized&gt; Drop for RwLockWriteGuard&lt;'rwlock, T&gt;","synthetic":false,"types":[]}];
implementors["encryption"] = [{"text":"impl&lt;W:&nbsp;Write&gt; Drop for EncrypterWriter&lt;W&gt;","synthetic":false,"types":[]},{"text":"impl Drop for DataKeyManager","synthetic":false,"types":[]}];
implementors["engine_rocks"] = [{"text":"impl Drop for RocksSnapshot","synthetic":false,"types":[]}];
implementors["fail"] = [{"text":"impl&lt;'a&gt; Drop for FailScenario&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["file_system"] = [{"text":"impl Drop for WithIOType","synthetic":false,"types":[]}];
implementors["flate2"] = [{"text":"impl&lt;W:&nbsp;Write&gt; Drop for GzEncoder&lt;W&gt;","synthetic":false,"types":[]}];
implementors["futures_channel"] = [{"text":"impl&lt;T&gt; Drop for Receiver&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for UnboundedReceiver&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Sender&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Receiver&lt;T&gt;","synthetic":false,"types":[]}];
implementors["futures_executor"] = [{"text":"impl Drop for ThreadPool","synthetic":false,"types":[]},{"text":"impl Drop for Enter","synthetic":false,"types":[]}];
implementors["futures_task"] = [{"text":"impl&lt;T&gt; Drop for LocalFutureObj&lt;'_, T&gt;","synthetic":false,"types":[]}];
implementors["futures_timer"] = [{"text":"impl Drop for Delay","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;Fut&gt; Drop for Shared&lt;Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: Future,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;Fut&gt; Drop for FuturesUnordered&lt;Fut&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Drop for MutexLockFuture&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Drop for MutexGuard&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized, U:&nbsp;?Sized&gt; Drop for MappedMutexGuard&lt;'_, T, U&gt;","synthetic":false,"types":[]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; Drop for GenericArrayIter&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["grpcio"] = [{"text":"impl Drop for AuthContext","synthetic":false,"types":[]},{"text":"impl Drop for GrpcSlice","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for ClientCStreamReceiver&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;P&gt; Drop for StreamingCallSink&lt;P&gt;","synthetic":false,"types":[]},{"text":"impl&lt;Resp&gt; Drop for ClientDuplexReceiver&lt;Resp&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for RequestStream&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for UnarySink&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for ClientStreamingSink&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for ServerStreamingSink&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for DuplexSink&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Drop for Environment","synthetic":false,"types":[]},{"text":"impl Drop for Metadata","synthetic":false,"types":[]},{"text":"impl Drop for ResourceQuota","synthetic":false,"types":[]},{"text":"impl Drop for ServerCredentialsBuilder","synthetic":false,"types":[]},{"text":"impl Drop for ServerCredentials","synthetic":false,"types":[]},{"text":"impl Drop for ChannelCredentialsBuilder","synthetic":false,"types":[]},{"text":"impl Drop for ChannelCredentials","synthetic":false,"types":[]},{"text":"impl Drop for Server","synthetic":false,"types":[]}];
implementors["h2"] = [{"text":"impl Drop for RecvStream","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl&lt;'a, T&gt; Drop for Drain&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for IntoIter&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; Drop for ValueDrain&lt;'a, T&gt;","synthetic":false,"types":[]}];
implementors["itertools"] = [{"text":"impl&lt;'a, K, I, F&gt; Drop for Group&lt;'a, K, I, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Iterator,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::Item: 'a,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, I&gt; Drop for Chunk&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Iterator,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::Item: 'a,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["libflate"] = [{"text":"impl&lt;T:&nbsp;Complete&gt; Drop for AutoFinish&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Complete&gt; Drop for AutoFinishUnchecked&lt;T&gt;","synthetic":false,"types":[]}];
implementors["linked_hash_map"] = [{"text":"impl&lt;K, V, S&gt; Drop for LinkedHashMap&lt;K, V, S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; Drop for IntoIter&lt;K, V&gt;","synthetic":false,"types":[]}];
implementors["lock_api"] = [{"text":"impl&lt;'a, R:&nbsp;RawMutex + 'a, T:&nbsp;?Sized + 'a&gt; Drop for MutexGuard&lt;'a, R, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, R:&nbsp;RawMutex + 'a, T:&nbsp;?Sized + 'a&gt; Drop for MappedMutexGuard&lt;'a, R, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, R:&nbsp;RawMutex + 'a, G:&nbsp;GetThreadId + 'a, T:&nbsp;?Sized + 'a&gt; Drop for ReentrantMutexGuard&lt;'a, R, G, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, R:&nbsp;RawMutex + 'a, G:&nbsp;GetThreadId + 'a, T:&nbsp;?Sized + 'a&gt; Drop for MappedReentrantMutexGuard&lt;'a, R, G, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, R:&nbsp;RawRwLock + 'a, T:&nbsp;?Sized + 'a&gt; Drop for RwLockReadGuard&lt;'a, R, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, R:&nbsp;RawRwLock + 'a, T:&nbsp;?Sized + 'a&gt; Drop for RwLockWriteGuard&lt;'a, R, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, R:&nbsp;RawRwLockUpgrade + 'a, T:&nbsp;?Sized + 'a&gt; Drop for RwLockUpgradableReadGuard&lt;'a, R, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, R:&nbsp;RawRwLock + 'a, T:&nbsp;?Sized + 'a&gt; Drop for MappedRwLockReadGuard&lt;'a, R, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, R:&nbsp;RawRwLock + 'a, T:&nbsp;?Sized + 'a&gt; Drop for MappedRwLockWriteGuard&lt;'a, R, T&gt;","synthetic":false,"types":[]}];
implementors["minitrace"] = [{"text":"impl Drop for Collector","synthetic":false,"types":[]},{"text":"impl Drop for SpanGuard","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Drop for Registration","synthetic":false,"types":[]}];
implementors["nix"] = [{"text":"impl Drop for Dir","synthetic":false,"types":[]},{"text":"impl&lt;'d&gt; Drop for Iter&lt;'d&gt;","synthetic":false,"types":[]},{"text":"impl Drop for InterfaceAddressIterator","synthetic":false,"types":[]},{"text":"impl Drop for PtyMaster","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Drop for AioCb&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Drop for SignalFd","synthetic":false,"types":[]}];
implementors["nodrop"] = [{"text":"impl&lt;T&gt; Drop for NoDrop&lt;T&gt;","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl Drop for Asn1GeneralizedTime","synthetic":false,"types":[]},{"text":"impl Drop for Asn1Time","synthetic":false,"types":[]},{"text":"impl Drop for Asn1String","synthetic":false,"types":[]},{"text":"impl Drop for Asn1Integer","synthetic":false,"types":[]},{"text":"impl Drop for Asn1BitString","synthetic":false,"types":[]},{"text":"impl Drop for Asn1Object","synthetic":false,"types":[]},{"text":"impl Drop for BigNumContext","synthetic":false,"types":[]},{"text":"impl Drop for BigNum","synthetic":false,"types":[]},{"text":"impl Drop for CmsContentInfo","synthetic":false,"types":[]},{"text":"impl Drop for Conf","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Dh&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Dsa&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Drop for EcGroup","synthetic":false,"types":[]},{"text":"impl Drop for EcPoint","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for EcKey&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Drop for EcdsaSig","synthetic":false,"types":[]},{"text":"impl Drop for Seal","synthetic":false,"types":[]},{"text":"impl Drop for Open","synthetic":false,"types":[]},{"text":"impl Drop for Hasher","synthetic":false,"types":[]},{"text":"impl Drop for OcspBasicResponse","synthetic":false,"types":[]},{"text":"impl Drop for OcspCertId","synthetic":false,"types":[]},{"text":"impl Drop for OcspResponse","synthetic":false,"types":[]},{"text":"impl Drop for OcspRequest","synthetic":false,"types":[]},{"text":"impl Drop for OcspOneReq","synthetic":false,"types":[]},{"text":"impl Drop for Pkcs12","synthetic":false,"types":[]},{"text":"impl Drop for Pkcs7","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for PKey&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Rsa&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Drop for Signer&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Drop for Verifier&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Drop for SrtpProtectionProfile","synthetic":false,"types":[]},{"text":"impl Drop for SslContext","synthetic":false,"types":[]},{"text":"impl Drop for SslSession","synthetic":false,"types":[]},{"text":"impl Drop for Ssl","synthetic":false,"types":[]},{"text":"impl&lt;S&gt; Drop for SslStream&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Stackable&gt; Drop for Stack&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Stackable&gt; Drop for IntoIter&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Drop for OpensslString","synthetic":false,"types":[]},{"text":"impl Drop for Crypter","synthetic":false,"types":[]},{"text":"impl Drop for X509VerifyParam","synthetic":false,"types":[]},{"text":"impl Drop for X509StoreBuilder","synthetic":false,"types":[]},{"text":"impl Drop for X509Store","synthetic":false,"types":[]},{"text":"impl Drop for X509StoreContext","synthetic":false,"types":[]},{"text":"impl Drop for X509","synthetic":false,"types":[]},{"text":"impl Drop for X509Extension","synthetic":false,"types":[]},{"text":"impl Drop for X509Name","synthetic":false,"types":[]},{"text":"impl Drop for X509NameEntry","synthetic":false,"types":[]},{"text":"impl Drop for X509Req","synthetic":false,"types":[]},{"text":"impl Drop for GeneralName","synthetic":false,"types":[]},{"text":"impl Drop for X509Algorithm","synthetic":false,"types":[]}];
implementors["pnet_sys"] = [{"text":"impl Drop for FileDesc","synthetic":false,"types":[]}];
implementors["pprof"] = [{"text":"impl&lt;'a&gt; Drop for ProfilerGuard&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["prometheus"] = [{"text":"impl Drop for HistogramTimer","synthetic":false,"types":[]},{"text":"impl Drop for LocalHistogramTimer","synthetic":false,"types":[]},{"text":"impl Drop for LocalHistogram","synthetic":false,"types":[]}];
implementors["raftstore"] = [{"text":"impl&lt;S&gt; Drop for PendingCmd&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Snapshot,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Snapshot&gt; Drop for Apply&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;EK&gt; Drop for ApplyFsm&lt;EK&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EK: KvEngine,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;EK, ER&gt; Drop for PeerFsm&lt;EK, ER&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EK: KvEngine,<br>&nbsp;&nbsp;&nbsp;&nbsp;ER: RaftEngine,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;Snapshot&gt; Drop for CmdEpochChecker&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl Drop for EntryCache","synthetic":false,"types":[]},{"text":"impl&lt;S&gt; Drop for ReadIndexRequest&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Snapshot,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Drop for Snap","synthetic":false,"types":[]},{"text":"impl Drop for ReadDelegate","synthetic":false,"types":[]}];
implementors["rayon_core"] = [{"text":"impl Drop for ThreadPool","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl Drop for Ast","synthetic":false,"types":[]},{"text":"impl Drop for ClassSet","synthetic":false,"types":[]},{"text":"impl Drop for Hir","synthetic":false,"types":[]}];
implementors["rocksdb"] = [{"text":"impl Drop for CompactionFilterHandle","synthetic":false,"types":[]},{"text":"impl Drop for CompactionFilterFactoryHandle","synthetic":false,"types":[]},{"text":"impl Drop for ColumnFamilyMetaData","synthetic":false,"types":[]},{"text":"impl Drop for CFHandle","synthetic":false,"types":[]},{"text":"impl Drop for MapProperty","synthetic":false,"types":[]},{"text":"impl&lt;D&gt; Drop for DBIterator&lt;D&gt;","synthetic":false,"types":[]},{"text":"impl&lt;D:&nbsp;Deref&lt;Target = DB&gt;&gt; Drop for Snapshot&lt;D&gt;","synthetic":false,"types":[]},{"text":"impl Drop for DB","synthetic":false,"types":[]},{"text":"impl Drop for DBVector","synthetic":false,"types":[]},{"text":"impl Drop for BackupEngine","synthetic":false,"types":[]},{"text":"impl Drop for SstFileReader","synthetic":false,"types":[]},{"text":"impl Drop for SstFileWriter","synthetic":false,"types":[]},{"text":"impl Drop for ExternalSstFileInfo","synthetic":false,"types":[]},{"text":"impl Drop for Env","synthetic":false,"types":[]},{"text":"impl Drop for SequentialFile","synthetic":false,"types":[]},{"text":"impl Drop for Cache","synthetic":false,"types":[]},{"text":"impl Drop for MemoryAllocator","synthetic":false,"types":[]},{"text":"impl Drop for BlockBasedOptions","synthetic":false,"types":[]},{"text":"impl Drop for RateLimiter","synthetic":false,"types":[]},{"text":"impl Drop for ReadOptions","synthetic":false,"types":[]},{"text":"impl Drop for WriteOptions","synthetic":false,"types":[]},{"text":"impl Drop for CompactOptions","synthetic":false,"types":[]},{"text":"impl Drop for CompactionOptions","synthetic":false,"types":[]},{"text":"impl Drop for DBOptions","synthetic":false,"types":[]},{"text":"impl Drop for ColumnFamilyOptions","synthetic":false,"types":[]},{"text":"impl Drop for CColumnFamilyDescriptor","synthetic":false,"types":[]},{"text":"impl Drop for FlushOptions","synthetic":false,"types":[]},{"text":"impl Drop for IngestExternalFileOptions","synthetic":false,"types":[]},{"text":"impl Drop for EnvOptions","synthetic":false,"types":[]},{"text":"impl Drop for RestoreOptions","synthetic":false,"types":[]},{"text":"impl Drop for FifoCompactionOptions","synthetic":false,"types":[]},{"text":"impl Drop for LRUCacheOptions","synthetic":false,"types":[]},{"text":"impl Drop for TablePropertiesCollection","synthetic":false,"types":[]},{"text":"impl Drop for TitanDBOptions","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Drop for WriteBatchIter&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Drop for WriteBatch","synthetic":false,"types":[]}];
implementors["rusoto_credential"] = [{"text":"impl Drop for Secret","synthetic":false,"types":[]}];
implementors["scopeguard"] = [{"text":"impl&lt;T, F, S&gt; Drop for ScopeGuard&lt;T, F, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnOnce(T),<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Strategy,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["signal"] = [{"text":"impl Drop for Trap","synthetic":false,"types":[]}];
implementors["slog"] = [{"text":"impl&lt;'a&gt; Drop for PushFnValueSerializer&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["slog_async"] = [{"text":"impl Drop for AsyncGuard","synthetic":false,"types":[]},{"text":"impl Drop for AsyncCore","synthetic":false,"types":[]},{"text":"impl Drop for Async","synthetic":false,"types":[]}];
implementors["slog_term"] = [{"text":"impl&lt;'a, W&gt; Drop for PlainRecordDecorator&lt;'a, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Write,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;W&gt; Drop for PlainSyncRecordDecorator&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: Write,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Drop for TermRecordDecorator&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;'a, T:&nbsp;'a + Array&gt; Drop for Drain&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Drop for SmallVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; Drop for IntoIter&lt;A&gt;","synthetic":false,"types":[]}];
implementors["spin"] = [{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Drop for MutexGuard&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'rwlock, T:&nbsp;?Sized&gt; Drop for RwLockReadGuard&lt;'rwlock, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'rwlock, T:&nbsp;?Sized&gt; Drop for RwLockUpgradeableGuard&lt;'rwlock, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'rwlock, T:&nbsp;?Sized&gt; Drop for RwLockWriteGuard&lt;'rwlock, T&gt;","synthetic":false,"types":[]}];
implementors["sst_importer"] = [{"text":"impl Drop for ImportFile","synthetic":false,"types":[]}];
implementors["str_stack"] = [{"text":"impl&lt;'a&gt; Drop for Writer&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["sysinfo"] = [{"text":"impl Drop for Process","synthetic":false,"types":[]}];
implementors["take_mut"] = [{"text":"impl&lt;'c, 'm, T:&nbsp;'m, F:&nbsp;FnOnce() -&gt; T&gt; Drop for Hole&lt;'c, 'm, T, F&gt;","synthetic":false,"types":[]}];
implementors["tempfile"] = [{"text":"impl Drop for TempDir","synthetic":false,"types":[]},{"text":"impl Drop for TempPath","synthetic":false,"types":[]}];
implementors["test_raftstore"] = [{"text":"impl&lt;T:&nbsp;Simulator&gt; Drop for Cluster&lt;T&gt;","synthetic":false,"types":[]}];
implementors["test_util"] = [{"text":"impl Drop for CaseTraceLogger","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;TestHook&gt; Drop for CaseLifeWatcher&lt;H&gt;","synthetic":false,"types":[]}];
implementors["thread_local"] = [{"text":"impl&lt;T:&nbsp;Send&gt; Drop for ThreadLocal&lt;T&gt;","synthetic":false,"types":[]}];
implementors["tikv"] = [{"text":"impl Drop for Tracker","synthetic":false,"types":[]},{"text":"impl Drop for AppliedLockCollector","synthetic":false,"types":[]},{"text":"impl Drop for WriteCompactionFilter","synthetic":false,"types":[]},{"text":"impl&lt;E, RR&gt; Drop for GcWorker&lt;E, RR&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Engine,<br>&nbsp;&nbsp;&nbsp;&nbsp;RR: RaftStoreRouter&lt;RocksEngine&gt; + 'static,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Drop for ProfGuard","synthetic":false,"types":[]},{"text":"impl Drop for ExpectedWriteList","synthetic":false,"types":[]},{"text":"impl Drop for RocksEngineCore","synthetic":false,"types":[]},{"text":"impl Drop for CmdTimer","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;Engine, L:&nbsp;LockManager&gt; Drop for Storage&lt;E, L&gt;","synthetic":false,"types":[]}];
implementors["tikv_util"] = [{"text":"impl&lt;T, C, A&gt; Drop for MustCall&lt;T, C, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: FnOnce(T),<br>&nbsp;&nbsp;&nbsp;&nbsp;A: FnOnce() -&gt; T,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Drop for RotatingFileLogger","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Drop for Serializer&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;K, V&gt; Drop for LruCache&lt;K, V&gt;","synthetic":false,"types":[]},{"text":"impl Drop for State","synthetic":false,"types":[]},{"text":"impl Drop for Notifier","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Sender&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Sender&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Receiver&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Drop for Monitor","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;Runnable + 'static&gt; Drop for RunnableWrapper&lt;R&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;FnOnce()&gt; Drop for DeferContext&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for MustConsumeVec&lt;T&gt;","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl&lt;E:&nbsp;Evented&gt; Drop for PollEvented&lt;E&gt;","synthetic":false,"types":[]},{"text":"impl Drop for Registration","synthetic":false,"types":[]},{"text":"impl Drop for DuplexStream","synthetic":false,"types":[]},{"text":"impl Drop for OwnedWriteHalf","synthetic":false,"types":[]},{"text":"impl Drop for OwnedSendHalf","synthetic":false,"types":[]},{"text":"impl Drop for OwnedWriteHalf","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for JoinHandle&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Sender&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Receiver&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Drop for MutexGuard&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;?Sized&gt; Drop for OwnedMutexGuard&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Sender&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Receiver&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Drop for SemaphorePermit&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl Drop for OwnedSemaphorePermit","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Drop for RwLockReadGuard&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; Drop for RwLockWriteGuard&lt;'a, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Receiver&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Drop for Sender&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Drop for LocalSet","synthetic":false,"types":[]}];
implementors["tokio_executor"] = [{"text":"impl Drop for Enter","synthetic":false,"types":[]},{"text":"impl Drop for DefaultGuard","synthetic":false,"types":[]}];
implementors["tokio_timer"] = [{"text":"impl Drop for DefaultGuard","synthetic":false,"types":[]},{"text":"impl Drop for DefaultGuard","synthetic":false,"types":[]},{"text":"impl&lt;T, N&gt; Drop for Timer&lt;T, N&gt;","synthetic":false,"types":[]}];
implementors["try_lock"] = [{"text":"impl&lt;'a, T&gt; Drop for Locked&lt;'a, T&gt;","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl&lt;'a&gt; Drop for PathSegmentsMut&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Drop for UrlQuery&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["want"] = [{"text":"impl Drop for Taker","synthetic":false,"types":[]}];
implementors["yatp"] = [{"text":"impl&lt;T:&nbsp;TaskCell + Send&gt; Drop for ThreadPool&lt;T&gt;","synthetic":false,"types":[]}];
implementors["zeroize"] = [{"text":"impl&lt;Z&gt; Drop for Zeroizing&lt;Z&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Z: Zeroize,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()