import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';

function Header() {
    return (
        <header className="flex items-center justify-between px-10 pt-10">
            <div className="flex items-center justify-between gap-x-8">
                
                <Link href="/">
                    <Image src="/runeslogo.png" alt="Runes Dashboard" width={40} height={40} />
                </Link>

                <Link
                href={"https://leather.io/learn/bitcoin-runes"}
                target="_blank"
                className={buttonVariants({ variant: "link" })}
                >
                What are Runes?
                </Link>

                <Link
                href={"https://www.hiro.so/blog/introducing-the-runes-api"}
                target="_blank"
                className={buttonVariants({ variant: "link" })}
                >
                What is the Runes API?
                </Link>

                <Link
                href={"https://github.com/hirosystems/runehook"}
                target="_blank"
                className={buttonVariants({ variant: "link" })}
                >
                Runehook
                </Link>
                
            </div>
            
        </header>
    )
}

export default Header;