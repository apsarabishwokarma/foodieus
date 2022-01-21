// import foodtDetails from "@/components/food/food-details";
// import { redirect } from "next/navigation";

// export default async function ProductDetailsPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   if (!params.id) {
//     redirect("/");
//   }
//   //server-side data fetch
//   const res = await fetch(`/${params.id}`);
//   const food = await res.json();

//   return <foodDetails food={food} />;
// }
