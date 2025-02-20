import { classNames } from '@/utils';
import { FC, ReactNode, useEffect, useState } from 'react';
import Frame, { type FrameProps } from './frame';

type RenderFrameProps = {
  children: ReactNode;
} & FrameProps;

const RenderFrame: FC<RenderFrameProps> = ({ children, className, ...rest }) => {
  const [frameContent, setFrameContent] = useState<string | null>();

  useEffect(() => {
    // Create html document
    const html = document.implementation.createHTMLDocument();
    html.documentElement.setAttribute('class', 'h-full');
    html.body.setAttribute('class', 'h-full');
    //   Add builder styles
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    cssLinks.forEach((link) => {
      html.head.appendChild(link.cloneNode(true));
    });
    setFrameContent(html.documentElement.outerHTML);
  }, []);

  if (!frameContent) return null;

  return (
    <Frame initialContent={frameContent} className={classNames('h-full w-full', className)} {...rest}>
      {children}
    </Frame>
  );
};

export default RenderFrame;
