import { useSession } from "next-auth/client";

export default function DashboardPage() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p color="red">Login fail</p>;
  } else {
    return <p color="green">Login Success</p>;
  }
}
