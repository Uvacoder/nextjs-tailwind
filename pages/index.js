import Head from 'next/head';
import { getLatestPosts } from '../lib/api';

export default function Home({ latestPosts: { edges } }) {
  return (
    <>
      <div className='grid grid-cols-3 gap-4 p-5'>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        {edges.map((post) => (
          <div
            className='max-w-xs mx-2 my-2 overflow-hidden rounded shadow-lg'
            key={post.node.id}
          >
            <img
              className='w-full'
              src={post.node.featuredImage?.node.sourceUrl}
              alt='Sunset in the mountains'
            />
            <div className='px-6 py-4'>
              <div className='mb-2 text-xl font-bold'>{post.node.title}</div>
              <div
                className='text-base text-grey-darker'
                dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const latestPosts = await getLatestPosts();
  return {
    props: { latestPosts },
  };
}
