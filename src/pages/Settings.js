import React from "react";
import { Link } from "react-router-dom";
import './Settings.css';
import { useState, useRef } from "react";
import { Input } from "web3uikit";
import pfp1 from "../images/pfp1.png";
import pfp2 from "../images/pfp2.png";
import pfp3 from "../images/pfp3.png";
import pfp4 from "../images/pfp4.png";
import pfp5 from "../images/pfp5.png";
import { defaultImgs } from "../defaultimgs";


const Settings = () => {
  
  const pfps = [pfp1, pfp2, pfp3, pfp4, pfp5]
  const [selectedPFP, setSelectedPFP] = useState();
  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);
  const [theFile, setTheFile] = useState();
  const [username, setUsername] = useState();
  const [bio, setBio] = useState();

  const onBannerClick = () => {
    inputFile.current.click();
  };

  const changeHandler = (event) => {
    const img = event.target.files[0];
    setSelectedFile(URL.createObjectURL(img));
  };

  return (
    <>
    <div className="pageIdentify">Settings</div>
    <div className="settingsPage">
      <Input 
        label="Name"
        name="NameChange"
        width="100%"
        labelBgColor="#141d26"
        // onChange={(e) => setUserName(e.target.value)}
      />
      <Input 
        label="Bio"
        name="bioChange"
        width="100%"
        labelBgColor="#141d26"
        // onChange={(e) => setBio(e.target.value)}
      />

      <div className="pfp">
        Profile Image (Your NFTs)
        <div className="pfpOptions">
          {pfps.map((e, i) => {
            return (
              <>
                <img
                  src={e}
                  className={
                    selectedPFP === e ? "pfpOptionSelected" : "pfpOption"
                  }
                  alt='nft'
                  onClick={() => {setSelectedPFP(pfps[i]);}}
                ></img>
              </>
            )
          })}
        </div>
      </div>
      <div className="pfp">
        Profile Banner
        <div className="pfpOptions">
          <img
            src={selectedFile}
            onClick={onBannerClick}
            className='banner'
            alt='banner'
          ></img>
          <input 
            type='file'
            name='file'
            ref={inputFile}
            onChange={changeHandler}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="save" /* onClick={() => saveEdits()} */ >
        Save
      </div>
    </div>
    </>
  );
};

export default Settings;