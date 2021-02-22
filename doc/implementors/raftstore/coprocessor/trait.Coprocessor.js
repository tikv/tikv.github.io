(function() {var implementors = {};
implementors["cdc"] = [{"text":"impl Coprocessor for CdcObserver","synthetic":false,"types":[]}];
implementors["raftstore"] = [];
implementors["resolved_ts"] = [{"text":"impl&lt;E:&nbsp;KvEngine&gt; Coprocessor for ChangeDataObserver&lt;E&gt;","synthetic":false,"types":[]}];
implementors["tikv"] = [{"text":"impl Coprocessor for LockObserver","synthetic":false,"types":[]},{"text":"impl Coprocessor for RoleChangeNotifier","synthetic":false,"types":[]},{"text":"impl Coprocessor for ReplicaReadLockChecker","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;KvEngine&gt; Coprocessor for Mvcc&lt;E&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()