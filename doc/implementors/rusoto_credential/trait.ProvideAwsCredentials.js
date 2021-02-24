(function() {var implementors = {};
implementors["aws"] = [{"text":"impl ProvideAwsCredentials for CredentialsProvider","synthetic":false,"types":[]},{"text":"impl ProvideAwsCredentials for DefaultCredentialsProvider","synthetic":false,"types":[]}];
implementors["rusoto_credential"] = [];
implementors["rusoto_sts"] = [{"text":"impl ProvideAwsCredentials for StsSessionCredentialsProvider","synthetic":false,"types":[]},{"text":"impl ProvideAwsCredentials for StsAssumeRoleSessionCredentialsProvider","synthetic":false,"types":[]},{"text":"impl ProvideAwsCredentials for WebIdentityProvider","synthetic":false,"types":[]}];
implementors["rusoto_util"] = [{"text":"impl ProvideAwsCredentials for CredentialsProvider","synthetic":false,"types":[]},{"text":"impl ProvideAwsCredentials for DefaultCredentialsProvider","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()