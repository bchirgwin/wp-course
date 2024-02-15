# config projects

## npm package.json

package.json is a npm file that specifies project settings

dependencies - dependencies required for production
devDependencies - dependencies required for development
scripts - scripts for the project. executed with **npm run <script-name>**
other properties of the project include title, description...

create a package.json

```sh
mdir ts-proj
cd ts-proj
npm init -y
```

Note: -y answers default to all questions

## volta pin

volta is a version manager for node, npm and some other tools
it will pin a project to a particular version of node.

A volta object will be added to package.json

```sh
volta pin node@20
```

## git

add a git repository

```sh
git init -b main
```

### create **.gitignore**

```text
node_modules
```

## Install Development Tools as devDependencies

install and initialize typescript

```sh
npm i -D typescript @typescript-eslint/parser concurrently prettier eslint-config-prettier eslint-plugin-prettier 
```

**typescript** - typescript compiler

**concurrently** - execute command line commands in parallel

**eslint** - scans code using rules and warn or error not following standards

**prettier** - an opinionated code style formatter. 

**eslint-config-prettier** - configuration turns off eslint rules that conflict with prettier 

**eslint-plugin-prettier** - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

## Configure Tools

### TypeScript

initialize a typescript project and creates a **tsconfig.json** file

```sh
npx tsc --init
```

### edit **tsconfig.json**

search for, uncomment and edit the following: 

```json
"rootDir": "./src"
"outDir": "./dist"
```
**rootDir** - the directory to search for TypeScript source code
**outDir**  - the directory to put the compiled JavaScript (from TypeScript source)


add **include** section above the **compilerOptions**

```json
  "include": [".eslintrc.cjs", "./src/**/*"],
  "compilerOptions": {
    ...
    
  }
```

### edit npm script

add the following to **package.json** scripts

```json
"scripts": {
  ...
    "start": "concurrently \"tsc --watch\" \"node --watch .\\dist\\index.js \"",
    "format": "npx prettier --write \"**/*.+(js|ts|json)\"",
    "lint": "npx eslint --ignore-path .eslintignore ./src",
}
```

start runs tsc watch the rootDir for changes and automatically recompile 
  and executes node watching outdir for changes
format executes prettier code styling
lint executes eslint 

## EditorConfig

EditorConfig is supported by most editors directly or via editor plugin.

create **.editorconfig** file

```text
# Editor configuration, see http://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

end_of_line = lf

[*.md]
trim_trailing_whitespace = false
```

### eslint configuration

initialize @eslint/config

```sh
npm init @eslint/config
```

How would you like to use ESLint?  **To check syntax, find problems, and enforce code style**
What type of modules does your project use? **JavaScript modules (import/export)**
Which framework does your project use? **None of these**
Does your project use TypeScript?  **Yes**
Where does your code run? **Select both Browser and Node**
How would you like to define a style for your project? **Use a popular style guide**
Which style guide do you want to follow? **Standard: <https://github.com/standard/eslint-config-standard-with-typescript>**
What format do you want your config file to be in? **JavaScript**

Would you like to install them now? **Yes**
Which package manager do you want to use? **npm**

A **.eslintrc.js** file will be created and **package.json** updated

### Rename **eslint.js** to **eslint.cjs**

typescript is configured with ES6 (import/export) modules.
cjs extension is common js module since Eslint does not yet work with ES6 modules

```sh
ren .eslintrc.js .eslintrc.cjs
```

### edit **eslintrc.cjs** file

edit **eslintrc.cjs**

- replace overrides section
- edit extends 
- add plugins section
- edit rules sections
  - prettier processed as lint are errors
  - no console.log error are off

```js
  "overrides": [
      {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
]
"extends": [
  ...
  "plugin:import/errors",
  "plugin:import/warnings",
  "plugin:import/typescript",
  "plugin:prettier/recommended"
  ],
plugins: ['@typescript-eslint'],
"rules": {
    "prettier/prettier": "error",
    "no-console": "off",
    "import/extensions": [
    "error",
    "ignorePackages",
    {
      "js": "never",
      "jsx": "never",
      "ts": "never",
      "tsx": "never"
    }
  ]
}
```
### create **.eslintignore**

```text
node_modules
dist
```

### prettier

Create prettier config **.prettierrc**

```json
{
  "singleQuote": true,
  "printWidth": 120,
  "useTabs": false,
  "tabWidth": 2,
  "bracketSpacing": true,
  "arrowParens": "always",
  "trailingComma": "es5"
}
```

### .pretterignore

create **.prettierignore** with list of files for prettier to ignore

```text
# node_modules
node_modules

# ignore build output
dist

# CHANGELOG auto generated by conventional commits
CHANGELOG.md

# nextjs build output
.next

# ignore package-lock
package-lock.json
```

### VS Code settings

File > Preferences > settings
Search for: format

Editor: Default Formatter => Prettier - Code Formatter
Editor: Format On Paste is checked
Editor: Format On Save is checked

## lint and format on commit

husky is a tool to create git hooks easily
git hooks allow code to be executed on commit or push

```sh
npm i -D husky
npx husky init
echo "npm run format && npm run lint && git add -u" > .husky/pre-commit
```

## add a src and dist directory

create a src directory for source code

```sh
mkdir src
mkdir dist
```
