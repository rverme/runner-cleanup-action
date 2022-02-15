const core = require('@actions/core')

try {
  core.info("Registering cleanup task.")
} catch (error) {
  core.setFailed(error.message);
}