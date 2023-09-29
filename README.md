# theglitch

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## FYI

Due to the following error : 
```
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
}
```
 
 FIX: 
 in config.json =>
 ```
 "scripts": {
    "serve": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
    "build": "set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build"
  },
```
