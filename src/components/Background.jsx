export default function Background() {
    return (
        <div>
            <div className='fixed top-0 w-full bg-gradient-to-br opacity-50 blur-xl from-primary to-zinc-900'></div>
            <div className='fixed top-0 right-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl bg-secondary'></div>
            <div className='fixed bottom-0 left-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl bg-secondary'></div>
        </div>
    );
}
