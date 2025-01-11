import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function HomePage() {
    const loggedin = {
        username: "Mitchell"
    }

    return(
        <section className={'home'}>
            <div className={'home-content'}>
                <header className={'home-header'}>
                    <HeaderBox
                        type={"greeting"}
                        title={"Welcome"}
                        subtext={"Access and manage your banking accounts"}
                        user={loggedin ? loggedin.username : ""}
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1000}
                    />
                </header>
            </div>
        </section>
    );
}