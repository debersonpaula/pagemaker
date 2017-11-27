/** fetches a json, defaults to pages.json */
module.exports = function(source, options) {
    return options.fn(require(__dirname + '/../../' + source + '.json'));
};