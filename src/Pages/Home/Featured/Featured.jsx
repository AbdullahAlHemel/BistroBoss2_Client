import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className='featured-item bg-fixed text-white pt-2 '>
            <SectionTitle
               heading={'Featured Item'}
               subHeading={'Check it Out'}
            ></SectionTitle>
          <div className='md:flex gap-8 justify-center bg-slate-500 bg-opacity-20 items-center pt-6 py-16 px-36'>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div>
                <p>Aug 20, 2029</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In distinctio alias dolorem deserunt quasi, enim pariatur quod accusantium ullam sit voluptatibus sapiente adipisci error tempore, perspiciatis autem hic, corporis sed? Repellat impedit minus aspernatur praesentium eligendi modi perferendis dolor porro harum deserunt velit quidem dolorem sint quasi numquam, quos dicta.</p>
                <button className='btn btn-outline border-0 border-b-4 mt-4 '>Order Now</button>
            </div>
          </div>
        </section>
    );
};

export default Featured;