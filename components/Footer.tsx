import Link from "next/link";
import Image from "next/image";
import siteMetadata from '@/siteMetadata'

import twitterIcon from '@/public/icons/twitter.svg'
import githubIcon from '@/public/icons/github.svg'

const app_version = process.env.npm_package_version


export default function Footer() {
  
  return (  //sticky top-[100vh]
    <footer className=" fixed bottom-0 left-0 z-20 w-full pt-2 px-4 bg-white border-t border-gray-200 shadow 
        md:flex-row flex-col flex 
        items-center justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 
          <a href="/" className="pl-1 hover:underline">
            {siteMetadata.title}
          </a>. All Rights Reserved.
      </span>
      <p className='text-sm md:py-0 py-2'>App Version: 
          <span className='rounded-md p-1 bg-slate-100 text-sm font-semibold'>{app_version}</span>
      </p>
      <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 md:pb-0 pb-3 
          sm:mt-0">
        <li>
          <Link href={siteMetadata.siteRepo} >
              <Image src={githubIcon} alt="TwitterIcon" className='mx-3'  height={22} width={22} />
          </Link>
        </li>
        <li>
          <Link href={siteMetadata.twitter} >
              <Image src={twitterIcon} alt="TwitterIcon" className='mr-5'  height={22} width={22} />
          </Link>
        </li>
      </ul>
    </footer>

  )
}
