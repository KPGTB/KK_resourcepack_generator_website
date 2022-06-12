import logo from './logo.svg';
import './App.css';
import React from 'react';
import JSZip from 'jszip';
import JSZipUtils from 'jszip-utils'

import {saveAs} from 'file-saver'

// Resourcepack files
import mcmeta from './resourcepack/pack.mcmeta'
import license from './resourcepack/LICENSE.txt'
import icon from './resourcepack/pack.png'

// Space files
import spaceDefault from "./resourcepack/space/default.txt"
import spaceEnUs from "./resourcepack/space/en_us.txt"
import spaceSpaceNoSplit from "./resourcepack/space/space_nosplit.png"
import spaceSpaceSplit from "./resourcepack/space/space_split.png"

// KKplugins folder
import kkWaterEmpty from "./resourcepack/kkplugins/waterEmpty.png"
import kkWaterHalf from "./resourcepack/kkplugins/waterHalf.png"
import kkWaterFull from "./resourcepack/kkplugins/waterFull.png"

class App extends React.Component {

  state = {
    kkthirst: false,
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Development build of resourcepacks downloader. Made for KK plugins.
        </p>

          <div >
            <input type={"checkbox"} onChange={(el) => {
            this.setState({kkthirst: !this.state.kkthirst})
            }}/> KKthirst<br/>
            </div>
          <button onClick={this.PrepareDownload.bind(this)}>Download</button>

      </header>
    </div>
    )
  }

  GetFile(url) {
    var Promise = window.Promise
    if(!Promise) {
      Promise = JSZip.external.Promise
    }

    return new Promise((resolve, reject) => {
      JSZipUtils.getBinaryContent(url, (err, data) => {
        if(err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })

  }

  

  PrepareDownload() {

    var jszip = new JSZip();
    // Pack files
    jszip.file("pack.mcmeta", this.GetFile({mcmeta}.mcmeta))
    jszip.file("LICENSE.txt", this.GetFile({license}.license))
    jszip.file("pack.png", this.GetFile({icon}.icon))

    // Pack folders
    var assetsFolder = jszip.folder("assets")
    var kkpluginsFolder = assetsFolder.folder("kkplugins")
    //var minecraftFolder = assetsFolder.folder("minecraft")
    var spaceFolder = assetsFolder.folder("space")

    // Space folder
    spaceFolder.file("font/default.json", this.GetFile({spaceDefault}.spaceDefault))
    spaceFolder.file("lang/en_us.json", this.GetFile({spaceEnUs}.spaceEnUs))
    spaceFolder.file("textures/font/space_nosplit.png", this.GetFile({spaceSpaceNoSplit}.spaceSpaceNoSplit))
    spaceFolder.file("textures/font/space_split.png", this.GetFile({spaceSpaceSplit}.spaceSpaceSplit))

    if(this.state.kkthirst) {
      kkpluginsFolder.file("textures/waterEmpty.png", this.GetFile({kkWaterEmpty}.kkWaterEmpty))
      kkpluginsFolder.file("textures/waterHalf.png", this.GetFile({kkWaterHalf}.kkWaterHalf))
      kkpluginsFolder.file("textures/waterFull.png", this.GetFile({kkWaterFull}.kkWaterFull))
    }

    jszip.generateAsync({type: "blob"}).then((blob) => {
      saveAs(blob, "resourcepack.zip")
    })
  }
}

export default App;
