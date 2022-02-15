const core = require('@actions/core')
const io = require('@actions/io')

try {
  core.info("Running cleanup task.")
  var workspacePath = process.env['RUNNER_WORKSPACE']
  if (!workspacePath) {
    throw new Error('RUNNER_WORKSPACE not defined')
  }
  core.debug(`RUNNER_WORKSPACE = '${workspacePath}'`)
  core.info("Removing workspace {workspacePath}")
  await io.rmRF(workspacePath)
} catch (error) {
  core.setFailed(error.message);
}