
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div  className="my-8">
            <p className="text-yellow-600 text-center text-xl">----- {subHeading} -----</p>
            <h3 className="text-center text-3xl uppercase border-t-2 my-4 font-medium w-[300px] m-auto">{heading}</h3>
        </div>
    );
};

export default SectionTitle;