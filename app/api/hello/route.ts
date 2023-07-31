import getLogger from '@/utils/log-util'

const logger = getLogger("hello-route");

export async function GET(request: Request) {
  logger.info(`Request headers: ${JSON.stringify(request.headers)}`);

  return new Response('Hello world from app !!')
}
