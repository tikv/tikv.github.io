initSidebarItems({"macro":[["match_template_hashable",""]],"mod":[["fast_hash_aggr_executor",""],["index_scan_executor",""],["interface","Batch executor common structures."],["limit_executor",""],["runner",""],["selection_executor",""],["simple_aggr_executor","Simple aggregation is an aggregation that do not have `GROUP BY`s. It is more even more simpler than stream aggregation."],["slow_hash_aggr_executor",""],["stream_aggr_executor",""],["table_scan_executor",""],["top_n_executor",""],["util",""]],"struct":[["BatchFastHashAggregationExecutor","Fast Hash Aggregation Executor uses hash when comparing group key. It only supports one group by column."],["BatchIndexScanExecutor",""],["BatchLimitExecutor","Executor that retrieves rows from the source executor and only produces part of the rows."],["BatchSelectionExecutor",""],["BatchSimpleAggregationExecutor",""],["BatchSlowHashAggregationExecutor","Slow Hash Aggregation Executor supports multiple groups but uses less efficient ways to store group keys in hash tables."],["BatchStreamAggregationExecutor",""],["BatchTableScanExecutor",""],["BatchTopNExecutor",""]]});