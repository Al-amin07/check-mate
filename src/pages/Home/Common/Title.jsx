

const Title = ({title}) => {
    return (
        <div className="flex items-center gap-6 mb-5">
            <h2 className="text-xl font-semibold text-green-900">{title}</h2>

            <hr  className="flex-1 border "/>
        </div>
    );
};

export default Title;