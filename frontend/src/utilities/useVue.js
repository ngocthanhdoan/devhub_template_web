const useVue = () => {
    let _provide = {};
  
    return {
      config: {
        globalProperties: {},
      },
      provide(name, content) {
        _provide[name] = content;
      },
      inject(name) {
        return _provide[name];
      },
    };
  };
  const inject = (pluginName, injectName, options = {}) =>
    import(`../plugins/${pluginName}.js`)
      .then((module) => module.default)
      .then((plugin) => {
        const app = useVue();
  
        plugin.install(app, options);
  
        return app.inject(injectName);
      });
  
  export { useVue, inject };
  