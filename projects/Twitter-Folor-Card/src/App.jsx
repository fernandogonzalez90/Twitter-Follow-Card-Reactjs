import { TwitterFollowCard } from "./Twitter-Follow-Card"
import './App.css'

export const App = () => {
    const formatUserName = (userName) => '@' + userName
    return (
        <section className="App">
            <TwitterFollowCard formarUserName={formatUserName} isFollowing={false} userName='fernandogonzalez90'>
                Fernando Gonzalez
            </TwitterFollowCard>
            <TwitterFollowCard formarUserName={formatUserName} isFollowing userName='midudev'>
                Miguel Angel Duran
            </TwitterFollowCard>
            <TwitterFollowCard formarUserName={formatUserName} isFollowing userName='pheralb'>
                Pher Alb
            </TwitterFollowCard>
            <TwitterFollowCard formarUserName={formatUserName} isFollowing userName="s4vitar">
                S4vitar
            </TwitterFollowCard>
        </section>
    )
}
