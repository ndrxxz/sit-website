import { Seo, StructuredData, BookCall } from "@/components";
import heroImage from "@/assets/heroImage.webp";

function Home() {
  
  const pageUrl = `${window.location.origin}/`;

  return (
    <>
      <Seo title="Home" description="Your trusted technology partner for software development, cybersecurity, networking, cloud solutions, and IT infrastructure designed to accelerate business growth." 
        canonical={pageUrl} />
      <StructuredData data={""} />
      <div
        className="w-screen relative left-1/2 right-1/2 mx-[-50vw] md:-mt-30 min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="flex items-center justify-center flex-col gap-10 min-h-screen px-6 md:pt-32 py-12 md:px-12">
          <header className="flex flex-col gap-4 leading-[100%] tracking-normal text-center max-w-3xl ">
            <h1 className="font-medium text-6xl">
              Igniting Every Aspect of Your Digital Growth.
            </h1>
            <p className="font-normal text-base">
              Building your hardware, securing your network, and developing the
              apps that power your business.
            </p>
          </header>

          <BookCall />

          <div className="w-full max-w-200 aspect-video bg-white rounded-[40px]"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
