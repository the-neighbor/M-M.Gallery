export default function Header () {
    return (
        <header className="header w-full">
            <nav className="flex navbar flex-row-reverse items-center">
                
                <div className="title">
                    <h1>M-M.Gallery</h1>
                </div>
                <div className="logo mr-5">
                    <img className="h-12" src="/logo.svg" alt="logo" />
                </div>
                <ul className="mr-5 flex justify-end">
                    {/* <li><a href="#about">About</a></li> */}
                </ul>
            </nav>
        </header>
    )
}