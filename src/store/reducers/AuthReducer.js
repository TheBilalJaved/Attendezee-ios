import { LOGIN, LOGOUT, RETRIEVEDUSER, FORGETPASSWORD, UPDATEPASSWORD, UPDATEPROFILE, FILTERITEMS, ATTENDENCE, BUSINESSRULE, ATTENDANCE_DAY, IMAGE, LEAVE, APPLYLEAVE } from '../Sates';
const initialState = {
    loading: true,
    offline: false,
    token: null,
    data: null,
    wrongemail: null,
    invalid_user_email_password: null,
    old_password_incorrect: null,
    new_old_pass_wrong: null,
    UPmessage: '',
    filter_data: [],
    user_bussines: [],
    alert_messeage: '',
    business_rules: [],
    todayAttendance: [],
    leavedata: [],
    profileimage: '',


}



function AuthReducer(state = initialState, action) {
    switch (action.type) {

        case LOGIN: {

            return {
                ...state,

                token: action.payload.usertoken,
                data: action.payload.user_data_info,
                invalid_user_email_password: action.payload.invalid_email_password,
                user_bussines: action.payload.userbussiness,
                profileimage: action.payload.profile_pic,
            };
        }
        case LOGOUT: {
            return {
                ...state,
                token: null,
                filter_data: action.payload,
                business_rules: [],
                leavedata: []

            }
        }
        case FORGETPASSWORD: {

            return {
                ...state,
                wrongemail: action.payload,


            }
        }
        case BUSINESSRULE: {
            return {
                ...state,
                business_rules: action.payload
            }
        }
        case UPDATEPASSWORD: {
            return {
                ...state,
                old_password_incorrect: action.payload.oldpasswordincorrect,
                new_old_pass_wrong: action.payload.new_confiem_pass_not_matched,
            }
        }
        case RETRIEVEDUSER: {
            return {
                ...state,
                offline: action.payload.offline,
                token: action.payload.usertoken,
                loading: action.payload.loading,
                data: action.payload.userdata,
                user_bussines: action.payload.userbussiness,
                profileimage: action.payload.profile_pic

            }
        }
        case FILTERITEMS: {
            return {
                ...state,
                filter_data: action.payload
            }
        }

        case ATTENDENCE: {
            return {
                ...state,
                todayAttendance: action.payload
            }
        }
        case IMAGE: {
            return {
                ...state,
                profileimage: action.payload
            }
        }
        case APPLYLEAVE: {
            return {
                ...state,
                leavedata: action.payload
            }
        }

        case UPDATEPROFILE: {
            return {
                ...state,
                UPmessage: action.payload.message,
                data: action.payload.updatedata,
            }
        }
        case ATTENDANCE_DAY: {
            return {
                ...state,
                todayAttendance: action.payload
            }
        }
        case LEAVE: {
            return {
                ...state,
                leavedata: action.payload
            }
        }

        default:
            return state;
    }
}

export default AuthReducer;