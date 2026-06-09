import pkgJson from '../package.json';

export const basePkgName = '@webkrafters/vue-eagleeye';

export const NO_SIDER_URI_PATTERN = /^$/; // /^(?:\/(?:quick-start\/?)?(?:\?.*)?)?$/;

export default {
    _24Hours: 8.64e7,
    contact: pkgJson.author.email,
    copyright: 'This website is a copyrisght of webKrafters Inc. 2024-Present',
    darkmode: {
        defaultValue: true,
        key: 'DKM-VU'
    },
    description: pkgJson.description,
    device: {
        backgroundColor: '#002',
        maxWidth: {
            handheldPortait: 991
        },
        themeColor: '#da4'
    },
    language: 'en',
    siteUrl: 'https://vue-eagleeye.js.org',
    title: 'Vue Eagle Eye',
    url: {
        demo: 'https://codesandbox.io/s/github/webKrafters/vue-eagleeye-app',
        npm: `https://www.npmjs.com/package/${ basePkgName }`,
        repo: `https://github.com//${ basePkgName.slice( 1 ) }.js.git`,
        site: pkgJson.homepage
    },
    versionOfInterest: {
        defaultValue: 'Latest',
        key: 'VEROI-VU'
    },
};
