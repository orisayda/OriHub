import React, { Component } from 'react';
import './fileContent.css';

// Services
import DataService from '../services/data-service';
import notificationService, {NOTIF_FILECONTENT_CHANGED} from '../services/notification-service';

// Components


let ds = new DataService();
let ns = new notificationService();


class FileContent extends Component {
    constructor(props) {
		super(props);
            
        var file ={
            fileContents:"",
            fileName:"",
            fileExe:"",
        };
        const cachedFileContent = sessionStorage.getItem('fileContent');
        if(cachedFileContent) {
            file = JSON.parse(cachedFileContent);
        }
        
        this.state = {filesContent:file.fileContents,
                    fileName:file.fileName,
                    fileExt:file.fileExe,
                         };
        
       
        this.loadFileContent = this.loadFileContent.bind(this);
        this.fromPageChanger = this.fromPageChanger.bind(this);
        this.fromPageChanger();
    }
    
    componentDidMount() {
         ns.addObserver(NOTIF_FILECONTENT_CHANGED,this,this.loadFileContent);
     }
    
    componentWillUnmount() {
        ns.removeObserver(this,NOTIF_FILECONTENT_CHANGED);
      }
    
    fromPageChanger = () => {
          var fromPageLocal = ds.getFromPage();;
          if(fromPageLocal === 2) {
              ds.setFromPage(3);
          }
      }
    
    loadFileContent = (file) => {
        sessionStorage.removeItem('fileContent');
         sessionStorage.setItem('fileContent',JSON.stringify(file));
        this.setState({filesContent:file.fileContents,fileName:file.fileName,fileExt:file.fileExe});
        
    }
 
    
    render() {
    return (
        <div>
            <div className="list-group-item fileLinkHeader">
                      <a>{this.state.fileName.substring(this.state.fileName.lastIndexOf('/')+1)}</a>
                </div>
            <div className="fileContent" id="fileContent">
                    <pre className="codeFileContent">
                        <code className="JavaScript">
                            {this.state.filesContent}
                        </code>
                    </pre>
                </div>
        </div>
            
    );
  }
}

export default FileContent;