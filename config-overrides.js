
const { override } = require('customize-cra');

const multipleEntry = require('react-app-rewire-multiple-entry')([
    {
        entry: 'src/index.js',
        template: 'public/index.html',
        outPath: '/index.html',
    }
]);

const addEntry = () => config => {
    multipleEntry.addMultiEntry(config);
    return config;
};

module.exports = {
    webpack: override(
        addEntry(),
    )
}
