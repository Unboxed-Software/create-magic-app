import React, { useCallback, useEffect, useRef, useState } from 'react';

function useHeadingObserver() {
  const observer = useRef();
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleObserver = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };
    (observer as any).current = new IntersectionObserver(handleObserver, {
      rootMargin: '0px 0px -82% 0px',
    });
    const elements = document.querySelectorAll('h1');
    elements.forEach((elem) => (observer as any).current.observe(elem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => (observer.current as any).disconnect();
  }, []);
  return { activeId };
}

const TableOfContents = () => {
  const [isBottomOfPage, setIsBottomOfPage] = useState(false);
  const [headings, setHeadings] = useState<any>([]);
  const { activeId } = useHeadingObserver();

  const handleScroll = useCallback(() => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    setIsBottomOfPage(bottom);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h1')).map((elem) => ({
      id: elem.id,
      text: elem.innerText,
      level: Number(elem.nodeName.charAt(1)),
    }));
    setHeadings(elements);

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className="w-[220px] min-w-[220px] self-start sticky max-h-[calc(100vh_-_70px)] overflow-auto mt-0 px-0 py-6 top-0">
      <ul className="w-fit m-0 pl-[30px] pr-0 py-0">
        {headings.map((heading: any) => (
          <li
            key={heading.id}
            className={`text-left list-disc cursor-pointer mb-[15px] content-['\x82']
							${
                isBottomOfPage && heading.id === 'signing'
                  ? 'text-[#6851ff] font-semibold'
                  : activeId === heading.id && !isBottomOfPage
                  ? 'text-[#6851ff] font-semibold'
                  : ''
              }`}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                (document.querySelector(`#${heading.id}`) as any).scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
