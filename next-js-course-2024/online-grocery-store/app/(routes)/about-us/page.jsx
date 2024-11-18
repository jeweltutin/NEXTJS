import GlobalApi from '@/actions/GlobalApi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

async function AboutUs() {
    const aboutData = await GlobalApi.getAboutUsData();
    console.log(aboutData);
    const content = aboutData.body;
  return (
    <div className='container mx-auto'>
      <h2>{aboutData.title}</h2>
      <p>
        {aboutData.body}
        <BlocksRenderer content={content} />
      </p>
    </div>
  )
}

export default AboutUs;
