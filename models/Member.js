const MemberModel = require("../schema/member.model")

class Member {
    constructor() {
        this.memberModel = MemberModel;
    }

    async signupData(input){
        try{
            const new_member = this.memberModel(input);
            const result = await new_member.save();
            console.log(result);

            return result;
        }catch(err){
            throw err;
        }
    }

    // async saveNewMemberData() {
    //     try{
    //         await
    //     }catch(err){
    //         throw err;
    //     }
    // }
}

module.exports = Member;