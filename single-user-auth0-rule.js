function emailDomainWhitelist(user, context, callback) {

	if (user.email !== configuration.ALLOWED_USER_EMAIL) {
		return callback(new UnauthorizedError('Access denied.'));
	}

	return callback(null, user, context);
}
