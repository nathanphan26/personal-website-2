function Landing() {
    return (
        <main className="mx-auto mt-10 max-w-5xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-40">
            <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block text-stone-50 xl:inline">Hello, my name is</span><br/>
                <a className="block xl:inline" href='https://www.nathanphan.dev/'>Nathan Phan</a>
            </h1>
            <br/>
            <br/>
            <div className='max-w-xl'>
                <span className='text-xl'>
                I'm a Software Engineer with an emphasis on backend microservices and event driven applications. 
                Currently, I am focused on building integrations with Amazon Alexa and Google Home at <a href='https://www.smartthings.com/' target='_blank'>SmartThings</a>.
                </span>
            </div>
            
            </div>
            <a href="#projects" class="scroll-down mb-16"></a>
        </main>
    )
}

export default Landing;