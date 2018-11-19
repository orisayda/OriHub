export const NOTIF_WISHLIST_CHANGED = "notif_wishlist_changed";
export const NOTIF_FILESLIST_CHANGED = "notif_fileslist_changed";
export const NOTIF_FILEORFOLDER_CHANGED = "notif_fileorfolder_changed";
export const NOTIF_MAINFOLDER_CHANGED = "notif_mainfolder_changed";
export const NOTIF_FILECONTENT_CHANGED = "notif_filecontent_changed";
export const NOTIF_CURRENTFOLDER_CHANGED = "notif_currentfolder_changed";

let instance = null;

var observers = {};

class notificationService {
    constructor() {
        if(!instance) {
            instance = this;
        }
        
        return instance;
    }
    
    postNotification = (notifName, data) => {
        let obs = observers[notifName];
        if(obs !== undefined && obs.length) {
            for (var x = 0; x < obs.length; x++) {
            var obj = obs[x];
            obj.callBack(data);
        }
        }
    }
    
    removeObserver = (notifName, observer, callBack) => {
        let obs = observers[notifName];
        
        if(obs) {
            for (var x = 0; x < obs.length; x++) {
                if (observer === obs[x].observer) {
                    obs.splice(x,1);
                    observers[notifName] = obs;
                    break;
                }
            }
        }
    }
    
    addObserver = (notifName, observer, callBack) => {
        let obs = observers[notifName];
        
        if(!obs) {
            observers[notifName] = [];
        }
        
        let obj = {observer: observer, callBack: callBack};
        observers[notifName].push(obj);
        
    }
}

export default notificationService;