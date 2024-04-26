type userId=string;

interface Chat{
    userId:userId;
    name:string;
    message:string;
    upvotes:userId[];
}



export class Store{
    constructor(){

    }

    initRoom()
    {


    }

    getChats(room: string,limit: number,offset:number)
    {

    }

    addChat(room:string,limit:number,offset:number)
    {

    }
    upVote(room: string, chatId: string){

    }

}