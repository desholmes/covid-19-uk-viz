# COVID-19 UK Data Vis

React app that consumes the [covid-19-uk-api.dholmes.co.uk](https://covid-19-uk-api.dholmes.co.uk/) from the [covid-19-uk-api repo](https://github.com/desholmes/covid-19-uk-api).

## Prerequisites

1. Installation of [Docker CE](https://store.docker.com/search?type=edition&offering=community)
1. Installation of [git SCM](https://git-scm.com/downloads)
1. Knowledge of [React](https://reactjs.org/)
1. Installation of [Yarn package manager](https://yarnpkg.com/)

## Commands

### Local Development

1. Ensure the `Prerequisites` are fulfilled
1. `yarn`: To install the dependencies
1. `yarn start`: To start the local development environment ([localhost:3000](http://localhost:3000))
1. Press `CTRL+c` to stop the local development environment

### Docker

#### Setup (for pushing)

1. `make setup`: To `cp .env-dist .env`
1. Add your docker registry to `.env` if you want to push into the docker repo

#### Running from a cold start

1. `make run-cold`: To build the docker image and run it as a container (this combines the `make build` and `make run` commands)
1. Press `CTRL+c` to stop the container

#### Build and pushing

1. `make build-push`: To build the docker image and push it into the docker repo this combines the `make build`, `make login` and `make run` commands)

#### Other commands

1. `make run-clean`: Combines `make clean`, `make build` and `make run` to force a new image build
1. `make clean`: Removes the docker image
1. `clean-dangling-images`: Removed dangling images
