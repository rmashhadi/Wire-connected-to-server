import React from 'react'
import {connect} from 'react-redux'
import {colorName} from '../../action/myActions'

class AccountDisplay extends React.Component{
    constructor(){
        super()
        this.state={
            SharedColor:'red'
        }
    }
    changer(e){
        this.props.dispatch(colorName(e.target.name))
        this.setState({SharedColor:e.target.name})

    }
    render() {
        return(
            <div id="Display1">
                
                <div className="right-top">
                    <p>ACCOUNT</p>
                </div>
                <div className="right-bottom">
                    <div className="name">
                        <div className="name-left">
                            <div className="Ps">
                                <p className="p3"><b>Rahele</b></p>
                                <p className="p1">@rahele83</p>
                                <p className="p2">{this.props.myuserName}</p>
                            </div>
                            
                            <div className="dots-container">
                                <div className='colored-div' style={{border:'solid', borderColor: this.state.SharedColor==='blue' ? this.state.SharedColor : 'transparent' }}>
                                    <button className='colored-button' name='blue' style={{backgroundColor:'blue'}} type="button" onClick={(e)=> this.changer(e)}></button>
                                </div>
                                <div className='colored-div' style={{border:'solid', borderColor: this.state.SharedColor==='greenyellow' ? this.state.SharedColor : 'transparent' }}>
                                    <button className='colored-button' name='greenyellow' style={{backgroundColor:'greenyellow'}} type="button" onClick={(e)=> this.changer(e)}></button>
                                </div>
                                <div className='colored-div' style={{border:'solid', borderColor: this.state.SharedColor==='red' ? this.state.SharedColor : 'transparent' }}>
                                    <button className='colored-button' name='red' style={{backgroundColor:'red'}} type="button" onClick={(e)=> this.changer(e)}></button>
                                </div>
                                <div className='colored-div' style={{border:'solid', borderColor: this.state.SharedColor==='orange' ? this.state.SharedColor : 'transparent' }}>
                                    <button className='colored-button' name='orange' style={{backgroundColor:'orange'}} type="button" onClick={(e)=> this.changer(e)}></button>
                                </div>
                                <div className='colored-div' style={{border:'solid', borderColor: this.state.SharedColor==='palevioletred' ? this.state.SharedColor : 'transparent' }}>
                                    <button className='colored-button' name='palevioletred' style={{backgroundColor:'palevioletred'}} type="button" onClick={(e)=> this.changer(e)}></button>
                                </div>
                                <div className='colored-div' style={{border:'solid', borderColor: this.state.SharedColor==='purple' ? this.state.SharedColor : 'transparent' }}>
                                    <button className='colored-button' name='purple' style={{backgroundColor:'purple'}} type="button" onClick={(e)=> this.changer(e)}></button>
                                </div>
                            </div>                                
                        </div>
                        
                        <div className="name-image">
                            <img className="one" src="data:image/jpeg;base64,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" />
                        </div>
                        
                    </div>
                    <div className="info">
                        
                        <div className="info-text">
                                <div className="top-text">
                                    <p className="p-top">INFO</p>
                                    <p className="gray-without">Email</p>
                                    <p className="p-bottom">{this.props.myuserName}</p>
                                </div>
                        </div>
                    </div>
                    <div className="info">
                            <div className="info-text">
                                <div className="top-text">
                                    <p className="p-top">DATA USAGE PERMISSIONS</p>
                                </div>
                                <div className="checkbox-container">
                                    <input className="checkboxes" type="checkbox" />    
                                    <p className="big">Send anonymous data</p>    
                                </div>
                                <p className="gray">Help make Wire better by sending anonymous usage and crash reports.</p>
                                <div className="checkbox-container">
                                    <input className="checkboxes" type="checkbox" />
                                    <p className="big">Receive newsletter</p>
                                </div>
                                <p className="gray">Receive news and product updates from Wire via email.</p>
                            </div>
                    </div>
                    <div className="info">
                            <div className="info-text">
                                <div className="top-text">
                                        <p className="p-top">PRIVACY</p>
                                </div>
                                <div className="checkbox-container">
                                    <input className="checkboxes" type="checkbox" />    
                                    <p className="big">Read receipts</p>    
                                </div>
                                <p className="gray">When this is off, you won't be able to see read receipts from other people.
                                    <br />This setting does not apply to group coversations.
                                </p>
                                
                            </div>
                    </div>
                    <div className="info">
                        
                        <div className="info-text">
                            <div className="top-text">
                                <p className="p-top">HISTORY</p>
                            </div>
                                <p className="green-p">Back up conversations</p>
                                <p className="gray">Create a backup to preserve your conversation history.
                                    you can use this to restore history if you lose your computer or switch to new one.
                                    The backup file is not protected by Wire end-to-end encryption, so store it in a safe place.
                                </p>
                                <p className="green-p">Restore from backup</p>
                                <p className="gray">You can only restore history from a backup of the same platform. Your backup will
                                        overwrite the conversations that you may have on this device.
                                </p>
                        </div>
                    </div>
                        <div className="info">
                        
                            <div className="info-text-green">
                                    
                                <div className="first-green">
                                    <a href="#" target="-blank" className="green-a">Creat a team</a>
                                </div>    
                                
                                <div className="second-green">
                                    <a href="#" target="-blank" className="green-a">Reset password</a>
                                </div>

                                <div className="third-green">
                                    <a href="#" target="-blank"className="green-a" >Delete accont</a>
                                </div> 
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}






const mapStateToProps= (state) => {
    return{
        myuserName:state.myuserName
    }
}

const mapDispatchToProps= (dispatch) => ({
    dispatch:dispatch
})

export default connect(mapStateToProps,mapDispatchToProps)(AccountDisplay)