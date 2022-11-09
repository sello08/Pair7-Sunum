// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Subscription } from "rxjs";

export const environment = {
  production: false,

  api: {
    api: "http://localhost:3000",
    Url: {

      services: 'http://localhost:3000/services',
      users: 'http://localhost:3000/users',
      auth: "http://localhost:3000/auth/login",

      customers: {
        customers: 'http://localhost:3000/customers',
        corporateCustomers: 'http://localhost:3000/corporateCustomers',
        individualCustomers: 'http://localhost:3000/individualCustomers',
        subscription:"http://localhost:3000/subscriptions",

      }

    }
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
