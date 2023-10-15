interface Props {
  children: React.ReactNode;
}

// Main Layout component that will be used to wrap all pages with common styles

const Layout: React.FC<Props> = ({ children }) => {
  return <main className="p-8 ">{children}</main>;
};

export default Layout;
