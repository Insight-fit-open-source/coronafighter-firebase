## Corona Se Push Firebase

This repository is the firebase project which acts as the backend. It is build with [firebase](https://firebase.google.com/).

## Development
To test this locally, use the following command:

```shell script
firebase serve
```

## Intellij and paths
Intellij expects `tsconfig.json` to be in the root directory, and as a result the built in linter will highlight 
absolute imports as unresolvable. To solve this you need to set the path directly:

Add the following to the options field in `Preferences -> Languages & Frameworks -> Typescript`:
> -p ./functions/tsconfig.json

## Deployment
This application is automatically deployed using github workflows based on merges to the `development` and `master` branches.

See:
* [firebase deployment](https://firebase.google.com/docs/hosting/deploying)
* [github workflows](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/configuring-a-workflow)
