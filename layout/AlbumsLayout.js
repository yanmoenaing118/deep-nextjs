export default function AlbumnsLayout({ children }) {
  return (
    <div className="Albumns-layout">
      {children}
      <style jsx>{`
        .Albumns-layout {
          max-width: 680px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
