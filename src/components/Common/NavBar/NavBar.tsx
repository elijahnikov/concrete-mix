interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
    return (
        <div data-testid="nav-bar">
            {/* MAIN NAV */}
            <div className="absolute top-0 left-0 h-[90px] bg-slate-500 w-[100%] p-5">
                <p className="float-left mt-2 text-2xl font-bold">
                    Designated Concrete
                </p>
            </div>
        </div>
    );
};

export default NavBar;
