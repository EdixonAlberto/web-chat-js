function configLoad() {
  const ENV = process.env;

  const config = {
    modeDev: ENV.NODE_ENV !== 'production'
  };

  global.config = config;
}

configLoad();
