import {Services} from '../../../data/service'
export async function generateStaticParams() {
  // Generate static parameters from local data
  return Services.map((service)=>({ serviceID: service.slug}))
  }
export default function Page({ params }) {

  const ServiceItem = Services.find((service)=>service.slug === params.serviceID);
  if(!ServiceItem){
    return <div>Item not found</div>
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center text-black">
      My Post: {params.serviceID}
    </div>
  );
}
