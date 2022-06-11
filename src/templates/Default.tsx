import Header from "../components/Header";

interface IDefaultProps {
    children: React.ReactNode;
}

const Default = ({children}:IDefaultProps) => {
    return (
        <>
            <Header />
            {children}
            <footer>Footer</footer>
        </>
    );
}

export default Default;