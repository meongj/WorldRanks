import { PageLayout } from '@/components/PageLayout';
import { createFileRoute, Outlet } from '@tanstack/react-router';

// pathless layout route
export const Route = createFileRoute('/_app')({
  component: AppLayout,
});

function AppLayout() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}
