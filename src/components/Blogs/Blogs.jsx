import { UpdateFollower } from 'react-mouse-follower'
import Blogs1 from '../../assets/blogs/blog1.jpg'
import Blogs2 from '../../assets/blogs/blog2.jpg'
import Blogs3 from '../../assets/blogs/blog3.jpg'
import Blogs4 from '../../assets/blogs/blog4.jpg'
const BlogData = [
  {
    id : 1,
    title : " Feel Loving the Sound Headphones With Latest Features and Sound.",
    desc : "Discover the latest technology in our headphones, offering superior sound quality and advanced noise-cancellation. Enjoy adaptive audio settings that automatically adjust to your environment for the perfect listening experience.",
    link : "#",
    img : Blogs1,
  },
  {
    id : 2,
    title : " Grab these Headphones With Latest Features and Sound.",
    desc : "Discover the latest technology in our headphones, offering superior sound quality and advanced noise-cancellation. Enjoy adaptive audio settings that automatically adjust to your environment for the perfect listening experience.",
    link : "#",
    img : Blogs2,
  },
  {
    id : 3,
    title : " Our Latest Technology Headphones With Latest Features and Sound.",
    desc : "Discover the latest technology in our headphones, offering superior sound quality and advanced noise-cancellation. Enjoy adaptive audio settings that automatically adjust to your environment for the perfect listening experience.",
    link : "#",
    img : Blogs3,
  },
  {
    id : 4,
    title : " Headphones With Latest Features and Sound.",
    desc : "Discover the latest technology in our headphones, offering superior sound quality and advanced noise-cancellation. Enjoy adaptive audio settings that automatically adjust to your environment for the perfect listening experience.",
    link : "#",
    img : Blogs4,
  }
]

const Blogs = () => {
  return <>
  <section className='bg-gray-50'>
    <div className="container py-14 ">
      <h1 className='text-3xl font-bold text-center font-poppins pb-8'>Blogs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {
          BlogData.map((data) => {
            return (
              <UpdateFollower key={data.id}
              mouseOptions={{
                backgroundColor : "black",
                zIndex :9999,
                followSpeed : 1.5,
                text : "read",
                textFontSize : "3px",
                scale : 5
              }}
              >

              
              <div  className='flex flex-col items-center gap-6 justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:translate-y-2 duration-300'>
                  <img src={data.img} alt="" />
                  <div className='space-y-2'>
                    <h1 className='text-xl font-bold line-clamp-2'>
                      {data.title}
                    </h1>
                    <p className='line-clamp-2'>{data.desc}</p>
                  </div>
              </div>
              </UpdateFollower>
            )}
            )
        }
      </div>
    </div>
  </section>

  </>
};

export default Blogs;
