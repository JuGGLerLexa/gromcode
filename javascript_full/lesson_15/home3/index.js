const createLogger = () => {
  const loggerArr = [];

  const warn = str => {
    loggerArr.push({ message: str, dateTime: new Date(), type: 'warn' });
  };
  function error(str) {
    const errorObj = { message: str, dateTime: new Date(), type: 'error' };
    loggerArr.push(errorObj);
  }
  function log(str) {
    const logObj = { message: str, dateTime: new Date(), type: 'log' };
    loggerArr.push(logObj);
  }

  function getRecords(typeAll) {
    if (typeAll) {
      return loggerArr.filter(el => el.type === typeAll).reverse();
    }
    return typeAll.reverse();
  }

  return { warn, error, log, getRecords };
};

// examples
const logger1 = createLogger();

console.log(logger1.log('User logged in'));
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
logger3.getRecords(); // ===> []
