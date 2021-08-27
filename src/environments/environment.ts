// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  dev: {
    apiUrl: 'https://localhost:5001/api',
    oAuthConfig: {
      issuer: 'https://sts.grl.tc',
      clientId: 'gtask_mobile',
      clientSecret: 'bb9f2b3a-76d2-4c65-9e72-d58e23b928ae',
      grantType: 'password',
      scope: 'openid profile gtask.api offline_access'
    },
    oRefreshToken: {      
      clientId: 'gtask_mobile',
      clientSecret: 'bb9f2b3a-76d2-4c65-9e72-d58e23b928ae',
      grantType: 'refresh_token'
      
    }
  },
  prod: {
    apiUrl: 'https://localhost:5001/api',
    oAuthConfig: {
      issuer: 'https://sts.grl.tc',
      clientId: 'gtask_mobile',
      clientSecret: '1q2w3e*',
      grantType: 'password',
      scope: 'openid profile gtask.api offline_access'
    },
    oRefreshToken: {      
      clientId: 'gtask_mobile',
      clientSecret: 'bb9f2b3a-76d2-4c65-9e72-d58e23b928ae',
      grantType: 'refresh_token'
      
    },
    localization: {
      defaultResourceName: 'MyProjectName'
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
