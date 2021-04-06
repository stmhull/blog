import { getAllPostIds, getPostData } from "../../lib/posts"
import Link from 'next/link';

export default function Post({ postData }) {
    return (
        <div>
            <Link href={`/posts/${postData.id}`}>
                <a id="title-link">{postData.title}</a>
            </Link>
            <br/>
            <span className="subtitle">{postData.date}</span>
            <br/>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}