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
    var kkthirstFolder = assetsFolder.folder("kkthirst")
    var minecraftFolder = assetsFolder.folder("minecraft")
    var spaceFolder = assetsFolder.folder("space")

    // Space folder
    spaceFolder.file("font/default.json", this.GetFile({spaceDefault}.spaceDefault))
    spaceFolder.file("lang/en_us.json", this.GetFile({spaceEnUs}.spaceEnUs))
    spaceFolder.file("textures/font/space_nosplit.png", this.GetFile({spaceSpaceNoSplit}.spaceSpaceNoSplit))
    spaceFolder.file("textures/font/space_split.png", this.GetFile({spaceSpaceSplit}.spaceSpaceSplit))

    if(this.state.kkthirst) {
      kkthirstFolder.file("textures/waterEmpty.png", this.GetFile({kkWaterEmpty}.kkWaterEmpty))
      kkthirstFolder.file("textures/waterHalf.png", this.GetFile({kkWaterHalf}.kkWaterHalf))
      kkthirstFolder.file("textures/waterFull.png", this.GetFile({kkWaterFull}.kkWaterFull))
    }

    var baseFontText = "{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -3,\"chars\": [\"\\uF801\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -4,\"chars\": [\"\\uF802\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -5,\"chars\": [\"\\uF803\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -6,\"chars\": [\"\\uF804\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -7,\"chars\": [\"\\uF805\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -8,\"chars\": [\"\\uF806\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -9,\"chars\": [\"\\uF807\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -10,\"chars\": [\"\\uF808\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -18,\"chars\": [\"\\uF809\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -34,\"chars\": [\"\\uF80A\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -66,\"chars\": [\"\\uF80B\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -130,\"chars\": [\"\\uF80C\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -258,\"chars\": [\"\\uF80D\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -514,\"chars\": [\"\\uF80E\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": -1026,\"chars\": [\"\\uF80F\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -65536,\"height\": -32770,\"chars\": [\"\\uF800\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 0,\"chars\": [\"\\uF821\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 1,\"chars\": [\"\\uF822\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 2,\"chars\": [\"\\uF823\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 3,\"chars\": [\"\\uF824\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 4,\"chars\": [\"\\uF825\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 5,\"chars\": [\"\\uF826\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 6,\"chars\": [\"\\uF827\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 7,\"chars\": [\"\\uF828\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 15,\"chars\": [\"\\uF829\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 31,\"chars\": [\"\\uF82A\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 63,\"chars\": [\"\\uF82B\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 127,\"chars\": [\"\\uF82C\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 255,\"chars\": [\"\\uF82D\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 511,\"chars\": [\"\\uF82E\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -32768,\"height\": 1023,\"chars\": [\"\\uF82F\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_split.png\",\"ascent\": -65536,\"height\": 32767,\"chars\": [\"\\uF820\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -3,\"chars\": [\"\\uF811\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -4,\"chars\": [\"\\uF812\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -5,\"chars\": [\"\\uF813\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -6,\"chars\": [\"\\uF814\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -7,\"chars\": [\"\\uF815\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -8,\"chars\": [\"\\uF816\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -9,\"chars\": [\"\\uF817\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -10,\"chars\": [\"\\uF818\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -18,\"chars\": [\"\\uF819\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -34,\"chars\": [\"\\uF81A\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -66,\"chars\": [\"\\uF81B\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -130,\"chars\": [\"\\uF81C\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -258,\"chars\": [\"\\uF81D\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -514,\"chars\": [\"\\uF81E\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": -1026,\"chars\": [\"\\uF81F\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -65536,\"height\": -32770,\"chars\": [\"\\uF810\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 0,\"chars\": [\"\\uF831\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 1,\"chars\": [\"\\uF832\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 2,\"chars\": [\"\\uF833\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 3,\"chars\": [\"\\uF834\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 4,\"chars\": [\"\\uF835\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 5,\"chars\": [\"\\uF836\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 6,\"chars\": [\"\\uF837\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 7,\"chars\": [\"\\uF838\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 15,\"chars\": [\"\\uF839\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 31,\"chars\": [\"\\uF83A\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 63,\"chars\": [\"\\uF83B\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 127,\"chars\": [\"\\uF83C\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 255,\"chars\": [\"\\uF83D\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 511,\"chars\": [\"\\uF83E\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -32768,\"height\": 1023,\"chars\": [\"\\uF83F\"]},{\"type\": \"bitmap\",\"file\": \"space:font/space_nosplit.png\",\"ascent\": -65536,\"height\": 32767,\"chars\": [\"\\uF830\"]}"

    var kkthirstFontText = this.state.kkthirst ? ",{\"type\": \"bitmap\",\"file\": \"kkthirst:waterFull.png\",\"ascent\": -16,\"height\": 9,\"chars\": [\"\\uA001\"]},{\"type\": \"bitmap\",\"file\": \"kkthirst:waterHalf.png\",\"ascent\": -16,\"height\": 9,\"chars\": [\"\\uA002\"]},{\"type\": \"bitmap\",\"file\": \"kkthirst:waterEmpty.png\",\"ascent\": -16,\"height\": 9,\"chars\": [\"\\uA003\"]}": ""

    var finalText = "{\"providers\": [" + baseFontText +kkthirstFontText + "]}"

    minecraftFolder.file("font/default.json", finalText)

    jszip.generateAsync({type: "blob"}).then((blob) => {
      saveAs(blob, "resourcepack.zip")
    })
  }
}

export default App;
