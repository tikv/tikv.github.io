(function() {var implementors = {};
implementors["raftstore"] = [];
implementors["test_raftstore"] = [{"text":"impl ProposalRouter&lt;RocksSnapshot&gt; for MockRaftStoreRouter","synthetic":false,"types":[]},{"text":"impl&lt;C:&nbsp;RaftStoreRouter&lt;RocksEngine&gt;&gt; ProposalRouter&lt;RocksSnapshot&gt; for SimulateTransport&lt;C&gt;","synthetic":false,"types":[]}];
implementors["tikv"] = [{"text":"impl&lt;S:&nbsp;Snapshot&gt; ProposalRouter&lt;S&gt; for TestRaftStoreRouter","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()