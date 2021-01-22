const BlockingSetting = () => {
    return (
        <div className="col-lg-8">
            <div className="central-meta">
                <div className="onoff-options">
                    <h5 className="f-title">
                        <i className="ti-close"></i>
                        Manage Blocking
                    </h5>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                    <form method="post">
                        <div className="setting-row">
                            <span>Sub users</span>
                            <p>Enable this if you want people to follow you</p>
                            <input type="checkbox" id="switch00" /> 
                            <label htmlFor="switch00" data-on-label="ON" data-off-label="OFF"></label>
                        </div>
                        <div className="setting-row">
                            <span>Enable follow me</span>
                            <p>Enable this if you want people to follow you</p>
                            <input type="checkbox" id="switch01" /> 
                            <label htmlFor="switch01" data-on-label="ON" data-off-label="OFF"></label>
                        </div>
                        <div className="setting-row">
                            <span>Send me notifications</span>
                            <p>Send me notification emails my friends like, share or message me</p>
                            <input type="checkbox" id="switch02" /> 
                            <label htmlFor="switch02" data-on-label="ON" data-off-label="OFF"></label>
                        </div>
                        <div className="setting-row">
                            <span>Text messages</span>
                            <p>Send me messages to my cell phone</p>
                            <input type="checkbox" id="switch03" /> 
                            <label htmlFor="switch03" data-on-label="ON" data-off-label="OFF"></label>
                        </div>
                        <div className="setting-row">
                            <span>Enable tagging</span>
                            <p>Enable my friends to tag me on their posts</p>
                            <input type="checkbox" id="switch04" /> 
                            <label htmlFor="switch04" data-on-label="ON" data-off-label="OFF"></label>
                        </div>
                        <div className="setting-row">
                            <span>Enable sound Notification</span>
                            <p>You'll hear notification sound when someone sends you a private message</p>
                            <input type="checkbox" id="switch05" checked=""/> 
                            <label htmlFor="switch05" data-on-label="ON" data-off-label="OFF"></label>
                        </div>
                        <div className="submit-btns">
                            <button type="button" className="mtr-btn mr-2"><span>Cancel</span></button>
                            <button type="button" className="mtr-btn ml-2"><span>Update</span></button>
                        </div>
                    </form>
                </div>
            </div>	
        </div>
    )
}

export default BlockingSetting
