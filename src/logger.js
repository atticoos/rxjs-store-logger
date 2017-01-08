const defaultOptions = {
  logger: console,
  colors: {
    prevState: '#9E9E9E',
    nextState: '#4CAF50'
  }
};

export default function createLogger (options = {}) {
  const loggerOptions = {
    ...defaultOptions,
    ...options
  };

  const {logger, colors} = loggerOptions;

  return function loggingMiddleware (store) {
    return store.scan((prevState, nextState) => {

      logger.group('change');

      logger.log(`%c prev state`, `color: ${colors.prevState}; font-weight: bold`, prevState);
      logger.log(`%c next state:`, `color: ${colors.nexxtState}; font-weight: bold`, nextState);

      logger.groupEnd();
      return state;
    });
  }
}
