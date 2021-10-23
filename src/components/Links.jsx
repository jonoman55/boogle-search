import { NavLink } from 'react-router-dom';

const links = [
    { id: 0, url: '/search', text: '🔎 All' },
    { id: 1, url: '/news', text: '📰 News' },
    { id: 2, url: '/images', text: '📸 Images' },
    { id: 3, url: '/videos', text: '📺 Videos' },
];

export const Links = () => (
    <div className="flex items-center justify-between mt-4 sm:justify-around">
        {links.map(({ url, text, id }) => (
            <NavLink key={id} to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">{text}</NavLink>
        ))}
    </div>
);