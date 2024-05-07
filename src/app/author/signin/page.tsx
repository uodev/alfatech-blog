import H1 from "@/components/H1";
import SignInForm from "@/partials/author/sigin/SignInForm";
import Link from "next/link";
import { Fragment } from "react";

const AuthorSignInPage: React.FC = () => {


    return (
        <Fragment>
            <H1 text={"Yazar Girişi"} />
            <div className="bg-accent p-3 rounded-xl mt-5 text-gray-950 dark:text-white">
                <p>
                    Yazar olarak giriş yapabilmek için yapmış olduğunuz başvurunun onaylanması gerekmektir. Eğer henüz başvuru yapmadayınız <Link href={"/application"} className="underline font-semibold">buraya tıklayarak</Link> başvuru yapabilirsiniz!
                    Başvuru yapmış ve onaylanmış iseniz lütfen mail adresinizi ve şifrenizi girerek giriş yapınız.
                </p>
            </div>
            <SignInForm />
        </Fragment>
    );
}

export default AuthorSignInPage;
