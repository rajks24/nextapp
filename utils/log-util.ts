import siteMetadata from '@/siteMetadata';
import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const { combine, timestamp, label, printf , colorize} = format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });

const getLogger = (fileName = 'application') => {
  const fileLogTransport = new transports.DailyRotateFile({
    filename: `logs/${fileName}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '30d',
  });

  const consoleTransport = new transports.Console({
    level: process.env.LOG_LEVEL || siteMetadata.logLevel,
    handleExceptions: false,
    // format: format.printf((i) => `${i.message}`),
  });

  const logger = createLogger({
    // level: 'info',
    exitOnError: false,
    format: format.combine(
      colorize(),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      format.errors({ stack: true }),
      format.splat(),
      format.printf(
        ({ level, message, label1 = process.env.NODE_ENV,label2 = fileName, timestamp }) =>
          `${timestamp} [Env: ${label1} | ${label2}] ${level}: ${message}`
      )
    ),
    defaultMeta: { service: 'my-app' },
    transports: [consoleTransport,fileLogTransport],
  });

//   if (process.env.NODE_ENV === 'development') {
//     logger.add(consoleTransport);  // fileLogTransport
//   } 

  return logger;
};

export default getLogger;