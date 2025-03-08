import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
    const loggedIn = await getLoggedInUser();

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.name || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                // app/(root)/page.tsx
                banks={[
                    {
                        $id: '1',
                        accountId: '12345',
                        bankId: 'bank_123',
                        accessToken: 'token_abc',
                        fundingSourceUrl: 'https://example.com',
                        userId: 'user_123',
                        shareableId: 'share_123',
                        currentBalance: 123.50
                    },
                    {
                        $id: '2',
                        accountId: '67890',
                        bankId: 'bank_456',
                        accessToken: 'token_def',
                        fundingSourceUrl: 'https://example.com',
                        userId: 'user_123',
                        shareableId: 'share_456',
                        currentBalance: 500.50
                    }
                ]}            />
        </section>
    )
}

export default Home