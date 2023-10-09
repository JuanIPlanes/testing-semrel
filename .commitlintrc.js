// const { execSync } = require('child_process')

// // @tip: git branch name = feature/issue_33   =>    auto get defaultIssues = #33
// const issue = execSync('git rev-parse --abbrev-ref HEAD')
//     .toString()
//     .trim()
//     .split("_")[1]

// const gitStatus = execSync('git status --porcelain || true')
//     .toString()
//     .trim()
//     .split('\n'),

//     subjectComplete = gitStatus
//         .find((r) => ~r.indexOf('M  packages/components'))
//         ?.replace(/\//g, '%%')
//         ?.match(/packages%%components%%((\w|-)*)/)?.[1],

//     scopeComplete = gitStatus
//         .find((r) => ~r.indexOf('M  src'))
//         ?.replace(/(\/)/g, '%%')
//         ?.match(/src%%((\w|-)*)/)?.[1];


/** @type {import('cz-git').UserConfig} */
module.exports = {

    prompt: {
        // defaultScope: scopeComplete,
        // customScopesAlign: !scopeComplete ? 'top-bottom' : 'bottom',
        // defaultSubject: subjectComplete && `[${subjectComplete}]    `,
        // customIssuePrefixAlign: !issue ? "top" : "bottom",
        // defaultIssues: !issue ? "" : `#${issue}`,
        alias: { fd: "docs: fix typos" },
        messages: {
            type: "Select the type of change that you're committing:",
            scope: "Denote the SCOPE of this change ([optional] e.g. component or file name):",
            customScope: "Denote the SCOPE of this change:",
            subject: "Write a SHORT, IMPERATIVE tense description of the change:\n",
            body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
            markBreaking: 'Are there any breaking changes?',
            breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
            footerPrefixesSelect: "Select the ISSUES type of changeList by this change (optional):",
            customFooterPrefix: "Input ISSUES prefix:",
            footer: "List any ISSUES by this change. E.g.: #31, #34:\n",
            //   generatingByAI: 'Generating your AI commit subject...',
            //   generatedSelectByAI: 'Select suitable subject by AI generated:',
            confirmCommit: "Are you sure you want to proceed with the commit above?"
        },
        types: [
            { value: "feat", name: "feat:     ✨  A new feature", emoji: ":sparkles:" },
            { value: "fix", name: "fix:      🐛  A bug fix", emoji: ":bug:" },
            { value: "docs", name: "docs:     📝  Documentation only changes", emoji: ":memo:" },
            { value: "style", name: "style:    💄  Changes that do not affect the meaning of the code", emoji: ":lipstick:" },
            { value: "refactor", name: "refactor: ♻️   A code change that neither fixes a bug nor adds a feature", emoji: ":recycle:" },
            { value: "perf", name: "perf:     ⚡️  A code change that improves performance", emoji: ":zap:" },
            { value: "test", name: "test:     ✅  Adding missing tests or correcting existing tests", emoji: ":white_check_mark:" },
            { value: "build", name: "build:    📦️   Changes that affect the build system or external dependencies", emoji: ":package:" },
            { value: "ci", name: "ci:       ⚙️  Changes to our CI configuration files and scripts", emoji: "gear" },
            { value: "chore", name: "chore:    🔨  Other changes that don't modify src or test files", emoji: ":hammer:" },
            { value: "revert", name: "revert:   ⏪️  Reverts a previous commit", emoji: ":rewind:" }
        ],
        useEmoji: true,
        emojiAlign: "center",
        useAI: false,
        aiNumber: 1,
        themeColorCode: "",
        scopes: [],
        allowCustomScopes: true,
        allowEmptyScopes: true,
        customScopesAlign: "bottom",
        customScopesAlias: "custom",
        emptyScopesAlias: "empty",
        upperCaseSubject: false,
        markBreakingChangeMode: true,
        allowBreakingChanges: ['feat', 'fix'],
        breaklineNumber: 100,
        breaklineChar: "|",
        skipQuestions: [],
        issuePrefixes: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
        customIssuePrefixAlign: "top",
        emptyIssuePrefixAlias: "skip",
        customIssuePrefixAlias: "custom",
        allowCustomIssuePrefix: true,
        allowEmptyIssuePrefix: true,
        confirmColorize: true,
        maxHeaderLength: Infinity,
        maxSubjectLength: Infinity,
        minSubjectLength: 0,
        scopeOverrides: undefined,
        defaultBody: ""
    },
    rules: {
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        'header-max-length': [2, 'always', 100],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ],
    },
};