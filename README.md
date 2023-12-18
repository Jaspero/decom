# Webshop Template

[![Prod | Deploy Webshop](https://github.com/Jaspero/webshop-template/actions/workflows/webshop.yml/badge.svg)](https://github.com/Jaspero/webshop-template/actions/workflows/webshop.yml)

[![Prod | Deploy CMS](https://github.com/Jaspero/webshop-template/actions/workflows/cms.yml/badge.svg)](https://github.com/Jaspero/webshop-template/actions/workflows/cms.yml)

[![Prod | Deploy Functions](https://github.com/Jaspero/webshop-template/actions/workflows/functions.yml/badge.svg)](https://github.com/Jaspero/webshop-template/actions/workflows/functions.yml)

[![Prod | Deploy Firestore Indexes](https://github.com/Jaspero/webshop-template/actions/workflows/indexes.yml/badge.svg)](https://github.com/Jaspero/webshop-template/actions/workflows/indexes.yml)

[![Prod | Deploy Rules](https://github.com/Jaspero/webshop-template/actions/workflows/rules.yml/badge.svg)](https://github.com/Jaspero/webshop-template/actions/workflows/rules.yml)

[![Prod | Deploy Storage Rules](https://github.com/Jaspero/webshop-template/actions/workflows/storage.yml/badge.svg)](https://github.com/Jaspero/webshop-template/actions/workflows/storage.yml)

- [Webshop](https://wonkawave.web.app/)
- [CMS](https://wonkawave-cms.web.app/)
- figma wireframe (https://www.figma.com/file/Pb7saI2I3K9cUzVTPDdwkK/shopify-wireframe?type=design&node-id=0-1&mode=design&t=zCZIj2pcwiuDl1BE-0)

## Getting Started

- Enable Blaze plan on firebase
- Enable Firestore, Storage, Authentication (including google authentication).
- Enable the identity platform
- Enable Multi Factor Authentication
- Set up an additional hosting site [project]-cms
- On the authorized domains page add the added site as well as the main domain website if there is one
- Change the configuration in all of the workflows
- Change the env-config files throughout the project
- Change the action URL in authenticaiton templates to `https://europe-west1-[project].cloudfunctions.net/actioncontroller`
- Download a service account and store it in `webshop/key.json`
