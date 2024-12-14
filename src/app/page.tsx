import { getPosts } from "@/requests/post";

import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import MainSection from "./component/mainSection";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <main>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MainSection />
      </HydrationBoundary>
    </main>
  );
}
