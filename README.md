# Voice list - Serverless list app
[![Netlify Status](https://api.netlify.com/api/v1/badges/4d442a1d-9023-4427-b788-bde86da8a286/deploy-status)](https://app.netlify.com/sites/voice-list/deploys)
[![Coverage Status](https://coveralls.io/repos/github/carlaberg/voice-list/badge.svg?branch=feature/test-functions-with-jest)](https://coveralls.io/github/carlaberg/voice-list?branch=feature/test-functions-with-jest)

testing sequential build steps

## Local development

1. cd into frontend folder and install dependencies
2. cd into functions folder and install dependencies
3. Run `docker-compose up` in the root directory to start a mongo instance in a docker container.
4. cd into frontend folder  and run `netlify dev` to start the graphql server and dev server with HMR.

## Branches
Should be up to date with production (master) branch. When developing a new feature pull down develop from remote.

* Master - production
* Develop - for local development

## Continous deployment
Pushing changes to the branches above will trigger a build on netlify.
* Pushing to master will trigger a build avaliable under: voice-list.netlify.app
* Pushing to develop will trigger a build avaliable under: develop--voice-list.netlify.app