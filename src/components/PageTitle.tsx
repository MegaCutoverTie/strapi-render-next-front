interface Props {
    title: string,
}

const PageTitle = ({title}: Props) => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-5">{title}</h1>
        </div>
)
}

export default PageTitle