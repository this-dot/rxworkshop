/* jshint node: true */

module.exports = function() {
  return {
    "gcloud": {
      bucket: 'rxworkshop',
      key: 'fastboot-release.json'
    },
    "gcloud-storage": {
      bucket: 'rxworkshop',
      project: 'this-dot'
    }
  };
};
