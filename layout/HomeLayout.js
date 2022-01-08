export default function HomeLayout({ children }) {
    return (
      <div className="Home-layout">
        {children}
        <style jsx>{`
          .Home-layout {
            max-width: 680px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    );
  }