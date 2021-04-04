import React from 'react';
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link href="/pages/archive">Archive</Link>
                </li>
                <li>
                    <Link href="/pages/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;