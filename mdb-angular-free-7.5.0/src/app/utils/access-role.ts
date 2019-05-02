export class AccessRole {
    
    constructor() {
    }

    verifyAccessRole(accessRole, typeOfPage) {
        if (accessRole.includes("consumer") && typeOfPage === 'consumidor')
            return true;
        else if (accessRole.includes("provider") && typeOfPage === 'prestador')
            return true;
        else return false;
    }


}

