export interface WebUser {
    id:                   string;
    firstName:            string;
    lastName:             string;
    email:                string;
    password:             string;
    role:                 string;
    status:               string;
    registrationDateTime: Date;
    webUserRolId?:        null;
    webUserRol?:          null;
}
