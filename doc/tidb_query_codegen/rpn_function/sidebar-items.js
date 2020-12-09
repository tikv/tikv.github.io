initSidebarItems({"enum":[["RpnFnRefEvaluableType","Parses an evaluable type like `&T`, `JsonRef` or `BytesRef`. &T corresponds to `Ref`. JsonRef corresponds to `Type`."]],"fn":[["generate_downcast_metadata",""],["generate_init_metadata_fn",""],["generate_metadata_type_checker",""],["get_vargs_buf","Get corresponding VARGS buffer Json or JsonRef will be stored in `VARG_PARAM_BUF_JSON_REF` Bytes or BytesRef will be stored in `VARG_PARAM_BUF_BYTES_REF`"],["get_vectoried_type","Transform copr framework type into vectorized function type For example, `Json` in copr framework will be transformed into `JsonRef` before passing to vectorized functions."],["is_bytes","Checks if parameter type is Bytes"],["is_enum","Checks if parameter type is Enum"],["is_json","Checks if parameter type is Json"],["is_set","Checks if parameter type is Set"],["transform","Entry point for the `rpn_fn` attribute."]],"mod":[["kw",""]],"struct":[["NormalRpnFn","Generates an RPN fn which is neither `varg` or `raw_varg`."],["RawVargsRpnFn","Generates a `raw_varg` RPN fn."],["RpnFnAttr","Parses an attribute like `#[rpn_fn(varg, capture = [ctx, output_rows])`."],["RpnFnEvaluableType","Parses an evaluable type like `Option<T>`."],["RpnFnRefEvaluableTypeWithOption","Parses an evaluable type like `Option<&T>`, `Option<JsonRef>`, `Option<EnumRef>`, `Option<SetRef>` or `Option<BytesRef>`."],["RpnFnSignatureParam","Parses a function signature parameter like `val: &Option<T>` or `val: &T`. If input has &Option, set has_option to true; otherwise, set has_option to false. Caller can use has_option to check if input is valid."],["RpnFnSignatureReturnGuardType","Parses a function signature return type like `Result<SomeGuard>`."],["RpnFnSignatureReturnType","Parses a function signature return type like `Result<Option<T>>`."],["ValidatorFnGenerator","Helper utility to generate RPN function validator function."],["VargsRpnFn","Generates a `varg` RPN fn."],["VargsRpnFnSignatureParam","Parses a function signature parameter like `val: &[&Option<T>]` or `val: &[&T]`. If input has &Option, set has_option to true; otherwise, set has_option to false. Caller can use has_option to check if input is valid."]]});