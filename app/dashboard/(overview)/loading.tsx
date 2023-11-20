import DashboardSkeleton from "@/app/ui/skeletons";

//this can be used for loading the whole page, I am letting it here as a doc, because each component has a Suspense so this can be removed

const Loading = () => {
  return <DashboardSkeleton />;
};

export default Loading;
