import { useRouter } from "next/router";

export default function Page1() {
  const router = useRouter();

  return (
    <>
      <h1>Enter Page1</h1>
      <br />
      <button onClick={() => router.push("/")}>Home</button>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}
