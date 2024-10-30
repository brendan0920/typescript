import { User } from "./user.class";

export class Request {
    id: number;
    user?: User;
    requestNumber: string;
    description: string;
    justification: string;
    dateNeeded: Date;
    deliveryMode: string;
    status: string;
    total: number;
    submittedDate: Date;
    reasonForRejection: string;

    constructor(id: number = 0, user?: User, requestNumber: string = "", description: string = "",
        justification: string = "", dateNeeded: Date = new Date(), deliveryMode: string = "", status: string = "",
        total: number = 0, submittedDate: Date = new Date(), reasonForRejection: string = "") {
        this.id = id;
        this.user = user;
        this.requestNumber = requestNumber;
        this.description = description;
        this.justification = justification;
        this.dateNeeded = dateNeeded;
        this.deliveryMode = deliveryMode;
        this.status = status;
        this.total = total;
        this.submittedDate = submittedDate;
        this.reasonForRejection = reasonForRejection;
    }

    displayRequests(): void {
        console.log(`ID: ${this.id}, User ID: ${this.user}, Request Number: ${this.requestNumber}, 
            Description: ${this.description}, Justification: ${this.justification}, 
            Date Needed: ${this.dateNeeded.toISOString().split('T')[0]}, Delivery Mode: ${this.deliveryMode}, 
            Status: ${this.status}, Total: ${this.total}, Submitted Date: ${this.submittedDate.toISOString()}, 
            Reason for Rejection: ${this.reasonForRejection}`);
    }
}

// var requests: Request[] = [
//     new Request(
//         2, 3, 'R2409270002', 'test 02', 'test request', new Date('2024-11-10'), 'PICKUP', 'REVIEW', 570.00, new Date('2024-09-30T18:56:54.713Z'), 'any orders for test will be rejected!'
//     )
// ];

// function displayRequests(requests: Request[]): void {
//     requests.forEach(request => {
//         console.log(`ID: ${request.id}, User ID: ${request.userId}, Request Number: ${request.requestNumber}, Description: ${request.description}, Justification: ${request.justification}, Date Needed: ${request.dateNeeded.toISOString().split('T')[0]}, Delivery Mode: ${request.deliveryMode}, Status: ${request.status}, Total: ${request.total}, Submitted Date: ${request.submittedDate.toISOString()}, Reason for Rejection: ${request.reasonForRejection}`);
//     });
// }

// displayRequests(requests);