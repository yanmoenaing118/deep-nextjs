export default function AboutLayout({ children }) {
    return (
      <div className="About-layout">
        {children}
        <style jsx>{`
          .About-layout {
            max-width: 680px;
            margin: 0 auto;
          }
        `}</style>
      </div>
    );
  }