import Link from 'next/link';

export default function About() {
    return (
        <div className="min-h-[87vh] px-2 sm:py-28 py-36 flex flex-col gap-4 items-center">
            <div className="text-center flex flex-col items-center justify-center w-fit gap-2">
                <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
                    rook2root
                </h1>
                <p className="text-muted-foreground text-md font-medium mb-4">
                    business is business
                </p>
                <p>We expose the tactics no one talks about.</p>
                <p>Not to preach, but to illuminate.</p>
                <p className="mt-4 mb-4">
                    Want to tip us off or collaborate?{' '}
                </p>
                <p>email: admin@rook2root.co</p>
                <p>
                    x:{' '}
                    <Link href="https://x.com/darkpatterns" target="_blank" rel="noopener noreferrer">
                        @darkpatterns
                    </Link>{' '}
                </p>
            </div>
        </div>
    );
}