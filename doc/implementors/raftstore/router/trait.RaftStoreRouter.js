(function() {var implementors = {};
implementors["raftstore"] = [];
implementors["test_raftstore"] = [{"text":"impl RaftStoreRouter&lt;RocksEngine&gt; for MockRaftStoreRouter","synthetic":false,"types":[]},{"text":"impl&lt;C:&nbsp;RaftStoreRouter&lt;RocksEngine&gt;&gt; RaftStoreRouter&lt;RocksEngine&gt; for SimulateTransport&lt;C&gt;","synthetic":false,"types":[]}];
implementors["tikv"] = [{"text":"impl RaftStoreRouter&lt;RocksEngine&gt; for TestRaftStoreRouter","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()