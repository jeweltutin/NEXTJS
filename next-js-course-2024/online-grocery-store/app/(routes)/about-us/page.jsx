import GlobalApi from '@/actions/GlobalApi';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

async function AboutUs() {
    const aboutData = await GlobalApi.getAboutUsData();

    return (
        <div className="container mx-auto">
            <h2 className='p-4 text-center uppercase text-primary text-xl'>{aboutData.title}</h2>
            <div className="pb-5 w-full">
                <Image src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + aboutData?.banner?.url} width={1200} height={200} alt="banner" className="object-cover w-full max-h-[300px]" />
            </div>
            <div className="prose max-w-none">
                <ReactMarkdown>{aboutData.body || "No content available"}</ReactMarkdown>
            </div>
        </div>
    );
}

export default AboutUs;
