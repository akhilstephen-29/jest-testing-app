module.exports = {
    verbose: true,
    setupFilesAfterEnv: [
        '<rootDir>/tests/setupTests.js'
    ],
    transform: {
        "^.+\\.js$": "babel-jest",
    },
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules'],

    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec|Snapshot|Unit))\\.jsx?$",
    transformIgnorePatterns: ["<rootDir>/node_modules/"]
}