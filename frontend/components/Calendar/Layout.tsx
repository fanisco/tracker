import { FC, ReactNode } from 'react';

export interface LayoutProps {
  modes?: ReactNode;
  heading?: ReactNode;
  navigation?: ReactNode;
  side?: ReactNode;
  headers?: ReactNode;
}

const Layout: FC<LayoutProps> = ({
  modes,
  heading,
  navigation,
  headers,
  side,
  children,
}) => {
  return (
    <>
      <header className="h-20 relative z-10">
        {modes}
        <div className="flex items-center px-4">
          {heading}
          {navigation && <div className="ml-auto">{navigation}</div>}
        </div>
      </header>
      <main className="w-full h-full -mt-20 pt-20 flex flex-col">
        {headers && (
          <div className="w-full flex relative z-10">
            {side && <div className="w-16"></div>}
            {headers}
          </div>
        )}
        <div className="w-full h-full flex relative z-0 overflow-y-auto snap-y snap-proximity">
          {side}
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
