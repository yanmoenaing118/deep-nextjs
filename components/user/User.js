import Image from "next/image";

export default function User({ email, name, profile }) {
  return (
    <div className="account">
      <p>{name}</p>
      <p>{email}</p>
      <Image src={profile} alt={name} width={40} height={40} />

      <style jsx>{`
        
        .account {
          display: flex;
          height: 100%;
          align-items: center;
        }

        p {
            margin-right: 1em;
        }
      `}</style>
    </div>
  );
}
