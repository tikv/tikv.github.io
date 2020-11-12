initSidebarItems({"enum":[["CompactionPriority",""],["CompactionReason",""],["DBBackgroundErrorReason",""],["DBBottommostLevelCompaction",""],["DBCompactionStyle",""],["DBCompressionType",""],["DBEncryptionMethod",""],["DBEntryType",""],["DBInfoLogLevel",""],["DBRateLimiterMode",""],["DBRecoveryMode",""],["DBSstPartitionerResult",""],["DBStatisticsHistogramType",""],["DBStatisticsTickerType","This file is generated from generate.py. Re-generate it if you upgrade to a new version of RocksDB."],["DBTableProperty",""],["DBTitanDBBlobRunMode",""],["DBUniversalCompactionStyle",""],["DBValueType",""],["IndexType",""],["WriteStallCondition",""]],"fn":[["crocksdb_approximate_memtable_stats",""],["crocksdb_approximate_memtable_stats_cf",""],["crocksdb_approximate_sizes",""],["crocksdb_approximate_sizes_cf",""],["crocksdb_backup_engine_close",""],["crocksdb_backup_engine_create_new_backup",""],["crocksdb_backup_engine_open",""],["crocksdb_backup_engine_restore_db_from_latest_backup",""],["crocksdb_block_based_options_create",""],["crocksdb_block_based_options_destroy",""],["crocksdb_block_based_options_set_block_cache",""],["crocksdb_block_based_options_set_block_cache_compressed",""],["crocksdb_block_based_options_set_block_restart_interval",""],["crocksdb_block_based_options_set_block_size",""],["crocksdb_block_based_options_set_block_size_deviation",""],["crocksdb_block_based_options_set_cache_index_and_filter_blocks",""],["crocksdb_block_based_options_set_cache_index_and_filter_blocks_with_high_priority",""],["crocksdb_block_based_options_set_filter_policy",""],["crocksdb_block_based_options_set_hash_index_allow_collision",""],["crocksdb_block_based_options_set_index_type",""],["crocksdb_block_based_options_set_metadata_block_size",""],["crocksdb_block_based_options_set_no_block_cache",""],["crocksdb_block_based_options_set_partition_filters",""],["crocksdb_block_based_options_set_pin_l0_filter_and_index_blocks_in_cache",""],["crocksdb_block_based_options_set_pin_top_level_index_and_filter",""],["crocksdb_block_based_options_set_read_amp_bytes_per_bit",""],["crocksdb_block_based_options_set_whole_key_filtering",""],["crocksdb_cache_create_lru",""],["crocksdb_cache_destroy",""],["crocksdb_close",""],["crocksdb_cloud_aws_env_create",""],["crocksdb_cloud_envoptions_create",""],["crocksdb_cloud_envoptions_destroy",""],["crocksdb_column_family_descriptor_destroy",""],["crocksdb_column_family_handle_destroy",""],["crocksdb_column_family_handle_id",""],["crocksdb_column_family_meta_data_create",""],["crocksdb_column_family_meta_data_destroy",""],["crocksdb_column_family_meta_data_level_count",""],["crocksdb_column_family_meta_data_level_data",""],["crocksdb_compact_files_cf",""],["crocksdb_compact_range",""],["crocksdb_compact_range_cf",""],["crocksdb_compact_range_cf_opt",""],["crocksdb_compaction_options_create",""],["crocksdb_compaction_options_destroy",""],["crocksdb_compaction_options_set_compression",""],["crocksdb_compaction_options_set_max_subcompactions",""],["crocksdb_compaction_options_set_output_file_size_limit",""],["crocksdb_compactionfilter_create",""],["crocksdb_compactionfilter_destroy",""],["crocksdb_compactionfilter_set_ignore_snapshots",""],["crocksdb_compactionfiltercontext_file_numbers",""],["crocksdb_compactionfiltercontext_is_bottommost_level",""],["crocksdb_compactionfiltercontext_is_full_compaction",""],["crocksdb_compactionfiltercontext_is_manual_compaction",""],["crocksdb_compactionfiltercontext_table_properties",""],["crocksdb_compactionfilterfactory_create",""],["crocksdb_compactionfilterfactory_destroy",""],["crocksdb_compactionjobinfo_cf_name",""],["crocksdb_compactionjobinfo_compaction_reason",""],["crocksdb_compactionjobinfo_elapsed_micros",""],["crocksdb_compactionjobinfo_input_file_at",""],["crocksdb_compactionjobinfo_input_files_count",""],["crocksdb_compactionjobinfo_input_records",""],["crocksdb_compactionjobinfo_num_corrupt_keys",""],["crocksdb_compactionjobinfo_output_file_at",""],["crocksdb_compactionjobinfo_output_files_count",""],["crocksdb_compactionjobinfo_output_level",""],["crocksdb_compactionjobinfo_output_records",""],["crocksdb_compactionjobinfo_status",""],["crocksdb_compactionjobinfo_table_properties",""],["crocksdb_compactionjobinfo_total_input_bytes",""],["crocksdb_compactionjobinfo_total_output_bytes",""],["crocksdb_compactoptions_create",""],["crocksdb_compactoptions_destroy",""],["crocksdb_compactoptions_set_bottommost_level_compaction",""],["crocksdb_compactoptions_set_change_level",""],["crocksdb_compactoptions_set_exclusive_manual_compaction",""],["crocksdb_compactoptions_set_max_subcompactions",""],["crocksdb_compactoptions_set_target_level",""],["crocksdb_compactoptions_set_target_path_id",""],["crocksdb_comparator_create",""],["crocksdb_comparator_destroy",""],["crocksdb_continue_bg_work",""],["crocksdb_create_column_family",""],["crocksdb_create_env_logger",""],["crocksdb_create_iterator",""],["crocksdb_create_iterator_cf",""],["crocksdb_create_log_from_options",""],["crocksdb_create_map_property",""],["crocksdb_create_snapshot",""],["crocksdb_ctr_encrypted_env_create",""],["crocksdb_default_env_create",""],["crocksdb_delete",""],["crocksdb_delete_cf",""],["crocksdb_delete_files_in_range",""],["crocksdb_delete_files_in_range_cf",""],["crocksdb_delete_files_in_ranges_cf",""],["crocksdb_delete_range_cf",""],["crocksdb_destroy_db",""],["crocksdb_destroy_map_property",""],["crocksdb_drop_column_family",""],["crocksdb_encryption_key_manager_create",""],["crocksdb_encryption_key_manager_delete_file",""],["crocksdb_encryption_key_manager_destroy",""],["crocksdb_encryption_key_manager_get_file",""],["crocksdb_encryption_key_manager_link_file",""],["crocksdb_encryption_key_manager_new_file",""],["crocksdb_encryption_key_manager_rename_file",""],["crocksdb_env_delete_file",""],["crocksdb_env_destroy",""],["crocksdb_env_file_exists",""],["crocksdb_envoptions_create",""],["crocksdb_envoptions_destroy",""],["crocksdb_eventlistener_create",""],["crocksdb_eventlistener_destroy",""],["crocksdb_externalfileingestioninfo_cf_name",""],["crocksdb_externalfileingestioninfo_internal_file_path",""],["crocksdb_externalfileingestioninfo_table_properties",""],["crocksdb_externalsstfileinfo_create",""],["crocksdb_externalsstfileinfo_destroy",""],["crocksdb_externalsstfileinfo_file_path",""],["crocksdb_externalsstfileinfo_file_size",""],["crocksdb_externalsstfileinfo_largest_key",""],["crocksdb_externalsstfileinfo_num_entries",""],["crocksdb_externalsstfileinfo_sequence_number",""],["crocksdb_externalsstfileinfo_smallest_key",""],["crocksdb_fifo_compaction_options_create",""],["crocksdb_fifo_compaction_options_destroy",""],["crocksdb_fifo_compaction_options_set_allow_compaction",""],["crocksdb_fifo_compaction_options_set_max_table_files_size",""],["crocksdb_file_encryption_info_create",""],["crocksdb_file_encryption_info_destroy",""],["crocksdb_file_encryption_info_iv",""],["crocksdb_file_encryption_info_key",""],["crocksdb_file_encryption_info_method",""],["crocksdb_file_encryption_info_set_iv",""],["crocksdb_file_encryption_info_set_key",""],["crocksdb_file_encryption_info_set_method",""],["crocksdb_filterpolicy_create_bloom",""],["crocksdb_filterpolicy_create_bloom_full",""],["crocksdb_flush",""],["crocksdb_flush_cf",""],["crocksdb_flush_cfs",""],["crocksdb_flush_wal",""],["crocksdb_flushjobinfo_cf_name",""],["crocksdb_flushjobinfo_file_path",""],["crocksdb_flushjobinfo_table_properties",""],["crocksdb_flushjobinfo_triggered_writes_slowdown",""],["crocksdb_flushjobinfo_triggered_writes_stop",""],["crocksdb_flushoptions_create",""],["crocksdb_flushoptions_destroy",""],["crocksdb_flushoptions_set_allow_write_stall",""],["crocksdb_flushoptions_set_wait",""],["crocksdb_get",""],["crocksdb_get_all_key_versions",""],["crocksdb_get_cf",""],["crocksdb_get_column_family_meta_data",""],["crocksdb_get_db_options",""],["crocksdb_get_iostats_context",""],["crocksdb_get_latest_sequence_number",""],["crocksdb_get_map_property_cf",""],["crocksdb_get_options_cf",""],["crocksdb_get_perf_context",""],["crocksdb_get_perf_level",""],["crocksdb_get_pinned",""],["crocksdb_get_pinned_cf",""],["crocksdb_get_properties_of_all_tables",""],["crocksdb_get_properties_of_all_tables_cf",""],["crocksdb_get_properties_of_tables_in_range",""],["crocksdb_get_snapshot_sequence_number",""],["crocksdb_get_supported_compression",""],["crocksdb_get_supported_compression_number",""],["crocksdb_ingest_external_file",""],["crocksdb_ingest_external_file_cf",""],["crocksdb_ingest_external_file_optimized",""],["crocksdb_ingestexternalfileoptions_create",""],["crocksdb_ingestexternalfileoptions_destroy",""],["crocksdb_ingestexternalfileoptions_set_allow_blocking_flush",""],["crocksdb_ingestexternalfileoptions_set_allow_global_seqno",""],["crocksdb_ingestexternalfileoptions_set_move_files",""],["crocksdb_ingestexternalfileoptions_set_snapshot_consistency",""],["crocksdb_iostats_context_allocate_nanos",""],["crocksdb_iostats_context_bytes_read",""],["crocksdb_iostats_context_bytes_written",""],["crocksdb_iostats_context_fsync_nanos",""],["crocksdb_iostats_context_logger_nanos",""],["crocksdb_iostats_context_open_nanos",""],["crocksdb_iostats_context_prepare_write_nanos",""],["crocksdb_iostats_context_range_sync_nanos",""],["crocksdb_iostats_context_read_nanos",""],["crocksdb_iostats_context_reset",""],["crocksdb_iostats_context_write_nanos",""],["crocksdb_iter_destroy",""],["crocksdb_iter_get_error",""],["crocksdb_iter_key",""],["crocksdb_iter_next",""],["crocksdb_iter_prev",""],["crocksdb_iter_seek",""],["crocksdb_iter_seek_for_prev",""],["crocksdb_iter_seek_to_first",""],["crocksdb_iter_seek_to_last",""],["crocksdb_iter_valid",""],["crocksdb_iter_value",""],["crocksdb_jemalloc_nodump_allocator_create",""],["crocksdb_key_managed_encrypted_env_create",""],["crocksdb_keyversions_count",""],["crocksdb_keyversions_destroy",""],["crocksdb_keyversions_key",""],["crocksdb_keyversions_seq",""],["crocksdb_keyversions_type",""],["crocksdb_keyversions_value",""],["crocksdb_level_meta_data_file_count",""],["crocksdb_level_meta_data_file_data",""],["crocksdb_list_column_families",""],["crocksdb_list_column_families_destroy",""],["crocksdb_load_latest_options",""],["crocksdb_log_destroy",""],["crocksdb_logger_create",""],["crocksdb_lru_cache_options_create",""],["crocksdb_lru_cache_options_destroy",""],["crocksdb_lru_cache_options_set_capacity",""],["crocksdb_lru_cache_options_set_high_pri_pool_ratio",""],["crocksdb_lru_cache_options_set_memory_allocator",""],["crocksdb_lru_cache_options_set_num_shard_bits",""],["crocksdb_lru_cache_options_set_strict_capacity_limit",""],["crocksdb_map_property_int_value",""],["crocksdb_map_property_value",""],["crocksdb_mem_env_create",""],["crocksdb_memory_allocator_destroy",""],["crocksdb_merge",""],["crocksdb_merge_cf",""],["crocksdb_mergeoperator_create",""],["crocksdb_mergeoperator_destroy",""],["crocksdb_name_from_column_family_descriptor",""],["crocksdb_open",""],["crocksdb_open_column_families",""],["crocksdb_open_column_families_with_ttl",""],["crocksdb_open_for_read_only",""],["crocksdb_open_for_read_only_column_families",""],["crocksdb_open_with_ttl",""],["crocksdb_options_add_eventlistener",""],["crocksdb_options_add_table_properties_collector_factory",""],["crocksdb_options_copy",""],["crocksdb_options_create",""],["crocksdb_options_destroy",""],["crocksdb_options_enable_statistics",""],["crocksdb_options_from_column_family_descriptor",""],["crocksdb_options_get_block_cache_capacity",""],["crocksdb_options_get_block_cache_usage",""],["crocksdb_options_get_compression",""],["crocksdb_options_get_compression_level_number",""],["crocksdb_options_get_compression_per_level",""],["crocksdb_options_get_db_path",""],["crocksdb_options_get_db_paths_num",""],["crocksdb_options_get_disable_auto_compactions",""],["crocksdb_options_get_hard_pending_compaction_bytes_limit",""],["crocksdb_options_get_level0_slowdown_writes_trigger",""],["crocksdb_options_get_level0_stop_writes_trigger",""],["crocksdb_options_get_level_compaction_dynamic_level_bytes",""],["crocksdb_options_get_max_background_compactions",""],["crocksdb_options_get_max_background_flushes",""],["crocksdb_options_get_max_background_jobs",""],["crocksdb_options_get_max_bytes_for_level_multiplier",""],["crocksdb_options_get_memtable_factory_name",""],["crocksdb_options_get_num_levels",""],["crocksdb_options_get_path_target_size",""],["crocksdb_options_get_ratelimiter",""],["crocksdb_options_get_soft_pending_compaction_bytes_limit",""],["crocksdb_options_get_sst_partitioner_factory",""],["crocksdb_options_get_target_file_size_base",""],["crocksdb_options_increase_parallelism",""],["crocksdb_options_is_enable_multi_batch_write",""],["crocksdb_options_optimize_for_point_lookup",""],["crocksdb_options_optimize_level_style_compaction",""],["crocksdb_options_reset_statistics",""],["crocksdb_options_set_allow_concurrent_memtable_write",""],["crocksdb_options_set_atomic_flush",""],["crocksdb_options_set_block_based_table_factory",""],["crocksdb_options_set_block_cache_capacity",""],["crocksdb_options_set_bottommost_compression_options",""],["crocksdb_options_set_bytes_per_sync",""],["crocksdb_options_set_compact_on_deletion",""],["crocksdb_options_set_compaction_filter",""],["crocksdb_options_set_compaction_filter_factory",""],["crocksdb_options_set_compaction_priority",""],["crocksdb_options_set_compaction_readahead_size",""],["crocksdb_options_set_compaction_style",""],["crocksdb_options_set_comparator",""],["crocksdb_options_set_compression",""],["crocksdb_options_set_compression_options",""],["crocksdb_options_set_compression_per_level",""],["crocksdb_options_set_create_if_missing",""],["crocksdb_options_set_db_log_dir",""],["crocksdb_options_set_db_paths",""],["crocksdb_options_set_delayed_write_rate",""],["crocksdb_options_set_disable_auto_compactions",""],["crocksdb_options_set_doubly_skip_list_rep",""],["crocksdb_options_set_enable_multi_batch_write",""],["crocksdb_options_set_enable_pipelined_write",""],["crocksdb_options_set_env",""],["crocksdb_options_set_fifo_compaction_options",""],["crocksdb_options_set_force_consistency_checks",""],["crocksdb_options_set_hard_pending_compaction_bytes_limit",""],["crocksdb_options_set_hash_skip_list_rep",""],["crocksdb_options_set_info_log",""],["crocksdb_options_set_info_log_level",""],["crocksdb_options_set_keep_log_file_num",""],["crocksdb_options_set_level0_file_num_compaction_trigger",""],["crocksdb_options_set_level0_slowdown_writes_trigger",""],["crocksdb_options_set_level0_stop_writes_trigger",""],["crocksdb_options_set_level_compaction_dynamic_level_bytes",""],["crocksdb_options_set_log_file_time_to_roll",""],["crocksdb_options_set_manual_wal_flush",""],["crocksdb_options_set_max_background_compactions",""],["crocksdb_options_set_max_background_flushes",""],["crocksdb_options_set_max_background_jobs",""],["crocksdb_options_set_max_bytes_for_level_base",""],["crocksdb_options_set_max_bytes_for_level_multiplier",""],["crocksdb_options_set_max_compaction_bytes",""],["crocksdb_options_set_max_log_file_size",""],["crocksdb_options_set_max_manifest_file_size",""],["crocksdb_options_set_max_open_files",""],["crocksdb_options_set_max_subcompactions",""],["crocksdb_options_set_max_total_wal_size",""],["crocksdb_options_set_max_write_buffer_number",""],["crocksdb_options_set_memtable_insert_with_hint_prefix_extractor",""],["crocksdb_options_set_memtable_prefix_bloom_size_ratio",""],["crocksdb_options_set_merge_operator",""],["crocksdb_options_set_min_write_buffer_number_to_merge",""],["crocksdb_options_set_num_levels",""],["crocksdb_options_set_optimize_filters_for_hits",""],["crocksdb_options_set_paranoid_checks",""],["crocksdb_options_set_prefix_extractor",""],["crocksdb_options_set_ratelimiter",""],["crocksdb_options_set_recycle_log_file_num",""],["crocksdb_options_set_report_bg_io_stats",""],["crocksdb_options_set_soft_pending_compaction_bytes_limit",""],["crocksdb_options_set_sst_partitioner_factory",""],["crocksdb_options_set_stats_dump_period_sec",""],["crocksdb_options_set_table_cache_numshardbits",""],["crocksdb_options_set_target_file_size_base",""],["crocksdb_options_set_target_file_size_multiplier",""],["crocksdb_options_set_unordered_write",""],["crocksdb_options_set_use_direct_io_for_flush_and_compaction",""],["crocksdb_options_set_use_direct_reads",""],["crocksdb_options_set_use_fsync",""],["crocksdb_options_set_vector_memtable_factory",""],["crocksdb_options_set_wal_bytes_per_sync",""],["crocksdb_options_set_wal_dir",""],["crocksdb_options_set_wal_recovery_mode",""],["crocksdb_options_set_wal_size_limit_mb",""],["crocksdb_options_set_wal_ttl_seconds",""],["crocksdb_options_set_writable_file_max_buffer_size",""],["crocksdb_options_set_write_buffer_size",""],["crocksdb_options_statistics_get_and_reset_ticker_count",""],["crocksdb_options_statistics_get_histogram",""],["crocksdb_options_statistics_get_histogram_string",""],["crocksdb_options_statistics_get_string",""],["crocksdb_options_statistics_get_ticker_count",""],["crocksdb_pause_bg_work",""],["crocksdb_perf_context_block_cache_filter_hit_count",""],["crocksdb_perf_context_block_cache_hit_count",""],["crocksdb_perf_context_block_cache_index_hit_count",""],["crocksdb_perf_context_block_checksum_time",""],["crocksdb_perf_context_block_decompress_time",""],["crocksdb_perf_context_block_read_byte",""],["crocksdb_perf_context_block_read_count",""],["crocksdb_perf_context_block_read_time",""],["crocksdb_perf_context_block_seek_nanos",""],["crocksdb_perf_context_bloom_memtable_hit_count",""],["crocksdb_perf_context_bloom_memtable_miss_count",""],["crocksdb_perf_context_bloom_sst_hit_count",""],["crocksdb_perf_context_bloom_sst_miss_count",""],["crocksdb_perf_context_db_condition_wait_nanos",""],["crocksdb_perf_context_db_mutex_lock_nanos",""],["crocksdb_perf_context_decrypt_data_nanos",""],["crocksdb_perf_context_encrypt_data_nanos",""],["crocksdb_perf_context_env_create_dir_if_missing_nanos",""],["crocksdb_perf_context_env_create_dir_nanos",""],["crocksdb_perf_context_env_delete_dir_nanos",""],["crocksdb_perf_context_env_delete_file_nanos",""],["crocksdb_perf_context_env_file_exists_nanos",""],["crocksdb_perf_context_env_get_children_file_attributes_nanos",""],["crocksdb_perf_context_env_get_children_nanos",""],["crocksdb_perf_context_env_get_file_modification_time_nanos",""],["crocksdb_perf_context_env_get_file_size_nanos",""],["crocksdb_perf_context_env_link_file_nanos",""],["crocksdb_perf_context_env_lock_file_nanos",""],["crocksdb_perf_context_env_new_directory_nanos",""],["crocksdb_perf_context_env_new_logger_nanos",""],["crocksdb_perf_context_env_new_random_access_file_nanos",""],["crocksdb_perf_context_env_new_random_rw_file_nanos",""],["crocksdb_perf_context_env_new_sequential_file_nanos",""],["crocksdb_perf_context_env_new_writable_file_nanos",""],["crocksdb_perf_context_env_rename_file_nanos",""],["crocksdb_perf_context_env_reuse_writable_file_nanos",""],["crocksdb_perf_context_env_unlock_file_nanos",""],["crocksdb_perf_context_filter_block_read_count",""],["crocksdb_perf_context_find_next_user_entry_time",""],["crocksdb_perf_context_find_table_nanos",""],["crocksdb_perf_context_get_cpu_nanos",""],["crocksdb_perf_context_get_from_memtable_count",""],["crocksdb_perf_context_get_from_memtable_time",""],["crocksdb_perf_context_get_from_output_files_time",""],["crocksdb_perf_context_get_post_process_time",""],["crocksdb_perf_context_get_read_bytes",""],["crocksdb_perf_context_get_snapshot_time",""],["crocksdb_perf_context_index_block_read_count",""],["crocksdb_perf_context_internal_delete_skipped_count",""],["crocksdb_perf_context_internal_key_skipped_count",""],["crocksdb_perf_context_internal_merge_count",""],["crocksdb_perf_context_internal_recent_skipped_count",""],["crocksdb_perf_context_iter_next_cpu_nanos",""],["crocksdb_perf_context_iter_prev_cpu_nanos",""],["crocksdb_perf_context_iter_read_bytes",""],["crocksdb_perf_context_iter_seek_cpu_nanos",""],["crocksdb_perf_context_merge_operator_time_nanos",""],["crocksdb_perf_context_multiget_read_bytes",""],["crocksdb_perf_context_new_table_block_iter_nanos",""],["crocksdb_perf_context_new_table_iterator_nanos",""],["crocksdb_perf_context_next_on_memtable_count",""],["crocksdb_perf_context_prev_on_memtable_count",""],["crocksdb_perf_context_read_filter_block_nanos",""],["crocksdb_perf_context_read_index_block_nanos",""],["crocksdb_perf_context_reset",""],["crocksdb_perf_context_seek_child_seek_count",""],["crocksdb_perf_context_seek_child_seek_time",""],["crocksdb_perf_context_seek_internal_seek_time",""],["crocksdb_perf_context_seek_max_heap_time",""],["crocksdb_perf_context_seek_min_heap_time",""],["crocksdb_perf_context_seek_on_memtable_count",""],["crocksdb_perf_context_seek_on_memtable_time",""],["crocksdb_perf_context_user_key_comparison_count",""],["crocksdb_perf_context_write_delay_time",""],["crocksdb_perf_context_write_memtable_time",""],["crocksdb_perf_context_write_pre_and_post_process_time",""],["crocksdb_perf_context_write_scheduling_flushes_compactions_time",""],["crocksdb_perf_context_write_thread_wait_nanos",""],["crocksdb_perf_context_write_wal_time",""],["crocksdb_pinnableslice_destroy",""],["crocksdb_pinnableslice_value",""],["crocksdb_property_value",""],["crocksdb_property_value_cf",""],["crocksdb_put",""],["crocksdb_put_cf",""],["crocksdb_ratelimiter_create",""],["crocksdb_ratelimiter_create_with_auto_tuned",""],["crocksdb_ratelimiter_destroy",""],["crocksdb_ratelimiter_get_bytes_per_second",""],["crocksdb_ratelimiter_get_singleburst_bytes",""],["crocksdb_ratelimiter_get_total_bytes_through",""],["crocksdb_ratelimiter_get_total_requests",""],["crocksdb_ratelimiter_request",""],["crocksdb_ratelimiter_set_bytes_per_second",""],["crocksdb_readoptions_create",""],["crocksdb_readoptions_destroy",""],["crocksdb_readoptions_set_background_purge_on_iterator_cleanup",""],["crocksdb_readoptions_set_fill_cache",""],["crocksdb_readoptions_set_ignore_range_deletions",""],["crocksdb_readoptions_set_iterate_lower_bound",""],["crocksdb_readoptions_set_iterate_upper_bound",""],["crocksdb_readoptions_set_managed",""],["crocksdb_readoptions_set_max_skippable_internal_keys",""],["crocksdb_readoptions_set_pin_data",""],["crocksdb_readoptions_set_prefix_same_as_start",""],["crocksdb_readoptions_set_read_tier",""],["crocksdb_readoptions_set_readahead_size",""],["crocksdb_readoptions_set_snapshot",""],["crocksdb_readoptions_set_table_filter",""],["crocksdb_readoptions_set_tailing",""],["crocksdb_readoptions_set_total_order_seek",""],["crocksdb_readoptions_set_verify_checksums",""],["crocksdb_release_snapshot",""],["crocksdb_repair_db",""],["crocksdb_restore_options_create",""],["crocksdb_restore_options_destroy",""],["crocksdb_restore_options_set_keep_log_files",""],["crocksdb_run_ldb_tool",""],["crocksdb_run_sst_dump_tool",""],["crocksdb_sequential_file_create",""],["crocksdb_sequential_file_destroy",""],["crocksdb_sequential_file_read",""],["crocksdb_sequential_file_skip",""],["crocksdb_set_bottommost_compression",""],["crocksdb_set_db_options",""],["crocksdb_set_external_sst_file_global_seq_no",""],["crocksdb_set_options_cf",""],["crocksdb_set_perf_level",""],["crocksdb_single_delete",""],["crocksdb_single_delete_cf",""],["crocksdb_slicetransform_create",""],["crocksdb_slicetransform_destroy",""],["crocksdb_sst_file_meta_data_largestkey",""],["crocksdb_sst_file_meta_data_name",""],["crocksdb_sst_file_meta_data_size",""],["crocksdb_sst_file_meta_data_smallestkey",""],["crocksdb_sst_partitioner_can_do_trivial_move",""],["crocksdb_sst_partitioner_context_create",""],["crocksdb_sst_partitioner_context_destroy",""],["crocksdb_sst_partitioner_context_is_full_compaction",""],["crocksdb_sst_partitioner_context_is_manual_compaction",""],["crocksdb_sst_partitioner_context_largest_key",""],["crocksdb_sst_partitioner_context_output_level",""],["crocksdb_sst_partitioner_context_set_is_full_compaction",""],["crocksdb_sst_partitioner_context_set_is_manual_compaction",""],["crocksdb_sst_partitioner_context_set_largest_key",""],["crocksdb_sst_partitioner_context_set_output_level",""],["crocksdb_sst_partitioner_context_set_smallest_key",""],["crocksdb_sst_partitioner_context_smallest_key",""],["crocksdb_sst_partitioner_create",""],["crocksdb_sst_partitioner_destroy",""],["crocksdb_sst_partitioner_factory_create",""],["crocksdb_sst_partitioner_factory_create_partitioner",""],["crocksdb_sst_partitioner_factory_destroy",""],["crocksdb_sst_partitioner_factory_name",""],["crocksdb_sst_partitioner_request_create",""],["crocksdb_sst_partitioner_request_current_output_file_size",""],["crocksdb_sst_partitioner_request_current_user_key",""],["crocksdb_sst_partitioner_request_destroy",""],["crocksdb_sst_partitioner_request_prev_user_key",""],["crocksdb_sst_partitioner_request_set_current_output_file_size",""],["crocksdb_sst_partitioner_request_set_current_user_key",""],["crocksdb_sst_partitioner_request_set_prev_user_key",""],["crocksdb_sst_partitioner_should_partition",""],["crocksdb_sstfilereader_create",""],["crocksdb_sstfilereader_destroy",""],["crocksdb_sstfilereader_new_iterator",""],["crocksdb_sstfilereader_open",""],["crocksdb_sstfilereader_read_table_properties",""],["crocksdb_sstfilereader_verify_checksum",""],["crocksdb_sstfilewriter_create",""],["crocksdb_sstfilewriter_create_cf",""],["crocksdb_sstfilewriter_delete",""],["crocksdb_sstfilewriter_delete_range",""],["crocksdb_sstfilewriter_destroy",""],["crocksdb_sstfilewriter_file_size",""],["crocksdb_sstfilewriter_finish",""],["crocksdb_sstfilewriter_merge",""],["crocksdb_sstfilewriter_open",""],["crocksdb_sstfilewriter_put",""],["crocksdb_status_ptr_get_error",""],["crocksdb_sync_wal",""],["crocksdb_table_properties_collection_destroy",""],["crocksdb_table_properties_collection_iter_create",""],["crocksdb_table_properties_collection_iter_destroy",""],["crocksdb_table_properties_collection_iter_key",""],["crocksdb_table_properties_collection_iter_next",""],["crocksdb_table_properties_collection_iter_valid",""],["crocksdb_table_properties_collection_iter_value",""],["crocksdb_table_properties_collection_len",""],["crocksdb_table_properties_collector_create",""],["crocksdb_table_properties_collector_destroy",""],["crocksdb_table_properties_collector_factory_create",""],["crocksdb_table_properties_collector_factory_destroy",""],["crocksdb_table_properties_get_str",""],["crocksdb_table_properties_get_u64",""],["crocksdb_table_properties_get_user_properties",""],["crocksdb_user_collected_properties_add",""],["crocksdb_user_collected_properties_get",""],["crocksdb_user_collected_properties_iter_create",""],["crocksdb_user_collected_properties_iter_destroy",""],["crocksdb_user_collected_properties_iter_key",""],["crocksdb_user_collected_properties_iter_next",""],["crocksdb_user_collected_properties_iter_valid",""],["crocksdb_user_collected_properties_iter_value",""],["crocksdb_user_collected_properties_len",""],["crocksdb_write",""],["crocksdb_write_multi_batch",""],["crocksdb_writeampbasedratelimiter_create_with_auto_tuned",""],["crocksdb_writebatch_append_content",""],["crocksdb_writebatch_clear",""],["crocksdb_writebatch_count",""],["crocksdb_writebatch_create",""],["crocksdb_writebatch_create_from",""],["crocksdb_writebatch_create_with_capacity",""],["crocksdb_writebatch_data",""],["crocksdb_writebatch_delete",""],["crocksdb_writebatch_delete_cf",""],["crocksdb_writebatch_delete_range",""],["crocksdb_writebatch_delete_range_cf",""],["crocksdb_writebatch_destroy",""],["crocksdb_writebatch_iterate",""],["crocksdb_writebatch_iterate_cf",""],["crocksdb_writebatch_iterator_column_family_id",""],["crocksdb_writebatch_iterator_create",""],["crocksdb_writebatch_iterator_destroy",""],["crocksdb_writebatch_iterator_key",""],["crocksdb_writebatch_iterator_next",""],["crocksdb_writebatch_iterator_valid",""],["crocksdb_writebatch_iterator_value",""],["crocksdb_writebatch_iterator_value_type",""],["crocksdb_writebatch_merge",""],["crocksdb_writebatch_merge_cf",""],["crocksdb_writebatch_pop_save_point",""],["crocksdb_writebatch_put",""],["crocksdb_writebatch_put_cf",""],["crocksdb_writebatch_ref_count",""],["crocksdb_writebatch_ref_iterator_create",""],["crocksdb_writebatch_rollback_to_save_point",""],["crocksdb_writebatch_set_content",""],["crocksdb_writebatch_set_save_point",""],["crocksdb_writebatch_single_delete",""],["crocksdb_writebatch_single_delete_cf",""],["crocksdb_writeoptions_create",""],["crocksdb_writeoptions_destroy",""],["crocksdb_writeoptions_disable_wal",""],["crocksdb_writeoptions_set_ignore_missing_column_families",""],["crocksdb_writeoptions_set_low_pri",""],["crocksdb_writeoptions_set_no_slowdown",""],["crocksdb_writeoptions_set_sync",""],["crocksdb_writestallinfo_cf_name",""],["crocksdb_writestallinfo_cur",""],["crocksdb_writestallinfo_prev",""],["ctitandb_create_column_family",""],["ctitandb_create_iterator",""],["ctitandb_create_iterator_cf",""],["ctitandb_decode_blob_index",""],["ctitandb_delete_blob_files_in_range",""],["ctitandb_delete_blob_files_in_range_cf",""],["ctitandb_delete_blob_files_in_ranges_cf",""],["ctitandb_delete_files_in_range",""],["ctitandb_delete_files_in_range_cf",""],["ctitandb_delete_files_in_ranges_cf",""],["ctitandb_encode_blob_index",""],["ctitandb_get_titan_db_options",""],["ctitandb_get_titan_options_cf",""],["ctitandb_open_column_families",""],["ctitandb_options_blob_file_compression",""],["ctitandb_options_copy",""],["ctitandb_options_create",""],["ctitandb_options_destroy",""],["ctitandb_options_dirname",""],["ctitandb_options_get_blob_cache_capacity",""],["ctitandb_options_get_blob_cache_usage",""],["ctitandb_options_min_blob_size",""],["ctitandb_options_set_blob_cache",""],["ctitandb_options_set_blob_cache_capacity",""],["ctitandb_options_set_blob_file_compression",""],["ctitandb_options_set_blob_run_mode",""],["ctitandb_options_set_dirname",""],["ctitandb_options_set_disable_background_gc",""],["ctitandb_options_set_discardable_ratio",""],["ctitandb_options_set_gc_merge_rewrite",""],["ctitandb_options_set_level_merge",""],["ctitandb_options_set_max_background_gc",""],["ctitandb_options_set_max_gc_batch_size",""],["ctitandb_options_set_max_sorted_runs",""],["ctitandb_options_set_merge_small_file_threshold",""],["ctitandb_options_set_min_blob_size",""],["ctitandb_options_set_min_gc_batch_size",""],["ctitandb_options_set_purge_obsolete_files_period_sec",""],["ctitandb_options_set_range_merge",""],["ctitandb_options_set_rocksdb_options",""],["ctitandb_options_set_sample_ratio",""],["ctitandb_readoptions_create",""],["ctitandb_readoptions_destroy",""],["ctitandb_readoptions_set_key_only",""],["error_message","Safetyptr must point to a valid CStr value"],["new_bloom_filter",""],["new_lru_cache","Safety`DBLRUCacheOptions` should pointer to a valid cache options"]],"macro":[["ffi_try",""]],"struct":[["CloudEnvOptions",""],["ColumnFamilyDescriptor",""],["DBBackupEngine",""],["DBBlockBasedTableOptions",""],["DBCFHandle",""],["DBCache",""],["DBColumnFamilyMetaData",""],["DBCompactOptions",""],["DBCompactionFilter",""],["DBCompactionFilterContext",""],["DBCompactionFilterFactory",""],["DBCompactionJobInfo",""],["DBCompactionOptions",""],["DBComparator",""],["DBEncryptionKeyManagerInstance",""],["DBEnv",""],["DBEventListener",""],["DBFifoCompactionOptions",""],["DBFileEncryptionInfo",""],["DBFilterPolicy",""],["DBFlushJobInfo",""],["DBFlushOptions",""],["DBIOStatsContext",""],["DBIngestionInfo",""],["DBInstance",""],["DBIterator",""],["DBKeyVersions",""],["DBLRUCacheOptions",""],["DBLevelMetaData",""],["DBLogger",""],["DBMapProperty",""],["DBMemoryAllocator",""],["DBMergeOperator",""],["DBPerfContext",""],["DBPinnableSlice",""],["DBRateLimiter",""],["DBReadOptions",""],["DBRestoreOptions",""],["DBSequentialFile",""],["DBSliceTransform",""],["DBSnapshot",""],["DBSstFileMetaData",""],["DBSstPartitioner",""],["DBSstPartitionerContext",""],["DBSstPartitionerFactory",""],["DBSstPartitionerRequest",""],["DBStatusPtr",""],["DBTableProperties",""],["DBTablePropertiesCollection",""],["DBTablePropertiesCollectionIterator",""],["DBTablePropertiesCollector",""],["DBTablePropertiesCollectorFactory",""],["DBTitanBlobIndex",""],["DBTitanDBOptions",""],["DBTitanReadOptions",""],["DBUserCollectedProperties",""],["DBUserCollectedPropertiesIterator",""],["DBWriteBatch",""],["DBWriteBatchIterator",""],["DBWriteOptions",""],["DBWriteStallInfo",""],["EnvOptions",""],["ExternalSstFileInfo",""],["IngestExternalFileOptions",""],["Options",""],["SstFileReader",""],["SstFileWriter",""]]});