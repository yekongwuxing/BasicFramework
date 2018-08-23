import NetworkUtils from './NetworkUtils';
import NetworkInterface from './NetworkInterface';

export default class NetworkConnect {
    static postRecruitList(params,success){
        NetworkUtils.post(NetworkInterface.recruitList,params,response => {
            success && success(response)
        })
    }

}