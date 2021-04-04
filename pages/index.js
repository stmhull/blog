import { getPostData, getSortedPostsData } from '../lib/posts'
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const lastPost = await getPostData(allPostsData[0].id);
  return {
    props: {
      lastPost
    }
  }
}

export default function Home({ lastPost }) {
  return (
    <div>
      <Link  href={`/posts/${lastPost.id}`}><a id="title-link">{lastPost.title}</a></Link>
      <br />
      <span className="subtitle">{lastPost.date}</span>
      <div dangerouslySetInnerHTML={{__html: lastPost.contentHtml}} />
    </div>
  )
}