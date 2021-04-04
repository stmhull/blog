import { getPostData, getSortedPostsData } from '../lib/posts'
import Title from '../components/title'
import Sidebar from "../components/sidebar"
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const lastPost = await getPostData(allPostsData[0].id);
  return {
    props: {
      allPostsData,
      lastPost
    }
  }
}

export default function Home({ allPostsData, lastPost }) {
  return (
    <div className="grid-container">
      <Title />
      <Sidebar allPostsData={allPostsData} />
      <div className="home-content">
      <Link className="title-link" href={`/posts/${lastPost.id}`}>{lastPost.title}</Link>
        <span className="subtitle">{lastPost.date}</span>
        <div dangerouslySetInnerHTML={{__html: lastPost.contentHtml}} />
      </div>
    </div>
  )
}