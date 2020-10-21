(function() {var implementors = {};
implementors["engine_panic"] = [{"text":"impl RaftEngine for PanicEngine","synthetic":false,"types":[]}];
implementors["engine_rocks"] = [{"text":"impl RaftEngine for RocksEngine","synthetic":false,"types":[]}];
implementors["raft_log_engine"] = [{"text":"impl RaftEngine for RaftLogEngine","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()