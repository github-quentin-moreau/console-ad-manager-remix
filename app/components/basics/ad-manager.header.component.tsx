import {Panel, QuestionCircleIcon} from "@teads/lib-design-system-react"
import {NavLink} from "@remix-run/react";

const adManagerHeaderComponent = () => {
    return(
        <div className="app">
            <Panel elevation={1} className="menu">
                <NavLink
                    to={'/ad-manager/seats'}
                    className={'routerButton'}
                >
                    Onboarding and seat management
                </NavLink>
                <NavLink
                    to={'/ad-manager/migrate-campaign'}
                    className={'routerButton'}
                >
                    Unlock TAM campaigns to Manager
                </NavLink>
                <NavLink
                    to="/ad-manager/custom-targeting-rule"
                    className={'routerButton'}
                >
                    Advanced Targeting rules for TAM campaigns
                </NavLink>
                <NavLink
                    to={
                        'https://app.gitbook.com/@teads/s/ad-operations/teads-ads-manager'
                    }
                    target={'_blank'}
                >
                    <div className="helpButton">
                        Help Center
                        <QuestionCircleIcon
                            size={24}
                        />
                    </div>
                </NavLink>
            </Panel>
        </div>
    )
}

export default adManagerHeaderComponent;