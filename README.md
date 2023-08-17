# CMS

# Local development (files are saved locally)

- Install dependencies with `yarn`.
- Get `lido-landing` directory from [lido-content repo](https://github.com/lidofinance/lido-content) to root.
  - You should make it 'cause a current structure made for [lido-content repo](https://github.com/lidofinance/lido-content).
  - Or you should change structure in [features/cms/initialize](features/cms/initialize) and [features/cms/previews](features/cms/previews)
- Run `yarn proxy` from the root directory of the above repository.
- Run dev server with `yarn dev`.

# Local development (files are saved on github)

- Install dependencies with `yarn`.
- Setup `.env` file with `cp .env.sample .env`.
  - `BASE_URL` should be `http://localhost:3000` for local development.
  - `GITHUB_REPO` should be any personal repo outside of `lidofinance` org.
  - `GITHUB_BRANCH` should be `main` or any other perfered branch of your repo.
  - To get `OAUTH_CLIENT_ID` and `OAUTH_CLIENT_SECRET` you need to create GitHub App.
    - Visit https://github.com/settings/apps.
    - Create a new GitHub App.
    - During creation process, provide it with Read and Write permissions for Content and Pull Requests.
    - Install it to your personal repo (one of the tabs on the left).
    - Copy ClientID and ClientSecret and paste into .env file (on the first tab).
- Run dev server with `yarn dev`.
