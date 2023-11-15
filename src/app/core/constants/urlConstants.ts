export const urlConstants = {
    API_URLS:{
        CREATE_ACCOUNT:"/interface/v1/account/create",
        ACCOUNT_LOGIN:"/user/v1/account/login",
        LOGOUT_ACCOUNT:"/user/v1/account/logout",
        REFRESH_TOKEN:"/user/v1/account/generateToken",
        TERMS_CONDITIONS:"/user/v1/account/acceptTermsAndCondition",
        PROFILE_UPDATE:"/interface/v1/account/update",
        PROFILE_DETAILS: "/user/v1/user/read/",
        // MENTOR_PROFILE_DETAILS: "/mentoring/v1/mentors/profile/",
        MENTEE_PROFILE_DETAILS:"/mentoring/v1/mentees/profile/",
        // MENTORS_DIRECTORY:"/mentoring/v1/users/list?type=mentor&page=",
        FILE_UPLOAD:"/user/v1/cloud-services/file/upload",
        SESSIONS:"/mentoring/v1/mentees/sessions?enrolled=", //sessions?enrolled=true/false&page=1&limit=5&search=:search
        HOME_SESSION:"/mentoring/v1/mentees/homeFeed?page=", ///v1/mentees/homefeed?page=1&limit=4
        GET_FILE_UPLOAD_URL:'/user/v1/cloud-services/file/getSignedUrl?fileName=',
        GET_SESSION_IMAGE_UPLOAD_URL:"/mentoring/v1/cloud-services/getSignedUrl?fileName=",
        SUBMIT_FEEDBACK:"/mentoring/v1/feedback/submit/",
        UPCOMING_SESSIONS:"/mentoring/v1/mentors/upcomingSessions/",
        SHARE_MENTOR_PROFILE:"/mentoring/v1/mentors/share/",
        REPORT_ISSUE:"/mentoring/v1/issues/create",
        GET_MAIL_INFO:"/mentoring/v1/platform/config",
        PROFILE_READ: "/mentoring/v1/profile/read",
        CREATED_SESSIONS: "/mentoring/v1/mentors/createdSessions?page=",
        MENTORS_DIRECTORY_LIST: "/mentoring/v1/mentors/list?page=",
        MENTORS_PROFILE_DETAILS: "/mentoring/v1/mentors/details/",
        
        // FORMS
        FORM_READ:'/mentoring/v1/form/read',
        GENERATE_OTP:"/user/v1/account/generateOtp",
        REGISTRATION_OTP:"/user/v1/account/registrationOtp",
        RESET_PASSWORD:"/user/v1/account/resetPassword",
        CREATE_SESSION:"/mentoring/v1/sessions/update",
        // GET_SESSIONS_LIST:"/mentoring/v1/sessions/list?page=",
        GET_SESSION_DETAILS:"/mentoring/v1/sessions/details/",
        GET_SHARE_SESSION_LINK:"/mentoring/v1/sessions/share/",
        ENROLL_SESSION:"/mentoring/v1/sessions/enroll/",
        UNENROLL_SESSION:"/mentoring/v1/sessions/unEnroll/",
        START_SESSION:"/mentoring/v1/sessions/start/",
        JOIN_SESSION:"/mentoring/v1/mentees/joinSession/",
        MENTOR_REPORTS:"/mentoring/v1/mentors/reports?filterType=",
        MENTEE_REPORTS:"/mentoring/v1/mentees/reports?filterType=",
        MENTOR_FEEDBACK_QUESTION_SET:"/mentoring/v1/questionsSet/read/61b867df5201107b3c2fb435",
        MENTEE_FEEDBACK_QUESTIONS_SET:"/mentoring/v1/questionsSet/read/61b8656fed665f7b5470a9f1",
        GET_FEEDBACK_QUESTION:"/mentoring/v1/questions/read/", 
        GET_ENTITY_LIST: {
            PROFILE: "/interface/v1/entity-type/read",
            SESSION: "/mentoring/v1/entity-type/read"
        },
        REQUEST_TO_BECOME_MENTOR: "/user/v1/organization/requestOrgRole",
        LIST_ORG_ROLES: "/user/v1/userRole/list",
        ADMIN_MENTOR_REQUEST_LIST: "/user/v1/org-admin/getRequests",
        ADMIN_UPDATE_REQUEST: "/user/v1/org-admin/updateRequestStatus",
        ADMIN_BULK_UPLOAD: "/user/v1/org-admin/bulkUserCreate"
    }
};
