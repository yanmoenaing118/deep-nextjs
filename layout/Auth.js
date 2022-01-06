export default function AuthLayout() {
  return (
    <div className="auth">
      <form action="#">
        <div className="input">
          <input type="text" name="name" />
        </div>
        <input type="password" name="password" />
      </form>

      <style jsx>{`
        .auth {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(255, 255, 255, 0.7);
        }

        form {
          width: min(100%, 580px);
          margin: auto;
        }
      `}</style>
    </div>
  );
}
