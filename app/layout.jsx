import '../styles/globals.css'

export const metadata = {
    title: "Prompotia",
    description: "Discover & Share AI Prompts"
}

const layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient" />
                </div>

                <main className='relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto'>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default layout