import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div>
      <h1>LOGO</h1>
      <Nav />
      </div>
      <style jsx>{`
        header {
          height: 80px;
          display: flex;
          align-items: center;
          box-shadow: 0 3px 3px rgba(0,0,0,0.125);
        }

        header > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          max-width: 680px;
          margin: 0 auto;
        }
      `}</style>
    </header>
  );
}
