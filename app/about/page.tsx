import Image from 'next/image'
import siteMetadata from '@/siteMetadata'
import Link from 'next/link'

import MailIcon from '@/public/icons/mail.svg'
import githubIcon from '@/public/icons/github.svg'
import linkedinIcon from '@/public/icons/linkedin.svg'
import twitterIcon from '@/public/icons/twitter.svg'
import youtubeIcon from '@/public/icons/youtube.svg'
import getLogger from '@/utils/log-util'

const title = "About"
const description = "The page about me!"

const logger = getLogger("about");

export default function About() {

  logger.info(title+' page called!')

  return (
    <div className="py-6 prose dark:prose-dark dark:text-gray-100 ">
      <h1 className=''>{title}</h1>
      {description && <p className="text-xl italic pb-2 text-gray-500">{description}</p>}
      <hr />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">

        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={siteMetadata.authorImage}
              alt="user"
              width={300}
              height={200}
              className="rounded-md"
            />
            <h3 className="mb-1 pt-1 text-2xl font-bold leading-8 tracking-tight">{siteMetadata.author}</h3>
            <div className="text-gray-500 dark:text-gray-400">{siteMetadata.role}</div>
            {/* <div className="text-gray-500 dark:text-gray-400">{company}</div> */}
            <div className="flex space-x-3 pt-6">
              <Link target="_blank" rel="noreferrer" href={`mailto:${siteMetadata.email}`}>
                <Image src={MailIcon} alt="emailIcon" height={27} width={27} />
              </Link>
              <Link target="_blank" rel="noreferrer" href={siteMetadata.github}>
                <Image src={githubIcon} alt="githubIcon" height={27} width={27} />
              </Link>
              <Link target="_blank" rel="noreferrer" href={siteMetadata.youtube}>
                <Image src={youtubeIcon} alt="youtubeIcon" height={27} width={27} />
              </Link>
              <Link target="_blank" rel="noreferrer" href={siteMetadata.twitter}>
                <Image src={twitterIcon} alt="TwitterIcon" height={30} width={30} />
              </Link>
              <Link target="_blank" rel="noreferrer" href={siteMetadata.linkedin}>
                <Image src={linkedinIcon} alt="linkedinIcon" height={30} width={30} />
              </Link>
            </div>
          </div>
          <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">
            <h2>About Me</h2>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dolore cupiditate provident, iusto eius necessitatibus delectus veritatis doloribus magni. Quidem tempore laborum accusantium dolorum voluptates. Sint explicabo quisquam error dicta!</p>
            <p className='py-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima tempora debitis natus porro nihil quo rem, optio hic dicta omnis voluptas vero id vel iure doloribus animi eos sapiente exercitationem temporibus, explicabo asperiores adipisci sequi. Quidem expedita atque quia porro molestiae incidunt autem animi nesciunt. Mollitia, cum excepturi. Veritatis quae obcaecati maiores veniam molestias illo voluptas aliquam ratione, quaerat temporibus nostrum, consectetur iure magnam dolorum exercitationem! A neque delectus exercitationem quaerat id assumenda consequatur necessitatibus maxime? Expedita sint nam, placeat, excepturi, dolorem perspiciatis repellat exercitationem distinctio qui ex sed voluptatibus animi aut non quod saepe facere! Laborum ea impedit odit!</p>

          </div>
        </div>
      </div>
    </div>
  )
}
