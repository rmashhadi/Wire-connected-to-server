import React from 'react'
import MenuListComposition from '../../materials/MenuListComposition'
class TopMenu extends React.Component{
    
    render() {
        return (
            <div className="menu">
                <MenuListComposition name='Wire'/>
                <MenuListComposition name='Conversation'/>
                <MenuListComposition name='Edit'/>
                <MenuListComposition name='View'/>
                <MenuListComposition name='Help'/>
            </div>
        )
    }
}

export default TopMenu
