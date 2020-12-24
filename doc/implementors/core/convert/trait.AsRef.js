(function() {var implementors = {};
implementors["anyhow"] = [{"text":"impl AsRef&lt;dyn Error + 'static + Sync + Send&gt; for Error","synthetic":false,"types":[]},{"text":"impl AsRef&lt;dyn Error + 'static&gt; for Error","synthetic":false,"types":[]}];
implementors["arrayvec"] = [{"text":"impl&lt;A:&nbsp;Array&lt;Item = u8&gt;&gt; AsRef&lt;str&gt; for ArrayString&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["bstr"] = [{"text":"impl AsRef&lt;[u8]&gt; for BString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BStr&gt; for BString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for BStr","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BStr&gt; for [u8]","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BStr&gt; for str","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl AsRef&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]}];
implementors["crossbeam_epoch"] = [{"text":"impl&lt;T&gt; AsRef&lt;T&gt; for Owned&lt;T&gt;","synthetic":false,"types":[]}];
implementors["darling_core"] = [{"text":"impl AsRef&lt;Ident&gt; for IdentString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for IdentString","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;T&gt; for SpannedValue&lt;T&gt;","synthetic":false,"types":[]}];
implementors["debugid"] = [{"text":"impl AsRef&lt;str&gt; for CodeId","synthetic":false,"types":[]}];
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; AsRef&lt;Target&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;str&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;str&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R, Target&gt; AsRef&lt;[Target]&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;[Target]&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;[Target]&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["failure"] = [{"text":"impl AsRef&lt;dyn Fail + 'static&gt; for Error","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;T:&nbsp;AsRef&lt;[u8]&gt;&gt; AsRef&lt;[u8]&gt; for Window&lt;T&gt;","synthetic":false,"types":[]}];
implementors["generic_array"] = [{"text":"impl&lt;T, N&gt; AsRef&lt;[T]&gt; for GenericArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 1]&gt; for GenericArray&lt;T, U1&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 2]&gt; for GenericArray&lt;T, U2&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 3]&gt; for GenericArray&lt;T, U3&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 4]&gt; for GenericArray&lt;T, U4&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 5]&gt; for GenericArray&lt;T, U5&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 6]&gt; for GenericArray&lt;T, U6&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 7]&gt; for GenericArray&lt;T, U7&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 8]&gt; for GenericArray&lt;T, U8&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 9]&gt; for GenericArray&lt;T, U9&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 10]&gt; for GenericArray&lt;T, U10&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 11]&gt; for GenericArray&lt;T, U11&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 12]&gt; for GenericArray&lt;T, U12&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 13]&gt; for GenericArray&lt;T, U13&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 14]&gt; for GenericArray&lt;T, U14&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 15]&gt; for GenericArray&lt;T, U15&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 16]&gt; for GenericArray&lt;T, U16&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 17]&gt; for GenericArray&lt;T, U17&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 18]&gt; for GenericArray&lt;T, U18&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 19]&gt; for GenericArray&lt;T, U19&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 20]&gt; for GenericArray&lt;T, U20&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 21]&gt; for GenericArray&lt;T, U21&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 22]&gt; for GenericArray&lt;T, U22&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 23]&gt; for GenericArray&lt;T, U23&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 24]&gt; for GenericArray&lt;T, U24&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 25]&gt; for GenericArray&lt;T, U25&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 26]&gt; for GenericArray&lt;T, U26&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 27]&gt; for GenericArray&lt;T, U27&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 28]&gt; for GenericArray&lt;T, U28&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 29]&gt; for GenericArray&lt;T, U29&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 30]&gt; for GenericArray&lt;T, U30&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 31]&gt; for GenericArray&lt;T, U31&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T; 32]&gt; for GenericArray&lt;T, U32&gt;","synthetic":false,"types":[]}];
implementors["http"] = [{"text":"impl AsRef&lt;str&gt; for HeaderName","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for HeaderName","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for HeaderValue","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for Method","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for Authority","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;str&gt; for Port&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for Scheme","synthetic":false,"types":[]}];
implementors["memmap"] = [{"text":"impl AsRef&lt;[u8]&gt; for Mmap","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for MmapMut","synthetic":false,"types":[]}];
implementors["mime"] = [{"text":"impl AsRef&lt;str&gt; for Mime","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for Name&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["nix"] = [{"text":"impl AsRef&lt;str&gt; for Signal","synthetic":false,"types":[]},{"text":"impl AsRef&lt;sigset_t&gt; for SigSet","synthetic":false,"types":[]},{"text":"impl AsRef&lt;timespec&gt; for TimeSpec","synthetic":false,"types":[]},{"text":"impl AsRef&lt;timeval&gt; for TimeVal","synthetic":false,"types":[]}];
implementors["num_format"] = [{"text":"impl AsRef&lt;str&gt; for Buffer","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for DecimalStr&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for InfinityStr&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for MinusSignStr&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for NanStr&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for PlusSignStr&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for SeparatorStr&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl AsRef&lt;Asn1GeneralizedTimeRef&gt; for Asn1GeneralizedTime","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1TimeRef&gt; for Asn1Time","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1StringRef&gt; for Asn1String","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1IntegerRef&gt; for Asn1Integer","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1BitStringRef&gt; for Asn1BitString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1ObjectRef&gt; for Asn1Object","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BigNumContextRef&gt; for BigNumContext","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BigNumRef&gt; for BigNum","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CmsContentInfoRef&gt; for CmsContentInfo","synthetic":false,"types":[]},{"text":"impl AsRef&lt;ConfRef&gt; for Conf","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;DhRef&lt;T&gt;&gt; for Dh&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;DsaRef&lt;T&gt;&gt; for Dsa&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;EcGroupRef&gt; for EcGroup","synthetic":false,"types":[]},{"text":"impl AsRef&lt;EcPointRef&gt; for EcPoint","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;EcKeyRef&lt;T&gt;&gt; for EcKey&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;EcdsaSigRef&gt; for EcdsaSig","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for DigestBytes","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspBasicResponseRef&gt; for OcspBasicResponse","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspCertIdRef&gt; for OcspCertId","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspResponseRef&gt; for OcspResponse","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspRequestRef&gt; for OcspRequest","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspOneReqRef&gt; for OcspOneReq","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Pkcs12Ref&gt; for Pkcs12","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Pkcs7Ref&gt; for Pkcs7","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;PKeyRef&lt;T&gt;&gt; for PKey&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;RsaRef&lt;T&gt;&gt; for Rsa&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SrtpProtectionProfileRef&gt; for SrtpProtectionProfile","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SslContextRef&gt; for SslContext","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SslSessionRef&gt; for SslSession","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SslRef&gt; for Ssl","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Stackable&gt; AsRef&lt;StackRef&lt;T&gt;&gt; for Stack&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OpensslStringRef&gt; for OpensslString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for OpensslString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for OpensslString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for OpensslStringRef","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for OpensslStringRef","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509VerifyParamRef&gt; for X509VerifyParam","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509StoreBuilderRef&gt; for X509StoreBuilder","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509StoreRef&gt; for X509Store","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509StoreContextRef&gt; for X509StoreContext","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509Ref&gt; for X509","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509Ref&gt; for X509Ref","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509ExtensionRef&gt; for X509Extension","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509NameRef&gt; for X509Name","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509NameEntryRef&gt; for X509NameEntry","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509ReqRef&gt; for X509Req","synthetic":false,"types":[]},{"text":"impl AsRef&lt;GeneralNameRef&gt; for GeneralName","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509AlgorithmRef&gt; for X509Algorithm","synthetic":false,"types":[]}];
implementors["ordered_float"] = [{"text":"impl&lt;T:&nbsp;Float&gt; AsRef&lt;T&gt; for OrderedFloat&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Float&gt; AsRef&lt;T&gt; for NotNan&lt;T&gt;","synthetic":false,"types":[]}];
implementors["protobuf"] = [{"text":"impl&lt;T&gt; AsRef&lt;[T]&gt; for RepeatedField&lt;T&gt;","synthetic":false,"types":[]}];
implementors["quick_xml"] = [{"text":"impl&lt;'a&gt; AsRef&lt;Event&lt;'a&gt;&gt; for Event&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl AsRef&lt;[u8]&gt; for Literal","synthetic":false,"types":[]}];
implementors["rgb"] = [{"text":"impl&lt;T&gt; AsRef&lt;T&gt; for Gray&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T]&gt; for RGB&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;[T]&gt; for RGBA&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;T&gt; for GrayAlpha&lt;T&gt;","synthetic":false,"types":[]}];
implementors["ring"] = [{"text":"impl&lt;A&gt; AsRef&lt;[u8]&gt; for Aad&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: AsRef&lt;[u8]&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Tag","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8; 12]&gt; for Nonce","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for PublicKey","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Digest","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Tag","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Document","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for RsaSubjectPublicKey","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for Signature","synthetic":false,"types":[]}];
implementors["rusoto_credential"] = [{"text":"impl AsRef&lt;str&gt; for Secret","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["symbolic_common"] = [{"text":"impl&lt;'_&gt; AsRef&lt;[u8]&gt; for ByteView&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; AsRef&lt;str&gt; for Name&lt;'_&gt;","synthetic":false,"types":[]}];
implementors["tame_gcs"] = [{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for BucketName&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;[u8]&gt; for BucketName&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;str&gt; for ObjectName&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;[u8]&gt; for ObjectName&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;BucketName&lt;'a&gt;&gt; for (&amp;'a BucketName&lt;'a&gt;, &amp;'a ObjectName&lt;'a&gt;)","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;ObjectName&lt;'a&gt;&gt; for (&amp;'a BucketName&lt;'a&gt;, &amp;'a ObjectName&lt;'a&gt;)","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;BucketName&lt;'a&gt;&gt; for ObjectId&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; AsRef&lt;ObjectName&lt;'a&gt;&gt; for ObjectId&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for Scopes","synthetic":false,"types":[]}];
implementors["tempfile"] = [{"text":"impl AsRef&lt;Path&gt; for TempDir","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Path&gt; for TempPath","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OsStr&gt; for TempPath","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Path&gt; for NamedTempFile","synthetic":false,"types":[]}];
implementors["tidb_query_expr"] = [{"text":"impl AsRef&lt;[RpnExpressionNode]&gt; for RpnExpression","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[RpnExpressionNode]&gt; for RpnExpressionBuilder","synthetic":false,"types":[]}];
implementors["tikv_jemalloc_ctl"] = [{"text":"impl&lt;T:&nbsp;MibArg&gt; AsRef&lt;[usize]&gt; for Mib&lt;T&gt;","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl&lt;'_&gt; AsRef&lt;TcpStream&gt; for ReadHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; AsRef&lt;TcpStream&gt; for WriteHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TcpStream&gt; for OwnedReadHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;TcpStream&gt; for OwnedWriteHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UdpSocket&gt; for SendHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UdpSocket&gt; for RecvHalf","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; AsRef&lt;UnixDatagram&gt; for RecvHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; AsRef&lt;UnixDatagram&gt; for SendHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixDatagram&gt; for OwnedSendHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixDatagram&gt; for OwnedRecvHalf","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; AsRef&lt;UnixStream&gt; for ReadHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; AsRef&lt;UnixStream&gt; for WriteHalf&lt;'_&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixStream&gt; for OwnedReadHalf","synthetic":false,"types":[]},{"text":"impl AsRef&lt;UnixStream&gt; for OwnedWriteHalf","synthetic":false,"types":[]}];
implementors["unicase"] = [{"text":"impl&lt;S:&nbsp;AsRef&lt;str&gt;&gt; AsRef&lt;str&gt; for Ascii&lt;S&gt;","synthetic":false,"types":[]},{"text":"impl&lt;S:&nbsp;AsRef&lt;str&gt;&gt; AsRef&lt;str&gt; for UniCase&lt;S&gt;","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl AsRef&lt;str&gt; for Url","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()