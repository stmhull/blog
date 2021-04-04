import React from 'react';
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link href="/archive">Archive</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;