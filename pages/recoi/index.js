import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import Layout from "../../components/Layout";
import User from "../../components/recoil/User";

export default function LearnRecoilPage() {
  return (
    <RecoilRoot>
      <Layout title="Learn Recoil">
        <h1>Learn REcoi</h1>
        <Suspense fallback={<div>Loading user</div>}>
          <User />
        </Suspense>
      </Layout>
    </RecoilRoot>
  );
}
