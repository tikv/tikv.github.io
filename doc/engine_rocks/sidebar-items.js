initSidebarItems({"fn":[["set_perf_level",""]],"mod":[["cf_handle",""],["cf_names",""],["cf_options",""],["compact",""],["compact_listener",""],["compat",""],["config",""],["db_options",""],["db_vector",""],["encryption",""],["engine",""],["engine_iterator",""],["event_listener",""],["import",""],["logger",""],["misc",""],["options",""],["properties",""],["raft_engine",""],["range_properties",""],["raw","Reexports from the rocksdb crate"],["raw_util","Functions for constructing the rocksdb crate's `DB` type"],["rocks_metrics",""],["rocks_metrics_defs",""],["snapshot",""],["sst",""],["table_properties",""],["util",""],["write_batch",""]],"struct":[["CompactionListener",""],["PerfContext",""],["RaftDBLogger",""],["RocksCFHandle",""],["RocksColumnFamilyOptions",""],["RocksCompactedEvent",""],["RocksCompactionJobInfo",""],["RocksDBOptions",""],["RocksDBVector",""],["RocksEngine",""],["RocksEngineIterator",""],["RocksExternalSstFileInfo",""],["RocksIngestExternalFileOptions",""],["RocksSeekKey",""],["RocksSnapshot",""],["RocksSstIterator",""],["RocksSstReader",""],["RocksSstWriter",""],["RocksSstWriterBuilder",""],["RocksTableProperties",""],["RocksTablePropertiesCollection",""],["RocksTablePropertiesCollectionIter",""],["RocksTablePropertiesKey",""],["RocksTitanDBOptions",""],["RocksUserCollectedProperties",""],["RocksWriteBatch",""],["RocksWriteBatchVec","`RocksWriteBatchVec` is for method `multi_batch_write` of RocksDB, which splits a large WriteBatch into many smaller ones and then any thread could help to deal with these small WriteBatch when it is calling `AwaitState` and wait to become leader of WriteGroup. `multi_batch_write` will perform much better than traditional `pipelined_write` when TiKV writes very large data into RocksDB. We will remove this feature when `unordered_write` of RocksDB becomes more stable and becomes compatible with Titan."],["RocksdbLogger",""]],"trait":[["Compat","A trait to enter the world of engine traits from a raw `Arc<DB>` with as little syntax as possible."]],"type":[["Filter",""]]});