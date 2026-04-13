import {queryClient} from "@/lib/queryClient";
import {QueryClientProvider} from "@tanstack/react-query";
import {createRootRoute, Outlet} from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  ),
});
