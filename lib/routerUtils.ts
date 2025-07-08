import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const updateQuery = (
  router: AppRouterInstance,
  newQuery: Record<string, string>
) => {
  const params = new URLSearchParams(window.location.search);

  Object.entries(newQuery).forEach(([key, value]) => {
    params.set(key, value);
  });

  router.push(`?${params.toString()}`);
};
