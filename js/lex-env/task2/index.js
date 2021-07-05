const createLogger = () => {
  // 5. to many arrays +++
  const messages = [];
  // input : string
  // output: undefined
  function warn(stringWarn) {
    messages.push({ message: stringWarn, dateTime: new Date(), type: 'warn' });
  }

  function error(stringError) {
    messages.push({
      message: stringError,
      dateTime: new Date(),
      type: 'error',
    });
  }

  function log(stringLog) {
    messages.push({
      message: stringLog,
      dateTime: new Date(),
      type: 'log',
    });
  }

  // input: string
  // output: array
  function getRecords(text) {
    // 1. es lint
    // 2. remove if
    // 3. duplicates
    // 4. redundlet variables
    return text
      ? messages.filter((message) => message.type === text)
      : [...messages].sort((a, b) => b.dateTime - a.dateTime);
  }
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// test data

const logger1 = createLogger();
logger1.error('dsgdfd');
logger1.error('hello');
logger1.log('some log');
console.log(logger1);
console.log(logger1.getRecords('error'));
