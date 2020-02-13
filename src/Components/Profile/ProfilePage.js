import React from 'react';
import TopMenu from '../GlobalComponents/TopMenu';
import AccountList from '../GlobalComponents/AccountList'
import PrefrencesMenu from './PrefrencesMenu';
import AccountDisplay from './AccountDisplay'



class ProfilePage extends React.Component{
    render(){
        return(
            <div className='WirePages'>
                <TopMenu />
                <div className="under-menu">
                    <AccountList />
                    <PrefrencesMenu />    
                    <AccountDisplay />
                </div>
            </div>
            
       
        )
    }
}
export default ProfilePage
