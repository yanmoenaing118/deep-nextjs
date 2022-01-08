export default function ProductsLayout({aside, content}) {
  return (
    <div className="products-layout">
      <div className="aside">{aside}</div>
      <div className="content">{content}</div>
      <style jsx>{`
        .products-layout {
          display: flex;
        }

        .aside {
          padding: 1em;
        }

        .services {
          
        }
      `}</style>
    </div>
  );
}
