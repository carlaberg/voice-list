# Voice list - Serverless list app
[![Netlify Status](https://api.netlify.com/api/v1/badges/4d442a1d-9023-4427-b788-bde86da8a286/deploy-status)](https://app.netlify.com/sites/voice-list/deploys)
[![codecov](https://codecov.io/gh/carlaberg/voice-list/branch/develop/graph/badge.svg)](https://codecov.io/gh/carlaberg/voice-list)

## Local development

1. cd into frontend folder and install dependencies
2. cd into functions folder and install dependencies
3. Run `docker-compose up` in the root directory to start a mongo instance in a docker container.
4. cd into frontend folder  and run `netlify dev` to start the graphql server and dev server with HMR.

## Branches
Should be up to date with production (master) branch. When developing a new feature pull down develop from remote.

* Master - production
* Develop - for local development

## CI/CD
This project is using Travis for running unit tests and Netlify to deploy.

This is the recommended workflow:
1. Do work in a feature branch.
2. When the feature is ready, make a pull request back to develop.
3. The test suite will run every time code is pushed to the repository.
4. A pull request to develop will create a build preview on netlify.
5. If the tests pass and the build preview looks good the feature can be merged with develop.
6. Merging the feature into develop will trigger a branch deploy on netlify avliable at https://develop--voice-list.netlify.app/
