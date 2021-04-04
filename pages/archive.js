import React from 'react';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    }
}

function Archive({ allPostsData }) {
    return (
        <div>
            <ul>
                {console.log(allPostsData)}
                {allPostsData.map(({title, date, id}) => 
                        <li key={id}>
                            <Link href={`/posts/${id}`}>{date + " " + title}</Link>
                        </li>
                    )}
            </ul>
        </div>
    )
}

export default Archive;