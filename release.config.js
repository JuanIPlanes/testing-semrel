const presetConfig = {
    parserOpts: {
        //"issuePrefixes": ["issue_", "bugfix#", "hotfix#"],
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
    }
}, releaseRules = [
    { type: "feat", release: "minor" },
    { type: "fix", release: "patch" },
    { type: "perf", release: "patch" },
    { type: "docs", scope: "/.*/", release: "patch" },
    { type: "*", scope: "no-release", release: false },
    { breaking: true, release: "major" },
    { type: "chore", scope: "deps", release: "patch" },
    { type: "refactor", scope: "core-*", release: "minor" },
    { type: "*", "message": "*BREAKING*", release: "major" }
]
/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    ci: true,
    repositoryUrl: "https://github.com/JuanIPlanes/testing-semrel",
    preset: 'conventionalcommits',
    branches: [
        "main",
        "+([0-9])?(.{+([0-9]),x}).x",
        { "name": "alpha", "prerelease": true },
        { "name": "beta", channel: "channel-next", "prerelease": true },
        { "name": "canary", "prerelease": true }
    ],
    plugins: [
        ["@semantic-release/commit-analyzer", { releaseRules, ...presetConfig }],
        ["@semantic-release/release-notes-generator", presetConfig],
        ["@semantic-release/npm", { "npmPublish": false }],
        ["@semantic-release/github", {
            "successComment": {
                "enabled": true,
                "comment": "🎉 This ${issue.pull_request ? 'pull request' : 'issue'} is included in version ${nextRelease.version}. Was successfully deployed and is now available!"
            },
            "failComment": {
                "enabled": true,
                "comment": ":x: This release from branch ${branch.name} had failed due to the following errors:\n- ${errors.map(err => err.message).join('\\n- ')}"
            },
            "failTitle": "[Automated] Release failed due to an error during deployment",
            "labels": ["automa>ted", "release"]
        }],
        ["@semantic-release/changelog", {
            changelogFile: "CHANGELOG.md",
            changelogTitle: '# Semantic Versioning Changelog - Frontend - Vite'
        }],
        ["@semantic-release/git", {
            "assets": ["package.json", "package-lock.json", "CHANGELOG.md"],
            "message": "chore(release): set `package.json, -lock.json and CHANGELOG.md` to ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
        }],
        // [
        //     "@semantic-release/exec",
        //     {
        //         "successCmd": "echo \"SEMVER_VERSION=${nextRelease.version}\" > $GITHUB_ENV"
        //     }
        // ]
    ]
}