
// Services
import notificationService, {NOTIF_WISHLIST_CHANGED,NOTIF_FILESLIST_CHANGED,NOTIF_FILEORFOLDER_CHANGED,NOTIF_FILECONTENT_CHANGED,NOTIF_MAINFOLDER_CHANGED,NOTIF_CURRENTFOLDER_CHANGED} from './notification-service';

//import HttpService from '../services/http-service';
//
//const http = new HttpService();


let ns = new notificationService();

let instance = null;

var wishList = [];

var filesList = [];
var fileContent = {
    fileName: "",
    fileContents: "",
    fileExe: "",
}
var mainFolder = true;
var fileOrFolder = true;
var currnetFile = "projects";

var fromPage = 0;

class DataService {
    constructor() {
        if(!instance) {
            instance = this;
        }
        return instance;
        
    }
    
    getFileContent = () => {
        return fileContent;
    }
    
    setFromPage = (newFromPage) => {
        fromPage = newFromPage;
    }
    
    getFromPage = () => {
        return fromPage;
    }
    
    getCurrentFile = () => {
        return currnetFile;
    }
    
    getFileOrFolder = () => {
        return fileOrFolder;
    }
    
    changedCurrnetFile = (newFolder) => {
        currnetFile = newFolder;
        ns.postNotification(NOTIF_CURRENTFOLDER_CHANGED, currnetFile);
    }
    
    getMainFolder = () => {
        return mainFolder;
    }
    
    changedFileOrFolder = (val) => {
        fileOrFolder = val;
        ns.postNotification(NOTIF_FILEORFOLDER_CHANGED, fileOrFolder);
    }
    
    putNewFileContent = (file) => {
        fileContent.fileName = file.title;
        fileContent.fileContents = file.content;
        fileContent.fileExe = file.ext;
        ns.postNotification(NOTIF_FILECONTENT_CHANGED, fileContent);
    }
    
    changedTAFMainFolder = () => {
        mainFolder = !mainFolder;
        ns.postNotification(NOTIF_MAINFOLDER_CHANGED, mainFolder);
    }
    
    putNewFilesList = (newFilesList) => {
        filesList = newFilesList;
        ns.postNotification(NOTIF_FILESLIST_CHANGED, filesList);
    }
    
    putNewWishList = (newWishList) => {
        wishList = newWishList;
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
    }
    
    
    itemOnWishList = item => {
        for (var x = 0; x < wishList.length; x++) {
            if (wishList[x]._id === item._id) {
                return true;
            }
        }
        return false;
    }
    
    addWishListItem = item => {
        wishList.push(item);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
    }
    
    removeWishListItem = item => {
        for (var x=0;x < wishList.length; x++) {
            if (wishList[x]._id === item._id) {
                wishList.splice(x, 1);
                ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
                break;
            }
        }
    }
}

export default DataService;