import Image from "next/image";
import { Button } from "./ui/button";
import Search from "./Search";
import FileUploader from "./FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";

interface HeaderProps {
    userId: string;
    accountId: string;
}

const Header = ({ userId, accountId }: HeaderProps) => {
    return (
        <header className="header">
            <Search />
            <div className="header-wrapper">
                <FileUploader ownerId={userId} accountId={accountId} />

                <form action={async () => {
                    'use server';

                    await signOutUser()
                }}>
                    <Button
                        type="submit"
                        className="sign-out-button"
                    >
                        <Image
                            src="/assets/icons/logout.svg"
                            alt="logout"
                            height={24}
                            width={24}
                            className="w-6"
                        />
                    </Button>
                </form>
            </div>
        </header>
    )
}

export default Header;