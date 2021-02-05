const nodeBundle = require('./gulpfile');

module.exports.build = async event => {
  const body = JSON.parse(event.body);
  let modules = body.modules ? body.modules : [];
  console.log(`Building prebid with modules: ${modules.join()}`);

  async function buildPrebid() {
    return new Promise((resolve) => {
      nodeBundle(modules)
        .then(response => resolve({status: 200, body: response}))
        .catch(err => resolve({status: 500, body: err}));
    });
  }

  const buildResponse = await buildPrebid();
  const response = {
    statusCode: buildResponse.status,
    body: buildResponse.body
  }

  return response;
};
